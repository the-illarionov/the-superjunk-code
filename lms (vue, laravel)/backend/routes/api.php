<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Learning\CourseController;
use App\Http\Controllers\Learning\LessonController;
use App\Http\Controllers\Learning\SchoolController;

use App\Http\Controllers\Roles\EditorOfCourseController;

use App\Http\Controllers\Roles\StudentOfCourseController;
use App\Http\Controllers\Roles\StudentOfLessonController;

Route::get('/test', function() {
    return "s";
});

// OAUTH
Route::get('/login/{provider}', [UserController::class, 'oauth_redirect']);
Route::get('/login/{provider}/callback', [UserController::class, 'oauth_callback']);



// LOGIN
Route::get('/me', [UserController::class, 'me']);
Route::post('/logout', [UserController::class, 'logout']);



// USER
Route::apiResource('users', UserController::class)->only(['show','update']);



// COURSE
Route::get('/teens/courses', [CourseController::class, 'indexTeens']);
Route::get('/market/courses', [CourseController::class, 'indexMarket']);
Route::get('/users/{user}/student/courses', [CourseController::class, 'indexStudent']);
Route::get('/users/{user}/editor/courses', [CourseController::class, 'indexEditor']);

Route::post('/courses', [CourseController::class, 'store'])->name('courses.store');

Route::get('/courses/{course}', [CourseController::class, 'show'])->name('courses.show');
Route::get('/users/{user}/student/courses/{course}', [CourseController::class, 'showStudent'])->name('student.courses.show');
Route::get('/users/{user}/editor/courses/{unpublished_course}', [CourseController::class, 'showEditor'])->name('editor.courses.show');



// LESSON
Route::get('/courses/{course}/lessons/{lesson:number}', [LessonController::class, 'show'])->name('lessons.show');
Route::get('/users/{user}/student/courses/{course}/lessons/{lesson:number}', [LessonController::class, 'showStudent']);
Route::put('/users/{user}/student/courses/{course}/lessons/{lesson:number}', [StudentOfLessonController::class, 'update']);

Route::get('/users/{user}/editor/courses/{course}/lessons/{lesson:number}', [LessonController::class, 'showEditor']);



// SCHOOL
Route::apiResource('schools', SchoolController::class)->only(['show','update']);



// UTILS
Route::get('/names/courses/{unpublished_course}', [CourseController::class, 'getName']);
Route::get('/names/courses/{unpublished_course}/lessons/{lesson:number}', [LessonController::class, 'getName']);
Route::get('/names/schools/{school}', [SchoolController::class, 'getName']);