<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('work')->default(1);
            $table->string('eating')->default(0);
            $table->string('sleep')->default(0);
            $table->string('driving')->default(0);
            $table->string('networking')->default(0);
            $table->string('materila_art')->default(0);
            $table->string('meetings')->default(0);
            $table->string('family_actv')->default(0);
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
        Schema::dropIfExists('activities');
    }
}
