import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextFeild from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});

class CustomerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        })        
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValuechange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file); 
        formData.append('name', this.state.userName); 
        formData.append('birthday', this.state.birthday); 
        formData.append('gender', this.state.gender); 
        formData.append('job', this.state.job);  
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>add customer</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Add Customer</DialogTitle>
                    <DialogContent>
                        <input type="file" className={classes.hidden} accept="image/*" id="raised-button-file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="primary" component="span" name="file">
                                {this.state.fileName === "" ? "select Profile Image" : this.state.fileName}
                            </Button>
                        </label><br/>
                        <TextFeild type="text" label="Name" name="userName" value={this.state.userName} onChange={this.handleValuechange}/><br/>
                        <TextFeild type="text" label="BOD" name="birthday" value={this.state.birthday} onChange={this.handleValuechange}/><br/>
                        <TextFeild type="text" label="Gender" name="gender" value={this.state.gender} onChange={this.handleValuechange}/><br/>
                        <TextFeild type="text" label="Job" name="job" value={this.state.job} onChange={this.handleValuechange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>ADD</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>CLOSE</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CustomerAdd);