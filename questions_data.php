<?php

$questions = [

    // ============================
    //        STAGE 1
    // ============================
    1 => [
        [
            "question" => "Which word do we use to print something in Python?",
            "options" => ["show", "print", "write", "say"],
            "correct" => 1,
            "hint" => "We use print to show text on the screen."
        ],

        [
            "question" => "Which one is correct to print \"Hello\"?",
            "options" => ["print(Hello)", "print[\"Hello\"]", "print(\"Hello\")", "print Hello"],
            "correct" => 2,
            "hint" => "Remember: we use parentheses () with print."
        ],

        [
            "question" => "What will this code print? print(\"Python is fun\")",
            "options" => ["Python is hard", "Python is fun", "I like Python", "Nothing"],
            "correct" => 1,
            "hint" => "Look at the text inside the quotes."
        ]
    ],

    // ============================
    //        STAGE 2
    // ============================
    2 => [
        [
            "question" => "What will this code print? print(\"Hi \" * 3)",
            "options" => ["Hi", "Hi Hi", "Hi Hi Hi", "Error"],
            "correct" => 2,
            "hint" => "The * symbol means repeat. So think: how many times will 'Hi' show?"
        ],

        [
            "question" => "What will this code print? print(len(\"cat\"))",
            "options" => ["2", "3", "4", "cat"],
            "correct" => 1,
            "hint" => "len counts the number of letters in a word. Try counting letters in 'cat'!"
        ],

        [
            "question" => "What will this code print? print(\"Hello \" + \"Kids\")",
            "options" => ["HelloKids", "Hello Kids", "Kids Hello", "Error"],
            "correct" => 1,
            "hint" => "The + symbol joins two words together. Look carefully at the space."
        ]
    ]

];
