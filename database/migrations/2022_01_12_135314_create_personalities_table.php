<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personalities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('i')->default(0);
            $table->string('n')->default(0);
            $table->string('f')->default(0);
            $table->string('s')->default(0);
            $table->string('t')->default(0);
            $table->string('p')->default(0);
            $table->string('e')->default(0);
            $table->string('j')->default(0);
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
        Schema::dropIfExists('personalities');
    }
}
