<?php

namespace App\Models\Learning;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

use App\Traits\Typeable;
use App\Traits\Localizable;
use App\Traits\Publishable;

use App\Models\User;
use App\Models\Learning\School;
use App\Models\Learning\Module;
use App\Models\Learning\Lesson;

class Course extends Model
{
    use HasFactory, Typeable, Localizable, Publishable;

    protected $casts = [
        'options' => 'object',
        'promo_ru' => 'object',
		'promo_en' => 'object',
    ];

    protected $guarded = [];

	public function getRouteKeyName() { return 'url'; }



	// METHODS
	public static function findByUrl($url) {
		return static::where("url", $url)->first();
	}

	public function findLessonByNumber($number) {
		return $this->lessons()->where("number", $number)->first();
	}



	// ACCESSORS
	public function getSalesAttribute() {
		return $this->types()->where('category','sales')->first()->slug;
	}

	

	// RELATIONS
	public function author() {
		return $this->belongsTo(User::class, 'author_id');
	}

	public function school() {
		return $this->belongsTo(School::class);
	}

	public function modules() {
		return $this->hasMany(Module::class);
	}

	public function lessons() {
		return $this->hasMany(Lesson::class);
	}
}