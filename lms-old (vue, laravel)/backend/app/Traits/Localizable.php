<?php

namespace App\Traits;

use App\Exceptions\LocaleNotFound;

trait Localizable {
	public function checkExistenceOnLocale($locale, $columnName = 'name') {
		if(!$this->{$columnName.'_'.$locale}) throw new LocaleNotFound;
		return true;
	}

	public function scopeOfLocale($query, $locale) {
		return $query->whereNotNull('name_'.$locale);
	}
}
