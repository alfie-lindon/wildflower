<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getUsers()
    {
        try{
            // Get all users
            User::all();
            // Return response
            return response()->json([
                'message' => "Data fetched."
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'An unexpected error occurred.'
            ], 500);
        }
    }
}
