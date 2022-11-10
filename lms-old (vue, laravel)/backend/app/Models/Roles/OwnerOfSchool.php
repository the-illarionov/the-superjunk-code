<?php

namespace App\Models\Roles;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OwnerOfSchool extends Model
{
    use HasFactory;

	protected $guarded = [];

	protected $table = 'owners_of_schools';
}
