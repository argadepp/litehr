<?php

use App\Http\Controllers\Employee\DocumentController;
use App\Http\Controllers\Employee\EmployeeController;
use App\Http\Controllers\Employee\EmployeeImportController;
use App\Http\Controllers\Employee\ExperienceController;
use App\Http\Controllers\Employee\PhotoController;
use App\Http\Controllers\Employee\QualificationController;
use App\Http\Controllers\Employee\RecordController;
use App\Http\Controllers\Employee\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('permission:employee:read')->group(function () {
    Route::post('employees/{employee}/user/confirm', [UserController::class, 'confirm'])->name('employees.confirmUser');
    Route::get('employees/{employee}/user', [UserController::class, 'index'])->name('employees.getUser');
    Route::post('employees/{employee}/user', [UserController::class, 'create'])->name('employees.createUser');
    Route::patch('employees/{employee}/user', [UserController::class, 'update'])->name('employees.updateUser');

    Route::post('employees/{employee}/photo', [PhotoController::class, 'upload'])
        ->name('employees.uploadPhoto');

    Route::delete('employees/{employee}/photo', [PhotoController::class, 'remove'])
        ->name('employees.removePhoto');

    Route::get('employees/{employee}/records/pre-requisite', [RecordController::class, 'preRequisite'])->name('employees.records.preRequisite');
    Route::apiResource('employees.records', RecordController::class)->except(['create']);

    Route::get('employees/{employee}/qualifications/pre-requisite', [QualificationController::class, 'preRequisite'])->name('employees.qualifications.preRequisite');
    Route::apiResource('employees.qualifications', QualificationController::class);

    Route::get('employees/{employee}/documents/pre-requisite', [DocumentController::class, 'preRequisite'])->name('employees.documents.preRequisite');
    Route::apiResource('employees.documents', DocumentController::class);

    Route::get('employees/{employee}/experiences/pre-requisite', [ExperienceController::class, 'preRequisite'])->name('employees.experiences.preRequisite');
    Route::apiResource('employees.experiences', ExperienceController::class);

    Route::get('employees/pre-requisite', [EmployeeController::class, 'preRequisite'])->name('employees.preRequisite');
    Route::apiResource('employees', EmployeeController::class);
});
