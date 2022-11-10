<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Longread;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Str;

class FileController extends Controller
{
     /**
     * Instantiate a new LongreadController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function upload(Request $request)
    {
        try {
            $token = $request->input('token');
            $user = JWTAuth::user();
            $user_id = $user['id'];
           
            $longread_id = $request->input('id');
            
            $file = $request->file('file');
            $path = Storage::put("/user/{$user_id}/longread/{$longread_id}", $file);
            //return successful response
            
            return response()->json(['message' => 'Uploaded', 'path' => $path, 'request' => $request->input('id')], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'Longread save failed!','error'=>$e], 409);
        }
    }
    public function delete(Request $request)
    {
        try {
            Storage::delete($request->input('file'));
            //return successful response
            
            return response()->json(['message' => 'Deleted'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'File deletion failed!','error'=>$e], 409);
        }

    }
    
    public function upload_style(Request $request)
    {
        try {
            $token = $request->input('token');
            $user = JWTAuth::user();
            $user_id = $user['id'];
           
            $longread_id = $request->input('id');
            
            $file = $request->file('file');
            $path = Storage::put("/user/{$user_id}/longread/{$longread_id}", $file);
            //return successful response
            
            return response()->json(['message' => 'Uploaded', 'path' => $path, 'request' => $request->input('id')], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'Longread save failed!','error'=>$e], 409);
        }
    }
    

}