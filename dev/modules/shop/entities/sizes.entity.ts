export interface ISize {
    id: number;
    symbol: string;
}

export interface ISizeList {

}

export class Size {
    public id;
    public symbol;

    constructor(size?: ISize) {
        this.id = size.id ? size.id : null;
        this.symbol = size.symbol ? size.symbol : null;
    }
}