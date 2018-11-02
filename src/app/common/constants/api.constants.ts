export class ApiConsts {
    private static API = 'http://localhost:8080/api';

    public static LOGIN_ENDPOINT = ApiConsts.API + '/auth/login';
    public static REGISTER_ENDPOINT = ApiConsts.API + '/auth/register';
}
