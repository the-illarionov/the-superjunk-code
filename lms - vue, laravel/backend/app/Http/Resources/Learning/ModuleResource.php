<?php

namespace App\Http\Resources\Learning;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Learning\Course;
use App\Http\Resources\Learning\LessonResource;

class ModuleResource extends JsonResource
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

        return [
			"course_url" => Course::findOrFail($this->course_id)->url,
			"name" => $this->{'name_'.$locale},
			"description" => $this->{'description_'.$locale},
			"lessons" => LessonResource::collection($this->whenLoaded('lessons')),
		];
    }
}
