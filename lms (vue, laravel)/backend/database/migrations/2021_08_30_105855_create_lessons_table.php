<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLessonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();

			$table->foreignId('module_id')->constrained()->onDelete('cascade');
			$table->foreignId('course_id')->constrained()->onDelete('cascade');

			$table->smallInteger('number');

			$table->string("name_ru")->nullable();
			$table->json("structure_ru")->nullable();

			$table->string("name_en")->nullable();
			$table->json("structure_en")->nullable();

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
        Schema::dropIfExists('lessons');
    }
}
