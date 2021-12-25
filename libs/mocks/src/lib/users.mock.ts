import { EGender } from '@project/enums';
import { IUser } from '@project/interfaces';

export const usersMock: IUser[] = [
  {
    id: '1',
    email: 'user1@email.com',
    firstName: 'Firstone',
    lastName: 'Lastone',
    birthDate: new Date(
      'Sat Dec 25 2021 02:46:44 GMT+0100 (Mitteleuropäische Normalzeit)'
    ),
    gender: EGender.Male,
    phoneNumber: '015555555',
    skillFks: [1, 2],
    createdAt: new Date(
      'Sat Dec 25 2021 02:46:44 GMT+0100 (Mitteleuropäische Normalzeit)'
    ),
    updatedAt: null,
  },
  {
    id: '2',
    email: 'user2@email.com',
    firstName: 'Firsttwo',
    lastName: 'Lasttwo',
    birthDate: new Date(
      'Sat Dec 25 2021 02:46:44 GMT+0100 (Mitteleuropäische Normalzeit)'
    ),
    gender: EGender.Male,
    phoneNumber: '015555555',
    skillFks: [1, 2],
    createdAt: new Date(
      'Sat Dec 25 2021 02:46:44 GMT+0100 (Mitteleuropäische Normalzeit)'
    ),
    updatedAt: null,
  },
];
