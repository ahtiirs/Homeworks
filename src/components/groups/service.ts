import {Request, Response} from 'express';
import db from './../../db'
import group from './interfaces';
import responseCodes from '../general/responseCodes'
import pool from '../../database';
import { RowDataPacket, FieldPacket, ResultSetHeader } from 'mysql2';


const groupsService = {
   getAllgroups: async(): Promise<RowDataPacket[] | boolean> => {
     
    try {   
      const [groups,  fields]: [RowDataPacket[], FieldPacket[] ] =
      await pool.query('SELECT id, name FROM HomeWork.groups ;');
      return groups;
    } catch (error) {
    console.log(error);
    return false;
    }
  },  



    getGroupById:async(id: number): Promise<RowDataPacket | boolean | group> => {
      try {
        const [user,  fields]: [RowDataPacket[], FieldPacket[]] = await pool.query(
          'SELECT * FROM HomeWork.groups WHERE id = ? AND dateDeleted IS NULL;',id);
          console.log(user);
        return user[0];
      } catch (error) {
        console.log(error);
        return false;
      }

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