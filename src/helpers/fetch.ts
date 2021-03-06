import { AxiosError } from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;
const axios = require('axios');

const  fetchSinToken = async( endpoint: string, data?: any, method: string = 'get') => {

    const url = `${ baseUrl }/${ endpoint }`;

    if( method === 'get' ){
        try {
            const res =   await axios.get(url);

            console.log(res)
            
        } catch (error ) {
            console.log(error)
            
        }
       
    }else{
        try {

            const res = await axios({
                method: 'post',
                url,
                data
            })
            
            return res.data;

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const err = error as AxiosError;
                return err.response?.data;
             }  
        }
        
    }

}

const fetchConToken = async( endpoint: string, data?: any, method = 'get') => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if( method === 'get' ){
        try {
            const res =   await axios({
                method: 'get',
                url,
                headers: {
                    'x-token': token
                }
            })

            return res.data
            
        } catch (error ) {
            console.log(error)
            
        }
       
    }else{
        try {

            const res = await axios({
                method: 'post',
                url,
                data,
                headers: {
                    'x-token': token
                }
            })
            
            return res.data;

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const err = error as AxiosError;
                return err.response?.data;
             }  
        }
        
    }

}

export {
    fetchSinToken,
    fetchConToken
}

