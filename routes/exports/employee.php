<?php

use App\Http\Controllers\Employee\DocumentController;
use App\Http\Controllers\Employee\DocumentExportController;
use App\Http\Controllers\Employee\EmployeeExportController;
use App\Http\Controllers\Employee\ExperienceController;
use App\Http\Controllers\Employee\ExperienceExportController;
use App\Http\Controllers\Employee\QualificationController;
use App\Http\Controllers\Employee\QualificationExportController;
use App\Http\Controllers\Employee\RecordController;
use App\Http\Controllers\Employee\RecordExportController;
use Illuminate\Support\Facades\Route;

Route::prefix('employees')->group(function () {
    Route::get('{employee}/records/{record}/media/{uuid}', [RecordController::class, 'downloadMedia']);
    Route::get('{employee}/qualifications/{qualification}/media/{uuid}', [QualificationController::class, 'downloadMedia']);
    Route::get('{employee}/documents/{document}/media/{uuid}', [DocumentController::class, 'downloadMedia']);
    Route::get('{employee}/experiences/{experience}/media/{uuid}', [ExperienceController::class, 'downloadMedia']);

    Route::get('{employee}/records/export', RecordExportController::class)->middleware('permission:employment-record:manage')->name('employees.records.export');
    Route::get('{employee}/qualifications/export', QualificationExportController::class)->middleware('permission:employee:export')->name('employees.qualifications.export');
    Route::get('{employee}/documents/export', DocumentExportController::class)->middleware('permission:employee:export')->name('employees.documents.export');
    Route::get('{employee}/experiences/export', ExperienceExportController::class)->middleware('permission:employee:export')->name('employees.experiences.export');

    Route::get('export', EmployeeExportController::class)->middleware('permission:employee:export')->name('employees.export');
});
