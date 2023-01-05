import React from 'react';
import us from './Users.module.css';
import * as axios from 'axios';
import image1 from "../images/alyaska.jpg"

class Users extends React.Component {

  

    componentDidMount() {
        /* axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.setUsers(response.data.items);
        }); */
     
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }


    render() {
        
        let pageCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        
        let pages = [ ];
        
        for ( let i=1; i<= pageCount; i++) {
            pages.push(i);
        }


        

        return <div>
            
            <div>
                { pages.map(p => {
                    return <span className={this.props.currentPage === p && us.selectedPage} onClick={()=> { this.onPageChanged(p)} } >{p}</span>
                })}
            </div>    
                
            {
            
            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={us.AvaDescr} src={u.photos.small != null ? u.photos.small : image1 } />
                    </div>
                    <div>
                    {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.sity"}</div>
                    </span>
                </span>
            </div>)
        }
        
    </div>
    

    }
}

export default Users;

