<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use JWTAuth;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->input('token');
        $user = JWTAuth::user();
        if($user->email == "amazing216man@gmail.com" || $user->email == "lavrikanec@gmail.com") {
            return $next($request);
        } else {
            return response()->json(['status' => 0,'message' => 'Вы не админ'], 401);
        }
    }
}
