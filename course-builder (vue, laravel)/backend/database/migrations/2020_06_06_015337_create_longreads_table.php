<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLongreadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('longreads', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->text('longread_structure');
            $table->text('longread_options');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('folder_id');
            $table->string('slug')->unique();
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->foreign('folder_id')
                ->references('id')
                ->on('folders')
                ->onDelete('cascade');
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('longreads');
    }
}
