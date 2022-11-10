<?php

namespace App\Traits;

use App\Scopes\PublishedScope;

trait Publishable {
	protected static function bootPublishable() {
		static::addGlobalScope(new PublishedScope);
	}
}