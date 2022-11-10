<?php

namespace App\Traits;

use App\Models\Type;

trait Typeable {
	public function isType($slugs) {
		$slugs = str_replace(' ', '', $slugs);
        $slugs = explode(',', $slugs);
        $authorized = false;

        foreach($slugs as $slug) {
            if(strpos($slug, '+')) {
                $slug = explode('+',$slug);

                foreach($slug as $slugPart) {
                    $type = Type::findBySlug($slugPart);
                    if(!$type) return false;
                    
                    if($this->types()->where('type_id', $type->id)->doesntExist()) {
                        $authorized = false;
                        break;
                    }
                    $authorized = true;
                }
            } else {
                $type = Type::findBySlug($slug);
                if(!$type) return false;
                if($this->types()->where('type_id', $type->id)->exists()) return true;
            }
        }
        
        return $authorized;
	}

	public function addType($types) {
		$types = str_replace(' ', '', $types);
		$types = explode(',', $types);

		$result = array();

		foreach($types as $typeSlug) {
			$type = Type::findBySlug($typeSlug);
			if(!$type) return false;

			if($this->types()->where('type_id', $type->id)->doesntExist()) {
				array_push($result, $type->id);		
			}
		}

		$this->types()->attach($result);

		return true;
	}

	public function removeType($types) {
		$types = str_replace(' ', '', $types);
		$types = explode(',', $types);

		$result = array();

		foreach($types as $typeSlug) {
			$type = Type::findBySlug($typeSlug);
			if(!$type) return false;

			array_push($result, $type->id);
		}

		$this->types()->detach($result);

		return true;
	}

	public function scopeOfType($query, $types) {
		$types = str_replace(' ', '', $types);
		$types = explode('+',$types);

		foreach($types as $type) {
			$query->whereHas('types', function($query) use ($type) {
				$query->where("slug", $type);
			});
		}

		return $query;
	}

	public function types() {
		return $this->belongsToMany(Type::class)->withTimestamps();
	}

	public function type($slug) {
		return $this->types()->where("slug", $slug)->first();
	}
}
