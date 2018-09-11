<?php

namespace App\Console\Commands;


use App\Libs\Snoopy;
use Behat\Mink\Mink;
use Behat\Mink\Session;
use Behat\Mink\Driver\GoutteDriver;
use DMore\ChromeDriver\ChromeDriver;
use GuzzleHttp\Client;
use Illuminate\Console\Command;

class Browser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mink:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $startUrl = 'http://test2.pdfree.cn/';
        $mink = new Mink(array(
            'browser' => new Session(new ChromeDriver('http://localhost:9222',
                null,  'http://www.google.com'))
        ));

        // set the default session name
        $mink->setDefaultSessionName('browser');
        $session = $mink->getSession();
        $session->visit($startUrl);
        //$session->start();
        // get the current page URL:
        $res =  $session->getCurrentUrl();
        $this->info($res);
        $session->wait(5000);
        $res =  $session->getPage()->getHtml();
        $driver = $mink->getSession()->getDriver();

        //file_put_contents(storage_path('logs').'/'.'test.html',$res);
        $this->info($res);
    }
    public  function curl($url) {
        $snoopy = new Snoopy();
        $snoopy->agent = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)";

        $snoopy->fetch($url); 		//获取所有内容
        echo $snoopy->results;
    }
}
