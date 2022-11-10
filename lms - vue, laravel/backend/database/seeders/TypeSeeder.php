<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Type;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		// MODES
        Type::firstOrCreate([ 
			"slug" => "sync",
			"category" => "modes",
			"info_ru" => collect([
				"name" => "Синхронный",
			]),
			"info_en" => collect([
				"name" => "Synchronous",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "async",
			"category" => "modes",
			"info_ru" => collect([
				"name" => "Асинхронный",
			]),
			"info_en" => collect([
				"name" => "Asynchronous",
			]),
			"single" => true,
		]);



		// APPLICATIONS
        Type::firstOrCreate([ 
			"slug" => "open_applications",
			"category" => "applications",
			"info_ru" => collect([
				"name" => "Принимает заявки",
			]),
			"info_en" => collect([
				"name" => "Open applications",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "closed_applications",
			"category" => "applications",
			"info_ru" => collect([
				"name" => "Не принимает заявки",
			]),
			"info_en" => collect([
				"name" => "Closed for applications",
			]),
			"single" => true,
		]);



		// Если указано для курса, то просто говорит о том, что уроки внутри друг за другом идут, это не говорит о завсимости от курса. Если хочется сделатьзависимость от курса, то в качестве первого урока требования надо выставить последний урок того курса
		Type::firstOrCreate([ 
			"slug" => "require_another_lesson_completion",
			"category" => "lock",
			"info_ru" => collect([
				"name" => "Требует завершения другого урока",
			]),
			"info_en" => collect([
				"name" => "Require completion",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "not_require_another_lesson_completion",
			"category" => "lock",
			"info_ru" => collect([
				"name" => "Не требует завершения",
			]),
			"info_en" => collect([
				"name" => "Not require completion",
			]),
			"single" => true,
		]);


		// VISIBILITY
		// сам курс доступен по ссылке, но его нет в общем списке и при поиске не выходит
		Type::firstOrCreate([ 
			"slug" => "visible",
			"category" => "visibility",
			"info_ru" => collect([
				"name" => "Доступен в поиске",
			]),
			"info_en" => collect([
				"name" => "Visible in search",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "invisible",
			"category" => "visibility",
			"info_ru" => collect([
				"name" => "Доступен только по ссылке",
			]),
			"info_en" => collect([
				"name" => "Available only on direct-link",
			]),
			"single" => true,
		]);



		// PASS
		Type::firstOrCreate([ 
			"slug" => "has_pass_conditions",
			"category" => "pass_conditions",
			"info_ru" => collect([
				"name" => "Есть условия для прохождения",
			]),
			"info_en" => collect([
				"name" => "Has completion conditions",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "no_pass_conditions",
			"category" => "pass_conditions",
			"info_ru" => collect([
				"name" => "Нет условий для выполнения",
			]),
			"info_en" => collect([
				"name" => "Dont have completion conditions",
			]),
			"single" => true,
		]);



        // SALES
        Type::firstOrCreate([ 
			"slug" => "open_access",
			"category" => "sales",
			"info_ru" => collect([
				"name" => "Бесплатный",
			]),
			"info_en" => collect([
				"name" => "Free",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "paid_once",
			"category" => "sales",
			"info_ru" => collect([
				"name" => "Покупаемый за раз",
			]),
			"info_en" => collect([
				"name" => "Paid once",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "paid_subscription",
			"category" => "sales",
			"info_ru" => collect([
				"name" => "Покупаемый по подписке",
			]),
			"info_en" => collect([
				"name" => "Paid by subscription",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "paid_by_parts",
			"category" => "sales",
			"info_ru" => collect([
				"name" => "Покупаемый по частям",
			]),
			"info_en" => collect([
				"name" => "Paid by parts",
			]),
			"single" => true,
		]);



		// STATES
		Type::firstOrCreate([ 
			"slug" => "draft",
			"category" => "state",
			"info_ru" => collect([
				"name" => "Черновик",
			]),
			"info_en" => collect([
				"name" => "Draft",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "in_review",
			"category" => "state",
			"info_ru" => collect([
				"name" => "На рассмотрении",
			]),
			"info_en" => collect([
				"name" => "In review",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "published",
			"category" => "state",
			"info_ru" => collect([
				"name" => "Опубликованный",
			]),
			"info_en" => collect([
				"name" => "Published",
			]),
			"single" => true,
		]);



		// TYPES
		// Управляет фильтром для запроса
		Type::firstOrCreate([ 
			"slug" => "teens",
			"category" => "category",
			"info_ru" => collect([
				"name" => "Для подростков",
			]),
			"info_en" => collect([
				"name" => "For teens",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "market",
			"category" => "category",
			"info_ru" => collect([
				"name" => "Для маркетплейса",
			]),
			"info_en" => collect([
				"name" => "For marketplace",
			]),
			"single" => true,
		]);

		Type::firstOrCreate([ 
			"slug" => "adults",
			"category" => "category",
			"info_ru" => collect([
				"name" => "Для взрослых",
			]),
			"info_en" => collect([
				"name" => "For adults",
			]),
			"single" => true,
		]);

		

		// TAGS
		// они по сути нужны только для поиска
		Type::firstOrCreate([ 
			"slug" => "programming",
			"category" => "tag",
			"info_ru" => collect([
				"name" => "Программирование",
			]),
			"info_en" => collect([
				"name" => "Programming",
			]),
		]);

        Type::firstOrCreate([ 
			"slug" => "graphics",
			"category" => "tag",
			"info_ru" => collect([
				"name" => "Компьютерная графика",
			]),
			"info_en" => collect([
				"name" => "Graphics",
			]),
		]);
		// для медиа и студий просто свои tags будут
    }
}
