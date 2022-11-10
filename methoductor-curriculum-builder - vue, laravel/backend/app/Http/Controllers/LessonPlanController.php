<?php

namespace App\Http\Controllers;

use App\Models\LessonPlan;
use Illuminate\Http\Request;

class LessonPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize("create", LessonPlan::class);

        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'lesson_id' => 'required',
        ]);

        $lessonPlan = new LessonPlan;
        $lessonPlan->user_id = $this->user->id;
        $lessonPlan->course_id = $request->course_id;
        $lessonPlan->lesson_id = $request->lesson_id;

        $lessonPlan->save();

        return $lessonPlan;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function show(LessonPlan $lessonPlan)
    {
        $this->authorize("view", $lessonPlan);
        
        return $lessonPlan;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LessonPlan $lessonPlan)
    {
        $this->authorize("update", $lessonPlan);

        $request->validate([
            'structure' => 'required',
        ]);

        $lessonPlan->structure = $request->structure;

        $lessonPlan->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function destroy(LessonPlan $lessonPlan)
    {
        $this->authorize("delete", $lessonPlan);

        $lessonPlan->delete();
    }
}
