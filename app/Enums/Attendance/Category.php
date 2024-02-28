<?php

namespace App\Enums\Attendance;

use App\Concerns\HasEnum;
use App\Contracts\HasColor;

enum Category: string implements HasColor
{
    use HasEnum;

    case PRESENT = 'present';
    case HOLIDAY = 'holiday';
    case ABSENT = 'absent';
    case HALF_DAY = 'half_day';

    public static function translation(): string
    {
        return 'attendance.categories.';
    }

    public function color(): string
    {
        return match ($this) {
            self::PRESENT => 'success',
            self::HOLIDAY => 'info',
            self::ABSENT => 'danger',
            self::HALF_DAY => 'warning',
            default => 'secondary'
        };
    }
}
