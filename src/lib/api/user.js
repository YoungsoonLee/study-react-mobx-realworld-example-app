import axios from 'axios';
import {BACKEND_API} from '../../utils/constants';

// for indonesia
export const registerEmailIndonesia = (email, ip) => axios.post('http://localhost:3000'+'/v1/user/registerIndonesia',{email,ip});