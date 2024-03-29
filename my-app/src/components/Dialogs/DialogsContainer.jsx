import React from 'react';
import {sendMessageCreator, } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { withAuthRedirect } from '../../hoc/hoc';
import { compose } from 'redux';




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
        
    }
}

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect )(Dialogs) ;

export default DialogsContainer;