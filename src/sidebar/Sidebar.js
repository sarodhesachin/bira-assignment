import React from 'react'

import './Sidebar.css'

import DashboardLogo from '../assets/Dashboard.svg';
import IssuesLogo from '../assets/Issues.svg';
import CreateLogo from '../assets/Create.svg';

let menu = {
	'Dashboard': DashboardLogo,
	'Issues': IssuesLogo,
	'Create': CreateLogo,
}

class Sidebar extends React.Component {
	render() {
		return (
			<div className='Sidebar'>
				<MenuItems/>
			</div>
		)
	}
}

class MenuItems extends React.Component {
	render() {
		return (
			<div className='MenuItem'>
				{
					Object.keys(menu).map((name) => {
						return (
							<Item
								source={menu[name]}
								itemName={name}
							/>
						)
					})
				}
			</div>
		)
	}
}

class Item extends React.Component {

	constructor(props) {
    super(props);
    this.state = {isClicked: false};
  }

	handleClick = target => {
		this.setState({
			isClicked: true
		})
	}

	render() {
		return (
			<a className={`Item ${this.state.isClicked ? "ItemActive": ""}`} 
				href='#' onClick={this.handleClick}>
				<Icon source={this.props.source} />
				<Name itemName={this.props.itemName} />
			</a>
		)
	}
}

class Icon extends React.Component {
	render() {
		return (
			<div className='MenuIcon'>
				<img src={this.props.source}/>
			</div>
		)
	}
}

class Name extends React.Component {
	render() {
		return (
			<div className='MenuName'>{this.props.itemName}</div>
		)
	}
}

export default Sidebar;
