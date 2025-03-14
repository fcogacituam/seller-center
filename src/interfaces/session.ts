export interface SessionInterface {
  accessToken: string;
  expiresIn: number;
  jwtPayload: Partial<JWTPayloadInterface>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export enum roles {
  ADMIN = 'admin',
  SELLER = 'seller',
}
interface JWTPayloadInterface {
  apiKey: string | null;
  email: string;
  facilityId: string;
  financial_access: boolean;
  firstName: string;
  id: string;
  isCollector: boolean | null;
  lastName: string;
  permissions: PermissionsInterface[];
  policies: PoliciesInterface[];
  role: string;
  sellerIsPublished: boolean | null;
  sellerSapClient: string | null;
  sellerSapProvider: string | null;
  sellerId: string;
  sellerName: string | null;
  sellerStatus: string | null;
  sellerType: string | null;
  [key: string]: unknown;
  userId: string;
}

interface PoliciesInterface {
  id: string;
  name: string;
  abilities: never[];
  action: string;
  effect: string;
  resource: string;
  target: string;
}

interface PermissionsInterface {
  c: string;
  a: string;
}

export interface VerifySessionInterface {
  isAuth: boolean;
  accessToken: string;
  role: string;
}
