const menus = [
  {id: '0', label: '主 页', path: '/', icon: 'fa fa-home'},
  {
    id: 'content',
    label: '内容系统',
    icon: 'fa layui-icon layui-icon-read',
    submenu: [
      {
        id: 'articlelist',
        label: '文章列表'
      },
      {
        id: 'columnlist',
        label: '栏目列表',
        name: 'columnlist'
      },
      {
        id: 'comment',
        label: '评论管理'
      },
      {
        id: 'friendchain',
        label: '友链申请'
      }
    ]
  },
  {
    id: 'resume',
    label: '简历系统',
    icon: 'fa fa-address-card-o',
    submenu: [
      {
        id: 'information',
        label: '个人信息'
      }
    ]
  },
  {
    id: 'ssl',
    label: 'SSL证书',
    icon: 'fa fa-expeditedssl',
    submenu: [
      {
        id: 'certificatelist',
        label: '证书列表'
      },
      {
        id: 'brand',
        label: '证书品牌'
      }
    ]
  },
  {
    id: 'email',
    label: '邮箱系统',
    icon: 'fa fa-envelope-o',
    submenu: [
      {
        id: 'inbox',
        label: '收信箱'
      },
      {
        id: 'staremail',
        label: '星标邮件'
      },
      {
        id: 'outbox',
        label: '发件箱'
      },
      {
        id: 'emailacc',
        label: '账户管理'
      }
    ]
  },
  {
    id: 'user',
    icon: 'fa layui-icon layui-icon-username',
    label: '用 户',
    submenu: [
      {
        id: 'webuser',
        label: '网站用户'
      },
      {
        id: 'backstage',
        label: '后台管理员'
      },
      {
        id: 'role',
        label: '角色管理',
        name: 'role'
      }
    ]
  },
  {
    id: 'pages',
    icon: 'fa layui-icon layui-icon-set',
    label: '设 置',
    submenu: [
      {id: 'p-data-table', name: 'p-data-table', label: 'Table 表格数据'},
      {id: 'cnode', name: 'cnode', label: 'Cnode社区'},
      {id: 'p1', name: 'login', label: 'Login 登录'},
      {id: 'p2', name: 'p-login', label: 'Login 登录2'},
      {id: 'p3', name: 'p-register', label: 'Register 注册'},
      {id: '400', path: '/404', label: '404'},
      {id: '500', path: '/500', label: '500'}
    ]
  }
]
export default menus
