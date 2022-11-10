<?php

namespace App\Policies;

use App\Exceptions\ViewRestricted;

use App\Services\StudentOfLessonService;
use App\Services\StudentOfCourseService;
use App\Models\Learning\Lesson;
use App\Models\Learning\School;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\AuthenticationException;

class LessonPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        //
    }

    public function view(?User $user, Lesson $lesson)
    {	
		if($lesson->course->isType("open_applications")) {
			$types = $lesson->types;
			$bypassCheck = false;
			$openAccess = $types->contains(11);

			if($openAccess && $types->contains(6)) return true;
			if($openAccess && $types->contains(5)) $bypassCheck = true;

			if($bypassCheck || $types->contains(12) || $types->contains(13) || $types->contains(14)) {
				if($user) {
					if(!$openAccess) {
						$studentOfCourse = StudentOfCourseService::get($user, $lesson->course);

						if(!$studentOfCourse || !$studentOfCourse->paid) throw new ViewRestricted([
							"type" => "payment"
						]);
					}
					if($types->contains(5)) {
						$requiredLesson = Lesson::findOrFail( $lesson->required_lesson_id );

						$studentOfRequiredLesson = StudentOfLessonService::get($user, $requiredLesson);

						if($studentOfRequiredLesson && $studentOfRequiredLesson->passed) return true;

						throw new ViewRestricted([
							"type" => "completion",
							"required_lesson" => [
								"number" => $requiredLesson->number,
								"course_url" => $requiredLesson->course->url
							]
						]);
					}
				}
				throw new AuthenticationException;
			}
		}
		throw new ViewRestricted([
			"type" => "closed_applications",
			"school_url" => School::find($lesson->course->school_id)->url
		]);

		/*
		1 sync modes
		2 async modes
		3 open_applications applications
		4 closed_applications applications
		5 depends lock
		6 not_depends lock
		7 visible visibility
		8 invisible visibility
		9 has_pass_conditions pass_conditions
		10 no_pass_conditions pass_conditions
		11 open_access sales
		12 paid_once sales
		13 paid_subscription sales
		14 paid_by_parts sales
		15 draft state
		16 in_review state
		17 published state
		18 teens category
		19 market
		20 adults category
		21 programming tag
		22 graphics tag
		*/
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, Lesson $lesson)
    {
        //
    }

    public function delete(User $user, Lesson $lesson)
    {
        //
    }

    public function restore(User $user, Lesson $lesson)
    {
        //
    }

    public function forceDelete(User $user, Lesson $lesson)
    {
        //
    }



	// CUSTOM
	public function viewEditor(User $user, Lesson $lesson, User $givenUser)
    {
        return $user->id === $givenUser->id && $user->editorOfCourse($lesson->course->id);
    }
}
