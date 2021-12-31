import * as React from 'react';
import { appTitle } from '../../assets/constants';
import './index.css';

export default function Header(){
    return(
        <div>
            <h1 className='header_text' >{appTitle}</h1>
        </div>        
    );
}