import {Request, Response} from 'express';
import db from './../../db'
import teacher from './interfaces';
import responseCodes from '../general/responseCodes'


const teachersService = {
    getAll:(req: Request, res: Response )  =>{
      const { teachers } = db;
      return res.status(responseCodes.ok).json({
        teachers,
      });
    },
    
    getById:(req: Request, res: Response ) =>{
      const id: number = parseInt(req.params.id, 10);
      if (!id) {
        return res.status(responseCodes.badRequest).json({
          error: 'No valid id provided',
        });
      }
      const teacher = db.teachers.find((element) => element.id === id);
      if (!teacher) {
        return res.status(responseCodes.badRequest).json({
          error: `No user found with id: ${id}`,
        });
      }
      return res.status(responseCodes.ok).json({
        teacher,
      });
    },
    
    deleteById: (req: Request, res: Response) => {
      const id: number = parseInt(req.params.id, 10);
      if (!id) {
        return res.status(responseCodes.badRequest).json({
          error: 'No valid id provided',
        });
      }
      const index = db.teachers.findIndex((element) => element.id === id);
      if (index < 0) {
        return res.status(responseCodes.badRequest).json({
          message: `Course not found with id: ${id}`,
        });
      }
      db.teachers.splice(index, 1);
      return res.status(responseCodes.noContent).json({});
    },

    add: (req: Request, res: Response) => {
      const { Name } = req.body;
      if (!Name) {
        return res.status(responseCodes.badRequest).json({
          error: 'Course name is required',
        });
      }
      const id = db.teachers.length + 1;
      db.teachers.push({
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


export default teachersService;