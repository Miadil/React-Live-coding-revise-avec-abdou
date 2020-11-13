import React from 'react'


class Form extends React.Component {
	state = {
		firstName: "",
		email:'',
		poulet:''
	}

	handleChange = (event) => {
		// console.log("poulet", event.target.value)
		// console.log("poulet 02", event.target.name)
		if(!event.target.value.includes('*')){
			this.setState({[event.target.name]: event.target.value})
		}
	}

	render(){
		const {firstName, email,poulet} = this.state
		// console.log(this)
		return (
			<div>
				<p>Firstname : {this.state.firstName}</p>
				<p>email : {this.state.email}</p>
				<p>poulet : {this.state.poulet}</p>
				<input name="firstName" type="text" value={firstName}  onChange={this.handleChange}/>
				<input name="email" type="email" value={email} onChange={this.handleChange}/>
				<input name="poulet" type="email" value={poulet} onChange={this.handleChange}/>
			</div>
		)
	}
}

export default Form