// src/app/service/meta.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MetaService } from './meta.service';

@Injectable({
    providedIn: 'root'
})
export class MetaResolver implements Resolve<any> {
    constructor(private metaService: MetaService) { }

    resolve(route: ActivatedRouteSnapshot) {
        if (route.data['meta']) {
            this.metaService.setMetaTags(route.data['meta']);
        }
        return true;
    }
}