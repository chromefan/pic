<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    //
    protected $page = 20;

    public function getCategory(){
        $table ='category';
        $data = DB::table($table)->get();
        return $data;
    }
    public function getAlbum(Request $request){
        $table ='album';
        $cates = DB::table('category')->get();
        $res = [];
        foreach ($cates as $k=>$cate){
            $res[$k]['cate_name'] = $cate->cate_name;
            $res[$k]['cate_key'] = $cate->cate_key;
            $res[$k]['cate_id'] = $cate->id;
            $res[$k]['albums'] = DB::table($table)->where('cate_id',$cate->id)->orderBy('id','desc')->limit(24)->get();
        }
        return $res;
    }
    public function getNewPhotos(){
        $table ='photos';
        $data = DB::table($table)->orderBy('id','desc')->limit(4)->get();
        return $data;
    }
    public function getPhotos(Request $request,$album_id){
        $table ='photos';
        $data = DB::table($table)->where('album_id',$album_id)->get();
        return $data;
    }
    public function getRelatePhotos($album_id){
        $table ='album';
        $data = DB::table($table)->where('id','<>',$album_id)->orderByRaw('RAND()')->limit(6)->get();
        return $data;
    }
}
