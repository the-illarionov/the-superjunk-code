<?php

namespace App\Http\Resources\Learning;

use Illuminate\Http\Resources\Json\JsonResource;

class SchoolResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
		$locale = $request->locale;
    $user = auth()->guard('sanctum')->user();

    $owner = false;

    if($user) {
      $owner = $user->ownerOfSchool($this->id);
    }
		
        return [
          "url" => $this->url,
          "name" => $this->{'name_'.$locale},
          "info" => $this->{'info_'.$locale},
          "timezone" => $this->timezone,

          "owner" => $this->when($owner, true),
        ];
    }
}
