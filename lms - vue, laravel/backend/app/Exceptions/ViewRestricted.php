<?php

namespace App\Exceptions;

use Exception;

class ViewRestricted extends Exception
{
	protected $data;

	public function __construct($data) {
		$this->data = $data;
	}
    public function render() {
		return response()->json([
			"type" => "view_restriction",
			"data" => $this->data,
		], 403);
	}
}
