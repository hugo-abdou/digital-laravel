<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalitiesTable extends Migration
{

    //Personality  |        |        |        |       |
    // INFP         | Text 1 | text 2 | Text 3 |text 4 | text 5
    // ENFP         | Text 1 | text 2 | Text 3 |text 4 | text 5

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personalities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('definition');
            $table->text('workplace_attributes');
            $table->text('interpersonal_attributes');
            $table->text('strength');
            $table->text('weaknesses');
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
