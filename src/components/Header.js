import React from 'react'
import logo from '../logo.svg';

import './Header.css'

class Header extends React.Component {
	
	render(){
		// console.log('this : ',this.props)
		return (<header className="header-header">
			<img src={logo} className="header-logo" alt="logo" />
			<p>
				j'ai {this.props.age} ans mon status {this.props.status}
			</p>
		</header>
		)
	}
}

// const Header = ({age, status}) => {
//   return (
// 		<header className="header-header">
// 			<img src={logo} className="header-logo" alt="logo" />
// 			<p>
// 				j'ai {age} ans mon status {status}
// 			</p>

// 		</header>
// 	)
// }

export default Header