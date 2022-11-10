<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsOfSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins_of_schools', function (Blueprint $table) {
            $table->id();

			$table->unsignedBigInteger('admin_id');
            $table->foreign('admin_id')->references('id')->on('users');

			$table->foreignId('school_id')->constrained();

			//$table->json("meta")->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin_of_schools');
    }
}
