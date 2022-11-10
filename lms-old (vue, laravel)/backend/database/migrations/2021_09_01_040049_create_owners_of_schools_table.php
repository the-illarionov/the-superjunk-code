<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOwnersOfSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('owners_of_schools', function (Blueprint $table) {
            $table->id();

			$table->unsignedBigInteger('owner_id');
            $table->foreign('owner_id')->references('id')->on('users');

			$table->foreignId('school_id')->constrained();

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
        Schema::dropIfExists('owner_of_schools');
    }
}
