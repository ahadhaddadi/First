<?php
// start session to access saved data
session_start();

// destroy all session data (delete child name)
session_destroy();

// redirect user back to start page
header("Location: index.php");
exit();
?>