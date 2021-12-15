import {Request, Response} from 'express';
import responseCodes from '../general/responseCodes'
// import db from './../../db';
import coursesService from './service';
const coursesController = {

getAll: async (req: Request, res: Response) => {
  const courses = await coursesService.getAll();  
  return res.status(responseCodes.ok).json({
  courses,
    });
  },
  
getById: async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  if (!id) { return res.status(responseCodes.badRequest).json({
    error: 'No valid id provided', });
  }
    const course = await coursesService.getById(id);
    console.log(course);

  if (!course) { return res.status(responseCodes.badRequest).json({
      error: `No user found with id: ${id}`, });
    }
  return res.status(responseCodes.ok).json({
    course });
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
