import { IUserInfo } from 'src/app/common/model/user-info.model';

export interface ILoginResponse {
    user: IUserInfo;
    token: string;
}
