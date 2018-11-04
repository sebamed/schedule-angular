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
                    link: ['/admin/subject'], // goes into angular `routerLink`
                },
                {
                    title: 'Create',
                    link: [],
                }
            ],
        },
        {
            title: 'Lessons',
            expanded: false,
            icon: AppConstants.ICON_USER,
            children: [
                {
                    title: 'Overview',
                    link: [], // goes into angular `routerLink`
                },
                {
                    title: 'Privacy Policy',
                    ulr: '#', // goes directly into `href` attribute
                },
                {
                    title: 'Logout',
                    link: [],
                },
            ],
        }, {
            title: 'Users',
            expanded: false,
            icon: 'nb-person',
            children: [
                {
                    title: 'Change Password',
                    link: [], // goes into angular `routerLink`
                },
                {
                    title: 'Privacy Policy',
                    ulr: '#', // goes directly into `href` attribute
                },
                {
                    title: 'Logout',
                    link: [],
                },
            ],
        }, {
            title: 'Users',
            expanded: false,
            icon: 'nb-person',
            children: [
                {
                    title: 'Change Password',
                    link: [], // goes into angular `routerLink`
                },
                {
                    title: 'Privacy Policy',
                    ulr: '#', // goes directly into `href` attribute
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
                editable: false,
                creatable: false
            },
            name: {
                title: 'Name'
            }
        }
    };
}


