<?php

use App\Http\Controllers\Attendance\AttendanceController;
use App\Http\Controllers\Attendance\TypeController as AttendanceTypeController;
use Illuminate\Support\Facades\Route;

// Attendance Routes
Route::prefix('attendance')->group(function () {
    Route::get('types/pre-requisite', [AttendanceTypeController::class, 'preRequisite'])->middleware('permission:attendance:config')->name('attendanceTypes.preRequisite');
    Route::apiResource('types', AttendanceTypeController::class)->parameters(['types' => 'attendance_type'])->middleware('permission:attendance:config')->names('attendanceTypes');

    Route::get('pre-requisite', [AttendanceController::class, 'preRequisite'])->name('attendances.preRequisite');
    Route::get('list', [AttendanceController::class, 'list'])->name('attendances.list');
    Route::get('fetch', [AttendanceController::class, 'fetch'])->name('attendances.fetch');
    Route::post('mark', [AttendanceController::class, 'mark'])->name('attendances.mark');
});
