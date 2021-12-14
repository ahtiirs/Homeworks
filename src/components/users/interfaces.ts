/**
 * User interface
 */
 interface INewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'Admin' | 'User';
}

interface IUser extends INewUser{
  id: number;
  dateCreated: Date;
  dateUpdated: Date;
  dateDeleted: Date | null;
}

interface IUpdateUser {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: 'Admin' | 'User';
}

export { IUser, IUpdateUser, INewUser };
