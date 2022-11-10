<?php

namespace App\Models\Learning;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Learning\Course;
use App\Models\Learning\Lesson;

class Module extends Model
{
    use HasFactory;

	protected $guarded = [];



	// RELATIONS
	public function course() {
		return $this->belongsTo(Course::class);
	}

	public function lessons() {
		return $this->hasMany(Lesson::class);
	}
}
