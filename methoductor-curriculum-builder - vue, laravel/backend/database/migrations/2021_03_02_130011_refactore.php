<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Refactore extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn('slug');
            $table->dropColumn('subs0_text');
            $table->dropColumn('subs1_text');

            $table->string('name')->nullable()->change();
            $table->json('structure')->nullable()->change();
        });

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('send_nudes');
            $table->dropColumn('subscription');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
