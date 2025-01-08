<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "UrdakBlog";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    $sql = "INSERT INTO comments (name, email, comment) VALUES ('$name', '$email', '$comment')";

    if ($conn->query($sql) === TRUE) {
        echo "¡Tu comentario se envió!";
    } else {
        echo "Hubo un error al enviar tu comentario...";
    }

    $conn->close();
}
?>