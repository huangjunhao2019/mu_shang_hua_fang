// import { toast } from './utils/extendApi'
import './utils/extendApi'
import { setStorage, getStorage, removeStorage, clearStorage} from './utils/storage'
App({
    async onShow() {
        setStorage('name', 'tom')
        setStorage('age', 10)
        // const name = getStorage('name')
        // console.log(name)
        //removeStorage('name')

        clearStorage()
    }
})
