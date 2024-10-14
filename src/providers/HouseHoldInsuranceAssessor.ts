import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { ConfigService } from '../providers/Config'
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { Authentification } from 'src/model/Authentification.model';
import { RegisterUser } from 'src/model/RegisterUser.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }; 

  @Injectable()
export class HouseholdProvider {
    private readonly baseUrl!: string;
    private Authentification!:Authentification
    private RegisterUser!:RegisterUser
    constructor(public http: HttpClient, public ConfigService: ConfigService) {
        this.baseUrl = this.ConfigService.apiUrl;
        console.log('Hello GroomHeavenProvider Provider');
      }


      // Post method
      AuthentificationUser(Authentification:Authentification) {
        const url = `${this.baseUrl}/api/authenticate`
        var dataUser = this.http.post(url, Authentification,httpOptions)
        return dataUser
          .pipe(
            catchError(this.handleError)
          );
      }
      Register_UserApi(RegisterUser:RegisterUser) {
        const url = `${this.baseUrl}/api/account/Register`
        var dataUser = this.http.post(url, RegisterUser,httpOptions)
        return dataUser
          .pipe(
            catchError(this.handleError)
          );
      }
      SaveHouseDetails(Authentification:Authentification) {
        const url = `${this.baseUrl}/api/authenticate`
        var dataUser = this.http.post(url, Authentification,httpOptions)
        return dataUser
          .pipe(
            catchError(this.handleError)
          );
      }

      // get moethod
      GetUserProfile(Authentification:Authentification) {
          const url = `${this.baseUrl}/api/house/GetHouse`
          var dataUser = this.http.get(url,httpOptions)
          return dataUser
            .pipe(
              catchError(this.handleError)
            );
        }
      

        // Delete Mothod
        DeleteHouse(Authentification:Authentification) {
          const url = `${this.baseUrl}/api/house/DeleteHouse`
          var dataUser = this.http.get(url,httpOptions)
          return dataUser
            .pipe(
              catchError(this.handleError)
            );
        }

      private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        return throwError(errorRes);
      }
}
