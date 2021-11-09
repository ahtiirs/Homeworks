
import express, { Request, Response, Application } from 'express';
import cors from 'cors';
const app: Application = express();

import db from './db';
import coursesController from './components/courses/controller';
import groupsController from './components/groups/controller';
import homeworksController from './components/homeworks/controller';
import teachersController from './components/teachers/controller';
import responseCodes from './components/general/responseCodes'


app.use(express.json());
app.use(cors());

// pordi nr mida api kuulab 
const port = 3000; 



/**
* group interface
*/
interface group {
  id: number;
  Name: string;
}

/**
* course interface
*/
interface course {
  id: number;
  Name: string;
}

/**
* teacher interface
*/
interface teacher {
  id: number;
  Name: string;
}

/**
* homework interface
*/
interface homework {
  id: number;
  group: number;
  teacher: number;
  Name: string;
  dueDate: string;
}

/**
* Database interface
*/
interface Db {
  groups: group[];
  courses: course[];
  teachers: teacher[];
  homeworks: homework[];

}



/**
* API test endpoint
*/
app.get('/ping', (req: Request, res: Response) => {
  res.status(responseCodes.ok).json({
    message: 'Alive',
  });
});

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
 
/** --------------------------------------------------------------------------------------- */

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