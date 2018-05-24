// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { ShlokBaseService } from "./base/shlok.base.service";
import { Shlok } from '../domain/bhagwat-gita_db/shlok';

/**
 * YOU CAN OVERRIDE HERE ShlokBaseService
 */

@Injectable()
export class ShlokService extends ShlokBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}