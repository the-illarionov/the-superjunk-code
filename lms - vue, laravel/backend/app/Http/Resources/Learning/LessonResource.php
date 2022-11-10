<?php

namespace App\Http\Resources\Learning;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Roles\StudentOfLessonResource;

use App\Models\Roles\StudentOfCourse;

class LessonResource extends JsonResource
{
    public function toArray($request)
    {
		$locale = $request->locale;
		$user = auth()->guard('sanctum')->user();
		$structure = false;
		$studentOfLesson = false;
		$routeIsLessonView = false;
		$passConditions = false;
		
		if($request->routeIs('lessons.show')) {
			$routeIsLessonView = true;
			$passConditions = $this->pass_conditions;
			$structure = $this->{'structure_'.$locale};
		}

		if($user) {
			$studentOfLesson = $this->studentOfLesson($user->id);
		};

        return [
			"number" => $this->number,
			"name" => $this->{'name_'.$locale},
			"structure" => $this->when($structure, $structure),
			"sales" => $this->sales,
			"student" => $this->when($studentOfLesson, new StudentOfLessonResource($studentOfLesson)),
			"pass_conditions" => $this->when($passConditions, $passConditions),
			"is_last" => $this->when($routeIsLessonView && $this->is_last, $this->is_last),
		];
    }
}
