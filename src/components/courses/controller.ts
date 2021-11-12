import {Request, Response} from 'express';
import responseCodes from '../general/responseCodes'
// import db from './../../db';
import coursesService from './service';
const coursesController = {

getAll: (req: Request, res: Response) => {
  const data = coursesService.getAll();  
  return res.status(responseCodes.ok).json({
  data,
    });
  },
  
getById: (req: Request, res: Response) => {
  const data=coursesService.getById(req , res );
  return data;
  },
deleteById: (req: Request, res: Response) => {
  const data=coursesService.deleteById(req , res );
  return data;
  },
add: (req: Request, res: Response) => {
  const data=coursesService.add(req , res );
  return data;
  },
updateById: (req: Request, res: Response) => {
  const data=coursesService.updateById(req , res );
  return data;
  },
};

export default coursesController;
