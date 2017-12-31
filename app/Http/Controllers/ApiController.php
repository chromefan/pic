<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    //

    public function getAlbum(Request $request){
        $table ='album';
        $data = DB::table($table)->get();
        return $data;
    }
}
