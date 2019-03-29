//using Admin LTE template, for details refer https://mledour.github.io/angular-admin-lte/branches/master/#/layout/configuration

export var adminLteConf = {
    skin: 'blue',
    isSidebarLeftCollapsed: false,
    sidebarLeftMenu: [
        {label: 'Home', route: '/', iconClasses: 'fa fa-home'},
        {label: 'System Settings', iconClasses: 'fa fa-cogs'},
        {label: 'User Management',  iconClasses: 'fa fa-users'},
        {label: 'Reports',iconClasses: 'fa fa-line-chart'}
    ],
    sidebarRightSkin: 'dark'
};