<?
if(isset($_POST['email'])) { $email = $_POST['email']; }
$db = mysql_connect("localhost", "admin", "admin") 
or die("Could not connect : " . mysql_error()); //подключение к серверу БД
mysql_select_db("my_database") or die("Could not select database"); //Выбор базы данных
$query = 'INSERT INTO table_email (email) VALUES ($POST['email'])';
mysql_query($query); //добавление имени и мыла
mysql_close($db); //закрытие соединения
?>