<?php
header('Access-Control-Allow-Origin: *');
require 'connectMySQL.php';

    class lop{
        function lop($id_lop,$tenlop){
            $this->id_lop=$id_lop;
            $this->tenlop=$tenlop;
        }
    }
    $query ="select *from lop";
    $result =mysqli_query($connect,$query);
    $mangketqua =array();
    while($dong =mysqli_fetch_assoc($result)){
        array_push($mangketqua,new lop($dong['id_lop'],$dong['tenlop']));
    }
        echo json_encode($mangketqua);
?>