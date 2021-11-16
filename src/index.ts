
import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import groupsRouter from './components/groups/routes';
import coursesRouter from './components/courses/routes';
import homeworksRouter from './components/homeworks/routes';
import teachersRouter from './components/teachers/routes';
import pingRouter from './components/ping/routes';
import usersController from './components/users/controller';
import authController from './components/auth/controller';

import myCookie from './cookies'
const cookieParser = require('cookie-parser');
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())

// pordi nr mida api kuulab 
const port = 3000; 


/**
 * *********************** Login ******************
 */
 app.post('/login', authController.login);

 

app.use(myCookie);
app.use('/ping', pingRouter);
app.use('/groups', groupsRouter);
app.use('/courses', coursesRouter);
app.use('/homeworks', homeworksRouter);
app.use('/teachers', teachersRouter);

/**
 * *********************** Users ******************
 */
 app.get('/users', usersController.getAllUsers);
 app.get('/users/:id', usersController.getUserById);
 app.delete('/users/:id', usersController.removeUser);
 app.post('/users', usersController.createUser);
 app.patch('/users/:id', usersController.updateUser);

/**
* Start listening
*/
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port: ${port}`);
});