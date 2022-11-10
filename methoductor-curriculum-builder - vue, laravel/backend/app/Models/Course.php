<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'slug', 'user_id'
    ];
    protected $casts = [
        'structure' => 'json',
    ];
    public function author()
    {
        return $this->belongsTo('App\Models\User')->withDefault();
    }
}
