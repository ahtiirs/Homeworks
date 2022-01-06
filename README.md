# School homeworks API

## Run project
* git clone https://github.com/ahtiirs/Homeworks.git
* cd Homeworks
* npm install
* npm start
* Go to http://localhost:3000/ping

## API documentation:
* Start project - npm start
* Go to http://localhost:3000/api-docs/




## Test




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
