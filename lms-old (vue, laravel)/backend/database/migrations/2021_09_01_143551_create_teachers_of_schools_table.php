<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeachersOfSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers_of_schools', function (Blueprint $table) {
            $table->id();

			$table->unsignedBigInteger('teacher_id');
            $table->foreign('teacher_id')->references('id')->on('users');

			$table->foreignId('school_id')->constrained();

			$table->json("meta")->nullable(); // approved Тут

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
        Schema::dropIfExists('teacher_of_schools');
    }
}
