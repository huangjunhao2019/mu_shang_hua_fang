// import { toast } from './utils/extendApi'
import './utils/extendApi'
import { asyncSetStorage, asyncGetStorage, asyncRemoveStorage, asyncClearStorage} from './utils/storage'
App({
    async onShow() {
        asyncSetStorage('name', 'Jerry').then(res => {
            console.log(res)
        })
        asyncSetStorage('age', 100).then(res => {
            console.log(res)
        })
        // asyncGetStorage('name').then((res)=> {
        //     console.log(res.data)
        // })
        // asyncRemoveStorage('name').then((res)=>{
        //     console.log(res)
        // })
        asyncClearStorage().then(res => {
            console.log(res)
        })
    }
})
