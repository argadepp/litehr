<?php

namespace App\Models\Payroll;

use App\Concerns\HasFilter;
use App\Concerns\HasMeta;
use App\Concerns\HasUuid;
use App\Enums\Payroll\PayHeadType;
use App\Models\Attendance\Type as AttendanceType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class SalaryTemplateRecord extends Model
{
    use HasFactory, HasFilter, HasUuid, HasMeta, LogsActivity;

    protected $guarded = [];

    protected $primaryKey = 'id';

    protected $table = 'salary_template_records';

    protected $casts = [
        'type' => PayHeadType::class,
        'meta' => 'array',
    ];

    public function template(): BelongsTo
    {
        return $this->belongsTo(SalaryTemplate::class);
    }

    public function payHead(): BelongsTo
    {
        return $this->belongsTo(PayHead::class);
    }

    public function attendanceType(): BelongsTo
    {
        return $this->belongsTo(AttendanceType::class);
    }

    public function getEnableUserInputAttribute(): bool
    {
        if (in_array($this->type->value, PayHeadType::userInput())) {
            return true;
        }

        return false;
    }

    public function getIsUserDefinedAttribute(): bool
    {
        if ($this->type == PayHeadType::USER_DEFINED->value) {
            return true;
        }

        return false;
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('salary_template')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }
}
