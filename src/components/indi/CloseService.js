//import 'babel-polyfill'; 

import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import { Container, Image, Button, Message, Form, Header, Grid, Input } from 'semantic-ui-react'

@withRouter
@inject("indiStore")
@observer
class CloseService extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {   
        this.props.indiStore.setEmail(null);

        var get = function(u){
            var x = new XMLHttpRequest;
            x.open('GET', u, false);
            x.send();
            return x.responseText;
        }
        //var clientIP = "";
        //this.store.clientIP = JSON.parse(get('http://ifconfig.me/all.json')).ip_addr;
        this.props.indiStore.setIP(JSON.parse(get('https://ifconfig.me/all.json')).ip_addr);
    }

    handleInputEmail = (e, { value }) => {
        //this.store.setClearMessage();
        //this.store.userInfo.email = value;
        this.props.indiStore.setClearMessage();
        this.props.indiStore.setEmail(value);
    }

    handleRegisterEmailIn(e) {
        e.preventDefault();
        //this.store.registerEmailIndonesia();
        this.props.indiStore.registerEmailIndonesia();
    }

    // for flash
	handleDismiss = (e, {name}) => {
        /*
        if (name === "errorFlash") {
            this.props.indiStore.errorFlash = null;
        }else{
            this.props.indiStore.successFlash = null;
        }
        */
       this.props.indiStore.setClearMessage();
    }
    
    handleClose(e) {
        e.preventDefault();
        window.close();
    }

    render() {
        const { errorFlash, successFlash, email, registerIndiSuccess } = this.props.indiStore;
        
        var successFlashView = null;
		if (successFlash) {
			successFlashView = (
                <Message success name="successFlash" onDismiss={this.handleDismiss} content={successFlash}/>
			);
		}
        var errorFlashView = null;
        if(errorFlash) {
            errorFlashView = (
                <Message error name="errorFlash" onDismiss={this.handleDismiss} content={errorFlash} />
            );
        }
        
        var registerView = null;

        if(registerIndiSuccess) {
            // success
            registerView = (
                <Grid>
                <Grid.Column>
                    <Header as='h2' icon dividing>
                        Success.
                    </Header>
                    <div>
                </div>

                    <Header.Subheader>
                        Thank you. registered email is {email} 
                    </Header.Subheader>
                    {/*
                    <Form>
                        <Form.Field></Form.Field>
                        <Form.Field>
                            <Button color='violet' onClick={this.handleClose.bind(this)}>Close</Button>
                        </Form.Field>
                    </Form>
                    */}

                </Grid.Column>
            </Grid>
            )
        }else{
            registerView = (
                <Grid>
                    <Grid.Column width={5}>
                        <Image src='./images/sehasd.png' size='medium'/>
                    </Grid.Column>
                        
                    <Grid.Column width={9}>
                        <Header as='h2' icon dividing>
                            Hello Closers!
                        </Header>
                        <div>
                            { errorFlashView }
                            { successFlashView }
                        </div>

                        <Header.Subheader>
                            Please let us know your email address!
                        </Header.Subheader>
                        <Header.Subheader>
                            Closers will send you a special gift.
                        </Header.Subheader>
                        <Header.Subheader>
                            Enter your email address and press the Submit button.
                        </Header.Subheader>

                        <Form>
                            <Form.Field></Form.Field>
                            <Form.Field>
                                <Input style={{ maxWidth: 300 }}
                                    icon='mail' 
                                    iconPosition='left'
                                    placeholder='E-mail address' 
                                    name='email' 
                                    size='small'
                                    value={email} 
                                    onChange={this.handleInputEmail}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Button color='violet' onClick={this.handleRegisterEmailIn.bind(this)}>Submit</Button>
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid>
            )

        }

        return (
            <Container text style={{ marginTop: '5em' }}>
                {registerView}
            </Container>
        );
    }
}

export default CloseService;