<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('body_age')->default(0);
            $table->string('age')->default(0);
            $table->string('gender')->nullable();
            $table->string('weight')->default(0);
            $table->string('height')->default(0);
            $table->string('cest')->default(0);
            $table->string('waist')->default(0);
            $table->string('legs')->default(0);
            $table->string('body_fat')->default(0);
            $table->string('target_body_fat')->nullable();
            $table->string('bmi')->default(0);
            $table->string('aerobic_fitness')->default(0);
            $table->string('muscular_strength')->default(0);
            $table->string('endurnce')->default(0);
            $table->string('flexibility')->default(0);
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
        Schema::dropIfExists('profiles');
    }
}
