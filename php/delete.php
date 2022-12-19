<?php
if (!empty($_POST["action"])) {
    if ($_POST["action"] === 'kind') {
        if (($_POST["id"])) {
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

            // sql to delete a record
            $id = $_POST["id"];
            $sql = "DELETE FROM eidh WHERE id=$id";

            if ($conn->query($sql) === TRUE) {
                echo "Record deleted successfully";
            } else {
                echo "Error deleting record: " . $conn->error;
            }

            $conn->close();
        }
    }
    if ($_POST["action"] === 'subject') {
        if (($_POST["id"])) {
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

            // sql to delete a record
            $id = $_POST["id"];
            $sql = "DELETE FROM table_subject WHERE id=$id";

            if ($conn->query($sql) === TRUE) {
                echo "Record deleted successfully";
            } else {
                echo "Error deleting record: " . $conn->error;
            }

            $conn->close();
        }
    }
}
