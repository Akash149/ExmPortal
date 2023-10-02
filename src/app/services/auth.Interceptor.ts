import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private login:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Add JWT token (Local storage) request
        let authReq = req;
        let token = this.login.getToken();
        console.log("inside interceptor");
        
        if(token != null) {
            // authReq = authReq.clone({ headers: authReq.headers.set('Authorization', 'Bearer ' + token)});
            authReq  = authReq.clone({
                setHeaders:{Authorization: `Bearer ${token}`},
            });
            console.log(authReq.headers.getAll('Authorization'));
        }
        console.log(authReq);
        return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },
];