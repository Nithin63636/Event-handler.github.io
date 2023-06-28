import React from 'react';
import  {ReactDOM} from 'react';
import './MODEL.css';
// type rfc and press + tab
export default function Model(props) {
  return  (
  <div className='model-backdrop'>
        <div className='model'>
          {props.children}
        </div>
    </div>
  );
  {/* this is to put this ad pop-up at the end of the body html tag*/}
}
