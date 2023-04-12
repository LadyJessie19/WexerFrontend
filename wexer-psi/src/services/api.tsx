import api from "./config";

export const dGet = (route:string) => api.get(route)
export const dPost = (route:string, obj:object) => api.post(route, obj)
export const dPut = (route:string, id:string, obj:object) => api.put(`${route}/${id}`, obj)
export const dDel = (route:string, id:string) => api.delete(`${route}/${id}`)