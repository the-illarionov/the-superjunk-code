<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEditorsOfCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('editors_of_courses', function (Blueprint $table) {
            $table->id();

			$table->unsignedBigInteger('editor_id');
            $table->foreign('editor_id')->references('id')->on('users');

			$table->foreignId('course_id')->constrained();

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
        Schema::dropIfExists('author_of_courses');
    }
}
