import axios from 'axios';
import {BACKEND_API} from '../../utils/constants';

// for indonesia
export const registerEmailIndonesia = (email, ip) => axios.post('https://closeindi.naddic.com:10443'+'/v1/user/registerIndonesia',{email,ip});