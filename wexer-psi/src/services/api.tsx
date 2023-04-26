import { httpClient } from "./http-client"

type Request = {
    email: string,
    password: string
}

type Response = {
    id: string
}

export const UserService = async (): Promise<Response> => {
    const response = await httpClient.request<Response>({
        url: '/user/login',
        method: 'post'
    });

    if(response.status === 200){
        return response.data
    }
    throw new Error('Usuário ou senha incorretos')
}