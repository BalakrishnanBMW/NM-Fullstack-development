import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar()
{
    return(
        <>
            <div>
                <nav class="navbar navbar-default bg-dark">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <h2 class="m-3 text-white display-6">
                                Java Documentation
                            </h2>
                        </div>
                        <ul class="nav">
                            <li class="nav-item mx-3">
                                <a class="nav-link text-white" href="#">What's New</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link text-white" href="#">API</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link text-white" href="#">Sample Project</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link text-white" href="#">Source code</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;