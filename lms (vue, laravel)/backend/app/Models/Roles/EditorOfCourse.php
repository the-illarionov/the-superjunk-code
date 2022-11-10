<?php

namespace App\Models\Roles;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EditorOfCourse extends Model
{
    use HasFactory;

	protected $guarded = [];

	protected $table = 'editors_of_courses';
}
