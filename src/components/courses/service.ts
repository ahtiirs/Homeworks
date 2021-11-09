import {Request, Response} from 'express';
import db from './../../db'
import course from './interfaces';
import responseCodes from '../general/responseCodes'


const coursesService = {
    getAll:() =>{
        const { courses } = db;
        return courses;
    },
    getById:(req: Request, res: Response ) =>{ 
        const id: number = parseInt(req.params.id, 10);
        console.log(id);
        if (!id) {
          return res.status(responseCodes.badRequest).json({
            error: 'No valid id provided',
          });
        }
        const course = db.courses.find((element) => element.id === id);
        
        if (!course) {
          return res.status(responseCodes.badRequest).json({
            error: `No user found with id: ${id}`,
          });
        }
        return res.status(responseCodes.ok).json({
          course,
        });

    },
    deleteById: (req: Request, res: Response) => {
      const id: number = parseInt(req.params.id, 10);
      if (!id) {
        return res.status(responseCodes.badRequest).json({
          error: 'No valid id provided',
        });
      }
      const index = db.courses.findIndex((element) => element.id === id);
      if (index < 0) {
        return res.status(responseCodes.badRequest).json({
          message: `Course not found with id: ${id}`,
        });
      }
      db.courses.splice(index, 1);
      return res.status(responseCodes.noContent).json({});
    },  
    add: (req: Request, res: Response) => {
      const { Name } = req.body;
      if (!Name) {
        return res.status(responseCodes.badRequest).json({
          error: 'Course name is required',
        });
      }
      const id = db.courses.length + 1;
      db.courses.push({
        id,
        Name
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
      const index = db.courses.findIndex((element) => element.id === id);
      if (index < 0) {
        return res.status(responseCodes.badRequest).json({
          error: `No course found with id: ${id}`,
        });
      }
      if (Name) {
        db.courses[index].Name = Name;
      }
     
     
      return res.status(responseCodes.noContent).json({});
    },
};

export default coursesService;