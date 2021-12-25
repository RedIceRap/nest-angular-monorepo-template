// export interface IUserMetadata {
//   createdAt: string;
//   creationTime: Date;
//   lastLoginAt: string;
//   lastSignInTime: Date;
// }

import { EGender } from '@project/enums';

// export interface IStsTokenManager {
//   accessToken: string;
//   expirationTime: number;
//   refreshToken: string;
// }

// export interface IUser {
//   accessToken: string;
//   displayName: string;
//   email: string;
//   emailVerified: boolean;
//   isAnonymous: boolean;
//   metadata: IUserMetadata;
//   phoneNumber: string;
//   photoURL: string;
//   providerId: 'firebase';
//   reloadUserInfo: string;
//   stsTokenManager: IStsTokenManager;
//   tenantId: string;
//   uid: string;
// }
export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: EGender;
  phoneNumber: string;
  skillFks: Array<number>;
  createdAt: Date;
  updatedAt: Date | null;
}
