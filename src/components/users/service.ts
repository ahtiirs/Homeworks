import { RowDataPacket, FieldPacket, ResultSetHeader } from 'mysql2';

import db from '../../db';
import { IUser, IUpdateUser, INewUser } from './interfaces';
import hashService from '../general/services/hashService';
import pool from '../../database';


const usersService = {

  getAllUsers: async(): Promise<RowDataPacket[]> => {
    const [users,  fields]: [RowDataPacket[], FieldPacket[]] = await pool.query('SELECT id, email, dateCreated, dateUpdated  FROM users WHERE dateDeleted IS NULL;');
    return users;
   },
  getUserById: async(id: number): Promise<RowDataPacket | boolean | IUser> => {
    // const user = db.users.find((element) => element.id === id);
    try {
      const [user,  fields]: [RowDataPacket[], FieldPacket[]] = await pool.query(
        'SELECT firstName, lastName, email, role, dateCreated, dateUpdated  FROM users WHERE id = ? AND dateDeleted IS NULL;',id);
        console.log(user);
      return user[0];
    } catch (error) {
      console.log(error);
      return false;
    }

  },
     getUserByEmail: async (email: string): Promise<IUser | false> => {
      try {
        const [user]: any | [IUser[], FieldPacket[]] = await pool.query('SELECT * FROM users WHERE email = ? AND dateDeleted IS NULL', [email]);
        return user[0];
      } catch (error) {
        console.log(error);
        return false;
      }
    

  },
  removeUser: async(id: number): Promise<boolean> => {
    // const index = db.users.findIndex((element) => element.id === id);
    // db.users.splice(index, 1);
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    try {
      const [user,  fields]: [RowDataPacket[], FieldPacket[]] = await pool.query(
      'UPDATE users SET dateDeleted = ? WHERE id = ? AND dateDeleted IS NULL;', [currentDate, id]);
       return true;
    } catch (error) {
      console.log(error);
      return false;
    }

  },
  createUser: async (newUser: INewUser): Promise<Number | false>=> {
    try {
          const hashedPassword = await hashService.hash(newUser.password);
          const user: INewUser = {
          ...newUser,
          password: hashedPassword,
          };

        const [result]:[ResultSetHeader, FieldPacket[]] = await pool.query('INSERT INTO users SET ?;',[user]);
        return result.insertId;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  updateUser: async(user: IUpdateUser): Promise<boolean> => {

    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const id = user.id;
   
    let edituser:any = {
      ...user,
      dateUpdated: currentDate,
      };
    delete edituser.id;

    try {
      const [user,  fields]: [RowDataPacket[], FieldPacket[]] = await pool.query(
      'UPDATE users SET ? WHERE id = ? AND dateDeleted IS NULL;', [edituser, id]);
       return true;
    } catch (error) {
      console.log(error);
      return false;
    }

  },
};

export default usersService;
