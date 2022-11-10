<?php

namespace App\Http\Controllers\Roles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
Use App\Models\Learning\Course;
Use App\Models\Learning\Lesson;

use App\Models\Roles\StudentOfLesson;

use App\Http\Resources\Roles\StudentOfLessonResource;

use App\Events\LessonPassed;

use App\Services\StudentOfLessonService;

class StudentOfLessonController extends Controller
{
	public function __construct(Request $request) {
		$this->middleware("auth:sanctum")->only(['update','showLesson']);
	}

    public function index(Request $request, User $user)
    {
        
    }

    public function store(Request $request, User $user, Course $course, Lesson $lesson)
    {
		/*
		// напрямую не создаётся, только через LessonController@view
		$this->authorize("create", [StudentOfLesson::class, $user]);

		$studentOfLesson = false;
		$studentOfLesson = StudentOfLessonService::create($user, $course, $lesson);
        return new StudentOfLessonResource($studentOfLesson);
		*/
    }

    public function show(StudentOfLesson $studentOfLesson)
    {
        //
    }

    public function update(Request $request, User $user, Course $course, Lesson $lesson)
    {
		$studentOfLesson = StudentOfLessonService::get($user, $lesson);

		$this->authorize("update", [$studentOfLesson, $user, $lesson]);

		if($request->has('pass_conditions')) {
			$passed = false;
			
			if($request->pass_conditions) {
				$passed = false;
				// ддаже после passed всё равно пробегаюсь потому что может быть вариант загрузите файл, он прошёл, урок passed,а потом я захотел картинку перезагрузить, но passed если был true то уже не меняется - иличо?
			} else {
				$passed = true;
			}

			$studentOfLesson->passed = $passed;
		}

		$studentOfLesson->save();

		if($studentOfLesson->wasChanged('passed') && $studentOfLesson->passed === true) {
			LessonPassed::dispatch($user, $studentOfLesson);
		}

        return new StudentOfLessonResource($studentOfLesson);
    }

    public function destroy(StudentOfLesson $studentOfLesson)
    {
        //
    }



	// CUSTOM
}
