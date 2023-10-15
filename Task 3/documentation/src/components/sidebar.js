import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Sidebar()
{
    return (
        <div className='side-bar w-20 p-3 border'>
            <nav class="navbar navbar-default">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">Array List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">Linked List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">Vector</a>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
}

export default Sidebar;