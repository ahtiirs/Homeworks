import {Request, Response} from 'express';
import responseCodes from '../general/responseCodes'
import db from './../../db';
import groupsService from './service';
const groupsController = {

getAll: async(req: Request, res: Response) => {
          const groupsList = await groupsService.getAllgroups();  
          return res.status(responseCodes.ok).json({
          groupsList,
        });
      },
    
getById: async(req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(responseCodes.badRequest).json({
      error: 'No valid id provided',
    });
  }
    const result = await groupsService.getGroupById(id);
  // const group = db.groups.find((element) => element.id === id);
  if (!result) {
    return res.status(responseCodes.badRequest).json({
      error: `No group found with id: ${id}`,
    });
  }
  return res.status(responseCodes.ok).json({result,});

  },
    
deleteById: (req: any, res: any) => {
  const Group = groupsService.deleteGroupById(req , res );
  return Group;
  },
add: (req: any, res: any) => {
  const Group = groupsService.addGroup(req , res );
  return Group;
  },
updateById: (req: any, res: any) => {
  const Group = groupsService.updateGroupById(req , res );
  return Group;
  },

};



export default groupsController;
