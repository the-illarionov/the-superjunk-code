<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Middleware\CheckSubscription;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\LessonPlanController;
use App\Http\Controllers\PotentialBuyerController;
use App\Http\Controllers\TestController;

Route::get('user', [UserController::class, 'getByToken']);

Route::post('login', [UserController::class, 'login']);
Route::post('register', [UserController::class, 'register']);
Route::post('validation', [UserController::class, 'validation']);

Route::get('login_google', [UserController::class, 'login_google']);
Route::get('login_google_callback', [UserController::class, 'login_google_callback']);
Route::get('login_facebook', [UserController::class, 'login_facebook']);
Route::get('login_facebook_callback', [UserController::class, 'login_facebook_callback']);

Route::apiResource('courses', CourseController::class);
Route::apiResource('lesson-plans', LessonPlanController::class);




/*
Route::post('wantsubscription', [PotentialBuyerController::class, 'store']);

Route::post('sendmailtest', [TestController::class, 'send']);

Route::post('detectlocale', function(Request $request) {
    $locale = $request->server('HTTP_ACCEPT_LANGUAGE');
    return $locale;
});

Route::post('testpaid', [CourseController::class, 'testPaidFunction'])->middleware(CheckSubscription::class);

*/