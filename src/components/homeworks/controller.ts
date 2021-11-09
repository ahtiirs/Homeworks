import {Request, Response} from 'express';
import responseCodes from '../general/responseCodes'
import db from './../../db';
import homeworksService from './service';
const homeworksController = {

  getAll: (req: Request, res: Response) => {
        const data = homeworksService.getAll(req , res );  
        return data;
  },
  getById: (req: Request, res: Response) => {
        const data=homeworksService.getById(req , res );
        return data;
  },
  deleteById: (req: Request, res: Response) => {
      const data=homeworksService.deleteById(req , res );
      return data;
  },
  add: (req: Request, res: Response) => {
    const data=homeworksService.add(req , res );
    return data;
  },
  updateById: (req: Request, res: Response) => {
    const data=homeworksService.updateById(req , res );
    return data;
  },
   
};

export default homeworksController;
