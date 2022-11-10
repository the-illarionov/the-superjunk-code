<?php

namespace App\Models\Roles;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminOfSchool extends Model
{
    use HasFactory;

	protected $guarded = [];

	protected $casts = [
		"meta" => "object",
	];

	protected $table = 'admins_of_schools';
}
