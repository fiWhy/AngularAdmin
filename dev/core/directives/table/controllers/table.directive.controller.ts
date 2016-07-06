import {ITableScope} from '../entities/table.scope.entity';
import {ITableDirectiveService} from '../services/table.directive.service';



export class TableDirectiveController {
    static $inject = ['TableDirectiveService', '$scope', '$translate'];
    private titles: Array<string>;
    constructor(
        private TableDirectiveService: ITableDirectiveService,
        private $scope: ITableScope,
        private $translate
    ) {
        this.checkForTranslateAndDoIt();
    } 

    checkForTranslateAndDoIt() {
        if (this.$scope.titleTranslate) {
            this.$translate(this.$scope.titles)
                .then(translations => {
                    this.titles = translations;
                    console.log(translations);
                });
        } else
            this.titles = this.$scope.titles;
    }
}