<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();

            $table->foreignId('school_id')->nullable()->constrained();

			$table->unsignedBigInteger('author_id');
            $table->foreign('author_id')->references('id')->on('users');

            $table->string("url")->unique();

            $table->string("name_ru")->nullable();
			$table->string("name_en")->nullable();

            $table->json("info_ru")->nullable();
			$table->json("info_en")->nullable();

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
        Schema::dropIfExists('courses');
    }
}
