<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',

], function ($router) {
    Route::post('test','UserController@test');
    Route::post('isadmin', 'UserController@is_admin');
    Route::post('changepass', 'UserController@change_pass');
    Route::post('register', 'UserController@register');
    Route::get('login_google', 'UserController@login_google');
    Route::get('login_google_callback', 'UserController@login_google_callback');
    Route::get('login_facebook', 'UserController@login_facebook');
    Route::get('login_facebook_callback', 'UserController@login_facebook_callback');
    Route::post('login', 'UserController@login');
    Route::post('slug', 'UserController@find_user');
    Route::post('updateprofile', 'UserController@update');
    Route::post('adminpanel', 'UserController@adminpanel');
    
    Route::post('create', 'LongreadController@create');
    Route::post('deletelongread', 'LongreadController@delete');
    Route::post('savelongread', 'LongreadController@save');
    Route::post('getlongread', 'LongreadController@get');
    Route::post('savelongreadname', 'LongreadController@saveLongreadName');
    Route::post('view', 'LongreadController@check_access');
    
    Route::post('uploadfile', 'FileController@upload');
    Route::post('deletefile', 'FileController@delete');
    Route::post('uploadstyle', 'FileController@upload_style');
    
    Route::post('feedback', 'FeedbackController@create');
});