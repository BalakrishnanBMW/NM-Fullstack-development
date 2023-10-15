import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';


function Code(props)
{
    return (
        <div className='w-75 px-4 pt-4 rounded m-auto mt-2 bg-gray border text-white'>
            <pre>{props.children}</pre>
        </div>
    );
}
export default Code;