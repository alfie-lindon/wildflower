<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::beginTransaction();
        try{
            User::create([
                'name' => 'Admin',
                'phone' => null,
                'email' => 'admin@wildflower.com',
                'password' => Hash::make('Admin123!'),
                'is_admin' => true,
                'email_verified_at' => now(),
                'created_at' =>now(),
                'updated_at' =>now(),
            ]);
        DB::commit();
        }catch(\Throwable $e){
            DB::rollBack();
            throw $e;
        }
    }
}
