<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Longread extends Model 
{
    protected $fillable = [
        'name', 'slug', 'longread_structure', 'longread_options'
    ];
    public function author()
    {
        return $this->belongsTo('App\Models\User')->withDefault();
    }
    public function folder()
    {
        return $this->belongsTo('App\Models\Folder')->withDefault();
    }
}