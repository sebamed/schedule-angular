export class ApiConsts {
    private static API = 'http://localhost:8080/api';

    public static LOGIN_ENDPOINT = ApiConsts.API + '/auth/login';
    public static REGISTER_ENDPOINT = ApiConsts.API + '/auth/register';

    public static SUBJECT_ENDPOINT = '/subjects';
    public static SUBJECT_ALL_GET = ApiConsts.API + ApiConsts.SUBJECT_ENDPOINT;
    public static SUBJECT_CREATE = ApiConsts.API + ApiConsts.SUBJECT_ENDPOINT;
    public static SUBJECT_UPDATE = ApiConsts.API + ApiConsts.SUBJECT_ENDPOINT;

    public static ROLE_ALL_GET = ApiConsts.API + '/roles';
    public static ROLE_CREATE = ApiConsts.API + '/roles';

    public static USER_ENDPOINT = ApiConsts.API + '/users';
    public static USER_ALL_BY_ROLE = ApiConsts.USER_ENDPOINT + '/role/';
    public static USER_ALL_BY_SUBJECT = ApiConsts.USER_ENDPOINT + '/skill/';

    public static LESSON_ENDPOINT = ApiConsts.API + '/lessons';
    public static LESSON_ALL_BY_SKILL_NAME = ApiConsts.LESSON_ENDPOINT + '/skill/'; // + skill name
    public static LESSON_ALL_BY_TEACHER_ID = ApiConsts.LESSON_ENDPOINT + '/confirmed/'; // + teachers id
    public static LESSON_CONFIRM = ApiConsts.LESSON_ENDPOINT + '/confirm';
    public static LESSON_CANCEL = ApiConsts.LESSON_ENDPOINT + '/cancel';
}
