<?php
$conn = new mysqli("localhost", "root", "", "UrdakBlog");

if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}

$sql = "SELECT name, comment FROM comments ORDER BY id DESC"; 
$result = $conn->query($sql);

$comments = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $comments[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($comments);

$conn->close();
?>