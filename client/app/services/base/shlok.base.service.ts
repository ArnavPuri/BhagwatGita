/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  FOR CUSTOMIZE ShlokBaseService PLEASE EDIT ../Shlok.service.ts
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */
 
//DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../../security/authentication.service';

// MODEL
import { Shlok } from '../../domain/bhagwat-gita_db/shlok';

// CONFIG
import { config } from "../../../config/properties";

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Shlok.service.ts
 */
 
/*
 * SCHEMA DB Shlok
 * 
	{
		count: {
			type: 'String', 
			required : true
		},
		english: {
			type: 'String'
		},
		hindi: {
			type: 'String'
		},
		sanskrit: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		
	}
 * 
 */
@Injectable()
export class ShlokBaseService {

    contextUrl:string = config.host + "/shloks";
    constructor(
        protected http: Http,
        protected authenticationService: AuthenticationService) {
        
    }

//CRUD METHODS
	
	/**
     * Create new item
     */
     create(item: Shlok): Observable<Shlok> {
        return this.http
            .post(this.contextUrl, item)
            .map(response => response.json());
    }
	
	/**
     * Remove one item by id
     */
     remove(id: string): Observable<void> {
        return this.http
            .delete(this.contextUrl + "/" + id)
            .map(response => null);
    }
	
    /**
     * Get one item by id
     */
	
	get(id: string): Observable<Shlok> {
        return this.http
            .get(this.contextUrl + "/" + id)
            .map(response => response.json() as Shlok)
    }

	
    /**
     * Get list of items
     */
	
	list(): Observable<Shlok[]> {
        return this.http
            .get(this.contextUrl)
            .map(response => response.json() as Shlok[])
    }
	
    /**
     * Update item
     */
	update(item: Shlok): Observable<Shlok> {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .map(response => response.json())
    }



}
