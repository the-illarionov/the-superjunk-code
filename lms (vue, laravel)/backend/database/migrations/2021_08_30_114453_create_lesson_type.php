<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLessonType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lesson_type', function (Blueprint $table) {
            $table->id();

			$table->foreignId('lesson_id')->constrained()->onDelete('cascade');
            $table->foreignId('type_id')->constrained()->onDelete('cascade');

			$table->unsignedBigInteger('required_lesson_id')->nullable();
            $table->foreign('required_lesson_id')->references('id')->on('lessons');

			$table->json("pass_conditions")->nullable();

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
        Schema::dropIfExists('lesson_type');
    }
}
