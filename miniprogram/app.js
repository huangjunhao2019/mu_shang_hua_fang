// import { toast } from './utils/extendApi'
import './utils/extendApi'
App({
    onShow(){
        // wx.showToast({
        //     // title: "消息提示框",    //提示的内容
        //     // icon: "success",    //提示的图标：success(成功)、
        //     // //error(失败)、loading(加载)、none(不显示图标)
        //     // duration: 2000,
        //     // mask: true
        // })

        // // //可以不传入参数
        // // toast()
        // wx.toast()

        // //可以传入参数，传入的参数会覆盖默认参数
        // toast({ title: '数据加载完毕', icon: 'success'})
        wx.toast({title: "数据加载完毕", icon: "success"})
        
    }
})
