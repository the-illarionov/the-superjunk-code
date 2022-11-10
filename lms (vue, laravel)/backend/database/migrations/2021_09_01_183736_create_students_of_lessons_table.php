<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsOfLessonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students_of_lessons', function (Blueprint $table) {
            $table->id();

			$table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('users')->onDelete('cascade');

			$table->foreignId('lesson_id')->constrained()->onDelete('cascade');
			$table->foreignId('course_id')->constrained()->onDelete('cascade');

			$table->boolean('passed')->nullable();

			$table->json('pass_conditions')->nullable();

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
        Schema::dropIfExists('viewed_lessons');
    }
}
