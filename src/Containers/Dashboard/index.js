import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainTextField from '../../Components/TextField'
import SortIcon from '@mui/icons-material/Sort';
import CommonButton from '../../Components/CommonButton';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchUserName : '',
            sortById : '',
        }
    }

    handleSearchText = (e) => {
        const { value } = e.target;
        this.setState({
            searchUserName : value
        })
    }

    handleSortBy = (field) => {
        this.setState({
            sortById: field
        })
    }

    sortById = ( a, b ) => {
        if ( a[this.state.sortById] < b[this.state.sortById] ){
          return -1;
        }
        if ( a[this.state.sortById] > b[this.state.sortById] ){
          return 1;
        }
        return 0;
      }

    handleLogout = () => {
        localStorage.clear();
        this.props.history.push('/login');
    }

    render() {
        const { searchUserName, sortById } = this.state;
        const { userList } = this.props;
        let newUserList = searchUserName !== "" ? userList.filter(item => item.firstName.startsWith(searchUserName)) : userList;
        let sortedList = sortById !== "" ? newUserList.sort(this.sortById) : newUserList ;
        return (
            <div className='dashboardlayout'>
                <h1 className='headerName'>Dashboard</h1>
                <CommonButton
                    variant="contained" 
                    text={'Log out'}
                    className={"leftbutton"}
                    onClick={this.handleLogout}
                />
                <div className='subdiv'>
                    <MainTextField 
                        name="Search username"
                        label={"Search"}
                        value={searchUserName}
                        onChange={(e) => this.handleSearchText(e)}
                        className='searchtextfield'
                    />
                    <table className='table'>
                        <tr>
                            <th> <SortIcon onClick={() => this.handleSortBy("firstName")} /> First Name</th>
                            <th> <SortIcon onClick={() => this.handleSortBy("lastName")} /> Last Name </th>
                            <th> <SortIcon onClick={() => this.handleSortBy("userName")} /> User Name</th>
                        </tr>
                        {
                            sortedList.length > 0 ? 
                            sortedList.map(item => {
                                    return (
                                        <tr>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.userName}</td>
                                        </tr>
                                    )
                                })
                            :   
                            <tr>
                                <td></td>
                                <td>No Data found.</td>
                                <td></td>
                            </tr>
                        }
                    </table>
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

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
