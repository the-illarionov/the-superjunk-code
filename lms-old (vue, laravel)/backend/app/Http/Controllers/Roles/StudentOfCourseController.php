<?php

namespace App\Http\Controllers\Roles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Services\StudentOfCourseService;

use App\Models\User;
Use App\Models\Learning\Course;
use App\Models\Roles\StudentOfCourse;

use App\Http\Resources\Learning\CourseResource;
use App\Http\Resources\Learning\CourseCollection;

use App\Http\Resources\Roles\StudentOfCourseResource;

class StudentOfCourseController extends Controller
{
    public function __construct(Request $request) {
		//$this->middleware("auth:sanctum")->only(['showCourses', 'showCourse']);
	}

    public function index(Request $request)
    {
        
    }

	public function show(Request $request, User $user, Course $course)
    {	
		
    }

    public function store(Request $request, User $user, Course $course)
    {	
		
    }

    public function update(Request $request, StudentOfCourse $studentOfCourse)
    {
        
    }

    public function destroy(StudentOfCourse $studentOfCourse)
    {
        
    }
}
