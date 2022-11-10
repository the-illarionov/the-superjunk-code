<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LessonPlan extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'user_id', 'course_id'
    ];

    protected $casts = [
        'structure' => 'json',
    ];

    public function user() {
        return $this->belongsTo('App\Models\User');
    }

    public function course() {
        return $this->belongsTo('App\Models\Course');
    }
}