import React from 'react';
import { connect } from 'react-redux';
import { followAC,  setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from '../../redux/user-reducer';
import Users from './Users';



let mapStateToProps = (state) => {
    return {
       users: state.usersPage.users,
       pageSize: state.usersPage.pageSize,
       totalUsersCount: state.usersPage.totalUsersCount,
       currentPage: state.usersPage.currentPage

    }

}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users);

