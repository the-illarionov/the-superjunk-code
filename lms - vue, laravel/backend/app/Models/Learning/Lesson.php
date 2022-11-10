<?php

namespace App\Models\Learning;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Auth\AuthenticationException;
use App\Exceptions\ViewRestricted;

use App\Traits\Typeable;
use App\Traits\Localizable;
use App\Traits\Publishable;

use App\Models\User;

use App\Models\Learning\School;
use App\Models\Learning\Lesson;
use App\Models\Learning\Course;
use App\Models\Learning\Module;

use App\Models\Roles\StudentOfCourse;
use App\Models\Roles\StudentOfLesson;

use App\Http\Resources\Learning\LessonResource;

use App\Services\StudentOfCourseService;
use App\Services\StudentOfLessonService;

class Lesson extends Model
{
    use HasFactory, Typeable, Localizable, Publishable;

	protected $casts = [
        'structure_ru' => 'object',
        'structure_en' => 'object',
		'types.pivot.pass_conditions' => 'array',
    ];

	protected $guarded = [];

	protected $hidden = [ 'structure_ru', 'structure_en', 'structure'];



	// METHODS




	// ACCESSORS
	public function getIsLastAttribute() {
		return $this->number === Lesson::where('course_id', $this->course_id)->count();
	}

	public function getSalesAttribute() {
		return $this->types()->where('category','sales')->first()->slug;
	}

	public function getRequiredLessonIdAttribute() {
		$type = $this->types()->withPivot('required_lesson_id')->where('slug', 'require_another_lesson_completion')->first();
		if(!$type) return null;
		return $type->pivot->required_lesson_id;
	}
	public function setRequiredLessonIdAttribute($value) {
		$type = $this->types()->withPivot('required_lesson_id')->where('slug', 'require_another_lesson_completion')->first();
		if(!$type) return false;
		$pivot = $type->pivot;
		$pivot->required_lesson_id = $value;
		$pivot->save();
		return true;
	}

	public function getPassConditionsAttribute() {
		$type = $this->types()->withPivot('pass_conditions')->where('slug', 'has_pass_conditions')->first();
		if(!$type) return null;
		$conditions = json_decode($type->pivot->pass_conditions);
		foreach($conditions as $condition) {
			if($condition->correctValue) unset($condition->correctValue);
		}
		return $conditions;
	}
	public function setPassConditionsAttribute($value) {
		$type = $this->types()->withPivot('pass_conditions')->where('slug', 'has_pass_conditions')->first();
		if(!$type) return false;
		$pivot = $type->pivot;
		$pivot->pass_conditions = $value;
		$pivot->save();
		return true;
	}



	// RELATIONS
	public function course() {
		return $this->belongsTo(Course::class);
	}

	public function module() {
		return $this->belongsTo(Module::class);
	}

	public function studentsOfLessons() {
		return $this->hasMany(StudentOfLesson::class, 'lesson_id', 'id');
	}
	public function studentOfLesson($student_id) {
		return $this->studentsOfLessons()->where('student_id', $student_id)->first();
	}
}