<?php

namespace App\Models\Employee;

use App\Casts\DateCast;
use App\Concerns\HasFilter;
use App\Concerns\HasMeta;
use App\Concerns\HasUuid;
use App\Helpers\CalHelper;
use App\Models\Account;
use App\Models\Contact;
use App\Scopes\Employee\EmployeeScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Employee extends Model
{
    use HasFactory, HasFilter, HasUuid, HasMeta, EmployeeScope, LogsActivity;

    protected $guarded = [];

    protected $primaryKey = 'id';

    protected $table = 'employees';

    protected $casts = [
        'joining_date' => DateCast::class,
        'leaving_date' => DateCast::class,
        'meta' => 'array',
    ];

    protected $with = [];

    public function getIsDefaultAttribute()
    {
        return $this->getMeta('is_default') ? true : false;
    }

    public function contact(): BelongsTo
    {
        return $this->belongsTo(Contact::class);
    }

    public function accounts(): MorphMany
    {
        return $this->morphMany(Account::class, 'accountable');
    }

    public function records(): HasMany
    {
        return $this->hasMany(Record::class);
    }

    public function qualifications(): HasMany
    {
        return $this->hasMany(Qualification::class, 'employee_id');
    }

    public function lastRecord(): BelongsTo
    {
        return $this->belongsTo(Record::class);
    }

    public function scopeByTeam(Builder $query)
    {
        $query->whereHas('contact', function ($q) {
            $q->whereTeamId(session('team_id'));
        });
    }

    public function getPeriodAttribute(): string
    {
        return CalHelper::getPeriod($this->joining_date->value, $this->leaving_date->value);
    }

    public function getDurationAttribute(): string
    {
        return CalHelper::getDuration($this->joining_date->value, $this->leaving_date->value, 'day');
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('employee')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }
}
