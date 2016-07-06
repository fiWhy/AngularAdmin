export class TableBody {
    public restrict = 'A';
    public require = '^tableWidget';
    public transclude = true;
    public templateUrl: string;

    constructor(config) {
        this.templateUrl = config.documentRoot + '/core/directives/table/templates/table.body.html';
    }

}