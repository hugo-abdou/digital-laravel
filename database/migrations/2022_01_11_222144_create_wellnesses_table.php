<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWellnessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wellnesses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('activity')->default(0);
            $table->string('inactivity')->default(0);
            $table->string('wellness')->default(0);
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
        Schema::dropIfExists('overal_progress');
    }
}
