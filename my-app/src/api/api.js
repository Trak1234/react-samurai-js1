import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "4f844546-2e92-44f9-b9d4-4c50a813dfd1"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}


export const followAPI = {
    getFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getUnFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}

export const headerAPI = {
    getHeader(){
        return instance.get('auth/me')
        .then(response => {
            return response.data;
        });
    },
    login(email,password,rememberMe = false) {
        return instance.post('auth/login', {email,password,rememberMe})
        
    },
    logout(){
        return instance.delete('auth/login', {})
    }
    
}

export const profileAPI = {
    getProfile(userId){
        return instance.get('profile/' +userId)
        .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/' +userId)
        
    },
    updateStatus(status){
        return instance.put('profile/status', )
       
    },
    savePhoto (file) {
        const formData = new FormData()
        formData.append('image', file, )
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }  )
    }
}