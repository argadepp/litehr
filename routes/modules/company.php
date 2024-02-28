<?php

use App\Http\Controllers\Company\BranchController;
use App\Http\Controllers\Company\DepartmentController;
use App\Http\Controllers\Company\DesignationController;
use Illuminate\Support\Facades\Route;

// Company Routes
Route::name('company.')->prefix('company')->group(function () {
    Route::get('departments/pre-requisite', [DepartmentController::class, 'preRequisite'])->name('departments.preRequisite');
    Route::apiResource('departments', DepartmentController::class);

    Route::get('designations/pre-requisite', [DesignationController::class, 'preRequisite'])->name('designations.preRequisite');
    Route::apiResource('designations', DesignationController::class);

    Route::get('branches/pre-requisite', [BranchController::class, 'preRequisite'])->name('branches.preRequisite');
    Route::apiResource('branches', BranchController::class);
});
