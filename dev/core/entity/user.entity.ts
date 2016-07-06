export interface IUserEntity {
    username: string;
    displayName: string;
    roles: string[];
}

export class UserEntity
    implements IUserEntity {
    constructor(
        public username: string,
        public roles: string[],
        public displayName: string) {

    }
}