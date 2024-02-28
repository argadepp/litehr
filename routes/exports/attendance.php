<?php

use App\Http\Controllers\Attendance\AttendanceExportController;
use App\Http\Controllers\Attendance\TypeExportController as AttendanceTypeExportController;
use Illuminate\Support\Facades\Route;

Route::get('attendance/types/export', AttendanceTypeExportController::class)->middleware('permission:attendance:config')->name('attendanceTypes.export');
Route::get('attendance/export', AttendanceExportController::class)->middleware('permission:attendance:export')->name('attendances.export');
