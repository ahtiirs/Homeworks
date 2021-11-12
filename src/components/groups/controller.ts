import {Request, Response} from 'express';
import responseCodes from '../general/responseCodes'
import db from './../../db';
import groupsService from './service';
const groupsController = {

getAll: (req: Request, res: Response) => {
          const groupsList = groupsService.getAllgroups();  
          return res.status(responseCodes.ok).json({
          groupsList,
        });
      },
    
getById: (req: Request, res: Response) => {
  const Group = groupsService.getGroupById(req , res );
  return Group;
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
