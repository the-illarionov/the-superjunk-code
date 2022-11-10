<?php

namespace App\Http\Resources\Learning;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\UserResource;
use App\Http\Resources\Learning\SchoolResource;
use App\Http\Resources\Learning\ModuleResource;
use App\Http\Resources\Learning\ModuleCollection;
use App\Http\Resources\Roles\EditorOfCourseResource;
use App\Http\Resources\Roles\StudentOfCourseResource;
use App\Http\Resources\TypeResource;

use App\Models\Learning\School;

class CourseResource extends JsonResource
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

		$editor = false;
		$student = false;
		$openApplications = false;
		$school = false;
		$types = false;

		if($user) {			
			$editor = $user->editorOfCourse($this->id);
			$student = $user->studentOfCourse($this->id);
		}

		if($request->routeIs('courses.show')) {
			$openApplications = $this->isType('open_applications');
			$school = $this->school;
		} else if($request->routeIs('editor.courses.show')) {
			$types = TypeResource::collection($this->types);
		}

        return [
            "url" => $this->url,
            "name" => $this->{'name_'.$locale},
            // "info" => $this->{'info_'.$locale},

			"modules" => ModuleResource::collection($this->whenLoaded('modules')),
			"open_applications" => $this->when($openApplications, $openApplications),
			"sales" => $this->sales,
			"school" => $this->when($school, new SchoolResource($school)),
			"types" => $this->when($types, $types),

			"author" => new UserResource($this->author),

			"editor" => $this->when($editor, new EditorOfCourseResource($editor)),
			"student" => $this->when($student, new StudentOfCourseResource($student)),
        ];
    }
}
