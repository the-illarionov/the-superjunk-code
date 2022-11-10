<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Roles\EditorOfCourse;

class EditorOfCourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EditorOfCourse::create([
			"editor_id" => 1,
			"course_id" => 1,
		]);

		EditorOfCourse::create([
			"editor_id" => 1,
			"course_id" => 2,
		]);

		EditorOfCourse::create([
			"editor_id" => 1,
			"course_id" => 3,
		]);

		EditorOfCourse::create([
			"editor_id" => 1,
			"course_id" => 4,
		]);

		EditorOfCourse::create([
			"editor_id" => 1,
			"course_id" => 5,
		]);

		EditorOfCourse::create([
			"editor_id" => 2,
			"course_id" => 6,
		]);

		EditorOfCourse::create([
			"editor_id" => 2,
			"course_id" => 7,
		]);
    }
}
