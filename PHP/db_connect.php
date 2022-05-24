<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
class DB_Connect {

    // constructor
    function __construct() {
		//$this->connect();
	}

    // destructor
  //  function __destruct() {
  //      $this->close();
  //  }

    // Connecting to database
    public function connect() {
        require_once 'db_config.php';
        // connecting to mysql
        $con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD,DB_DATABASE);
        // selecting database
        //mysqli_select_db(DB_DATABASE);

        // return database handler
        return $con;
    }

    // Closing database connection
  //  public function close() {
    //    mysqli_close($con);
  //  }
}
?>
