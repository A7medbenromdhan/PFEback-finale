import { MenuItem } from './menu.model';



    export const PERSONNEL_MENU: MenuItem[] = [
        // ... existing items
        
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/dashboards/saas',
                parentId: 2
            },
           
        ]
    },
    {
        id: 1001,
        label: 'Utilisateur',
        icon: 'bx-briefcase-alt-2',
        subItems: [
          {
            id: 1002,
            label: 'Mes congés',
            link: '/mes-conges',
            parentId: 1001,
          },
          {
            id: 1003,
            label: 'Mes autorisations',
            link: '/mes-autorisations',
            parentId: 1001,
          },
        ],
      },
    {
        id: 7,
        isLayout: true
    },

    
    {
        id: 8,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
   
    
   
    
    
    
    
    {
        id: 39,
        label: 'MENUITEMS.PROJECTS.TEXT',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 40,
                label: 'MENUITEMS.PROJECTS.LIST.GRID',
                link: '/projects/grid',
                parentId: 38
            },
            {
                id: 41,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                link: '/projects/list',
                parentId: 38
            },
            {
                id: 42,
                label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                link: '/projects/overview',
                parentId: 38
            },
            {
                id: 43,
                label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                link: '/projects/create',
                parentId: 38
            }
        ]
    },
    
    
    
    {
        id: 56,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 57,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'bx-user-circle',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.AUTHENTICATION.BADGE',
        },
        subItems: [
            {
                id: 58,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/account/login',
                parentId: 57
            },
            
            {
                id: 60,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/account/signup',
                parentId: 57
            },
           
            {
                id: 62,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/account/reset-password',
                parentId: 57
            },
            
        ]
    },
    
    {
        id: 80,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    
    
    
    
    
    
];

export const CHEF_MENU = [



    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 2
            },
            // {
            //     id: 4,
            //     label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
            //     link: '/dashboards/saas',
            //     parentId: 2
            // },
           
        ]
    },
  //   {
  //     id: 57,
  //     label: 'MENUITEMS.AUTHENTICATION.TEXT',
  //     icon: 'bx-user-circle',
  //     badge: {
  //         variant: 'success',
  //         text: 'MENUITEMS.AUTHENTICATION.BADGE',
  //     },
  //     subItems: [
  //         {
  //             id: 58,
  //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
  //             link: '/account/login',
  //             parentId: 57
  //         },
          
  //         {
  //             id: 60,
  //             label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
  //             link: '/account/signup',
  //             parentId: 57
  //         },
         
  //         {
  //             id: 62,
  //             label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
  //             link: '/account/reset-password',
  //             parentId: 57
  //         },
          
  //     ]
  // },
    {
        id: 1001,
        label: 'Utilisateur',
        icon: 'bx-briefcase-alt-2',
        subItems: [
          {
            id: 1002,
            label: 'Mes congés',
            link: '/mes-conges',
            parentId: 1001,
          },
          {
            id: 1003,
            label: 'Mes autorisations',
            link: '/mes-autorisations',
            parentId: 1001,
          },
        ],
      },
    // ...
    {
      id: 101,
      label: 'Manager',
      icon: 'bx-briefcase-alt-2',
      subItems: [
        {
          id: 102,
          label: 'congés',
          link: '/manager/conges',
          parentId: 101,
        },
        {
          id: 103,
          label: 'Autorisations',
          link: '/manager/autorisations',
          parentId: 101,
        },
      ],
    },
    {
      id: 104,
      label: 'Consulter',
      icon: 'bx-search',
      subItems: [
        {
          id: 105,
          label: 'Services',
          link: '/consulter',
          parentId: 104,
        },
      ],
    },
  ];
  
  export const ADMIN_MENU = [
    // ...
    
        {
            id: 1,
            label: 'MENUITEMS.MENU.TEXT',
            isTitle: true
        },
        {
            id: 2,
            label: 'MENUITEMS.DASHBOARDS.TEXT',
            icon: 'bx-home-circle',
            badge: {
                variant: 'info',
                text: 'MENUITEMS.DASHBOARDS.BADGE',
            },
            subItems: [
                {
                    id: 3,
                    label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                    link: '/dashboard',
                    parentId: 2
                },
                // {
                //     id: 4,
                //     label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                //     link: '/dashboards/saas',
                //     parentId: 2
                // },
               
            ]
        },
      //   {
      //     id: 57,
      //     label: 'MENUITEMS.AUTHENTICATION.TEXT',
      //     icon: 'bx-user-circle',
      //     badge: {
      //         variant: 'success',
      //         text: 'MENUITEMS.AUTHENTICATION.BADGE',
      //     },
      //     subItems: [
      //         {
      //             id: 58,
      //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
      //             link: '/account/login',
      //             parentId: 57
      //         },
              
      //         {
      //             id: 60,
      //             label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
      //             link: '/account/signup',
      //             parentId: 57
      //         },
             
      //         {
      //             id: 62,
      //             label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
      //             link: '/account/reset-password',
      //             parentId: 57
      //         },
              
      //     ]
      // },

        {
      id: 201,
      label: 'Administrer',
      icon: 'bx-briefcase-alt-2',
      subItems: [
        {
          id: 202,
          label: 'Demandes de congés',
          link: '/administrer/demande-conges',
          parentId: 201,
        },
        {
          id: 203,
          label: 'Services',
          link: '/administrer/gestion-services',
          parentId: 201,
        },
        {
            id: 203,
            label: 'Personnel',
            link: '/administrer/personneles',
            parentId: 201,
          },
        {
          id: 204,
          label: 'Demandes d\'autorisations',
          link: '/administrer/demandes-autorisations',
          parentId: 201,
        },
        // {
        //   id: 205,
        //   label: 'Sanctions',
        //   link: '/administrer/sanctions',
        //   parentId: 201,
        // },
      ],
    },
  ];
  
