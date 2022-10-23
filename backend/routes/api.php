<?php

use App\Http\Controllers\Customers\CustomersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/customers', [CustomersController::class, 'index']);
Route::get('/customers/{customers}', [CustomersController::class, 'detail']);
Route::post('/customers/store', [CustomersController::class, 'store'])->middleware(['auth:sanctum']);
Route::put('/customers/{customers}', [CustomersController::class, 'update'])->middleware(['auth:sanctum']);
Route::delete('/customers/{customers}', [CustomersController::class, 'delete'])->middleware(['auth:sanctum']);
