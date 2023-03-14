import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = ({ logoutHandle, token }) => {

    // Navbar uses classes from boostrap for basic styling

    return (
        <nav>
            <div className='logoContainer'>
                <a className='logo' href='/'>Acebook</a>
            </div>
            <div className='search-box'>
                <form>
                    {token ?
                        <input type="text" placeholder='🔍 Search Acebook' />
                        :
                        null
                    }
                </form>
            </div>
            {token ?
                <div className='profile'>
                    <Link to="/profile">
                        <button type='button' className='btn btn-outline-primary'>Profile</button>
                    </Link>
                    <Link to="/">
                        <button type='button' className='btn btn-outline-primary' onClick={logoutHandle}>Log Out</button>
                    </Link>
                </div>
                :
                <div className='profile'>
                    <Link to="/login">
                        <button id='buttonLogin' type='button' className='btn btn-outline-primary' href='/login'>Login</button>
                    </Link>
                    <Link to="/signup">
                        <button id='buttonSignUp' type='button' className='btn btn-outline-primary' href='/signup'>Sign Up</button>
                    </Link>
                </div>
            }
        </nav>
    )
}

export default Navbar;

{/* <li className="nav-item">
    <a className="nav-link" href="login">Login</a>
</li>
<li className="nav-item">
    <a className="nav-link" href="signup">Signup</a>
</li> */}

// {token ?
//     <input id='searchBar' type='text' className='form-control' placeholder='🔍 Search Acebook' aria-label='Search Acebook' aria-describedby='basic-addon1' />
//     : null}


// {token ?
//     // If token exists, renders the logout button which calls logoutHandle on click
//     <div id='buttonContainer'>
//         <Link to="/profile">
//             <button id='buttonLogOut' type='button' className='btn btn-outline-primary'>Profile</button>
//         </Link>
//         <Link to="/">
//             <button id='buttonLogOut' type='button' className='btn btn-outline-primary' onClick={logoutHandle}>Log Out</button>
//         </Link>
//     </div>
//     :
//     // If token doesn't exist, render the login and signup buttons
//     <div id='buttonContainer'>
//         <Link to="/login">
//             <button id='buttonLogin' type='button' className='btn btn-outline-primary' href='/login'>Login</button>
//         </Link>
//         <Link to="/signup">
//             <button id='buttonSignUp' type='button' className='btn btn-outline-primary' href='/signup'>Sign Up</button>
//         </Link>
//     </div>
// }