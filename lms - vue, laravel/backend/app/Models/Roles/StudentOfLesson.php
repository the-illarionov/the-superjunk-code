<?php

namespace App\Models\Roles;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Services\StudentOfCourseService;

use App\Models\Learning\Course;
use App\Models\Learning\Lesson;
use App\Models\User;


class StudentOfLesson extends Model
{
    use HasFactory;

	protected $guarded = [];

	protected $casts = [
		'pass_conditions' => 'object',
	];

	protected $table = 'students_of_lessons';

	protected static function booted() {
		static::deleted(function ($viewedLesson) {
			StudentOfCourseService::get($viewedLesson->student, $viewedLesson->course)->updateProgress();
        });
	}



	
	// RELATIONS
	public function student() {
		return $this->belongsTo(User::class, 'student_id');
	}

	public function lesson() {
		return $this->belongsTo(Lesson::class);
	}

	public function course() {
		return $this->belongsTo(Course::class);
	}
}
