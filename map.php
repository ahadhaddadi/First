<?php
// start session to get child data
session_start();

// if no child name, go back to start page
if (!isset($_SESSION["child_name"])) {
    header("Location: index.php");
    exit();
}

// get child name from session
$childName = $_SESSION["child_name"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- make page responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Choose Stage</title>

    <!-- link CSS file -->
    <link rel="stylesheet" href="style.css">
</head>

<!-- map page style -->
<body class="map-page">

    <!-- top bar (welcome + logout button) -->
    <div class="top-bar">

        <!-- show child name -->
        <h2>Hello, <?php echo $childName; ?> 👋</h2>

        <!-- logout button -->
        <a href="logout.php" class="logout-btn">Exit</a>
    </div>

    <!-- main map container -->
    <div class="map-wrapper">

        <!-- title -->
        <h1>🗺️ Choose Your Stage</h1>

        <!-- description -->
        <p class="subtitle">Pick a stage and start learning Python!</p>

        <!-- map area (stages + path) -->
        <div class="map-area">

            <!-- decorative path line -->
            <div class="path-line"></div>
            <p>Python Basics</p>
            <!-- stage 1 card -->
            <a href="stage_video.php?stage=1" class="stage-card stage-one">
                <div class="stage-icon">🌟</div>
                <h3>Stage 1</h3>
                <p>Print</p>
            </a>

            <!-- stage 2 card -->
            <a href="stage_video.php?stage=2" class="stage-card stage-two">
                <div class="stage-icon">🌟🌟</div>
                <h3>Stage 2</h3>
                <p>String</p>
            </a>

        </div>
    </div>
</body>
</html>
