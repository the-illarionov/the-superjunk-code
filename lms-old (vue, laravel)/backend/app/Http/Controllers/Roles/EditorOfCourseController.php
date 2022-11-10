<?php

namespace App\Http\Controllers\Roles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Learning\Course;
use App\Models\Roles\EditorOfCourse;

use App\Http\Resources\Learning\CourseCollection;
use App\Http\Resources\Learning\CourseResource;

class EditorOfCourseController extends Controller
{
	public function __construct(Request $request) {
		//$this->middleware("auth:sanctum")->only(['showCourses', 'showCourse']);
	}

    public function index(Request $request, User $user)
    {
		
    }

    public function store(Request $request)
    {
        //
    }

    public function show(AuthorOfCourse $authorOfCourse)
    {
        //
    }

    public function update(Request $request, AuthorOfCourse $authorOfCourse)
    {
        //
    }

    public function destroy(AuthorOfCourse $authorOfCourse)
    {
        //
    }
}
