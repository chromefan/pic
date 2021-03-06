<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('cate', 'ApiController@getCategory');
Route::get('album', 'ApiController@getAlbum');
Route::get('newPhotos', 'ApiController@getNewPhotos');
Route::get('photos/{album_id}', 'ApiController@getPhotos');
Route::get('relatePhotos/{id}', 'ApiController@getRelatePhotos');