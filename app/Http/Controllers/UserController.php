<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query();
        if ($request->input('search')) {
            $users->where('name', 'like', '%' . $request->input('search') . '%')
                ->orWhere('email', 'like', '%' . $request->input('search') . '%');
        }
        $users =  $users->paginate(10)->withQueryString();
        return Inertia::render('User/Index', [
            'users' => $users,
            'filters' => $request->only(['search'])
        ]);
    }
}
