<?php

namespace App\Models\Roles;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

use App\Models\Learning\Course;

use App\Models\Roles\StudentOfLesson;

class StudentOfCourse extends Model
{
    use HasFactory;

	protected $guarded = [];

	protected $casts = [
		"meta" => "object",
			// progress: целое число от 0 до 100
	];

	protected $table = 'students_of_courses';



	// METHODS
	public function updateProgress() {
		$totalLessonsCount = $this->course->lessons()->count();
		$onePortion = intval(100 / $totalLessonsCount);
		$passedLessonsCount = $this->lessons()->where('passed', true)->count();

		if($passedLessonsCount === $totalLessonsCount) {
			$progress = 100;
			// здесь можно какое-то еще событие вызывать типа CourseCompleted
		}
		else $progress = $passedLessonsCount * $onePortion;

		$this->progress = $progress;
		$this->save();
	}



	// RELATIONS
	public function course() {
		return $this->belongsTo(Course::class);
	}

	public function lessons() {
		return $this->hasMany(StudentOfLesson::class, 'student_id', 'student_id')->where('course_id', $this->course_id);
	}
}
