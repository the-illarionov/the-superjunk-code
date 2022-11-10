<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model 
{
    protected $fillable = [
        'phone', 'email', 'message'
    ];
    public function author()
    {
        return $this->belongsTo('App\Models\User')->withDefault();
    }
}