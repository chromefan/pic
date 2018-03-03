<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function getPng(){
        ob_clean();
        ob_start();
        $im = @imagecreate(200, 50) or die("创建图像资源失败");
        imagecolorallocate($im, 255, 255, 255);
        $text_color = imagecolorallocate($im, 0, 0, 0);
        imagestring($im, 5, 0, 0, "____", $text_color);
        imagepng($im);
        imagedestroy($im);
        $content = ob_get_clean();
        return response($content, 200, [
            'Content-Type' => 'image/png',
        ]);
    }
}
