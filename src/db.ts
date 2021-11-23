import course from './components/courses/interfaces';
import group from './components/groups/interfaces';
import teacher from './components/teachers/interfaces';
import homework from './components/homeworks/interfaces';
import { User } from './components/users/interfaces';

/**
* Database interface
*/
  interface Db {
    groups: group[];
    courses: course[];
    teachers: teacher[];
    homeworks: homework[];
    users: User[];
  
  }
/**
* Mock database
*/
const db: Db = {
  users: [
    {
      id: 1,
      firstName: 'Juku',
      lastName: 'Juurikas',
      email: 'juku@juurikas.ee',
      password: '$2b$10$nevnzRS0jBjFh.KEYSoQ6u75M7FdLA7vXEgbbV9iHfU7W/.6W9hFa',
      role: 'Admin',
    },
    {
      id: 2,
      firstName: 'Mari',
      lastName: 'Maasikas',
      email: 'mari@maasikas.ee',
      password: '$2b$10$nevnzRS0jBjFh.KEYSoQ6u75M7FdLA7vXEgbbV9iHfU7W/.6W9hFa',
      role: 'User',
    },
    {
      id: 3,
      firstName: 'Ahti',
      lastName: 'Irs',
      email: 'ahti@hts.ee',
      password: '$2b$10$MI/Fs2Ptku0WzqF2iuyjMuVdEY2THM/dW0CasUl/KqfMgTVQCJ9YW',
      role: 'Admin',
    }
  ],
  groups: [
      {
        id: 1,
        Name: "RIF1",
    },
    {
        id: 2,
        Name: "RIF2 ",
    },
    {
        id: 3,
        Name: "RIF3 ",
    },
    {
        id: 4,
        Name: "LO 1",
    },
    {
        id: 5,
        Name: "LO 2",
    },
    {
        id: 6,
        Name: "LO 3",
    },
    {
        id: 7,
        Name: "KTD 1",
    },
    {
        id: 8,
        Name: "KTD 2",
    },
    {
        id: 9,
        Name: "KTD 3",
    },
    ],
    courses: [
      {
        id: 1,
        Name: 'Programmeerimine II (HKI5003.HK) []',
      },
      {
      id: 2,
      Name: 'Erialane inglise keel II (HKI5090.HK) []',
      },
      {
        id: 3,
        Name: 'Veebiraamistikud (HKI5087.HK) []',
     },
    ],
    teachers: [
      {
        id: 1,
        Name: 'Martti Raavel',
      },
      {
        id: 2,
        Name: 'Mari Kuli',
      },
      {
        id: 3,
        Name: 'Jaagup Kippar',
      },
      {
        id: 4,
        Name: 'Laura Hein',
      },
    ],
    homeworks: [
      {
        id: 1,
        group: 1,
        teacher: 1,
        Name: 'NODE Api 3 sisendpnktiga eri tegevustega',
        dueDate: '27.09.2021',
      },
      {
        id: 2,
        group: 1,
        teacher: 1,
        Name: 'NODE Api teha komponentideks ja dokumenteerida',
        dueDate: '10.11.2021',
      },
      {
        id: 3,
        group: 1,
        teacher: 2,
        Name: 'miski muu asi',
        dueDate: '27.09.2021',
      },
    ],
  };

export default db;
  