import { CanActivateFn } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { inject, Inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  var data, datatoken;
  var router=inject(Router)
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
    {
      router.navigateByUrl("/");
      return false;
    }
  }
  else{
  router.navigateByUrl("/");
  return true;
  }
};
