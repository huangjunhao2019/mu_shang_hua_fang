/**
 * @description 存储数据
 * @param {*} key 本地缓存中指定的kye
 * @param {*} value 需要缓存的数据
 */
export const setStorage = (key, value) => {
    try {
        wx.setStorageSync(key, value)
    } catch(error){
        console.error('存储指定 ${key} 数据发生了异常',error)
    }
}
/**
 * @description 从本地读取指定key的数据
 * @param {*} key 
 */
export const getStorage = (key) => {
    try{
        const value = wx.getStorageSync(key)

        if (value){
            return value 
        }
    } catch(error){
        console.error('读取指定 ${key} 数据发生了异常', error)
    }
}
/**
 * @description 从本地移除指定key的数据
 * @param {*} key 
 */
export const removeStorage = (key) => {
    try{
        wx.removeStorageSync(key)

    } catch(error){
        console.error('移除指定 ${key} 数据发生了异常', error)
    }
}
/**
 * @description 从本地移除所有数据
 */
export const clearStorage = () => {
    try{
        wx.clearStorageSync()
    } catch(error){
        console.error('清空本地数据发生了异常', error)
    }
}