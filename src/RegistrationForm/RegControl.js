import React from 'react'
import RegInput from './RegInput';
import RegRadio from './RegRadio';

function RegControl(props) {
 const { control,...rest } = props;
  switch(control){
      case 'input': return <RegInput {...rest} />
        case 'radio': return <RegRadio {...rest} />
            default: return null 
  }
}



export default RegControl
