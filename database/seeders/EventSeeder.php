<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get data from JSON file
        $eventsData = json_decode(File::get(resource_path('js/data/dummyEvents.json')), true);
        
        // Get or create speakers
        $speakers = [];
        foreach ($eventsData as $eventData) {
            $speakerName = $eventData['speaker']['name'];
            
            if (!isset($speakers[$speakerName])) {
                $speaker = User::firstOrCreate(
                    ['email' => strtolower(str_replace(' ', '.', $speakerName)) . '@kreavoks.id'],
                    [
                        'name' => $speakerName,
                        'password' => bcrypt('password'),
                        'role' => 'speaker',
                    ]
                );
                $speakers[$speakerName] = $speaker->id;
            }
        }
        
        // Insert data into database
        foreach ($eventsData as $eventData) {
            Event::create([
                'title' => $eventData['title'],
                'description' => $eventData['description'],
                'image' => $eventData['image'],
                'date' => $eventData['date'],
                'time' => $eventData['time'],
                'location' => $eventData['location'],
                'price' => $eventData['price'],
                'discount_price' => $eventData['discount_price'] ?? null,
                'category' => $eventData['category'],
                'speaker_id' => $speakers[$eventData['speaker']['name']],
            ]);
        }
    }
}
