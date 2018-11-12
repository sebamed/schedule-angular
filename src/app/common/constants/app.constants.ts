export class AppConstants {

    // variables
    public static TOAST_EXPIRE = 5; // seconds after toast expires
    public static CALENDAR_SHOW_DAYS = 7;
    public static CALENDAR_SHOW_HOURS = 10;

    // toasts
    public static TOAST_INSUFFICIENT_PERMISSION = 'Insufficient permission';
    public static TOAST_LIST_EMPTY = 'No data in list';
    public static TOAST_SUCCESSFULLY_UPDATED = 'Successfully updated';
    public static TOAST_SUCCESSFULLY_JOINED = 'Successfully joined';
    public static TOAST_SUCCESSFULLY_LEFT = 'Successfully left';
    public static TOAST_SUCCESSFULLY_REQUESTED = 'Successfully requested';
    public static TOAST_SUCCESSFULLY_CONFIRMED = 'Successfully confirmed';
    public static TOAST_SUCCESSFULLY_CREATED = 'Successfully created';
    public static TOAST_SUCCESSFULLY_CANCELED = 'Successfully canceled';
    public static TOAST_FIELD_EMPTY = 'Please fill in all necessary fields';
    public static TOAST_CHECK_EMAIL = 'Check your email';

    // roles
    public static ROLE_ADMIN = 'ADMIN';
    public static ROLE_USER = 'USER';

    // icon constants
    public static ICON_DASHBOARD = 'nb-bar-chart';
    public static ICON_USER = 'nb-person';
    public static ICON_ROLE = 'nb-flame-circled';
    public static ICON_SUBJECT = 'nb-edit';
    public static ICON_LESSON = 'nb-compose';

    public static LESSON_TYPES = [
        'Teorija',
        'Zadaci'
    ];

    public static LESSON_MATERIAL = [
        'Kolokvijum 1',
        'Kolokvijum 2',
        'Ispit'
    ];
}
