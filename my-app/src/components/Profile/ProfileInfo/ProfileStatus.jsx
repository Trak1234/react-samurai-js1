import React, { createRef } from 'react';


class ProfileStatus extends React.Component {
   
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }

        console.log("componentDidUpdate")
    }
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


    onStatusChange = ( e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        
        return <div>
            
            {!this.state.editMode && <div><span onDoubleClick={this.activeEditMode}>{this.props.status || "-------"}</span></div>}

            {this.state.editMode && <div  ><input
                onCnange={this.onStatusChange}
                
                autoFocus={true}
                onBlur={this.deactiveEditMode.bind(this)}
                value={this.state.status} /></div>}
        </div>

    }
}






export default ProfileStatus;

