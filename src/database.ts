
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import hwUser from './components/users/entity';


createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  entities: [hwUser],
  synchronize: true,
  logging: true,
}).then((connection) => {
  console.log(`Database connected to ${connection.name}`);
}).catch((error) => console.log(error));
 
export default createConnection;
