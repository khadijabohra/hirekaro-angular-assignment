import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BusyDataModel, PageDetailsModel } from '../data-models/data-models';
import { SocialUser } from '../data-models/data-models';


@Injectable({
    providedIn: 'root'
})
export class CommonService {


    // Based on this, Busy icon will show
    private busy = new BehaviorSubject<BusyDataModel>(<BusyDataModel>{ isBusy: false, msg: null });
    isBusy = this.busy.asObservable();

    // Based on this, can identify current page
    private pgDetails = new BehaviorSubject<PageDetailsModel>(<PageDetailsModel>{ pageName: "" });
    currentPageDetails = this.pgDetails.asObservable();


    constructor() { }

    updateBusy(obj: BusyDataModel) {
        this.busy.next(obj)
    }

    updateCurrentPageDetails(obj: PageDetailsModel) {
        this.pgDetails.next(obj)
    }

}
