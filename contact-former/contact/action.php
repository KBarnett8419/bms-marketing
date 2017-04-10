<?php 
include "config.php";

echo $name=$_POST['name'];
$email=$_POST['email'];
$comment=$_POST['comment'];
echo $sql="INSERT into contact(name,email,comment) VALUES ('$name','$email','$comment')";
$result=mysqli_query($con,$sql);
if($result)
{
	 echo "<script>alert('Your Message Has Been Successfully Sent');
     window.location.href='index.php';
     </script>";
 }
 ?>

