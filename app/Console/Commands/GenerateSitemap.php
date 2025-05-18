<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap.';

    public function handle(): void
    {
        Sitemap::create()
            ->add(Url::create('/'))              
            ->add(Url::create('/program'))       
            ->add(Url::create('/portfolio'))     
            ->add(Url::create('/about'))        
            ->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap berhasil dibuat di public/sitemap.xml');
    }
}
