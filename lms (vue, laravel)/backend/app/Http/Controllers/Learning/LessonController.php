<?php

namespace App\Http\Controllers\Learning;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Exceptions\ViewRestricted;

use App\Services\StudentOfCourseService;
use App\Services\StudentOfLessonService;

use App\Models\User;
use App\Models\Learning\School;
use App\Models\Learning\Lesson;
use App\Models\Learning\Course;
use App\Http\Resources\Learning\LessonResource;
use App\Http\Resources\Learning\LessonCollection;

use App\Models\Roles\StudentOfCourse;

class LessonController extends Controller
{
	public function __construct(Request $request) {
		$this->middleware("auth:sanctum")->only(['showStudent','showEditor']);
	}

    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }



    public function show(Request $request, Course $course, Lesson $lesson)
    {
		$this->authorize("view", $lesson);
		$lesson->checkExistenceOnLocale($request->locale);

		return new LessonResource($lesson);
    }

	public function showStudent(Request $request, User $user, Course $course, Lesson $lesson)
    {
		$this->authorize("view", $lesson);
		$lesson->checkExistenceOnLocale($request->locale);

		StudentOfCourseService::createOrFalse($user, $course);
		StudentOfLessonService::createorFalse($user, $lesson, true);

		return new LessonResource($lesson);
    }

	public function showEditor(Request $request, User $user, Course $course, Lesson $lesson)
    {
		$this->authorize("viewEditor", [$lesson, $user]);
		return new LessonResource($lesson);
    }




    public function update(Request $request, Lesson $lesson)
    {
        //
    }
	
    public function destroy(Lesson $lesson)
    {
        //
    }




	// CUSTOM
	public function getName(Request $request, Course $course, Lesson $lesson)
    {
		$course->checkExistenceOnLocale($request->locale);
		
		return $lesson->number.". ".$lesson->{'name_'.$request->locale};
    }
}
