import {Request, Response} from 'express';
import responseCodes from '../general/responseCodes'
import db from './../../db';
import groupsService from './service';
const groupsController = {

getAllGroups: (req: Request, res: Response) => {
          const groupsList = groupsService.getAllgroups();  
          return res.status(responseCodes.ok).json({
          groupsList,
        });
      },
    
getGroupById: (req: Request, res: Response) => {
  const Group = groupsService.getGroupById(req , res );
  return Group;
  },
    
deleteGroupById: (req: any, res: any) => {
  const Group = groupsService.deleteGroupById(req , res );
  return Group;
  },
addGroup: (req: any, res: any) => {
  const Group = groupsService.addGroup(req , res );
  return Group;
  },
updateGroupById: (req: any, res: any) => {
  const Group = groupsService.updateGroupById(req , res );
  return Group;
  },

};



export default groupsController;
