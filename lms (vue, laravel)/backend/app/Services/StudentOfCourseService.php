<?php

namespace App\Services;

use App\Models\User;
use App\Models\Learning\Course;
use App\Models\Roles\StudentOfCourse;

class StudentOfCourseService {
	public static function get(User $user, Course $course) {
		return StudentOfCourse::where([
			'student_id' => $user->id,
			'course_id' => $course->id
		])->first();
	}

	public static function getOrFail(User $user, Course $course) {
		$studentOfCourse = static::get($user, $course);

		if(!$studentOfCourse) abort(404);

		return $studentOfCourse;
	}

	public static function createOrFalse(User $user, Course $course) {
		$studentOfCourse = false;

		if(StudentOfCourse::where([
			'student_id' => $user->id,
			'course_id' => $course->id
		])->doesntExist() ) {
			$studentOfCourse = StudentOfCourse::create([
				'student_id' => $user->id,
				'course_id' => $course->id,
			]);
		}

		return $studentOfCourse;
	}
}