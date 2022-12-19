<?php
if (!empty($_POST["action"])) {
    if ($_POST["action"] === 'addKindOf') {
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
        $data = $_POST["data"];
        $sql = "INSERT INTO eidh (eidosPerigrafi)
        VALUES ('$data')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
        return;
    }
    if ($_POST["action"] === 'addSubject') {
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
        $data = $_POST["data"];
        $sql = "INSERT INTO table_subject (subject,data)
        VALUES ('$data','[]')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
        return;
    }
    if ($_POST["action"] === 'addSubjectItem') {
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
        $data = $_POST["data"];
        $id = $_POST["id"];
        $sql = "UPDATE table_subject SET data='$data' WHERE id='$id'";

        if ($conn->query($sql) === TRUE) {
            echo "record updated";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
        return;
    }
    if ($_POST["action"] === 'save') {
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
        $data = $_POST["data"];
        $saveName = $_POST['save'];
        $sql = "INSERT INTO saves (saveName,data)
        VALUES ('$saveName','$data')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
        return;
    }
}
