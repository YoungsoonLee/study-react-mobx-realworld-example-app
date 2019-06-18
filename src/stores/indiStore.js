import {
    observable,
    action
  } from "mobx";
  
import validator from 'validator';
import * as UserAPI from '../lib/api/user';
  
class IndiStore {

    @observable registerIndiSuccess;
    @observable clientIP;
    @observable email;
    @observable errorFlash;

    constructor() {
        this.clientIP = "";
        this.registerIndiSuccess = false;
        this.email = "";
        this.errorFlash = null;
        this.successFlash = null;
    }


    @action setEmail(email) {
        this.email = email;
    }

    @action setIP(ip) {
        this.clientIP = ip;
    }

    @action setClearMessage(){
        this.errorFlash = null;
        this.successFlash = null;
    }


    @action setErrorFlashMessage(msg) {
        this.errorFlash = msg;
    }

    @action setSuccessFlashMessage(msg) {
        this.successFlash = msg;
    }

    @action setRegisterSuccess(){
        this.registerIndiSuccess = true;
    }

    // register emai for closing indonesia
    async registerEmailIndonesia() {

        if (!validator.isEmail(this.email)) {
            this.setErrorFlashMessage('Please input a valid email address.');
        } else {
            this.setErrorFlashMessage(null);
        }

        if (!this.errorFlash) {
            let data = null;
            try {
            data = await UserAPI.registerEmailIndonesia(this.email, this.clientIP);
            } catch (err) {
                //console.log(err);
                this.setErrorFlashMessage(err.response.data.message);
            }

            if (data) {
                //this.setEmail(null);
                this.setSuccessFlashMessage('Register succeed.');

                // redirect
                // registration successful.
                // history.push('/registerSuccess');
                this.setRegisterSuccess();
            }
        }
    }

}

export default new IndiStore();