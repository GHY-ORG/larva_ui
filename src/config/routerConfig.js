// 以下文件格式为描述路由的协议格式
import BasicLayout from '../layouts/BasicLayout'
import Home from '../pages/Home'
import DashBoard from '../pages/DashBoard'
import PostEdit from "../pages/Post/Edit";
import Post from '../pages/Post/Index';

const routerConfig = [{
        path: '/dashboard',
        name: '仪表盘',
        icon: 'dashboard',
        layout: BasicLayout,
        component: DashBoard
    },
    {
        path: '/post',
        name: '文章',
        icon: 'book',
        layout: BasicLayout,
        component: Post
    },
    {
        path: '/post/edit',
        name: '编辑',
        layout: BasicLayout,
        component: PostEdit
    },
    {
        path: '/comment',
        name: '评论',
        icon: 'heart',
        layout: BasicLayout,
        component: Home
    },
    {
        path: '/file',
        name: '文件',
        icon: 'file',
        layout: BasicLayout,
        component: Home
    },
    {
        path: '/user',
        name: '用户',
        icon: 'user',
        layout: BasicLayout,
        component: Home
    },
    {
        path: '/setting',
        name: '设置',
        icon: 'setting',
        layout: BasicLayout,
        component: Home
    }
];

export default routerConfig;