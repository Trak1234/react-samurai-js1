const FOllOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT ='SET_CURRENT'; 
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';

let initialState = {
    users: [ ],
    pageSize: 100,
    totalUsersCount: 20,
    currentPage: 2
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOllOW: {
            return {
                ...state,
                users: state.users.map(u=>{
                    if(u.id === action.userId ){
                        return { 
                            ...u, followed: true
                        }
                    } 
                        return u
                    
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u=>{
                    if(u.id === action.userId ){
                        return { 
                            ...u, followed: false
                        }
                    } 
                        return u
                    
                })
            };

        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT_USERS: {
            return {
                ...state,  totalUsersCount: action.count ,
            }
        }
        default:
            return state;

    }
}


export const followAC = (userId) =>  ({ type: FOllOW, userId  })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId   })
export const setUsersAC = (users) => ({ type: SET_USERS, users   })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT, currentPage   })
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT_USERS, count:totalCount    })

export default userReducer;



