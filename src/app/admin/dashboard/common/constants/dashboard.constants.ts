import { AppConstants } from 'src/app/common/constants/app.constants';

export class DashboardConstants {
    public static ADMIN_PROFILE_DROPDOWN_ITEMS = [
        {
            title: 'Profile',
            link: ['/admin/add-skills']
        }, {
            title: 'Logout'
        }
    ];

    public static SIDEBAR_ITEMS = [
        {
            title: 'Dashboard',
            group: false,
            link: ['/admin/add-skills'],
            icon: AppConstants.ICON_DASHBOARD,
            home: true
        },
        {
            title: 'Lessons',
            expanded: false,
            icon: AppConstants.ICON_LESSON,
            children: [
                {
                    title: 'Overview',
                    link: ['/admin/lesson']
                },
                {
                    title: 'My Lessons',
                    children: [
                        {
                            title: 'Requests',
                            link: ['/admin/lesson/my-lessons/requests']
                        },
                        {
                            title: 'Confirmed',
                            link: ['/admin/lesson/my-lessons/confirmed']
                        },
                        {
                            title: 'Done',
                            link: ['/admin/lesson/my-lessons/done']
                        },
                        {
                            title: 'Canceled',
                            link: ['/admin/lesson/my-lessons/canceled']
                        }
                    ]
                }
            ],
        },
        {
            title: 'Subjects',
            expanded: false,
            icon: AppConstants.ICON_SUBJECT,
            children: [
                {
                    title: 'Overview',
                    link: ['/admin/subject']
                },
                {
                    title: 'Teachers by subject',
                    link: ['/admin/subject/teachers']
                }
            ],
        },
        {
            title: 'Roles',
            expanded: false,
            icon: AppConstants.ICON_ROLE,
            children: [
                {
                    title: 'Overview',
                    link: ['/admin/role']
                },
                {
                    title: 'User by role',
                    link: ['/admin/role/users']
                }
            ],
        }
    ];

    // smart table settings
    public static TABLE_SETTINGS_SUBJECT = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true
        },
        actions: {
            delete: false
        },
        columns: {
            id: {
                title: 'ID',
                editable: false
            },
            name: {
                title: 'Name'
            }
        }
    };

    public static TABLE_SETTINGS_ROLE = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true
        },
        actions: {
            delete: false,
            edit: false
        },
        columns: {
            id: {
                title: 'ID',
                editable: false
            },
            name: {
                title: 'Name'
            }
        }
    };

    public static TABLE_SETTINGS_ENTITY_USER = {
        actions: {
            delete: false,
            edit: false,
            add: false
        },
        columns: {
            id: {
                title: 'ID'
            },
            firstName: {
                title: 'Name'
            },
            lastName: {
                title: 'Surname'
            },
            email: {
                title: 'Email'
            }
        }
    };
}


