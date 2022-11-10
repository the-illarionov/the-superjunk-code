<?php

namespace App\Exceptions;

use Exception;

class LocaleNotFound extends Exception
{
    public function render() {
		return response()->json([
			"type" => "locale_not_found",
		], 404);
	}
}
