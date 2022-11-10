<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Course;
use Laravel\Socialite\Facades\Socialite;
use Validator;
use JWTAuth;
use Hash;

class UserController extends Controller
{
    public function makeSlugFromTitle($title)
    {
        $slug = Str::slug($title);
        
        // Создаем уникальный slug по заголовку
        $count = User::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
    
        return $count ? "{$slug}-{$count}" : $slug;
    }

    public function login(Request $request)
    {
        //validate incoming request 
        
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
        $credentials = $request->only(['email', 'password']);

        if (! $token = Auth::attempt($credentials)) {
            return response()->json(['status' => 0,'message' => 'WRONG'], 401);
        }

        /*
        
        $is_admin = false;
        if ($user->email == "amazing216man@gmail.com" || $user->email == "lavrikanec@gmail.com") {
            $is_admin = true;
        }
        */

        $user = JWTAuth::user();

        return response()->json([
            'user' => $user,
            'token' => $token,
            //'expires_in' => Auth::factory()->getTTL() * 60
        ], 200);
        
    }

    public function validation(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|confirmed',
        ]);
        return response()->json(['status' => "valid"], 201);
    }

    public function register(Request $request)
    {
        //validate incoming request 
        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);
           
        $user = new User;
        $user->email = $request->input('email');
        /*
        $user->send_nudes = FALSE;
        $user->subscription = 0;
        */
        $user->slug = $this->makeSlugFromTitle($request->input('email'));
        $user->name = $request->input('email');
        $user->yandex_id = $request->input('yandex_id');
        $plainPassword = $request->input('password');
        $user->password = app('hash')->make($plainPassword);

        $user_id = 0;
        if ($user->save()) {
            $user_id = $user->id;
        }

        /*
        $course =  $course_service->create([
        	"user_id" => $user_id,
            "structure" => $request->input('settings')
        ]);
        */

        //return successful response
        return response()->json(['user' => $user, 'user id' => $user->id, 'message' => 'CREATED'], 201);

    }
    public function login_facebook()
    {
        return Socialite::driver('facebook')->stateless()->redirect();
    }

    public function login_facebook_callback()
    {
        $user = Socialite::driver('facebook')->stateless()->user();
        if($user->email == null) {
            return redirect()->away('https://methoductor.com/facebook_error');
        } else {
            $slug = $this->makeSlugFromTitle($user->name);
            $user = User::firstOrCreate([
                'email' => $user->email
            ], [
                //'subscription' => 0,
                'name' => $user->name, 
                'slug' => $slug,
                //'send_nudes' => FALSE,
                'password' => Hash::make(Str::random(24))
            ]);
    
            $user = User::where('email',$user->email);
            $user = $user->first();
    
            Auth::login($user,true);
    
            $token = JWTAuth::fromUser($user);
            return redirect()->away('https://methoductor.com/oauthland?user='.$user.'&token='.$token);
        } 
    }

    public function login_google()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function login_google_callback()
    {
        $user = Socialite::driver('google')->stateless()->user();
        $slug = $this->makeSlugFromTitle($user->name);
        $user = User::firstOrCreate([
            'email' => $user->email
        ], [
            //'subscription' => 0,
            'name' => $user->name, 
            'slug' => $slug,
            //'send_nudes' => FALSE,
            'password' => Hash::make(Str::random(24))
        ]);

        $user = User::where('email',$user->email);
        $user = $user->first();

        Auth::login($user,true);

        $token = JWTAuth::fromUser($user);
        return redirect()->away('https://methoductor.com/oauthland?user='.$user.'&token='.$token);
        
    }



    public function getByToken()
    {
        return $this->user;
    }

}