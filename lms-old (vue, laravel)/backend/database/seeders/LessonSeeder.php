<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Learning\Lesson;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $l = Lesson::create([
			"number" => 1,
			"course_id" => 1,
			"module_id" => 1,
			"name_ru" => "Первый урок",
			"structure_ru" => collect([
				"foo" => [
					"a" => "b",
					"c" => "d"
				]
			])
		]);
		$l->addType("open_access, not_require_another_lesson_completion, no_pass_conditions, published");

		Lesson::create([
			"number" => 1,
			"course_id" => 6,
			"module_id" => 2,
			"name_ru" => "Первый урок",
			"structure_ru" => collect([
				"foo" => [
					"a" => "b",
					"c" => "d"
				]
			])
		]);

		$b = Lesson::create([
			"number" => 1,
			"course_id" => 7,
			"module_id" => 3,
			"name_ru" => "Первый урок",
			"structure_ru" => collect([
				"foo" => [
					"a" => "111111",
					"c" => "d"
				]
				]),
		]);
		$b->addType("open_access, not_require_another_lesson_completion, no_pass_conditions, published");

		$l = Lesson::create([
			"number" => 2,
			"course_id" => 7,
			"module_id" => 3,
			"name_ru" => "Второй урок",
			"structure_ru" => collect([
				"foo" => [
					"a" => "222222",
					"c" => "d"
				]
			]),
		]);
		$l->addType("open_access, require_another_lesson_completion, no_pass_conditions, published");
		$l->required_lesson_id = $b->id;
		$l->save();

		$l = Lesson::create([
			"number" => 3,
			"course_id" => 7,
			"module_id" => 3,
			"name_ru" => "Третий урок",
			"structure_ru" => collect([
				"foo" => [
					"a" => "333333",
					"c" => "d"
				]
			])
		]);
		$l->addType("open_access, not_require_another_lesson_completion, no_pass_conditions, published");
		

		$l = Lesson::create([
			"number" => 1,
			"course_id" => 8,
			"module_id" => 4,
			"name_ru" => "Первый урок курса с кондишенами",
			"structure_ru" => collect([
				"foo" => [
					"a" => "222222",
					"c" => "d"
				]
				]),
		]);
		$l->addType("open_access, not_require_another_lesson_completion, has_pass_conditions, published");
		$l->pass_conditions = collect([
			[
				"type" => "question",
				"name_ru" => "Название вопроса",
				"userValue" => [],
				"correctValue" => [
					"a"
				],
				"correct" => false,
				"options" => collect([
					[
						"name_ru" => 'Вариант 1',
						"value" => "a",
					],
					[
						"name_ru" => 'Вариант 2',
						"value" => "b",
					],
				]),
			],
			[
				"type" => "input",
				"userValue" => null,
				"correctValue" => "123",
				"correct" => false,
			],
			[
				"type" => "question",
				"name_ru" => "Название вопроса",
				"userValue" => [],
				"correctValue" => [
					"a","b"
				],
				"correct" => false,
				"options" => collect([
					[
						"name_ru" => 'Вариант 1',
						"value" => "a",
					],
					[
						"name_ru" => 'Вариант 2',
						"value" => "b",
					],
					[
						"name_ru" => 'Вариант 3',
						"value" => "c",
					]
				]),
			],
		]);
		$l->save();

		$l = Lesson::create([
			"number" => 2,
			"course_id" => 8,
			"module_id" => 4,
			"name_ru" => "Вторй урок без кондишенов",
			"structure_ru" => collect([
				"foo" => [
					"a" => "222222",
					"c" => "d"
				]
				]),
		]);
		$l->addType("open_access, not_require_another_lesson_completion, no_pass_conditions, published");


		$l = Lesson::create([
			"number" => 1,
			"course_id" => 6,
			"module_id" => 2,
			"name_ru" => "Первый",
			"structure_ru" => collect([
				"foo" => [
					"a" => "222222",
					"c" => "d"
				]
			]),
		]);
		$l->addType("open_access, not_require_another_lesson_completion, no_pass_conditions, published");

		$l = Lesson::create([
			"number" => 2,
			"course_id" => 6,
			"module_id" => 2,
			"name_ru" => "Второй тоже открытый",
			"structure_ru" => collect([
				"foo" => [
					"a" => "222222",
					"c" => "d"
				]
			]),
		]);
		$l->addType("open_access, not_require_another_lesson_completion, no_pass_conditions, published");

		$l = Lesson::create([
			"number" => 3,
			"course_id" => 6,
			"module_id" => 2,
			"name_ru" => "Третий уже закрытый",
			"structure_ru" => collect([
				"foo" => [
					"a" => "222222",
					"c" => "d"
				]
			]),
		]);
		$l->addType("paid_once, not_require_another_lesson_completion, no_pass_conditions, published");
    }
}
