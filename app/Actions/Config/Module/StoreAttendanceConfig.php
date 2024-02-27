<?php

namespace App\Actions\Config\Module;

class StoreAttendanceConfig
{
    public static function handle(): array
    {
        $input = request()->validate([
            'allow_employee_clock_in_out' => 'sometimes|boolean',
            'late_grace_period' => 'sometimes|numeric|min:0|max:60',
            'early_leaving_grace_period' => 'sometimes|numeric|min:0|max:60',
            'present_grace_period' => 'sometimes|numeric|min:0|max:120',
        ], [], []);

        return $input;
    }
}
