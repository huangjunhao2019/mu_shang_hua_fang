/**
 * 创建WxRequest类
 * 通过类的方式来进行封装，会让代码更加具有复用性
 * 也可以方便添加新的属性和方法
 */
class WxRequest{
    //用于创建和初始化类的属性以及方法
    constructor(){

    }
    //request实例方法接收一个对象类型的参数
    //属性值和wx.request方法调用时传递的参数保持一致
    request(options){
        //需要使用Promise封装 wx.request，处理异步请求
        return new Promise((resolve, reject) => {
            wx.request({
                ...options,

                //当接口调用成功时会触发success 回调函数
                success: (res) => {
                    resolve(res)
                },

                //当接口调用失败时会触发 fail 回调函数
                fail: (err) => {
                    reject(err)
                }
            })
        })
    }
}
// 以下是实例化的代码
//写到同一个文件，是为了方便测试，以后会提取成多个文件

//对WxRequest进行实例化
const instance = new WxRequest()

//将WxRequest实例进行暴露除去，方便在其他文件中进行使用
export default instance 