import {IUserServiceImplementation} from '../services/user.service';

export class UserServiceProvider
    implements ng.IServiceProvider {
    public $get(UserServiceImplementation: IUserServiceImplementation): IUserServiceImplementation {
        return UserServiceImplementation;
    }
}