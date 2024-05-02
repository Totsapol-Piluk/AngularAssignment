import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

export class Employee {
  _id!: number;
  userName!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;
  _roleId!: string;
  roleName!: string;
  permissionId!: number;
  isRead!: boolean;
  isWrite!: boolean;
  isDeleted!: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API: string = "https://localhost:7120/api/users";

  //Http headers
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient: HttpClient) { }

  //Add
  AddUser(data: Employee): Observable<any>{

    let API_URL = `${this.REST_API}/Employees`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  GetEmployee(){
    return this.httpClient.get(`${this.REST_API}/Employees`)
  }

  GetEmployeeById(id: any): Observable<any>{
    let API_URL = `${this.REST_API}/Employees/${id}`;
    return  this.httpClient.get(API_URL, { headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  //update
  updateUser(id:any, data:any): Observable<any>{
    let API_URL = `${this.REST_API}/Employees/${id}`;
    return this.httpClient.put(API_URL, data, {headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteUser(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/Employees/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
  }

  //error
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      //handle client error
      errorMessage = error.error.message
    }else {
      //handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }

    console.log(errorMessage);
    return throwError(errorMessage);


  }
}
