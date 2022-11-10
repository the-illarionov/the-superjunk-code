<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Roles\OwnerOfSchool;

class OwnerOfSchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OwnerOfSchool::create([
			"school_id" => 1,
			"owner_id" => 1,
		]);
    }
}
