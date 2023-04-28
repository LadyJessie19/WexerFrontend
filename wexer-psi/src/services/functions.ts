import axios from './config'

export const getUserData = () => axios.get('/user')

export const postUserData = (obj:object) => axios.post('/user', obj)

export const putUserData = (id:string, obj:object) => axios.put(`/user/${id}`, obj)

export const deleteUserData = (id:string) => axios.delete(`/user/${id}`)