<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$stage = (int)$_GET["stage"];
$q = (int)$_GET["q"];

include "questions_data.php";

$current = $questions[$stage][$q - 1];
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Question <?php echo $q; ?></title>

    <style>
        body { font-family: Arial; padding: 20px; }

        .option {
            padding: 12px;
            background: #eee;
            margin: 8px 0;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.2s;
        }

        .option.selected {
            background: #c8f7c5; /* أخضر فاتح */
            border: 2px solid #4CAF50;
        }

        .stars {
            font-size: 35px;
            color: gold;
            margin-bottom: 15px;
        }

        .hint-box {
            display: none;
            background: #dff0ff;
            padding: 10px;
            border-left: 4px solid #007bff;
            margin-top: 10px;
        }

        .btn {
            padding: 12px 20px;
            background: #4CAF50;
            color: white;
            border-radius: 8px;
            cursor: pointer;
            display: inline-block;
            margin-top: 15px;
        }

        .hint-btn {
            background: #007bff;
        }
    </style>

    <script>
        let selected = null;
        let usedHint = false;
        let correct = <?php echo $current["correct"]; ?>;

        function choose(i) {
            selected = i;

            // إزالة التحديد من كل الخيارات
            let all = document.querySelectorAll(".option");
            all.forEach(op => op.classList.remove("selected"));

            // إضافة التحديد للخيار المختار
            document.getElementById("opt" + i).classList.add("selected");

            // تحديث النجوم
            if (usedHint) {
                if (selected == correct) {
                    document.getElementById("stars").innerHTML = "⭐⭐";
                } else {
                    document.getElementById("stars").innerHTML = "⭐";
                }
                return;
            }

            if (selected == correct) {
                document.getElementById("stars").innerHTML = "⭐⭐⭐";
            } else {
                document.getElementById("stars").innerHTML = "⭐";
            }
        }

        function showHint() {
            usedHint = true;
            document.getElementById("hint").style.display = "block";

            if (selected === null) {
                document.getElementById("stars").innerHTML = "⭐⭐";
            } else if (selected == correct) {
                document.getElementById("stars").innerHTML = "⭐⭐";
            } else {
                document.getElementById("stars").innerHTML = "⭐";
            }
        }

        function sendAnswer() {
            if (selected === null) {
                alert("Please choose an answer");
                return;
            }

            let stars = 1;

            if (selected == correct && !usedHint) stars = 3;
            else if (selected == correct && usedHint) stars = 2;

            window.location.href =
                "result.php?stage=<?php echo $stage; ?>&q=<?php echo $q; ?>&answer=" + selected + "&stars=" + stars;
        }
    </script>
</head>

<body>

<h1>Question <?php echo $q; ?></h1>

<div class="stars" id="stars">⭐⭐⭐</div>

<p><?php echo $current["question"]; ?></p>

<?php foreach ($current["options"] as $i => $opt): ?>
    <div class="option" id="opt<?php echo $i; ?>" onclick="choose(<?php echo $i; ?>)">
        <?php echo $opt; ?>
    </div>
<?php endforeach; ?>

<div class="btn hint-btn" onclick="showHint()">💡 Hint</div>

<div class="hint-box" id="hint">
    <?php echo $current["hint"]; ?>
</div>

<div class="btn" onclick="sendAnswer()">Submit Answer</div>

</body>
</html>



