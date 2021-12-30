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
    
deleteById: async (req: Request, res: Response) => {

  const id: number = parseInt(req.params.id, 10);

  if (!id) {
    return res.status(responseCodes.badRequest).json({error: 'No valid id provided',});
  }

  const Group = await groupsService.deleteGroupById(id);

  if (!Group) { 
    return res.status(responseCodes.badRequest).json({
      message: `Group not found with id: ${id}`,
    });
  }
  return res.status(responseCodes.noContent).json({});

},

add: async (req: Request, res: Response) => {
    const { Name } = req.body;

    if (!Name) {
      return res.status(responseCodes.badRequest).json({error: 'Group name is required',});
    }

    const id = await groupsService.addGroup(Name);

    if (!id) {
      return res.status(responseCodes.badRequest).json({
        message: "Something went wrong with sql connection", });
    }

    return res.status(responseCodes.created).json({id,});
  },

  updateById: async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
      const { Name } = req.body;

      if (!id) {
        return res.status(responseCodes.badRequest).json({error: 'No valid id provided',});
      }
      if (!Name ) {
        return res.status(responseCodes.badRequest).json({error: 'Nothing to update',});
      }
      const result = await groupsService.updateGroupById(id, Name);
      if (!result) {
        return res.status(responseCodes.badRequest).json({error: `No group found with id: ${id}`,});
      }
      return res.status(responseCodes.noContent).json({});

  },

};
export default groupsController;
