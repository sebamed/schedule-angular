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
            title: 'Subjects',
            expanded: false,
            icon: AppConstants.ICON_SUBJECT,
            children: [
                {
                    title: 'Overview',
                    link: ['/admin/subject']
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
        }, {
            title: 'Users',
            expanded: false,
            icon: 'nb-person',
            children: [
                {
                    title: 'Change Password',
                    link: [],
                },
                {
                    title: 'Privacy Policy',
                    ulr: '#',
                },
                {
                    title: 'Logout',
                    link: []
                },
            ],
        }, {
            title: 'Users',
            expanded: false,
            icon: 'nb-person',
            children: [
                {
                    title: 'Change Password',
                    link: []
                },
                {
                    title: 'Privacy Policy',
                    ulr: '#'
                },
                {
                    title: 'Logout',
                    link: [],
                },
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

    public static TABLE_SETTINGS_ROLE_USER = {
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


