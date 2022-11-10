<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PotentialBuyer;
use JWTAuth;

class PotentialBuyerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function store(Request $request)
    {
        $user = JWTAuth::user();
        $buyer = new PotentialBuyer;
        $buyer->user_id = $user->id;
        $buyer->yandex_id = $request->input('yandex_id');
        $buyer->save();
        
        return response()->json(['yandex_id' =>$buyer->yandex_id, 'user id' => $user->id, 'message' => 'STORED'], 201);
    }
}
