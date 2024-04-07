// import { toast } from './utils/extendApi'
import './utils/extendApi'
App({
    async onShow(){
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
        
        console.log('------')
        // wx.showModal({
        //     title: "提示", //提示的标题
        //     content: "您确定执行该操作吗？",//提示的内容
        //     confirmColor: '#f3514f',
        //     //接口调用结束的回调函数（调用成功、失败都会执行）
        //     complete({confirm, cancel}) {
        //         confirm && console.log('点击了确定')
        //         cancel && console.log('点击了取消')
        //     }
        // })
        const res = await wx.modal({
            title: '新的提示',
            showCancel: false
        })
        console.log(res)
    }
})
