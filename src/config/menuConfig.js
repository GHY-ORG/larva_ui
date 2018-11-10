// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const siderMenuConfig = [
    {
        name: '仪表盘',
        path: '/dashboard',
        icon: 'dashboard',
        disabled: false,
    },
    {
        name: '文章',
        path: '/article',
        icon: 'book',
        disabled: true,
        children: [
            {
                name: '文章列表',
                path: '/article/list',
                disabled: false,
            },
            {
                name: '添加文章',
                path: '/article/add',
                disabled: false
            },
            {
                name: '分类',
                path: '/article/category',
                disabled: false
            },
            {
                name: '标签',
                path: '/article/tag',
                disabled: false
            },
        ]
    },
    {
        name: '评论',
        path: '/comment',
        icon: 'heart',
        disabled: false,
    },
    {
        name: '文件',
        path: '/file',
        icon: 'file',
        disabled: false,
    },
    {
        name: '用户',
        path: '/user',
        icon: 'user',
        disabled: true,
        children: [
            {
                name: '用户列表',
                path: '/user/list',
                disabled: false,
            },
            {
                name: '添加用户',
                path: '/user/add',
                disabled: false,
            },
            {
                name: '修改密码',
                path: '/user/pwd',
                disabled: false,
            },
        ],
    },
    {
        name: '设置',
        path: '/setting',
        icon: 'setting',
        disabled: true,
        children: [
            {
                name: '基本设置',
                path: '/setting/base',
                disabled: false,
            },
            {
                name: '评论设置',
                path: '/setting/comment',
                disabled: false,
            },
        ],
    },
];

export {headerMenuConfig, siderMenuConfig};
