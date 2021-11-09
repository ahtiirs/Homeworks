import {Request, Response} from 'express';
import db from './../../db'
import homework from './interfaces';
import responseCodes from '../general/responseCodes'


const coursesService = {
    getAll:(req: Request, res: Response )  =>{
      const { homeworks } = db;
      return res.status(responseCodes.ok).json({
        homeworks,
      });
    },
    
    getById:(req: Request, res: Response ) =>{
      const id: number = parseInt(req.params.id, 10);
      if (!id) {
        return res.status(responseCodes.badRequest).json({
          error: 'No valid id provided',
        });
      }
      const homework = db.homeworks.find((element) => element.id === id);
      if (!homework) {
        return res.status(responseCodes.badRequest).json({
          error: `No homework found with id: ${id}`,
        });
      }
      return res.status(responseCodes.ok).json({
        homework,
      });
    },
    
    deleteById: (req: Request, res: Response) => {
      const id: number = parseInt(req.params.id, 10);
      if (!id) {
        return res.status(responseCodes.badRequest).json({
          error: 'No valid id provided',
        });
      }
      const index = db.homeworks.findIndex((element) => element.id === id);
      if (index < 0) {
        return res.status(responseCodes.badRequest).json({
          message: `Homework not found with id: ${id}`,
        });
      }
      db.homeworks.splice(index, 1);
      return res.status(responseCodes.noContent).json({});
    },

    add: (req: Request, res: Response) => {
    const { group, teacher, Name, dueDate } = req.body;
    if (!Name) {
      return res.status(responseCodes.badRequest).json({
        error: 'Homework is required',
      });
    }
    if (!dueDate) {
      return res.status(responseCodes.badRequest).json({
        error: 'Due date is required',
      });
    }
    const id = db.teachers.length + 1;
    db.homeworks.push({
      id,
      group,
      teacher,
      Name,
      dueDate
    });
    return res.status(responseCodes.created).json({
      id,
    });
  },
    updateById: (req: Request, res: Response) => {
      const id: number = parseInt(req.params.id, 10);
      const { Name } = req.body;
      if (!id) {
        return res.status(responseCodes.badRequest).json({
          error: 'No valid id provided',
        });
      }
      if (!Name ) {
        return res.status(responseCodes.badRequest).json({
          error: 'Nothing to update',
        });
      }
      const index = db.teachers.findIndex((element) => element.id === id);
      if (index < 0) {
        return res.status(responseCodes.badRequest).json({
          error: `No teacher found with id: ${id}`,
        });
      }
      if (Name) {
        db.teachers[index].Name = Name;
      }
     
     
      return res.status(responseCodes.noContent).json({});
    },
};


export default coursesService;