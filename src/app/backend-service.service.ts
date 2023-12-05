import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(public httpclient: HttpClient) { }

sendsignup(obj:any){
return this.httpclient.post('http://localhost/phpclass/backendsignup.php',obj)
}
}
