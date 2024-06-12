import env from "react-dotenv";

const handleResponse = (response: any) => {
    return response.text().then((text:string) => {
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401){
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    })
}

const login = (email:string, password: string) => {
    const resOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }

    return fetch(`${env.API_URL}/api/v1/auth`, resOptions)
        .then(handleResponse)
        .then((res) => {
            sessionStorage.setItem('user', JSON.stringify(res))
            return res;
        })
}

const logout = () => {
    sessionStorage.removeItem('user')
}

export const userService = {
    login,
    logout
}