<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;

class CourseController extends Controller
{
    public function index(Request $request) {
        $this->authorize("viewAny", Course::class);

        return Course::select(['id','name'])->where('user_id', $this->user->id)->get();
    }



    public function store(Request $request)
    {
        $this->authorize("create", Course::class);

        $course = new Course;
        $course->user_id = $this->user->id;
        $course->save();

        return $course;
    }



    public function show(Request $request, Course $course)
    {
        $this->authorize("view", $course);

        return $course;
    }



    public function update(Request $request, Course $course)
    {
        $this->authorize("update", $course);

        if($request->has('structure')) {
            $course->structure = $request->structure;
        }
        if($request->has('name')) {
            $course->name = $request->name;
        }
        
        $course->save();
    }



    public function destroy(Request $request, Course $course) {
        $this->authorize("delete", $course);

        $course->delete();
    }
}
