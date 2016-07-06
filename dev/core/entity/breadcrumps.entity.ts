export interface IBreadcrump {
    title: string;
    sref: string;
}

export class Breadcrump implements IBreadcrump {
    constructor(public title, public sref) {
        
    }
}