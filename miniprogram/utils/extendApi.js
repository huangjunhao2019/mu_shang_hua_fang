//在使用toast方法时，可以传入参数，也可以不传入参数
//如果需要传入参数，要传入对象作为参数
// const toast = (options = {}) => {}

//如果用户传入了对象作为产生用户
//在形参位置通过结构的方式获取用户传入的参数，同时设置默认值
const toast = ({ title = '数据加载中...', icon = 'none', duration = 2000, mask = true} = {}) => {
    wx.showToast({
      title,
      icon,
      duration,
      mask
    })
}
//如果有很多.js文件，都需要调用toast方法，每次使用点后需要导入toast，然后进行调用，太麻烦
//可以将toast方法挂载到wx全局对象身上
wx.toast = toast 

//如果其他.js文件，需要使用toast方法
//需要先导入toast，然后进行调用才可以
export {toast}