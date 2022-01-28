<?php

namespace App\Models;

use App\Mail\WelcomeMail;
use App\Notifications\PasswordReset;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Mail;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public static function boot()
    {
        parent::boot();
        static::created(function ($model) {
            $model->profile()->create([]);
            Mail::to($model->email)->send(new WelcomeMail());
        });

        static::updated(function ($model) {
            $model->profile()->update([
                'age' => $model->age,
                'gender' => $model->gender,
            ]);
        });
    }
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new PasswordReset($token));
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function wellness()
    {
        return $this->hasOne(Wellness::class);
    }
    public function personality()
    {
        return $this->belongsTo(Personality::class);
    }
    public function indicators()
    {
        return $this->belongsToMany(Indicator::class)->withPivot(['pourcentage']);
    }
    public function indicator_user()
    {
        return $this->hasMany(IndicatorUser::class);
    }
    public function discs()
    {
        return $this->hasMany(Disc::class);
    }
    public function goals()
    {
        return $this->hasMany(Goal::class);
    }
    public function influencers()
    {
        return $this->hasMany(Influencer::class);
    }
    public function activities()
    {
        return $this->hasMany(Activity::class)->where('type', "activity");
    }
    public function people()
    {
        return $this->hasMany(Activity::class)->where('type', "people");
    }
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
