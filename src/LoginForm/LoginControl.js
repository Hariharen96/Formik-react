import React from 'react';
import Login from './Login';

function LoginControl(props) {
    const { control,...rest } = props;
    switch(control){
    case 'input' :return <Login {...rest} />
    case 'textarea' : 
    case 'select' : 
    case 'radio' : 
    case 'checkbox' : 
    case 'date' : 
    default: return null
}
}

export default LoginControl
