<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Learning\Module;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Module::create([
			'course_id' => 1,
			'name_ru' => 'Название модуля',
			'description_ru' => 'Описание модуля',
			'name_en' => 'Module name',
			'description_en' => 'Module description',
			'number' => 1,
		]);

		Module::create([
			'course_id' => 6,
			'name_ru' => 'Название модуля платный курс маркетплейса',
			'description_ru' => 'Описание модуля',
			'name_en' => 'Module name',
			'description_en' => 'Module description',
			'number' => 1,
		]);

		Module::create([
			'course_id' => 7,
			'name_ru' => 'Название модуля',
			'description_ru' => 'Описание модуля',
			'name_en' => 'Module name',
			'description_en' => 'Module description',
			'number' => 1,
		]);

		Module::create([
			'course_id' => 8,
			'name_ru' => 'Модуль курса с кондишенами',
			'description_ru' => 'Описание модуля',
			'name_en' => 'Module name',
			'description_en' => 'Module description',
			'number' => 1,
		]);
    }
}
