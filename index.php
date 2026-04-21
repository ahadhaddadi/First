<?php
// start session to save child name
session_start();

// check if form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // get child name from input and remove extra spaces
    $childName = trim($_POST["child_name"]);

    // if name is not empty
    if ($childName !== "") {

        // save name in session (with security filter)
        $_SESSION["child_name"] = htmlspecialchars($childName);

        // go to map page
        header("Location: map.php");
        exit();
    }

    // show error if input is empty
    $error = "Please enter your name!";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- make website responsive on mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Python Kids Land</title>

    <!-- link CSS file -->
    <link rel="stylesheet" href="style.css">
</head>

<!-- landing page main style -->
<body class="landing-page">

    <!-- main card container -->
    <div class="main-card">

        <!-- logo/icon -->
        <div class="logo-circle">🐍</div>

        <!-- website title -->
        <h1>Python Kids Land</h1>

        <!-- short description -->
        <p class="subtitle">Learn Python in a fun and easy way!</p>

        <!-- form to enter child name -->
        <form method="post" class="name-form">

            <!-- input for name -->
            <input type="text" name="child_name" placeholder="Enter your name" required>

            <!-- submit button -->
            <button type="submit">Start Adventure</button>
        </form>

        <!-- show error message if exists -->
        <?php if (!empty($error)): ?>
            <p class="error-msg"><?php echo $error; ?></p>
        <?php endif; ?>

    </div>
</body>
</html>