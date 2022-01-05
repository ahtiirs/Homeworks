App on kirjutatud kodutööde nimekirja pidamiseks ja haldamiseks 
Apil on 5 endpointi, kirjeldus on tehtud open-api wegger vahendiga
Endpointid:
/ping
/courses
/teachers
/homworks
/groups


docker käivitus terminalis:
docker run -p 3306:3306 -d -v data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my_secret_pw mysql
