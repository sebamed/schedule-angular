import { ISubject } from './subject.model';

export interface ICourse {
    id: number;
    types: string[];
    material: string[];
    subject: ISubject;
}
