import React, {  useState } from 'react';



const ProfileStatusWithHook = (props) => {
   

   /*  if (prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        });
    }

    console.log("componentDidUpdate")

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState(
            { editMode: true }
        )
    }

    deactiveEditMode = () => {
        this.setState(
            { editMode: false }
        );
        this.props.updateStatus(this.props.status)
    }


    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    } */

   let [editMode,setEditMode] = useState(false)
    let [Status,setStatusState] = useState(props.status)

    let activeEditMode = () => {
        setEditMode(true)
    }

    let deactiveEditMode = () =>{
        setEditMode(false)
        props.updateStatus(Status)
    }

    let onStatusChange = (e) => {
       
        setStatusState(e.currentTarget.value);
    }

    return <div>

        {!editMode &&
         <div><span onDoubleClick={activeEditMode}>{props.status || "-------"}</span></div>}

        {editMode && <div  ><input
            onCnange={onStatusChange}
            autoFocus={true}
            onBlur={deactiveEditMode}
            value={Status} /></div>}
    </div>

}






export default ProfileStatusWithHook;

