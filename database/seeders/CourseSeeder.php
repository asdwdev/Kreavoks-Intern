<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get data from JSON file
        $coursesData = json_decode(File::get(resource_path('js/data/dummyCourses.json')), true);
        
        // Get or create instructors
        $instructors = [];
        foreach ($coursesData as $courseData) {
            $instructorName = $courseData['instructor']['name'];
            
            if (!isset($instructors[$instructorName])) {
                $instructor = User::firstOrCreate(
                    ['email' => strtolower(str_replace(' ', '.', $instructorName)) . '@kreavoks.id'],
                    [
                        'name' => $instructorName,
                        'password' => bcrypt('password'),
                        'role' => 'instructor',
                    ]
                );
                $instructors[$instructorName] = $instructor->id;
            }
        }
        
        // Insert data into database
        foreach ($coursesData as $courseData) {
            Course::create([
                'title' => $courseData['title'],
                'description' => $courseData['description'],
                'image' => $courseData['image'],
                'price' => $courseData['price'],
                'discount_price' => $courseData['discount_price'] ?? null,
                'category' => $courseData['category'],
                'level' => $courseData['level'],
                'duration' => $courseData['duration'],
                'rating' => $courseData['rating'],
                'students_count' => $courseData['students_count'],
                'instructor_id' => $instructors[$courseData['instructor']['name']],
            ]);
        }
    }
}
