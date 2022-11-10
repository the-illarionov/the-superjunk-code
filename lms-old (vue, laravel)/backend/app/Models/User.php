<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use App\Traits\Typeable;

use App\Models\Learning\Course;

use App\Models\Roles\OwnerOfSchool;
use App\Models\Roles\AdminOfSchool;
use App\Models\Roles\TeacherOfSchool;

use App\Models\Roles\EditorOfCourse;
use App\Models\Roles\StudentOfCourse;
use App\Models\Roles\StudentOfLesson;

use App\Scopes\PublishedScope;

use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, Typeable;

	protected $visible = [];
    
    protected $guarded = [];

	public function getRouteKeyName() { return 'nickname'; }



	// METHODS



	// RELATIONS
	// roles
	public function ownersOfSchools() {
		return $this->hasMany(OwnerOfSchool::class, 'owner_id');
	}
	public function ownerOfSchool($schoolId) {
		return $this->ownersOfSchools()->where('school_id', $schoolId)->first();
	}



	public function adminsOfSchools() {
		return $this->hasMany(AdminOfSchool::class, 'admin_id');
	}
	public function adminOfSchool($schoolId) {
		return $this->adminsOfSchools()->where('school_id', $schoolId)->first();
	}



	public function teachersOfSchools() {
		return $this->hasMany(TeacherOfSchool::class, 'teacher_id');
	}
	public function teacherOfSchool($schoolId) {
		return $this->teachersOfSchools()->where('school_id', $schoolId)->first();
	}



	public function editorsOfCourses() {
		return $this->hasMany(EditorOfCourse::class, 'editor_id');
	}
	public function editorOfCourse($courseId) {
		return $this->editorsOfCourses()->where('course_id', $courseId)->first();
	}
	public function coursesOfEditor() {
		return $this->belongsToMany(Course::class, 'editors_of_courses', 'editor_id',  'course_id')->withoutGlobalScope(PublishedScope::class);
	}

	public function coursesOfAuthor() {
		return $this->hasMany(Course::class, 'author_id');
	}



	public function studentsOfCourses() {
		return $this->hasMany(StudentOfCourse::class, 'student_id');
	}
	public function studentOfCourse($courseId) {
		return $this->studentsOfCourses()->where('course_id', $courseId)->first();
	}
	public function coursesOfStudent() {
		return $this->belongsToMany(Course::class, 'students_of_courses', 'student_id',  'course_id');
	}


	
	public function studentsOfLessons() {
		return $this->hasMany(StudentOfLesson::class, 'student_id');
	}
	public function studentOfLesson($lesson_id) {
		return $this->studentsOfLessons()->where('lesson_id', $lesson_id)->first();
	}


	
	// STATIC
	public static function findByNickname($nickname) {
		return static::where("nickname", $nickname)->first();
	}
}
