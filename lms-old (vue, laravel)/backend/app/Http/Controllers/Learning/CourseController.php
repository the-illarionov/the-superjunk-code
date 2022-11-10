<?php

namespace App\Http\Controllers\Learning;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Services\Helpers;

use App\Models\User;
use App\Models\Learning\Course;
use App\Models\Roles\EditorOfCourse;
use App\Http\Resources\Learning\CourseResource;
use App\Http\Resources\Learning\CourseCollection;

use App\Scopes\PublishedScope;

class CourseController extends Controller
{
	public function __construct(Request $request) {
		$this->middleware("auth:sanctum")->only([
			'indexStudent', 
			'indexEditor',
			'showStudent',
			'showEditor',
			'store'
		]);
	}

	public function indexTeens(Request $request) {
		$locale = $request->locale;

		$result = Course::ofLocale($locale)->ofType('visible + teens')->get();

		return CourseResource::collection($result);
	}

	public function indexMarket(Request $request) {
		$locale = $request->locale;

		$result = Course::ofLocale($locale)->ofType('visible + market')->get();
		
		return CourseResource::collection($result);
	}

	public function indexStudent(Request $request, User $user) {
		$this->authorize("viewStudentCourses", [Course::class, $user]);
		
		return CourseResource::collection($user->coursesOfStudent);
	}

	public function indexEditor(Request $request, User $user) {
		$this->authorize("viewEditorCourses", [Course::class, $user]);
		
		return CourseResource::collection($user->coursesOfEditor);
	}



    public function store(Request $request)
    {
		$user = $request->user();
		$locale = $request->locale;

		$course = Course::create([
			"author_id" => $user->id,
			"url" => Helpers::generateUnique('courses','url'),
			"name_ru" => $locale === 'ru' ? 'Без названия' : null,
			"name_en" => $locale === 'en' ? 'Untitled' : null,
		]);
		EditorOfCourse::create([
			"editor_id" => $user->id,
			"course_id" => $course->id
		]);

		$course->addType("market, draft, open_applications, visible, async, not_require_another_lesson_completion, open_access");
		
		return new CourseResource($course);
    }



    public function show(Request $request, Course $course)
    {
		$course->checkExistenceOnLocale($request->locale);
        return new CourseResource($course->load('modules.lessons'));
    }

	public function showStudent(Request $request, User $user, Course $course)
    {
		if(!$user->studentOfCourse($course->id)) abort(404);
		$this->authorize("viewStudentCourses", [Course::class, $user]);

		$course->checkExistenceOnLocale($request->locale);
        return new CourseResource($course->load('modules.lessons'));
    }

	public function showEditor(Request $request, User $user, Course $course)
    {
		//$course = Course::withoutGlobalScope(PublishedScope::class)->where('url',$course_url)->first();
		if(!$user->editorOfCourse($course->id)) abort(404);
		$this->authorize("viewEditorCourses", [Course::class, $user]);

		$course->checkExistenceOnLocale($request->locale);
        return new CourseResource($course->load('modules.lessons'));
    }



    public function update(Request $request, Course $course)
    {
        //
    }
	
    public function destroy(Course $course)
    {
        //
    }



	// CUSTOM
	public function getName(Request $request, Course $course)
    {
		$course->checkExistenceOnLocale($request->locale);

		return $course->{'name_'.$request->locale};
    }
}