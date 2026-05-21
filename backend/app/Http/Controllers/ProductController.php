<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

use function Pest\Laravel\json;

class ProductController extends Controller
{
    public function index()
    {
        // Get all products
        try{
            $products = Product::all();
            return response()->json([
                'products' => $products
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong ' . $e
            ],500);
        }
    }

    public function getProductById(Product $product)
    {
        // Get product by id
        // Automatically findOrFail by ID since we are model binding
        try{
            return response()->json([
                'product' => $product
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong ' . $e
            ],500);
        }
    }

    public function store(Request $request)
    {
        // Set Image path and storage
        $imagePath = null;
        if ($request->hasFile('image')) {
            $filename = time() . '_' . $request->file('image')->getClientOriginalName();
            $imagePath = $request->file('image')->storeAs('products', $filename, 'public');
        }

        // Store product
        try{
            $product = Product::create([
                'name' => request('name'),
                'description' => request('description'),
                'price' => request('price'),
                'quantity' => request('quantity'),
                'image_url' => $imagePath,
            ]);

            return response()->json([
                'product' => $product,
            ],201);

        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong ' . $e
            ],500);
        }
    }

    public function update(Product $product, Request $request)
    {
        // Update product
        try{

            $imagePath = $product->image_url; // keep existing image by default

            if ($request->hasFile('image')) {
                // Delete old image first
                if ($product->image_url) {
                    Storage::disk('public')->delete($product->image_url);
                }
                $filename = time() . '_' . $request->file('image')->getClientOriginalName();
                $imagePath = $request->file('image')->storeAs('products', $filename, 'public');
            }

            $row = $product->update([
                'name' => request('name'),
                'description' => request('description'),
                'price' => request('price'),
                'quantity' => request('quantity'),
                'image_url' => $imagePath,
            ]);

            return response()->json([
                'row' => $row,
            ],200);

        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong ' . $e
            ],500);
        }
    }

    public function destroy(Request $request, Product $product = null)
    {
        try {
            DB::beginTransaction();

            $multiple = (bool) $request->input('multiple');

            if ($multiple) {
                $ids = (array) $request->input('ids', []);
                // Delete images before deleting records
                Product::whereIn('id', $ids)->each(function ($product) {
                    if ($product->image_url) {
                        Storage::disk('public')->delete($product->image_url);
                    }
                });
                $count = Product::whereIn('id', $ids)->delete();
                $deletedIds = $ids;
            } else {
                $product->delete();
                $count = 1;
                $deletedIds = [$product->id];
            }

            DB::commit();

            return response()->json([
                $multiple ? 'ids' : 'id' =>
                    $multiple ? $deletedIds : ($deletedIds[0] ?? null),
                'message' => "{$count} Product" .
                    ($count === 1 ? '' : 's') .
                    " deleted successfully.",
            ], 200);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    // public function destroy(Product $product)
    // {
    //     // Delete product
    //     try{
    //         $row = $product->delete();

    //         return response()->json([
    //             'row' => $row,
    //         ],200);
    //     }catch(\Exception $e){
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Something went wrong ' . $e
    //         ],500);
    //     }
    // }
}
