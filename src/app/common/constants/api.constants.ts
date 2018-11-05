export class ApiConsts {
    private static API = 'http://localhost:8080/api';

    public static LOGIN_ENDPOINT = ApiConsts.API + '/auth/login';
    public static REGISTER_ENDPOINT = ApiConsts.API + '/auth/register';

    public static SUBJECT_ALL_GET = ApiConsts.API + '/subjects';
    public static SUBJECT_CREATE = ApiConsts.API + '/subjects';
    public static SUBJECT_UPDATE = ApiConsts.API + '/subjects';

    public static ROLE_ALL_GET = ApiConsts.API + '/roles';
    public static ROLE_CREATE = ApiConsts.API + '/roles';

    public static USER_ENDPOINT = ApiConsts.API + '/users/';
    public static USER_ALL_BY_ROLE = ApiConsts.USER_ENDPOINT + 'role/';
}
