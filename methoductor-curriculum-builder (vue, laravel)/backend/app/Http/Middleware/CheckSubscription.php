<?php

namespace App\Http\Middleware;

use Tymon\JWTAuth\Facades\JWTAuth;
use Closure;
use Illuminate\Http\Request;

class CheckSubscription
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
        $input = $request->all();

        $user = JWTAuth::user();

        if($user['subscription'] == 0) {
            $input['prefix'] = "subs0_";
            $request->replace($input);
        } else if($user['subscription'] == 1) {
            $input['prefix'] = "subs1_";
            $request->replace($input);
        }
        return $next($request);
    }
    /*
    сколько из тех кто пришли с vc.ru зарегалось
    какие страницы открывали
    сколько времени провели на сайте
    */
}
