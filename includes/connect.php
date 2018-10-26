<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "db_cooperinfo";

$conn = mysqli_connect($host, $user, $password, $db);
mysqli_set_charset($conn, 'utf8');

if (!$conn) {
    echo "something broke.. connection isn't working";
    exit;
}

//echo "connection successful";

//retrieve all data from database
// $myQuery = "SELECT * FROM mainmodel";
// $result = mysqli_query($conn, $myQuery);
// $rows = array();

// //Fill the array with the result set and send it to the browser
// while($row = mysqli_fetch_assoc($result)) {
//     $rows[] = $row;
// }

//get one item from the database
if (isset($_GET["modelNo"])) {
    $car = $_GET["modelNo"];

    $myQuery = "SELECT * FROM mainmodel WHERE model='$car'";

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    //Fill the array with the result set and send it to the browser
    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
}


?>