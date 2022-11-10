<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Folder extends Model 
{
    protected $fillable = [
        'name', 'type'
    ];
    public function author()
    {
        return $this->belongsTo('App\Models\User')->withDefault();
    }
}