<?php
session_start();

$stage = isset($_GET["stage"]) ? (int)$_GET["stage"] : 1;

$videos = [
    1 => "https://www.youtube.com/embed/2muFvgBlNSY",
    2 => "https://www.youtube.com/embed/u2S5kIsAjLM"
];
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Stage <?php echo $stage; ?> - Video</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>🎥 Watch the Video</h1>

<iframe width="100%" height="315"
    src="<?php echo $videos[$stage]; ?>"
    allowfullscreen></iframe>

<a href="question.php?stage=<?php echo $stage; ?>&q=1" class="big-btn">
    Start Questions
</a>

</body>
</html>


