import { CanActivateFn } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  var data, datatoken;
  if(sessionStorage.getItem("vendorLogin") || sessionStorage.getItem("adminLogin")){
    data=sessionStorage.getItem("vendorLogin")|| sessionStorage.getItem("adminLogin")
    if(data){
      datatoken=jwtDecode(data);
      if(datatoken.exp){
        return datatoken.exp>Math.floor(Date.now()/1000);
      }
      else{
        return true;
      }
    }
    else
      return false;
  }
  else{
  return true;
  }
};
