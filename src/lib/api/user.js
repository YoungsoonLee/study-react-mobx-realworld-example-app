import axios from 'axios';
import {BACKEND_API} from '../../utils/constants';

// for indonesia
export const registerEmailIndonesia = (email, ip) => axios.post('https://15.164.35.71:10443'+'/v1/user/registerIndonesia',{email,ip});