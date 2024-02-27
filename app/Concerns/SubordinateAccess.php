<?php

namespace App\Concerns;

use App\Models\Company\Branch;
use App\Models\Company\Designation;
use App\Models\Employee\Employee;
use Illuminate\Support\Collection;

trait SubordinateAccess
{
    public function accessibleDesignationRules(Employee $employee): bool|array
    {
        return Designation::byTeam()->whereNotNull('parent_id')->pluck('id')->all();
    }

    public function accessibleBranchRules(Employee $employee): bool|array
    {
        return Branch::byTeam()->whereNotNull('parent_id')->pluck('id')->all();
    }

    public function getAccessibleEmployee(bool $self = true, string $date = null)
    {
        if (! $date) {
            $date = today()->toDateString();
        }

        $employee = Employee::withAuthRecordId();

        $query = Employee::select('employees.id')
            ->filterRecord($date);

        return $query->get()->pluck('id')->all();
    }

    public function isAccessibleEmployee(Employee $employee, bool $self = true): bool
    {
        if (auth()->user()->is_default || auth()->user()->hasRole('admin')) {
            return true;
        }

        if ($employee->is_default) {
            return false;
        }

        return true;
    }

    public function areAccessibleEmployees(Collection $employees): bool
    {
        if (auth()->user()->is_default || auth()->user()->hasRole('admin')) {
            return true;
        }

        return true;
    }

    public function validateAccessibleEmployee(Employee $employee, bool $self = true)
    {
    }

    public function validateAccessibleEmployees(Collection $employees)
    {
    }

    public function validateEmployeeJoiningDate(Employee $employee, string $date, string $module = '', string $field = 'message')
    {
    }

    public function validateEmployeeLeavingDate(Employee $employee, string $date, string $module = '', string $field = 'message')
    {
    }
}
