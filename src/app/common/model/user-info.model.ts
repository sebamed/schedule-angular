import { IRole } from './role.model';
import { ISubject } from './subject.model';

export interface IUserInfo {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: IRole;
    skills: ISubject[];
}
