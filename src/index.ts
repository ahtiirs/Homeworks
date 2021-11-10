
import express, { Request, Response, Application } from 'express';
// import  cookieParser from 'cookie-parser';
import cors from 'cors';
const app: Application = express();
var cookieParser = require('cookie-parser');


import db from './db';
import coursesController from './components/courses/controller';
import groupsController from './components/groups/controller';
import homeworksController from './components/homeworks/controller';
import teachersController from './components/teachers/controller';
import responseCodes from './components/general/responseCodes'
import myCookie from './cookies'

app.use(express.json());
app.use(cors());
app.use(cookieParser())

// pordi nr mida api kuulab 
const port = 3000; 

app.get('/ping', (req: Request, res: Response) => {
  res.status(responseCodes.ok).json({
    message: 'Alive',
  });
});

app.use(myCookie);
// ************************ group ******************
app.get('/groups', groupsController.getAllGroups); 
app.get('/groups/:id', groupsController.getGroupById); 
app.delete('/groups/:id',groupsController.deleteGroupById);
app.post('/groups', groupsController.addGroup);
app.patch('/groups/:id',groupsController.updateGroupById) ;

// *********************** course ******************
app.get('/courses', coursesController.getAll);
app.get('/courses/:id',coursesController.getById);
app.delete('/courses/:id', coursesController.deleteById);
app.post('/courses', coursesController.add );
app.patch('/courses/:id', coursesController.updateById );
 
// *********************** homework *****************
app.get('/homeworks', homeworksController.getAll);
app.get('/homeworks/:id',homeworksController.getById);
app.delete('/homeworks/:id', homeworksController.deleteById);
app.post('/homeworks', homeworksController.add );
app.patch('/homeworks/:id', homeworksController.updateById );

// *********************** teacher *****************
app.get('/teachers', teachersController.getAll);
app.get('/teachers/:id',teachersController.getById);
app.delete('/teachers/:id', teachersController.deleteById);
app.post('/teachers', teachersController.add );
app.patch('/teachers/:id', teachersController.updateById );

/**
* Start listening
*/
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port: ${port}`);
});