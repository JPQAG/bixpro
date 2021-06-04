const menuItems = {
    items: [
            {
                id: 'macro',
                title: 'Macro-View',
                type: 'group',
                icon: 'icon-navigation',
                children: [
                    {
                        id: 'dashboard',
                        title: 'Dashboard',
                        type: 'collapse',
                        icon: 'feather icon-home',
                        children: [
                            {
                                id: 'summary',
                                title: 'Summary',
                                type: 'item',
                                url: '/MacroView/Dashboard/Summary'
                            },
                            {
                                id: 'markets',
                                title: 'Markets',
                                type: 'item',
                                url: '/MacroView/Dashboard/Markets'
                            },
                            {
                                id: 'securities',
                                title: 'Securities',
                                type: 'item',
                                url: '/MacroView/Dashboard/Securities'
                            },
                            {
                                id: 'valuation',
                                title: 'Valuation',
                                type: 'item',
                                url: '/MacroView/Dashboard/Valuation'
                            },
                            {
                                id: 'holdings',
                                title: 'Holdings',
                                type: 'item',
                                url: '/MacroView/Dashboard/Holdings'
                            },
                            {
                                id: 'trading',
                                title: 'Trading',
                                type: 'item',
                                url: '/MacroView/Dashboard/Trading'
                            }
                        ]
                    },
                    {
                        id: 'media',
                        title: 'Media',
                        type: 'collapse',
                        icon: 'feather icon-cast',
                        children: [
                            {
                                id: 'consolidated',
                                title: 'Consolidated',
                                type: 'item',
                                url: '/MacroView/Media/Consolidated'
                            },
                            {
                                id: 'bloomberg',
                                title: 'Bloomberg',
                                type: 'item',
                                url: '/MacroView/Media/Bloomberg'
                            },
                            {
                                id: 'reuters',
                                title: 'Reuters',
                                type: 'item',
                                url: '/MacroView/Media/Reuters'
                            },
                            {
                                id: 'coinbase',
                                title: 'Coinbase',
                                type: 'item',
                                url: '/MacroView/Media/Coinbase'
                            },
                            {
                                id: 'forums',
                                title: 'Forums',
                                type: 'item',
                                url: '/MacroView/Media/Forums'
                            }                            
                        ]
                    }
                ]
            },
            {
                id: 'markets',
                title: 'Markets',
                type: 'group',
                icon: 'icon-globe',
                children: [
                    {
                        id: 'cryptocurrency',
                        title: 'Cryptocurrency',
                        type: 'collapse',
                        icon: 'feather icon-home',
                        children: [
                            {
                                id: 'stablecoins',
                                title: 'Stablecoins',
                                type: 'item',
                                url: '/Markets/Cryptocurrency/Stablecoins'
                            },
                            {
                                id: 'altcoins',
                                title: 'Altcoins',
                                type: 'item',
                                url: '/Markets/Cryptocurrency/Altcoins'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'securities',
                title: 'Securities',
                type: 'group',
                icon: 'icon-navigation',
                children: [
                    {
                        id: 'coinsearch',
                        title: 'Coin Search',
                        type: 'collapse',
                        icon: 'feather icon-search',
                        children: [
                            {
                                id: 'allcrypto',
                                title: 'All Crypto',
                                type: 'item',
                                url: '/Securities/CoinSearch/AllCrypto'
                            },
                            {
                                id: 'stablecoins',
                                title: 'Stablecoins',
                                type: 'item',
                                url: '/Securities/CoinSearch/Stablecoins'
                            },
                            {
                                id: 'altcoins',
                                title: 'Altcoins',
                                type: 'item',
                                url: '/Securities/CoinSearch/Altcoins'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'portfolio',
                title: 'Portfolio',
                type: 'group',
                icon: 'icon-navigation',
                children: [
                    {
                        id: 'valuation',
                        title: 'Valuation',
                        type: 'item',
                        icon: 'feather icon-activity',
                        url: '/Portfolio/Valuation'
                    },
                    {
                        id: 'holdings',
                        title: 'Holdings',
                        type: 'item',
                        icon: 'feather icon-pie-chart',
                        url: '/Portfolio/Holdings'
                    },
                    {
                        id: 'historicaltrades',
                        title: 'Historical Trades',
                        type: 'item',
                        icon: 'feather icon-skip-back',
                        url: '/Portfolio/HistoricalTrades'
                    },
                    {
                        id: 'investmentmovements',
                        title: 'Investment Movements',
                        type: 'item',
                        icon: 'feather icon-trending-up',
                        url: '/Portfolio/InvestmentMovements'
                    }
                ]
            },
            {
                id: 'trading',
                title: 'Trading',
                type: 'group',
                icon: 'icon-navigation',
                children: [
                    {
                        id: 'tradenow',
                        title: 'Trade Now',
                        type: 'item',
                        icon: 'feather icon-shuffle',
                        url: '/Trading/TradeNow'
                    },
                    {
                        id: 'algorithmicbottrader',
                        title: 'Algorithmic Bot Trader',
                        type: 'item',
                        icon: 'feather icon-codepen',
                        url: '/Trading/AlgorithmicBotTrader'
                    }
                ]
            },
            {
                id: 'other',
                title: 'Other',
                type: 'group',
                icon: 'icon-navigation',
                children: [
                    {
                        id: 'education',
                        title: 'Education',
                        type: 'item',
                        icon: 'feather icon-bookmark',
                        url: '/Other/Education'
                    },
                    {
                        id: 'accountmanagement',
                        title: 'Account Management',
                        type: 'item',
                        icon: 'feather icon-user',
                        url: '/Other/AccountManagement'
                    },
                    {
                        id: 'settings',
                        title: 'Settings',
                        type: 'item',
                        icon: 'feather icon-settings',
                        url: '/Other/Settings'
                    }
                ]
            }

    //                     {
    //                         id: 'securities',
    //                         title: 'Securities',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto'
    //                     },
    //                     {
    //                         id: 'valuation',
    //                         title: 'Valuation',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto'
    //                     },
    //                     {
    //                         id: 'holdings',
    //                         title: 'Holdings',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto',
    //                         badge: {
    //                             title: 'NEW',
    //                             type: 'label-danger'
    //                         }
    //                     },
    //                     {
    //                         id: 'trading',
    //                         title: 'Trading',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto'
    //                     }
    //                 ]
    //             },
    //             {
    //                 id: 'media',
    //                 title: 'Media',
    //                 type: 'collapse',
    //                 icon: 'feather icon-cast',
    //                 children: [
    //                     {
    //                         id: 'consolidated',
    //                         title: 'Consolidated',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto'
    //                     },
    //                     {
    //                         id: 'bloomberg',
    //                         title: 'Bloomberg',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto'
    //                     },
    //                     {
    //                         id: 'reuters',
    //                         title: 'Reuters',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto'
    //                     },
    //                     {
    //                         id: 'coinbase',
    //                         title: 'Coinbase',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto'
    //                     },
    //                     {
    //                         id: 'forums',
    //                         title: 'Forums',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto'
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         id: 'markets',
    //         title: 'Markets',
    //         type: 'group',
    //         icon: 'icon-ui',
    //         children: [
    //             {
    //                 id: 'global',
    //                 title: 'Global',
    //                 type: 'item',
    //                 icon: 'feather icon-globe',
    //                 children: [
    //                     {
    //                         id: 'stablecoins',
    //                         title: 'Stablecoins',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto',
    //                         target: true
    //                     },
    //                     {
    //                         id: 'altcoins',
    //                         title: 'Altcoins',
    //                         type: 'item',
    //                         url: '/app/dashboard/crypto',
    //                         target: true
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         id: 'ui-forms',
    //         title: 'Forms',
    //         type: 'group',
    //         icon: 'icon-group',
    //         children: [
    //             {
    //                 id: 'forms',
    //                 title: 'Forms',
    //                 type: 'collapse',
    //                 icon: 'feather icon-file-text',
    //                 children: [
    //                     {
    //                         id: 'form-basic',
    //                         title: 'Form Elements',
    //                         type: 'item',
    //                         url: '/forms/form-basic'
    //                     },
    //                     {
    //                         id: 'form-advance',
    //                         title: 'Form Advance',
    //                         type: 'item',
    //                         url: '/forms/form-advance'
    //                     },
    //                     {
    //                         id: 'form-validation',
    //                         title: 'Form Validation',
    //                         type: 'item',
    //                         url: '/forms/form-validation'
    //                     },
    //                     {
    //                         id: 'form-masking',
    //                         title: 'Form Masking',
    //                         type: 'item',
    //                         url: '/forms/form-masking'
    //                     },
    //                     {
    //                         id: 'form-wizard',
    //                         title: 'Form Wizard',
    //                         type: 'item',
    //                         url: '/forms/form-wizard'
    //                     },
    //                     {
    //                         id: 'form-picker',
    //                         title: 'Form Picker',
    //                         type: 'item',
    //                         url: '/forms/form-picker'
    //                     },
    //                     {
    //                         id: 'form-select',
    //                         title: 'Form Select',
    //                         type: 'item',
    //                         url: '/forms/form-select'
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         id: 'table',
    //         title: 'Table',
    //         type: 'group',
    //         icon: 'icon-table',
    //         children: [
    //             {
    //                 id: 'tables',
    //                 title: 'Table',
    //                 type: 'collapse',
    //                 icon: 'feather icon-server',
    //                 children: [
    //                     {
    //                         id: 'bootstrap',
    //                         title: 'Bootstrap Table',
    //                         type: 'item',
    //                         url: '/tables/bootstrap'
    //                     },
    //                     {
    //                         id: 'datatable',
    //                         title: 'React Tables',
    //                         type: 'collapse',
    //                         children: [
    //                             {
    //                                 id: 'tbl-basic',
    //                                 title: 'Basic',
    //                                 type: 'item',
    //                                 url: '/table/datatable/tbl-basic'
    //                             },
    //                             {
    //                                 id: 'tbl-footer',
    //                                 title: 'Table Footer',
    //                                 type: 'item',
    //                                 url: '/table/datatable/tbl-footer'
    //                             },
    //                             {
    //                                 id: 'tbl-sorting',
    //                                 title: 'Sorting',
    //                                 type: 'item',
    //                                 url: '/table/datatable/tbl-sorting'
    //                             },
    //                             {
    //                                 id: 'tbl-filtering',
    //                                 title: 'Filtering',
    //                                 type: 'item',
    //                                 url: '/table/datatable/tbl-filtering'
    //                             },
    //                             {
    //                                 id: 'tbl-grouping',
    //                                 title: 'Grouping',
    //                                 type: 'item',
    //                                 url: '/table/datatable/tbl-grouping'
    //                             },
    //                             {
    //                                 id: 'tbl-pagination',
    //                                 title: 'Pagination',
    //                                 type: 'item',
    //                                 url: '/table/datatable/tbl-pagination'
    //                             },
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         id: 'chart-maps',
    //         title: 'Chart & Maps',
    //         type: 'group',
    //         icon: 'icon-charts',
    //         children: [
    //             {
    //                 id: 'charts',
    //                 title: 'Charts',
    //                 type: 'collapse',
    //                 icon: 'feather icon-pie-chart',
    //                 children: [
    //                     {
    //                         id: 'amchart',
    //                         title: 'AmChart4',
    //                         type: 'item',
    //                         url: '/charts/amchart'
    //                     },
    //                     {
    //                       id: 'apex-chart',
    //                       title: 'Apex Chart',
    //                       type: 'item',
    //                       url: '/charts/apex-chart'
    //                     },
    //                     {
    //                         id: 'chart-js',
    //                         title: 'Chart JS',
    //                         type: 'item',
    //                         url: '/charts/chart-js'
    //                     },
    //                     {
    //                         id: 'e-chart',
    //                         title: 'E-Chart',
    //                         type: 'item',
    //                         url: '/charts/e-chart'
    //                     },
    //                     {
    //                         id: 'google',
    //                         title: 'Google',
    //                         type: 'item',
    //                         url: '/charts/google-chart'
    //                     },
    //                     {
    //                         id: 'highchart',
    //                         title: 'Highchart',
    //                         type: 'item',
    //                         url: '/charts/highchart'
    //                     },
    //                     {
    //                         id: 'rechart',
    //                         title: 'Rechart',
    //                         type: 'item',
    //                         url: '/charts/rechart'
    //                     },
    //                     {
    //                         id: 'nvd3',
    //                         title: 'NVD3',
    //                         type: 'item',
    //                         url: '/charts/nvd3'
    //                     },
    //                     {
    //                         id: 'radial',
    //                         title: 'Radial',
    //                         type: 'item',
    //                         url: '/charts/radial'
    //                     }
    //                 ]
    //             },
    //             {
    //                 id: 'maps',
    //                 title: 'Maps',
    //                 type: 'collapse',
    //                 icon: 'feather icon-map',
    //                 children: [
    //                     {
    //                         id: 'google-map',
    //                         title: 'Google',
    //                         type: 'item',
    //                         url: '/maps/google-map'
    //                     },
    //                     {
    //                       id: 'vector-map',
    //                       title: 'Vector',
    //                       type: 'item',
    //                       url: '/maps/vector-map'
    //                     }
    //                 ]
    //             },
    //             {
    //                 id: 'landing-page',
    //                 title: 'Landing Page',
    //                 type: 'item',
    //                 icon: 'feather icon-navigation-2',
    //                 url: '/landing',
    //                 classes: 'nav-item',
    //                 target: true,
    //                 breadcrumbs: false
    //             }
    //         ]
    //     },
    //     {
    //         id: 'pages',
    //         title: 'Pages',
    //         type: 'group',
    //         icon: 'icon-pages',
    //         children: [
    //             {
    //                 id: 'auth',
    //                 title: 'Authentication',
    //                 type: 'collapse',
    //                 icon: 'feather icon-lock',
    //                 children: [
    //                     {
    //                         id: 'signup-1',
    //                         title: 'Sign up',
    //                         type: 'item',
    //                         url: '/auth/signup-1',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'signup-2',
    //                         title: 'Sign up v2',
    //                         type: 'item',
    //                         url: '/auth/signup-2',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'signup-3',
    //                         title: 'Sign up v3',
    //                         type: 'item',
    //                         url: '/auth/signup-3',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'signup-4',
    //                         title: 'Sign up v4',
    //                         type: 'item',
    //                         url: '/auth/signup-4',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'signup-5',
    //                         title: 'Sign up v5',
    //                         type: 'item',
    //                         url: '/auth/signup-5',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'signin-1',
    //                         title: 'Sign in',
    //                         type: 'item',
    //                         url: '/auth/signin-1',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'signin-2',
    //                         title: 'Sign in v2',
    //                         type: 'item',
    //                         url: '/auth/signin-2',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'signin-3',
    //                         title: 'Sign in v3',
    //                         type: 'item',
    //                         url: '/auth/signin-3',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'signin-4',
    //                         title: 'Sign in v4',
    //                         type: 'item',
    //                         url: '/auth/signin-4',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'signin-5',
    //                         title: 'Sign in v5',
    //                         type: 'item',
    //                         url: '/auth/signin-5',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'reset-password-1',
    //                         title: 'Reset Password',
    //                         type: 'item',
    //                         url: '/auth/reset-password-1',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'reset-password-2',
    //                         title: 'Reset Password v2',
    //                         type: 'item',
    //                         url: '/auth/reset-password-2',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'reset-password-3',
    //                         title: 'Reset Password v3',
    //                         type: 'item',
    //                         url: '/auth/reset-password-3',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'reset-password-4',
    //                         title: 'Reset Password v4',
    //                         type: 'item',
    //                         url: '/auth/reset-password-4',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'reset-password-5',
    //                         title: 'Reset Password v5',
    //                         type: 'item',
    //                         url: '/auth/reset-password-5',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'change-password',
    //                         title: 'Change Password',
    //                         type: 'item',
    //                         url: '/auth/change-password',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'tabs-auth',
    //                         title: 'Personal Information',
    //                         type: 'item',
    //                         url: '/auth/tabs-auth',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'profile-settings',
    //                         title: 'Profile Settings',
    //                         type: 'item',
    //                         url: '/auth/profile-settings',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'map-form',
    //                         title: 'Map Form',
    //                         type: 'item',
    //                         url: '/auth/map-form',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'subscribe',
    //                         title: 'Subscribe',
    //                         type: 'item',
    //                         url: '/auth/subscribe',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
                        
    //                 ]
    //             },
    //             {
    //                 id: 'maintenance',
    //                 title: 'Maintenance',
    //                 type: 'collapse',
    //                 icon: 'feather icon-sliders',
    //                 children: [
    //                     {
    //                         id: 'error',
    //                         title: 'Error',
    //                         type: 'item',
    //                         url: '/maintenance/error',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'coming-soon',
    //                         title: 'Coming Soon',
    //                         type: 'item',
    //                         url: '/maintenance/coming-soon',
    //                         target: true,
    //                         breadcrumbs: false
    //                     },
    //                     {
    //                         id: 'offline-ui',
    //                         title: 'Offline UI',
    //                         type: 'item',
    //                         url: '/maintenance/offline-ui',
    //                         target: true,
    //                         breadcrumbs: false
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         id: 'app',
    //         title: 'App',
    //         type: 'group',
    //         icon: 'icon-app',
    //         children: [
    //             {
    //                 id: 'message',
    //                 title: 'Message',
    //                 type: 'item',
    //                 classes: 'nav-item',
    //                 url: '/message',
    //                 icon: 'feather icon-message-circle'
    //             },
    //             {
    //                 id: 'task',
    //                 title: 'Task',
    //                 type: 'collapse',
    //                 icon: 'feather icon-clipboard',
    //                 children: [
    //                     {
    //                         id: 'task-list',
    //                         title: 'Task List',
    //                         type: 'item',
    //                         url: '/task/task-list'
    //                     },
    //                     {
    //                         id: 'task-board',
    //                         title: 'Task Board',
    //                         type: 'item',
    //                         url: '/task/task-board'
    //                     },
    //                     {
    //                         id: 'task-detail',
    //                         title: 'Task Detail',
    //                         type: 'item',
    //                         url: '/task/task-detail'
    //                     }
    //                 ]
    //             },
    //             {
    //                 id: 'to-dos',
    //                 title: 'Todo',
    //                 type: 'collapse',
    //                 icon: 'feather icon-check-square',
    //                 children: [
    //                     {
    //                         id: 'todo',
    //                         title: 'Todo',
    //                         type: 'item',
    //                         url: '/todo/todo-basic'
    //                     }
    //                 ]
    //             },
    //             {
    //                 id: 'gallery',
    //                 title: 'Gallery',
    //                 type: 'collapse',
    //                 icon: 'feather icon-image',
    //                 children: [
    //                     {
    //                         id: 'grid',
    //                         title: 'Grid',
    //                         type: 'item',
    //                         url: '/gallery/gallery-grid'
    //                     },
    //                     {
    //                         id: 'photo-grid',
    //                         title: 'Photo Gallery',
    //                         type: 'item',
    //                         url: '/gallery/photo-grid'
    //                     },
    //                     {
    //                         id: 'masonry',
    //                         title: 'Masonry',
    //                         type: 'item',
    //                         url: '/gallery/gallery-masonry'
    //                     },
    //                     {
    //                         id: 'gallery-advance',
    //                         title: 'Advance',
    //                         type: 'item',
    //                         url: '/gallery/gallery-advance'
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         id: 'extension',
    //         title: 'Extension',
    //         type: 'group',
    //         icon: 'icon-extension',
    //         children: [
    //             {
    //                 id: 'editor',
    //                 title: 'Editor',
    //                 type: 'collapse',
    //                 icon: 'feather icon-file-plus',
    //                 children: [
    //                     {
    //                       id: 'ck-editor',
    //                       title: 'CK-Editor',
    //                       type: 'collapse',
    //                       children: [
    //                         {
    //                           id: 'ck-classic',
    //                           title: 'Classic Editor',
    //                           type: 'item',
    //                           url: '/editor/ck-editor/ck-classic'
    //                         },
    //                         {
    //                           id: 'ck-balloon',
    //                           title: 'Balloon Editor',
    //                           type: 'item',
    //                           url: '/editor/ck-editor/ck-balloon'
    //                         },
    //                         {
    //                           id: 'ck-inline',
    //                           title: 'Inline Editor',
    //                           type: 'item',
    //                           url: '/editor/ck-editor/ck-inline'
    //                         },
    //                         {
    //                           id: 'ck-document',
    //                           title: 'Document Editor',
    //                           type: 'item',
    //                           url: '/editor/ck-editor/ck-document'
    //                         }
    //                       ]
    //                     },
    //                     {
    //                         id: 'rich-editor',
    //                         title: 'Rich Editor',
    //                         type: 'item',
    //                         url: '/editor/rich-editor'
    //                     },
    //                     {
    //                         id: 'jodit-wysiwyg',
    //                         title: 'Jodit WYSIWYG',
    //                         type: 'item',
    //                         url: '/editor/jodit-wysiwyg'
    //                     }
    //                 ]
    //             },
    //             {
    //                 id: 'invoice',
    //                 title: 'Invoice',
    //                 type: 'collapse',
    //                 icon: 'feather icon-file-minus',
    //                 children: [
    //                     {
    //                         id: 'invoice-basic',
    //                         title: 'Invoice Basic',
    //                         type: 'item',
    //                         url: '/invoice/invoice-basic'
    //                     },
    //                     {
    //                         id: 'invoice-summary',
    //                         title: 'Invoice Summary',
    //                         type: 'item',
    //                         url: '/invoice/invoice-summary'
    //                     },
    //                     {
    //                         id: 'invoice-list',
    //                         title: 'Invoice List',
    //                         type: 'item',
    //                         url: '/invoice/invoice-list'
    //                     }
    //                 ]
    //             },
    //             {
    //                 id: 'full-calendar',
    //                 title: 'Full Calendar',
    //                 type: 'item',
    //                 url: '/full-calendar',
    //                 classes: 'nav-item',
    //                 icon: 'feather icon-calendar'
    //             },
    //             {
    //                 id: 'file-upload',
    //                 title: 'File Upload',
    //                 type: 'item',
    //                 url: '/file-upload',
    //                 classes: 'nav-item',
    //                 icon: 'feather icon-upload-cloud'
    //             },
    //             {
    //                 id: 'image-cropper',
    //                 title: 'Image Cropper',
    //                 type: 'item',
    //                 url: '/image-cropper',
    //                 classes: 'nav-item',
    //                 icon: 'feather icon-image'
    //             }
    //         ]
    //     },
    //     {
    //         id: 'support',
    //         title: 'Support',
    //         type: 'group',
    //         icon: 'icon-support',
    //         children: [
    //             {
    //                 id: 'menu-level',
    //                 title: 'Menu Levels',
    //                 type: 'collapse',
    //                 icon: 'feather icon-menu',
    //                 children: [
    //                     {
    //                         id: 'menu-level-1.1',
    //                         title: 'Menu Level 1.1',
    //                         type: 'item',
    //                         url: '#!',
    //                     },
    //                     {
    //                         id: 'menu-level-1.2',
    //                         title: 'Menu Level 2.2',
    //                         type: 'collapse',
    //                         children: [
    //                             {
    //                                 id: 'menu-level-2.1',
    //                                 title: 'Menu Level 2.1',
    //                                 type: 'item',
    //                                 url: '#',
    //                             },
    //                             {
    //                                 id: 'menu-level-2.2',
    //                                 title: 'Menu Level 2.2',
    //                                 type: 'collapse',
    //                                 children: [
    //                                     {
    //                                         id: 'menu-level-3.1',
    //                                         title: 'Menu Level 3.1',
    //                                         type: 'item',
    //                                         url: '#',
    //                                     },
    //                                     {
    //                                         id: 'menu-level-3.2',
    //                                         title: 'Menu Level 3.2',
    //                                         type: 'item',
    //                                         url: '#',
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 id: 'disabled-menu',
    //                 title: 'Disabled Menu',
    //                 type: 'item',
    //                 url: '#',
    //                 classes: 'nav-item disabled',
    //                 icon: 'feather icon-power'
    //             },
    //             {
    //                 id: 'sample-page',
    //                 title: 'Sample Page',
    //                 type: 'item',
    //                 url: '/sample-page',
    //                 classes: 'nav-item',
    //                 icon: 'feather icon-sidebar'
    //             },
    //             {
    //                 id: 'documentation',
    //                 title: 'Documentation',
    //                 type: 'item',
    //                 icon: 'feather icon-book',
    //                 classes: 'nav-item',
    //                 url: 'http://html.codedthemes.com/datta-able/react/docs',
    //                 target: true,
    //                 external: true
    //             }
    //         ]
    //     }
    ]
};

export default menuItems;
