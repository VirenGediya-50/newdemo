import { Alert } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitUserData } from '../../Action/signUp.action';
import CommonButton from '../../Components/CommonButton';
import MainTextField from '../../Components/TextField'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            isError :false
        }
    }

    handleTextField = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value,
            isError: false
        })
    }

    handleSubmit = () => {
        const  { userName, password, firstName, lastName } = this.state;
        if(userName === "" || password === "" || firstName === "" || lastName === ''){
            this.setState({
                isError : true
            })
        }else{
            this.props.setUserData({
                userName,
                firstName,
                lastName,
                password
            });
            this.props.history.push("/login");
        }
    }

    render() {
        const {userName, password, firstName, lastName, isError} = this.state;
        return (
            <div className='mainLayout'>
                <h1 className='headerName'>Sign Up</h1>
                <div className='subdiv'>
                    {isError && <Alert severity="error" className='maintextfield'>All Field are required.</Alert>}
                    <MainTextField
                        name="firstName"
                        label={"First Name"}
                        value={firstName}
                        onChange={(e) => this.handleTextField(e)}
                        className='maintextfield'  
                    />
                    <MainTextField
                        name="lastName"
                        label={"Last Name"}
                        value={lastName}
                        onChange={(e) => this.handleTextField(e)}
                        className='maintextfield'
                    />
                    <MainTextField
                        name="userName"
                        label={"UserName"}
                        value={userName}
                        onChange={(e) => this.handleTextField(e)}
                        className='maintextfield'
                    />
                    <MainTextField
                        name="password"
                        label={"password"}
                        value={password}
                        onChange={(e) => this.handleTextField(e)}
                        className='maintextfield'
                        type="password"
                    />
                    <CommonButton
                        variant="contained" 
                        text={'SingUp'}
                        className={"leftbutton"}
                        onClick={this.handleSubmit}
                    />
                    <CommonButton 
                        variant="outlined" 
                        text={'Login'} 
                        className={'rightbutton'}
                        onClick={() => this.props.history.push("/login") }
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData : (data) => dispatch(submitUserData(data))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)
