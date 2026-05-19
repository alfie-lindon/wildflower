<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Auth;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Product Routes (Grouped)
Route::prefix('product')->controller(ProductController::class)->group(function (){
    Route::get('/index', 'index');
    Route::get('/getProductById/{product}', 'getProductById');
    Route::post('/store', 'store');
    Route::put('/update/{product}');
    Route::post('/destroy/{product?}', 'destroy'); //? to make binding optional so id and ids can use this enpoint
});

// Route::get('/index', [ProductController::class, 'index']);
// Route::get('/getProductById/{product}', [ProductController::class, 'getProductById']);
// Route::post('/store', [ProductController::class, 'store']);
// Route::put('/update/{product}', [ProductController::class, 'update']);
// Route::post('/destroy/{product}', [ProductController::class, 'destroy']);

// Admin Routes
Route::middleware('auth:sanctum', 'admin')->group(function(){
    Route::get('/admin/users', [AdminController::class, 'getUsers']);
});

// User Routes
Route::middleware('auth:sanctum')->group(function(){
    // Fetch User
    Route::get('/user', function(){
        return response()->json(Auth::user());
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});