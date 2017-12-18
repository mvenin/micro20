import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ImmobilisService } from './immobilis.service';

@Component({
    moduleId: module.id,
    selector: 'immobilis',
    templateUrl: './immobilis.component.html',
})
export class ImmobilisComponent implements OnInit {
    pageContent: string;
    constructor(private route: ActivatedRoute, private immobilisService: ImmobilisService) {
    }

    ngOnInit() {
        this.pageContent = 'nada yet';
    }


    getPageHtml(pageUri: string): void {
        this.immobilisService.getContentFromUri(pageUri)
            .then(data => this.pageContent = data);
    }

}