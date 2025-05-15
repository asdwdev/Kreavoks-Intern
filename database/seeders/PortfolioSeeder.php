<?php

namespace Database\Seeders;

use App\Models\Portfolio;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get data from JSON file
        $portfoliosData = json_decode(File::get(resource_path('js/data/dummyPortfolios.json')), true);
        
        // Insert data into database
        foreach ($portfoliosData as $portfolioData) {
            Portfolio::create([
                'title' => $portfolioData['title'],
                'client' => $portfolioData['client'],
                'category' => $portfolioData['category'],
                'description' => $portfolioData['description'],
                'image' => $portfolioData['image'],
                'year' => $portfolioData['year'],
                'link' => $portfolioData['link'] ?? null,
            ]);
        }
    }
}
