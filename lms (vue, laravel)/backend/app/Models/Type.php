<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Type extends Model
{
	// protected $hidden = ["invisible", "created_at", "updated_at", "pivot", "type"];
	protected $casts = [
		"categories" => "array",
		"info_ru" => "object",
		"info_en" => "object"
	];

    // METHODS
	public static function findBySlug($slug) {
		return static::where("slug", $slug)->first();
	}
}
