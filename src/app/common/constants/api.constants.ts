export class ApiConsts {
    private static API = 'http://localhost:8080/api';

    public static LOGIN_ENDPOINT = ApiConsts.API + '/auth/login';
    public static REGISTER_ENDPOINT = ApiConsts.API + '/auth/register';

    public static SUBJECT_ALL_GET = ApiConsts.API + '/subjects';

    public static USER_ENDPOINT = ApiConsts.API + '/users/';
}
