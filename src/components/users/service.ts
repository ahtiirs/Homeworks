// import { getConnection } from 'typeorm';

import db from '../../db';
import { User, UpdateUser, NewUser } from './interfaces';
import hashService from '../general/services/hashService';
import hwUser from './entity';

const connection = getConnection();


const usersService = {

  getAllUsers: (): User[] | undefined => {
      const { users } = db;
      return users; 
  },
  /**
   * Returns user or undefined
   */
  getUserById: (id: number): User | undefined => {
    const user = db.users.find((element) => element.id === id);
    return user;
  },
  getUserByEmail: (email: string): User | undefined => {
    console.log(email, db.users);
    const user = db.users.find((element) => element.email == email);
    console.log(user);
    return user;
  },
  removeUser: (id: number): boolean => {
    const index = db.users.findIndex((element) => element.id === id);
    db.users.splice(index, 1);
    return true;
  },
  createUser: async (newUser: NewUser) => {
    // const id = db.users.length + 1;
    // const hashedPassword = await hashService.hash(newUser.password);
    // db.users.push({
    //   id,
    //   ...newUser,
    //   password: hashedPassword,
    // });
    // return id;
    const hashedPassword = await hashService.hash(newUser.password);
    const user = {
      ...newUser,
      password: hashedPassword,
    };
    // const result = await connection.getRepository(hwUser).save(user);
    return true;

  },
  updateUser: (user: UpdateUser): boolean => {
    const { id, firstName, lastName } = user;
    const index = db.users.findIndex((element) => element.id === id);
    if (firstName) {
      db.users[index].firstName = firstName;
    }
    if (lastName) {
      db.users[index].lastName = lastName;
    }
    return true;
  },
};

export default usersService;
