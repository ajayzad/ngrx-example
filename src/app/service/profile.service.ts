import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { profileDTO } from "../modals/profile.modal";

@Injectable({
    providedIn: 'root'
})
export class ProfileService{
    
    constructor(private httpClient: HttpClient){

    }

    public saveProfile(profilePayload: profileDTO): Observable<Object> {
        return this.httpClient.post('http://localhost:8080/api/save', profilePayload);
    }
}