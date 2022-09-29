import React from 'react'
import { connect } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import logo from '../assets/img/airbnb2.svg'
import SearchIcon from '@mui/icons-material/Search';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SearchBar } from './search-bar.jsx'
import { SearchBarExpand } from './search-bar-expand.jsx'

function _AppHeader({ onLogin, onSignup, onLogout, user }) {
    // const navigate = useNavigate()
    // const onClickBecomeHost = () => {
    //     navigate('/stay/edit')
    // }


    return (
        <header className="main-container">
            <div className='app-header'>

                <Link className="logo" to={'/'}>
                    <img src={logo}
                        alt="Logo image"
                    />
                </Link>

                <SearchBarExpand/>

                <div className="user-btns-container">
                    <Link className="header-host-btn" to={`/stay/edit`} >
                        <p>Become a host</p>
                    </Link>
                    <div className="btn-user-options">
                        <MenuIcon className="menu-icon" />
                        <AccountCircleIcon className="account-circle-icon" />
                    </div>
                </div>


                {user &&
                <span className="user-info">
                    <Link to={`user/${user._id}`}>
                    {user.imgUrl && <img src={user.imgUrl} />}
                        {user.fullname}
                    </Link>
                    <span className="score">{user.score?.toLocaleString()}</span>
                    <button onClick={onLogout}>Logout</button>
                    </span>
                }
                
                {!user &&
                    <section className="user-info">
                    <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                    </section>
                }

            </div>
        </header >
    )
}

function mapStateToProps(state) {
    return {
        users: state.userModule.users,
        user: state.userModule.user,
        count: state.userModule.count,
        isLoading: state.systemModule.isLoading
    }
}

const mapDispatchToProps = {
    onLogin,
    onSignup,
    onLogout,
    loadUsers,
    removeUser
}

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)