<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->id();

			$table->foreignId('course_id')->constrained()->onDelete('cascade');
			$table->tinyInteger('number');
			$table->string("name_ru")->nullable();
			$table->string("description_ru")->nullable();
			$table->string("name_en")->nullable();
			$table->string("description_en")->nullable();

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
        Schema::dropIfExists('modules');
    }
}
