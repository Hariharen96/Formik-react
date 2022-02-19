import React from 'react'
import EnrInput from './EnrInput';

function EnrControl(props) {
const { control,...rest } = props;
switch(control){
    case 'input': return <EnrInput {...rest} />
    default: return null
}
}

export default EnrControl
