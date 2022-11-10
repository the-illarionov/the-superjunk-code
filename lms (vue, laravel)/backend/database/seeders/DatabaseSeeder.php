<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Type;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
		$this->call([
            TypeSeeder::class,
			UserSeeder::class,
			SchoolSeeder::class,
			OwnerOfSchoolSeeder::class,
			AdminOfSchoolSeeder::class,
			TeacherOfSchoolSeeder::class,
			CourseSeeder::class,
			ModuleSeeder::class,
			LessonSeeder::class,
			EditorOfCourseSeeder::class,
        ]);

        if(app()->environment('local')) {
            $this->call([
				StudentOfCourseSeeder::class,
            ]);
        }
    }
}
