<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Learning\School;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        School::create([
			'url' => 'illarionov',
			'name_ru' => 'IT-школа Алексея Илларионова',
			'name_en' => 'Illarionov IT School',
			'timezone' => 'Asia/Yakutsk',
		]);
		
    }
}
