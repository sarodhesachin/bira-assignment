import React from 'react';

import Dashboard from '../dashboard/Dashboard';
import Sidebar from '../sidebar/Sidebar'

import './Body.css'

class Body extends React.Component {

  render() {
		return (
			<div className='Body'>
				<Sidebar/>
        <Dashboard/>
			</div>
		)
	}
}

export default Body;
