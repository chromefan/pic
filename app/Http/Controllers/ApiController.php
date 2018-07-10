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
        $res = DB::table($table)->orderBy('id','desc')->paginate(12)->toArray();
        foreach ($res['data'] as $k=>$v){
            $res['data'][$k]->src = asset('images/'.$v->path);
        }
        return $res;
    }
    public function getNewPhotos(){
        $table ='photos';
        $data = DB::table($table)->orderBy('id','desc')->limit(4)->get();
        $data = $this->_set_src($data);
        return $data;
    }
    public function getPhotos(Request $request,$album_id){
        $table ='photos';
        $data = DB::table($table)->where('album_id',$album_id)->get();
        $data = $this->_set_src($data);
        return $data;
    }
    public function getRelatePhotos($album_id){
        $table ='album';
        $data = DB::table($table)->where('id','<>',$album_id)->orderByRaw('RAND()')->limit(9)->get();
        $data = $this->_set_src($data);
        return $data;
    }
    private function _set_src($data){

        foreach ($data as $k=>$v){
            $data[$k]->src = asset('images/'.$v->path);
        }
        return $data;
    }
}
