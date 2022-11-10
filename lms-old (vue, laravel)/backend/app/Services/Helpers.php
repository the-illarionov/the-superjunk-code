<?php

namespace App\Services;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class Helpers {
	public static function generateUnique($tableName, $columnName) {
		$unique = Str::slug(Str::random(6));

		if(DB::table($tableName)->where($columnName, $unique)->count() > 0) static::generateUnique($tableName, $columnName);

		return $unique;
	}
}
