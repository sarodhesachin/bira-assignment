import React from 'react'

import './Header.css'

import logo from '../assets/Logo_black_text.svg';
import sijo from '../assets/Sijo.svg';

class Header extends React.Component {
	render() {
		return (
			<div className='Header'>
				<Logo/>
				<HeaderItems/>
			</div>
		)
	}
}

class Logo extends React.Component {
	render() {
		return (
			<div className='LogoContainer'>
				<img className='BiraLogo' src={logo}/>
			</div>
		)
	}
}

class HeaderItems extends React.Component {
	render() {
		return (
			<div className='HeaderItems'>
				<Search/>
				<UserIcon/>
			</div>
		)
	}
}

class Search extends React.Component {
	render() {
		return (
			<div>
				<select placeholder='search...'>
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>
			</div>
		)
	}
}

class UserIcon extends React.Component {
	render() {
		return (
			<div>
				<img className='UserIcon' src={sijo} />
			</div>
		)
	}
}

export default Header;
