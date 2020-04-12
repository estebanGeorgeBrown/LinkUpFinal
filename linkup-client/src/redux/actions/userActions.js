import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.defaults.baseURL =
    'https://us-central1-linkup-ed6c5.cloudfunctions.net/api';
    axios
      .post('/login', userData)
      .then((res)=>{
        console.log(res.data);
        this.setState({
          loading: false
      });
      const FBIdToken = `Bearer ${res.dat.token}`;
        localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        axios.defaults.headers.commom['Authorization'] = FBIdToken;
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS});
        history.push('/');
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
      
    });
}

export const getUserData =() => (dispatch) => {
    axios.get('/user')
    .then(res =>{
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
}