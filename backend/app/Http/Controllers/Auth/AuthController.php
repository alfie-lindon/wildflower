<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use function Pest\Laravel\json;

class AuthController extends Controller
{
    public function index()
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

    public function register(RegisterRequest $request)
    {
        try{
            // Create the user, store in DB
            $validated = $request->validated();
            $user = User::create([
                'name' => $validated['name'],
                'phone' => $validated['phone'],
                'email' => $validated['email'],
                'password' => Hash::make($validated['password'])
            ]);
            // Login the user
            Auth::login($user);
            // Return response
            return response()->json([
                'rows' => $user,
                'message' => "User created."
            ],201);

        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'line'    => $e->getLine(),
                'file'    => $e->getFile(),
            ], 500);
        }
    }

    public function login(LoginRequest $request)
    {
        try{
            $validated = $request->validated();

            if(!Auth::attempt($validated)){
                return response()->json([
                    'message' => 'Invalid Credentials.'
                ], 401);
            }

            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'user' => $user,
                'token' => $token
            ],200);
        }catch(\Exception $e){
            return response()->json([
                // 'success' => false,
                // 'message' => 'An unexpected error occurred.'
                'success' => false,
                'message' => $e->getMessage(),
                'line'    => $e->getLine(),
                'file'    => $e->getFile(),
            ], 500);
        }
    }

    public function logout(Request $request)
    {
        try{
            //This logout method is session based guard and will not work with sanctum
            // We can use this if our routes does not use sanctum
            // Auth::logout(); 

            // Alternative when using sanctum

            // **$request->user()** — gets the currently authenticated user via the Bearer token
            // **->currentAccessToken()** — gets the specific token used in this request
            // **->delete()** — removes it from the personal_access_tokens table in the database

            $request->user()->currentAccessToken()->delete();

            return response()->json([
                'message' => 'User logged out.'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                // 'success' => false,
                // 'message' => 'An unexpected error occurred.'
                'success' => false,
                'message' => $e->getMessage(),
                'line'    => $e->getLine(),
                'file'    => $e->getFile(),
            ], 500);
        }
    }
}
