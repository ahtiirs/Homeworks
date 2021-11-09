import {Request, Response} from 'express';
import responseCodes from '../general/responseCodes'
import db from './../../db';
import teachersService from './service';
const teachersController = {

  getAll: (req: Request, res: Response) => {
        const data = teachersService.getAll(req , res );  
        return res.status(responseCodes.ok).json({
        data,
      });
  },
  getById: (req: Request, res: Response) => {
        const data=teachersService.getById(req , res );
        return data;
  },
  deleteById: (req: Request, res: Response) => {
      const data=teachersService.deleteById(req , res );
      return data;
  },
  add: (req: Request, res: Response) => {
    const data=teachersService.add(req , res );
    return data;
  },
  updateById: (req: Request, res: Response) => {
    const data=teachersService.updateById(req , res );
    return data;
  },
   
};

export default teachersController;
