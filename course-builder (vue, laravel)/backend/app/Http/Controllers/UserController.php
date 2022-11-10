<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Folder;
use Validator;
use JWTAuth;
use Illuminate\Support\Str;
use Socialite;
use Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
     /**
     * Instantiate a new UserController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['find_user', 'is_admin', 'register', 'login','login_google','login_google_callback','login_facebook','login_facebook_callback']]);
        $this->middleware('admin')->only('adminpanel');
    }
    
    /**
     * Store a new user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function adminpanel(Request $request)
    {
        $users = User::all();

        $users->each(function($user) {
            $user->longreads = $user->longreads()->count();
         });
        return response()->json(['status' => 1,'message' => 'Вы админ', 'users' => $users], 200);
    }

    public function makeSlugFromTitle($title)
    {
        $slug = Str::slug($title);
        
        // Создаем уникальный slug по заголовку
        $count = User::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
    
        return $count ? "{$slug}-{$count}" : $slug;
    }

    public function register(Request $request)
    {
        //validate incoming request 
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);
        
        try {
           
            $user = new User;
            $user->slug = $this->makeSlugFromTitle($request->input('name'));
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            //$user->slug = $request->input('slug');
            $plainPassword = $request->input('password');
            $user->password = app('hash')->make($plainPassword);

            $user->save();
            
            
            $folder = new Folder;
            $folder->name = 'unnamed';
            $folder->type = 'unnamed';
            $folder->user_id = $user->id;

            $folder->save();

            //return successful response
            return response()->json(['user' => $user, 'user id' => $user->id,'message' => 'CREATED'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'User Registration Failed!', 'error' => $e], 409);
        }

    }

    /**
     * Get a JWT via given credentials.
     *
     * @param  Request  $request
     * @return Response
     */
    public function login(Request $request)
    {
        //validate incoming request 
        
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
        $credentials = $request->only(['email', 'password']);

        if (! $token = Auth::attempt($credentials)) {
            return response()->json(['status' => 0,'message' => 'Неверно'], 401);
        }

        $user = JWTAuth::user();
        $is_admin = false;
        if ($user->email == "amazing216man@gmail.com" || $user->email == "lavrikanec@gmail.com") {
            $is_admin = true;
        }
        return response()->json([
            'user' => $user,
            'token' => $token,
            'status' => 1,
            'is_admin' => $is_admin,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60
        ], 200);
        
    }
    public function login_facebook()
    {
        //return 'some facebook text';
        return Socialite::driver('facebook')->stateless()->redirect();
    }

    public function login_facebook_callback()
    {
        $user = Socialite::driver('facebook')->stateless()->user();
        if($user->email == null) {
            return redirect()->away('https://interactor.su/facebook_error');
        } else {
            $slug = $this->makeSlugFromTitle($user->name);
            $user = User::firstOrCreate([
                'email' => $user->email
            ], [
                'name' => $user->name, 
                'slug' => $slug,
                'password' => Hash::make(Str::random(24))
            ]);
    
            $user = User::where('email',$user->email);
            $user = $user->first();
            
            $folder_number = $user->folders->count();
            if($folder_number == 0) {
                $folder = new Folder;
                $folder->name = 'unnamed';
                $folder->type = 'unnamed';
                $folder->user_id = $user->id;
                $folder->save();
            }
    
            Auth::login($user,true);
    
            $token = JWTAuth::fromUser($user);
            return redirect()->away('https://interactor.su/oauthland?user='.$user.'&token='.$token);
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
            'name' => $user->name, 
            'slug' => $slug,
            'password' => Hash::make(Str::random(24))
        ]);

        $user = User::where('email',$user->email);
        $user = $user->first();
        
        $folder_number = $user->folders->count();
        if($folder_number == 0) {
            $folder = new Folder;
            $folder->name = 'unnamed';
            $folder->type = 'unnamed';
            $folder->user_id = $user->id;
            $folder->save();
        }

        Auth::login($user,true);

        $token = JWTAuth::fromUser($user);
        return redirect()->away('https://interactor.su/oauthland?user='.$user.'&token='.$token);
        
    }

    public function find_user(Request $request)
    {
        $user = User::where('slug',$request->input('slug'));
        if ($user->first()) { 

            $user = $user->first();

            $folders = $user->folders;
            $folders = $folders->groupBy('type');
            $longreads = DB::table('longreads')->select('id', 'name', 'slug', 'folder_id')->where('user_id', $user->id)->get();
            $longreads = $longreads->groupBy('folder_id');

            return response()->json((['user' => $user, 'folders' => $folders, 'longreads' => $longreads]));
            /*
            $longreads = $user->longreads;
            $longreads = $longreads->groupBy('folder_id');

            return response()->json((['user' => $user, 'folders' => $folders, 'longreads' => $longreads]));
            */
        }
        else {
            return "Нет страницы с таким адресом";
        }
    }

    public function change_pass(Request $request)
    {
        $token = $request->input('token');
        $user = JWTAuth::user();
        $user_id = $user['id'];
        try {
        
            $user->password = app('hash')->make($request->input('pass'));
            $user->save();

            //return successful response
            return response()->json(['user' => $user, 'message' => 'Success'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'User update failed!','error'=>$e], 409);
        }
    }

    public function update(Request $request)
    {
        $token = $request->input('token');
        $user = JWTAuth::user();
        $user_id = $user['id'];
        if ($user_id == $request->input('id')) {
            
            try {
            
                $user->name = $request->input('name');
                $user->slug = $this->makeSlugFromTitle($request->input('name'));
                $user->save();

                //return successful response
                return response()->json(['user' => $user, 'message' => 'Success'], 201);

            } catch (\Exception $e) {
                //return error message
                return response()->json(['message' => 'User update failed!','error'=>$e], 409);
            }
        }
        else {
            return response('Нет прав на редактирование данных');
        }
    }
    /**
     * Get the authenticated User.
     *
     * @return Response
     */

    public function is_admin(Request $request) {
        $token = $request->input('token');
        $user = JWTAuth::user();

        return response()->json($user);
    }

}