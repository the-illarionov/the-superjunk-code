<?php

namespace App\Services;

use App\Models\User;
use App\Models\Learning\Lesson;
use App\Models\Learning\Course;
use App\Models\Roles\StudentOfLesson;

class StudentOfLessonService {
	public static function get(User $user, Lesson $lesson) {
		return StudentOfLesson::where([
			[ 'student_id', $user->id ],
			[ 'lesson_id', $lesson->id ]
		])->first();
	}

	public static function createOrFalse(User $user, Lesson $lesson, $viewRestrictionPassed = false) {
		$studentOfLesson = false;
		if(!$viewRestrictionPassed) $viewRestrictionPassed = $user->can('view', $lesson);

		if(StudentOfLesson::where([
			[ 'student_id', $user->id ],
			[ 'lesson_id', $lesson->id ]
		])->doesntExist() && $viewRestrictionPassed) {
			$passConditions = null;

			if($lesson->isType("has_pass_conditions")) {
				$passConditions = $lesson->pass_conditions;
				//здесь можно расписать логику того что кондишены собираются с верхних уровней ( то есть сначала с lesson потом с модуля и тд) - и они могут перезаписывать или добавлять кондишены
			}

			$studentOfLesson = StudentOfLesson::create([
				"student_id" => $user->id,
				"lesson_id" => $lesson->id,
				"course_id" => $lesson->course->id,
				"pass_conditions" => $passConditions, 
				
			]);
		};

		return $studentOfLesson;
	}
}