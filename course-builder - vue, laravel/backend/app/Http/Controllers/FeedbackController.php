<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;

class FeedbackController extends Controller
{
     /**
     * Instantiate a new FeedbackController instance.
     *
     * @return void
     */

    public function create(Request $request)
    {
        try {
            $feedback = new Feedback;
            $feedback->email = $request->input('email');
            $feedback->phone = $request->input('phone');
            $feedback->message = $request->input('message');
            $feedback->save();

            //return successful response
            return response()->json(['message' => 'Success'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'Feedback creation failed!','error'=>$e], 409);
        }
    }


}
