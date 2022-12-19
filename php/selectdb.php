<?php
if ($_POST["kindof"] === 'select_kindof') {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tentaapp";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM eidh";
    $result = $conn->query($sql);
    $eidhArr = [];
    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $id = $row["id"];
            $eidos = $row["eidosPerigrafi"];
            array_push($eidhArr, array($id, $eidos));
        }
    }
    $conn->close();
    echo json_encode($eidhArr);
}

if ($_POST["kindof"] === 'select_subject') {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tentaapp";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM table_subject";
    $result = $conn->query($sql);
    $subjectsArr = [];
    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $id = $row["id"];
            $eidos = $row["subject"];
            $data = $row["data"];
            array_push($subjectsArr, array($id, $eidos, $data));
        }
    }
    $conn->close();
    // echo json_encode($eidhArr);
    echo json_encode($subjectsArr);
}
if ($_POST["kindof"] === 'load') {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tentaapp";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM saves";
    $result = $conn->query($sql);
    $saveData = [];
    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $id = $row["id"];
            $saveName = $row["saveName"];
            $data = $row["data"];
            array_push($saveData, array($id, $saveName, $data));
        }
    }
    $conn->close();
    // echo json_encode($eidhArr);
    echo json_encode($saveData);
}
