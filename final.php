<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$child = $_SESSION["child_name"] ?? "Student";
$total = $_SESSION["total_stars"] ?? 0;
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lesson Complete</title>

    <style>
        body {
            font-family: Arial;
            text-align: center;
            padding: 40px;
        }
        .cup {
            font-size: 120px;
            margin-top: 20px;
        }
        .title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .msg {
            font-size: 24px;
            margin-bottom: 15px;
            color: #444;
        }
        .stars-number {
            font-size: 28px;
            margin-bottom: 20px;
            color: #e6b800;
            font-weight: bold;
        }
        a {
            font-size: 20px;
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>

<body>

<div class="title">Well done, <?php echo $child; ?>!</div>

<div class="msg">You are a great programmer! 🧠</div>

<div class="stars-number">Stars Earned: <?php echo $total; ?> ⭐</div>

<div class="cup">🏆</div>

<a href="map.php">Back to Map</a>

</body>
</html>
