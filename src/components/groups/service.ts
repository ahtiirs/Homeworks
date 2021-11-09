import {Request, Response} from 'express';
import db from './../../db'
import group from './interfaces';
import responseCodes from '../general/responseCodes'


const groupsService = {
    getAllgroups:() =>{
        const { groups } = db;
        return groups;
    },
    getGroupById:(req: Request, res: Response ) =>{ 
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(responseCodes.badRequest).json({
            error: 'No valid id provided',
          });
        }
        const group = db.groups.find((element) => element.id === id);
        if (!group) {
          return res.status(responseCodes.badRequest).json({
            error: `No group found with id: ${id}`,
          });
        }
        return res.status(responseCodes.ok).json({
          group,
        });

    },
    deleteGroupById:(req: Request, res: Response ) =>{
      const id: number = parseInt(req.params.id, 10);
      if (!id) {
        return res.status(responseCodes.badRequest).json({
          error: 'No valid id provided',
        });
      }
      const index = db.groups.findIndex((element) => element.id === id);
      if (index < 0) {
        return res.status(responseCodes.badRequest).json({
          message: `Group not found with id: ${id}`,
        });
      }
      db.groups.splice(index, 1);
      return res.status(responseCodes.noContent).json({});
    },
    addGroup: (req: Request, res: Response ) =>{
      const { Name } = req.body;
      if (!Name) {
        return res.status(responseCodes.badRequest).json({
          error: 'Group name is required',
        });
      }
      const id = db.groups.length + 1;
      db.groups.push({
        id,
        Name
      });
      return res.status(responseCodes.created).json({
        id,
      });
    },
    updateGroupById: (req: Request, res: Response) =>{
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
      const index = db.groups.findIndex((element) => element.id === id);
      if (index < 0) {
        return res.status(responseCodes.badRequest).json({
          error: `No group found with id: ${id}`,
        });
      }
      if (Name) {
        db.groups[index].Name = Name;
      }
        return res.status(responseCodes.noContent).json({});
    },
};

export default groupsService;