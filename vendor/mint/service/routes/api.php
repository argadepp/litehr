<?php

use Illuminate\Support\Facades\Route;
use Mint\Service\Http\Controllers\InstallController;

Route::prefix('api/v1')->group(function () {
    Route::get('install/pre-requisite', [InstallController::class, 'preRequisite'])->name('install.preRequisite');
    Route::post('install/validate', [InstallController::class, 'store'])->name('install.validate');
    Route::post('install', [InstallController::class, 'store'])->name('install.store');
});