<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsOfCourses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students_of_courses', function (Blueprint $table) {
            $table->id();

			$table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('users');

			$table->foreignId('course_id')->constrained();

			$table->tinyInteger("progress")->default(0);

			$table->tinyInteger("discount")->nullable();

			$table->boolean("paid")->nullable();

			//$table->json("meta");

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
        Schema::dropIfExists('students_of_courses');
    }
}
