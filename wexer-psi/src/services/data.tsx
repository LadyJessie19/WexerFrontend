import { dGet, dPost, dDel } from "./api"

export const userData = async () => {
    try{
        const response = await (await dGet('/user')).data
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

export const postData = async () => {
    try{
        dPost('/user', user)
        userData()
    } catch(error){
        console.log(error)
    }
}
