<?php

namespace App\Models\Roles;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherOfSchool extends Model
{
    use HasFactory;

	protected $guarded = [];

	protected $casts = [
		"meta" => "object",
	];

	protected $table = 'teachers_of_schools';
}
