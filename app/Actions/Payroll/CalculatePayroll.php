<?php

namespace App\Actions\Payroll;

use App\Models\Payroll\SalaryStructure;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;

class CalculatePayroll
{
    public function execute(int $employeeId, string $startDate, string $endDate, SalaryStructure $salaryStructure, Collection $attendanceTypes): array
    {
        $attendance = (new GetAttendanceBetweenPeriod)->execute(
            employeeId: $employeeId,
            startDate: $startDate,
            endDate: $endDate,
            attendanceTypes: $attendanceTypes
        );

        $attendanceSummary = (new GetAttendanceSummary)->execute(
            attendance: $attendance,
            attendanceTypes: $attendanceTypes
        );

        $present = (new CalculatePresent)->execute(
            attendance: $attendance,
            attendanceTypes: $attendanceTypes
        );

        $records = (new GetFlatRatePayHeadRecord)->execute(
            salaryStructure: $salaryStructure,
            startDate: $startDate,
            endDate: $endDate
        );

        $records = (new GetAttendanceBasedPayHeadRecord)->execute(
            salaryStructure: $salaryStructure,
            present: $present,
            records: $records
        );

        $records = (new GetUserDefinedPayHeadRecord)->execute(
            salaryStructure: $salaryStructure,
            records: $records
        );

        return [$attendanceSummary, $records];
    }
}
