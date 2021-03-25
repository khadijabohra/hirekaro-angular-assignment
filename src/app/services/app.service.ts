import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    token: string = '';
    readonly routingConstants: any = {
        login: "/login",
        home: "/home",
        library: "/libraries",
        users: "/users",
        groups: "/groups",
        analytics: "/analytics",
    };

    readonly pageConstants: any = {
        login: "login",
        home: "home",
        library: "library",
        users: "users",
        groups: "groups",
        analytics: 'analytics'
    };
    constructor() { }

}
