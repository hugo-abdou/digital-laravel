<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('hasband')->default(1);
            $table->string('chidlrens')->default(0);
            $table->string('gloria')->default(0);
            $table->string('self_working')->default(0);
            $table->string('self')->default(0);
            $table->string('boutique_owner')->default(0);
            $table->string('other')->default(0);
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
        Schema::dropIfExists('people');
    }
}
