<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$a = User::firstOrCreate([
			'email' => 'lavrikanec@gmail.com',
		], [
			'name' => 'Alexey Illarionov',
			'nickname' => 'superalesha',
			'birthdate_year' => '1988',
		]);
		
        User::firstOrCreate([
            'email' => 'teacher',
            'name' => 'teacher',
            'nickname' => 'teacher',
        ]);
		/*

		User::firstOrCreate([
            'email' => 'student',
            'name' => 'student',
            'nickname' => 'student',
        ]);
		*/
    }
}
