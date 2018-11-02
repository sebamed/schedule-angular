import { IRole } from './role.model';

export interface IUserInfo {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: IRole;
}
