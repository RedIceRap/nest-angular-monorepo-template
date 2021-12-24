export interface IUserMetadata {
  createdAt: string;
  creationTime: Date;
  lastLoginAt: string;
  lastSignInTime: Date;
}

export interface IStsTokenManager {
  accessToken: string;
  expirationTime: number;
  refreshToken: string;
}

export interface IUser {
  accessToken: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: IUserMetadata;
  phoneNumber: string;
  photoURL: string;
  providerId: 'firebase';
  reloadUserInfo: string;
  stsTokenManager: IStsTokenManager;
  tenantId: string;
  uid: string;
}
