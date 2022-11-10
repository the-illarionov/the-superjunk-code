<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Course;

class refactore_2021_04_14 extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'refactore:2021_04_14';

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
     * @return int
     */
    public function handle()
    {
        $count = 0;
        $courses = Course::all();

        foreach($courses as $course) {
            if($course->structure) {
            $structure = json_decode($course->structure);

            $result = [];

            $result["topics_items"] = [];
            $result["topics_items"]["supernode-topics"] = [
                "id" => "supernode-topics",
                "childs" => array(),
            ];

            $placeholder = "Type header";
            $header1 = "Main skill";
            $header2 = "Sub-skills";
            $header3 = "Sub-skills";
            $header4 = "Microskills";

            if($structure[0] && property_exists($structure[0], "placeholder") && strpos($structure[0]->placeholder, "Пример") !== false) {
                $placeholder = "Введите заголовок";
                $header1 = "Главное умение";
                $header2 = "Подумения";
                $header3 = "Подумения";
                $header4 = "Микроумения";
            }

            
            $result["topics_headers"] = [
                [
                    "value" => $header1,
                    "placeholder" => $placeholder,
                ],
                [
                    "value" => $header2,
                    "placeholder" => $placeholder,
                ],
                [
                    "value" => $header3,
                    "placeholder" => $placeholder,
                ],
                [
                    "value" => $header4,
                    "placeholder" => $placeholder,
                ],
            ];

            $result["lessons_items"] = [
                "supernode-lessons" => [
                    "childs" => ["lessons-initial-1"],
                    "id" => "supernode-lessons",
                ],
                "lessons-initial-1-1-1" => [
                    "parentId" => "lessons-initial-1-1",
                    "type" => "lesson",
                    "childs" => [],
                    "id" => "lessons-initial-1-1-1",
                ],
                "lessons-initial-1-1-2" => [
                    "parentId" => "lessons-initial-1-1",
                    "type" => "lesson",
                    "childs" => [],
                    "id" => "lessons-initial-1-1-2",
                ],
                "lessons-initial-1-1-3" => [
                    "parentId" => "lessons-initial-1-1",
                    "type" => "lesson",
                    "childs" => [],
                    "id" => "lessons-initial-1-1-3",
                ],
                "lessons-initial-1-1" => [
                    "parentId" => "lessons-initial-1",
                    "type" => "sprint",
                    "childs" => [
                        "lessons-initial-1-1-1",
                        "lessons-initial-1-1-2",
                        "lessons-initial-1-1-3"
                    ],
                    "id" => "lessons-initial-1-1",
                ],
                "lessons-initial-1" => [
                    "parentId" => "supernode-lessons",
                    "type" => "module",
                    "childs" => [
                        "lessons-initial-1-1",
                    ],
                    "id" => "lessons-initial-1",
                ],
            ];

            
            
            foreach($structure as $mainSkill) {
                $mainSkill_node = [];
                $mainSkill_node["parentId"] = "supernode-topics";
                $mainSkill_node["type"] = "topic";
                $mainSkill_node["childs"] = array();
                $mainSkill_node["id"] = $mainSkill->key;
                $mainSkill_node["show_skill"] = true;
                $mainSkill_node["skills"] = [];
                if(property_exists($mainSkill, "value")) $mainSkill_node["value"] = $mainSkill->value;
                if(property_exists($mainSkill, "placeholder")) $mainSkill_node["placeholder"] = $mainSkill->placeholder;

                array_push($result["topics_items"]["supernode-topics"]["childs"], $mainSkill->key);

                foreach($mainSkill->modules as $module) {
                    $module_node = [];
                    $module_node["parentId"] = $mainSkill->key;
                    $module_node["type"] = "topic";
                    $module_node["childs"] = array();
                    $module_node["id"] = $module->key;
                    $module_node["show_skill"] = true;
                    $module_node["skills"] = [];
                    if(property_exists($module, "value")) $module_node["value"] = $module->value;
                    if(property_exists($module, "placeholder")) $module_node["placeholder"] = $module->placeholder;

                    array_push($mainSkill_node["childs"], $module->key);

                    foreach($module->topics as $topic) {
                        $topic_node = [];
                        $topic_node["parentId"] = $module->key;
                        $topic_node["type"] = "topic";
                        $topic_node["childs"] = array();
                        $topic_node["id"] = $topic->key;
                        $topic_node["show_skill"] = true;
                        $topic_node["skills"] = [];
                        if(property_exists($topic, "value")) $topic_node["value"] = $topic->value;
                        if(property_exists($topic, "placeholder")) $topic_node["placeholder"] = $topic->placeholder;

                        array_push($module_node["childs"], $topic->key);

                        foreach($topic->subtopics as $subtopic) {
                            $node = [];
                            $node["parentId"] = $topic->key;
                            $node["type"] = "topic";
                            $node["childs"] = [];
                            $node["id"] = $subtopic->key;
                            $node["show_skill"] = true;
                            $node["skills"] = [];
                            if(property_exists( $subtopic, "value")) $node["value"] = $subtopic->value;
                            if(property_exists($subtopic, "placeholder")) $node["placeholder"] = $subtopic->placeholder;

                            array_push($topic_node["childs"], $subtopic->key);

                            $result["topics_items"][$subtopic->key] = $node;

                            $count++;
                        }

                        $result["topics_items"][$topic->key] = $topic_node;
                    }

                    $result["topics_items"][$module->key] = $module_node;
                }

                $result["topics_items"][$mainSkill->key] = $mainSkill_node;
            }

            $course->structure = json_encode($result);
            $course->save();
        }

        $this->info($count);
    }
    }
}
