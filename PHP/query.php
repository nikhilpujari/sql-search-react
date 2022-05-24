<?php
  header('Access-Control-Allow-Origin: http://localhost:3000');
  include("db_connect.php");
  $db=new DB_Connect();
  $link=$db->connect();
 if($link == false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }
   $id=$_POST["id"];
  $sql = "Select * from customer";
  if ($res = mysqli_query($link, $sql)) {
    if(mysqli_num_rows($result) > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>id</th>";
                echo "<th>first_name</th>";
                echo "<th>last_name</th>";
                echo "<th>email</th>";
            echo "</tr>";
        while($row = mysqli_fetch_array($result)){
            echo "<tr>";
                echo "<td>" . $row['customerID'] . "</td>";
                echo "<td>" . $row['companyName'] . "</td>";
                echo "<td>" . $row['contactName'] . "</td>";
                echo "<td>" . $row['contactTitle'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        // Free result set
        mysqli_free_result($result);
      }
    }
  else {
      echo "ERROR: Could not able to execute $sql. "
                                  .mysqli_error($link);
  }
     mysqli_close($link);
?>
