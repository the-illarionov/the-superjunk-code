<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Learning\Course;
use Illuminate\Support\Str;

class CourseSeeder extends Seeder
{
    public function run()
    {
        $programming1 = Course::create([
			"author_id" => 1,
			"school_id" => 1,
            "name_ru" => "Программирование, 1 курс",
			"name_en" => "Programming, 1 course",
            "info_ru" => collect([
				"image" => "blabla.jpg",
				"short_teaser" => "Короткое описание",
				"long_description" => "Большое описание"
			]),
			"info_en" => collect([
				"short_teaser" => "Short desc",
				"long_description" => "Long desc"
			]),
            "url" => 'programming-first-course',
        ]);
        $programming1->addType("teens, programming, published, sync, paid_subscription, closed_applications, visible");

        $programming2 = Course::create([
			"author_id" => 1,
			"school_id" => 1,
            "name_ru" => "Программирование, 2 курс",
			//"name_en" => "Programming, 2 course",
            "info_ru" => collect([
				"image" => "blabla.jpg",
				"short_teaser" => "Короткое описание",
				"long_description" => "Большое описание"
			]),
			"info_en" => collect([
				"short_teaser" => "Short desc",
				"long_description" => "Long desc"
			]),
            "url" => 'programming-second-course',
        ]);
        $programming2->addType("teens, programming, published, sync, paid_subscription, closed_applications, visible");

        $graphics1 = Course::create([
			"author_id" => 1,
			"school_id" => 1,
            "name_ru" => "Компьютерная графика, 1 курс",
			"name_en" => "Graphics, 1 course",
            "info_ru" => collect([
				"image" => "blabla.jpg",
				"short_teaser" => "Короткое описание",
				"long_description" => "Большое описание"
			]),
			"info_en" => collect([
				"short_teaser" => "Short desc",
				"long_description" => "Long desc"
			]),
            "url" => 'graphics-first-course',
        ]);
        $graphics1->addType("teens, graphics, published, sync, paid_subscription, closed_applications, visible");

        $graphics2 = Course::create([
			"author_id" => 1,
			"school_id" => 1,
            "name_ru" => "Компьютерная графика, 2 курс",
			"name_en" => "Graphics, 2 course",
            "info_ru" => collect([
				"image" => "blabla.jpg",
				"short_teaser" => "Короткое описание",
				"long_description" => "Большое описание"
			]),
			"info_en" => collect([
				"short_teaser" => "Short desc",
				"long_description" => "Long desc"
			]),
            "url" => 'graphics-second-course',
        ]);
        $graphics2->addType("teens, graphics, published, sync, paid_subscription, closed_applications, visible");

		$intensiv = Course::create([
			"author_id" => 1,
			"school_id" => 1,
            "name_ru" => "Интенсив",
			"name_en" => "Intensiv",
            "info_ru" => collect([
				"image" => "blabla.jpg",
				"short_teaser" => "Короткое описание",
				"long_description" => "Большое описание"
			]),
			"info_en" => collect([
				"short_teaser" => "Short desc",
				"long_description" => "Long desc"
			]),
            "url" => 'intensiv',
        ]);
        $intensiv->addType("teens, programming, graphics, published, sync, paid_once, open_applications, invisible");
        
        $marketplace = Course::create([
			"author_id" => 2,
            "name_ru" => "Платный курс маркетплейса",
            "url" => "market-programming-paid",
        ]);
        $marketplace->addType('market, programming, async, published, paid_once, open_applications, visible');

        $marketplace = Course::create([
			"author_id" => 2,
            "name_ru" => "Бесплатный курс маркетплейса",
            "url" => "market-graphics-free",
        ]);
        $marketplace->addType('market, graphics, async, open_access, published, open_applications, visible');

		$marketplace = Course::create([
			"author_id" => 2,
            "name_ru" => "Бесплатный курс маркетплейса с кондишенами",
            "url" => "market-graphics-free-conditions",
        ]);
        $marketplace->addType('market, graphics, async, open_access, published, open_applications, visible');

		/*
		$marketplace = Course::firstOrCreate([
            "name_ru" => "Платный курс маркетплейса черновик",
            "options" => collect([
                "lessonVisibility" => 0,
            ]),
            "url" => "market-programming-paid-unpublished",
        ]);
        $marketplace->addType('market, programming, async, draft, paid_once, open_applications');

        $marketplace = Course::firstOrCreate([
            "name_ru" => "Бесплатный курс маркетплейса в ревью",
            "options" => collect([
                "lessonVisibility" => 0,
            ]),
            "url" => "market-graphics-free-reviewed",
        ]);
        $marketplace->addType('market, graphics, async, open_access, in_review, open_applications');
		*/
    }
}
