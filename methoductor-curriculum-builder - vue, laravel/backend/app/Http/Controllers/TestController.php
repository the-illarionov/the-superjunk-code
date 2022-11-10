<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\Hello;
use Illuminate\Support\Facades\Mail;

class TestController extends Controller
{
    /**
     * Ship the given order.
     *
     * @param  Request  $request
     * @param  int  $orderId
     * @return Response
     */
    public function send()
    {
        Mail::to('amazing216man@gmail.com')->send(new Hello());
    }
}