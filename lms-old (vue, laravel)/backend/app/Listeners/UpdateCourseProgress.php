<?php

namespace App\Listeners;

use App\Events\LessonPassed;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use App\Models\User;
use App\Models\Learning\Course;
use App\Models\Roles\StudentOfCourse;

class UpdateCourseProgress
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    /**
     * Handle the event.
     *
     * @param  LessonPassed  $event
     * @return void
     */
    public function handle(LessonPassed $event)
    {
		$course_id = $event->studentOfLesson->course_id;

        $studentOfCourse = StudentOfCourse::where([
			['student_id', $event->user->id],
			['course_id', $course_id],
		])->first();

		if($studentOfCourse) {
			$studentOfCourse->updateProgress();
		}
    }
}
