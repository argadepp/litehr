<?php

namespace Database\Seeders;

use Database\Seeders\Attendance\AttendanceSeeder;
use Database\Seeders\Attendance\RecordSeeder as AttendanceRecordSeeder;
use Database\Seeders\Attendance\TypeSeeder as AttendanceTypeSeeder;
use Database\Seeders\Calendar\HolidaySeeder;
use Database\Seeders\Company\BranchSeeder;
use Database\Seeders\Company\DepartmentSeeder;
use Database\Seeders\Company\DesignationSeeder;
use Database\Seeders\Employee\DefaultEmployeeSeeder;
use Database\Seeders\Employee\EmployeeSeeder;
use Database\Seeders\Leave\AllocationSeeder as LeaveAllocationSeeder;
use Database\Seeders\Leave\RequestSeeder as LeaveRequestSeeder;
use Database\Seeders\Leave\TypeSeeder as LeaveTypeSeeder;
use Database\Seeders\Payroll\PayHeadSeeder;
use Database\Seeders\Payroll\PayrollSeeder;
use Database\Seeders\Payroll\SalaryStructureSeeder;
use Database\Seeders\Payroll\SalaryTemplateSeeder;
use Database\Seeders\Utility\TodoSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $this->call(TeamSeeder::class);

        $this->call(ConfigSeeder::class);

        $this->call(RoleSeeder::class);
        $this->call(PermissionSeeder::class);
        $this->call(AssignPermissionSeeder::class);
        $this->call(MailTemplateSeeder::class);

        // Dummy data
        $this->call(OptionSeeder::class);

        $this->call(DepartmentSeeder::class);
        $this->call(DesignationSeeder::class);
        $this->call(BranchSeeder::class);

        $this->call(DefaultContactSeeder::class);
        $this->call(ContactSeeder::class);
        $this->call(DefaultEmployeeSeeder::class);
        $this->call(EmployeeSeeder::class);

        $this->call(LeaveTypeSeeder::class);
        $this->call(LeaveAllocationSeeder::class);
        $this->call(LeaveRequestSeeder::class);

        $this->call(AttendanceTypeSeeder::class);

        $this->call(HolidaySeeder::class);
        $this->call(AttendanceSeeder::class);
        $this->call(AttendanceRecordSeeder::class);

        $this->call(PayHeadSeeder::class);
        $this->call(SalaryTemplateSeeder::class);
        $this->call(SalaryStructureSeeder::class);
        $this->call(PayrollSeeder::class);

        $this->call(UserSeeder::class);
        $this->call(TodoSeeder::class);
    }
}
