<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$stage = (int)$_GET["stage"];
$q = (int)$_GET["q"];
$answer = (int)$_GET["answer"];
$stars = (int)$_GET["stars"];

$child = $_SESSION["child_name"] ?? "Student";

include "questions_data.php";

$correct = $questions[$stage][$q - 1]["correct"];

if ($answer == $correct) {
    $message = "Great job, $child! Your logic is spot on.";
} else {
    $message = "Nice try, $child! Keep going — you're improving.";
}

if (!isset($_SESSION["total_stars"])) {
    $_SESSION["total_stars"] = 0;
}
$_SESSION["total_stars"] += $stars;

$next_q = $q + 1;
$last_question = count($questions[$stage]);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Result</title>

    <style>
        body { font-family: Arial; text-align: center; padding: 40px; }
        .stars { font-size: 45px; color: gold; margin: 20px 0; }
        .msg { font-size: 22px; margin-bottom: 20px; font-weight: bold; }
        .btn {
            padding: 12px 20px;
            background: #4CAF50;
            color: white;
            border-radius: 8px;
            text-decoration: none;
            font-size: 20px;
        }
    </style>
</head>

<body>

<h1>Question Result</h1>

<div class="msg"><?php echo $message; ?></div>

<div class="stars">
    <?php echo str_repeat("⭐", $stars); ?>
</div>

<?php if ($q < $last_question): ?>
    <a class="btn" href="question.php?stage=<?php echo $stage; ?>&q=<?php echo $next_q; ?>">Next Question</a>
<?php else: ?>
    <a class="btn" href="final.php">Finish Lesson</a>
<?php endif; ?>

</body>
</html>


