<?php

namespace App\Models\Learning;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Traits\Localizable;

class School extends Model
{
    use HasFactory, Localizable;

	protected $guarded = [];

	public function getRouteKeyName() { return 'url'; }
}
