<?php

use App\Http\Controllers\Calendar\HolidayExportController;
use Illuminate\Support\Facades\Route;

Route::name('calendar.')->prefix('company')->group(function () {
    Route::get('holidays/export', HolidayExportController::class)->middleware('permission:holiday:export')->name('holidays.export');
});
