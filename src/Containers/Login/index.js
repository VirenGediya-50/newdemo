import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from '@mui/material';
import MainTextField from '../../Components/TextField';
import CommonButton from '../../Components/CommonButton';
import { setUserData } from '../../Action/login.action';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: "",
            isError : false,
            errorMsg : ''
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
        const  { userName, password} = this.state;
        const { userList } = this.props;

        if(userName === "" || password === ""){
            this.setState({
                isError : true,
                errorMsg : "All Field are required."
            })
        }else{
            let index = userList.findIndex(item => item.userName === userName);
            if(index >= 0){
                if(userList[index].password ===  password && userList[index].userName === userName){
                    localStorage.setItem("loginSession", true);
                    this.props.setUserData(userList[index]);
                }else{
                    this.setState({
                        isError : true,
                        errorMsg : "Username and password does not matched."
                    })
                }
            }else{
                this.setState({
                    isError : true,
                    errorMsg : "User not found."
                })

            }
            this.props.history.push("/login");
        }
    }


    render() {
        const { userName, password, isError, errorMsg } = this.state;
        return (
            <div className='mainLayout'>
                <h1 className='headerName'>Login</h1>

                <div className='subdiv'>
                    {isError && <Alert severity="error" className='maintextfield'>{errorMsg}</Alert>}
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
                        text={'Login'}
                        className={"leftbutton"}
                        onClick={this.handleSubmit}
                    />
                    <CommonButton 
                        variant="outlined" 
                        text={'SignUp'} 
                        className={'rightbutton'}
                        onClick={() => this.props.history.push("/signup")}
                    />
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { userList } = state.userReducer;
    return {
        userList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData : (data) => dispatch(setUserData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
