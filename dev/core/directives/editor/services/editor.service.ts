import {IAction} from '../entities/actions';

export interface IEditorService {
    appendCustomActions(actions: Array<IAction>, $rootScope: ng.IRootScopeService): void;
}

export class EditorService implements IEditorService {
    appendCustomActions(actions: Array<IAction>, $rootScope): void {
        for (let i = 0; i < actions.length; i++ ) {
            let property = actions[i].property;

            if (!$rootScope.testAngularTools[property]) {
                $rootScope.testAngularTools[property] = actions[i];
            }
        }
    }
}