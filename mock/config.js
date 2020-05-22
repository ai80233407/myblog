export default [
  {
    url: '/config/GetHeaderNav',
    type: 'post',
    response: (req, res) => {
      return {
        code: 20000,
        data: {
          list: [{
            name: '首页',
            path: '/index',
            used: false,
            type: 1,
            className: 'el-icon-house'
          },
          {
            name: '足迹',
            path: '/index/footmark',
            used: false,
            type: 1,
            className: 'el-icon-bicycle'
          },
          {
            name: '更新历史',
            path: '/index/history',
            used: false,
            type: 1,
            className: 'el-icon-guide'
          },
          {
            name: '其他',
            path: '/index/other',
            used: false,
            type: 0,
            className: 'el-icon-set-up',
            childs: [
              {
                name: 'ShowMe',
                path: '/coding',
                used: false,
                type: 1,
                className: 'el-icon-user'
              },
              {
                name: 'Statistice',
                path: '/github',
                used: false,
                type: 1,
                className: 'el-icon-orange'
              },
              {
                name: 'About',
                path: '/gitee',
                used: false,
                type: 1,
                className: 'el-icon-warning-outline'
              }
            ]
          }]
        }
      }
    }
  }
]
