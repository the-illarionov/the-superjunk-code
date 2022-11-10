<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

use App\Http\Resources\UserResource;
use App\Services\Helpers;

class UserController extends Controller
{
    public function __construct() {
        $this->middleware('auth:sanctum')->only(['me','update','logout']);
    }

    public function show(Request $request, User $user) {
        return new UserResource($user);
    }

    public function update(Request $request, User $user)
    {
		$this->authorize("update", $user);
		
        $request->validate([
            'name' => 'string|max:50|min:3',
            'nickname' => 'string|max:50|min:3|unique:users'
        ]);
        
        if($request->has('name')) {
            $user->name = $request->name;
        }

        if($request->has('nickname') && $request->nickname !== $user->nickname) {
            $user->nickname = Str::slug($request->nickname);
        }

        $user->save();

        return new UserResource($user);
    }

    public function destroy(User $user)
    {
        //
    }



    // CUSTOM
    public function me(Request $request) {
        return new UserResource($request->user());
    }

    public function oauth_redirect($provider) {
        return Socialite::driver($provider)->stateless()->redirect();
    }

    public function oauth_callback($provider) {
        try {
            $oauthuser = Socialite::driver($provider)->stateless()->user();
        } catch(ClientException $exception) {
            return response()->json(['error' => 'Invalid credentials provided.'], 422);
        }

        $user = User::where('email', $oauthuser->getEmail())->first();

        if($user === null) {
            $user = User::create([
                'email' => $oauthuser->getEmail(),
                'name' => $oauthuser->getName(),
                'avatar' => $oauthuser->getAvatar(),
                'nickname' => Helpers::generateUnique('users', 'nickname'),
            ]);
            
        } else {
            $user->tokens()->delete();
        }

        $token = $user->createToken('auth')->plainTextToken;

		$special1 = Hash::make(Str::random(40));
		$special2 = Hash::make(Str::random(40));

        return redirect()->away(env('APP_URL').'/login?&special1='.$special1.'&special_2='.$special2.'&special3='.$token);
    }

    public function logout(Request $request) {
        $request->user()->tokens()->delete();
    }
}
