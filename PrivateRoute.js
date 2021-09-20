// import {Route,Redirect} from 'react-router-dom';
import { Redirect } from 'umi'

export default (props)=>{
    // console.log('rest1',render,rest)
    const  isLogin  = localStorage.getItem('login');
    if (isLogin) {
        return <div>{ props.children }</div>;
      } else {
        return <Redirect to="/login" />;
      }


    // return <Route {...rest} render={props=>{
    //    return localStorage.getItem('login')?render(props):<Redirect to={{pathname:'/login',state:{from:props.location.pathname}}}/>
    // }}/>
    //  return localStorage.getItem('login')?render(rest):<Redirect to={{pathname:'/login',state:{from:props.location.pathname}}}/>
}