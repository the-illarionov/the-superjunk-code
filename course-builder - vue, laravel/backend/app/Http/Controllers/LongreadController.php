<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Longread;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class LongreadController extends Controller
{
     /**
     * Instantiate a new LongreadController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['view', 'checkpass', 'get',  'check_access']]);
    }

    public function makeSlugFromTitle($title)
    {
        $slug = Str::slug($title);
        
        // Создаем уникальный slug по заголовку
        $count = Longread::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
    
        return $count ? "{$slug}-{$count}" : $slug;
    }

    public function get(Request $request)
    {
        
        $longread = Longread::where('id', $request->id)->first();
        //return successful response
        return response()->json(['longread' => $longread], 201);

    }

    public function create(Request $request)
    {
        $token = $request->input('token');
        $user = JWTAuth::user();
        $user_id = $user['id'];
        
        /*
        $longreads_number = $user->longreads()->count();
        if($longreads_number >= 1) {
            return response()->json(['message' => 'На бесплатных аккаунтах можно создать только один лонгрид. Платные аккаунты появятся в скором времени',], 409);
        } else {
        */
            $folders = $user->folders;
            $folder_id = $folders->where('type','unnamed')->first()->id;
            
            $longread = new Longread;
            $longread->user_id = $user_id;
            $longread->name = 'Untitled';
            $longread->slug = $this->makeSlugFromTitle('Untitled');
            $longread->folder_id = $folder_id;
            $longread->longread_structure = $request->input('longread_structure');
            $longread->longread_options = $request->input('longread_options');
            $longread->save();
            
            $longreads = DB::table('longreads')->select('id', 'name', 'slug', 'folder_id')->where('user_id', $user_id)->get();

            $folders = $user->folders;
            $longreads = $longreads->groupBy('folder_id');

            //return successful response
            return response()->json(['longreads' => $longreads, 'new' => $longread, 'message' => 'Success','folders' => $folders], 201);
        // }

    }

    public function save(Request $request)
    {
        try {
            $token = $request->input('token');
            $user = JWTAuth::user();
            $user_id = $user['id'];
           
            $longread = Longread::where('id', $request->input('id'))->first();
            $longread->longread_structure = $request->input('longread_structure');
            $longread->longread_options = $request->input('longread_options');
            $save_code = 0;
            $longread->save();

            //return successful response
            return response()->json(['longread' => $longread, 'save_code' => $save_code, 'message' => 'Saved'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'Longread save failed!','error'=>$e], 409);
        }
    }

    public function saveLongreadName(Request $request)
    {
        try {
            $token = $request->input('token');
            $user = JWTAuth::user();
            $user_id = $user['id'];
           
            $longread = Longread::where('id', $request->input('id'))->first();
            $longread->name = $request->input('name');
            $longread->slug = $this->makeSlugFromTitle($request->input('name'));
            $longread->save();

            //return successful response
            return response()->json(['newslug' => $longread->slug, 'message' => 'Saved'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'Longread name save failed!','error'=>$e], 409);
        }
    }

    public function checkpass(Request $request)
    {
        /*
            Функция проверки пароля
        */
    }
    
    
    public function delete(Request $request)
    {
        $token = $request->input('token');
        $user = JWTAuth::user();
        $user_id = $user['id'];
        $longread_id = $request->input('id');
        $longread = Longread::where('id', $longread_id)->first();
        if($longread->user_id == $user_id) {
            Longread::destroy($longread_id);
            
            $longreads = $user->longreads;
            $folders = $user->folders;
            $longreads = $longreads->groupBy('folder_id');

            return response()->json(['longreads' => $longreads, 'message' => 'Deleted','folders' => $folders], 201);
        } else {
            return response()->json(['message' => 'Not an owner', 'user' => $user_id, 'lr' => $longread_id], 201);
        }
    }

    public function check_access(Request $request)
    {

        $user = $request->input('user');
        $slug = $request->input('slug');
        $stage = $request->input('stage');
        $token = $request->input('token');

        $user_longreads = User::where('slug',$user)->first()->longreads;
        $longread = $user_longreads->where('slug',$slug)->first();

        if ($stage == 0) {
            if($token == null) {
                $use_pass = json_decode($longread->longread_options)->password_options->use_pass;
                if ($use_pass) {
                    return response()->json(['message' => 'View', 'status' => 0], 201);
                } else {
                    //return successful response
                    return response()->json(['longread' => $longread, 'message' => 'View', 'status' => 1], 201);
                }
            } else {
                $use_pass = json_decode($longread->longread_options)->password_options->use_pass;
                $user_token = JWTAuth::user();
                $user = User::where('slug',$user)->first();

                if($user_token->id == $user->id) {
                    return response()->json(['longread' => $longread, 'message' => 'View', 'status' => 1], 201);
                } else {
                    if ($use_pass) {
                        return response()->json(['message' => 'View', 'status' => 0], 201);
                    } else {
                        //return successful response
                        return response()->json(['longread' => $longread, 'message' => 'View', 'status' => 1], 201);
                    }
                }
            }

        } else if ($stage == 1) {
            $pass = $request->input('pass');
            $db_pass = json_decode($longread->longread_options)->password_options->pass;

            if($pass == $db_pass) {
                return response()->json(['longread' => $longread, 'message' => 'View', 'status' => 1], 201);
            } else {        
                return response()->json(['longread' => 'new level game', 'message' => 'View', 'status' => 0], 201);
            }
        }

    }

}
