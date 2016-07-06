import {IAppServiceImplementation} from '../services/app.service';

export class AppServiceProvider
    implements ng.IServiceProvider {
    public $get(AppServiceImplementation: IAppServiceImplementation): IAppServiceImplementation {
        return AppServiceImplementation;
    }
}