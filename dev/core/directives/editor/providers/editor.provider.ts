import {IEditorService} from '../services/editor.service';

export class EditorProvider implements ng.IServiceProvider {
    $get(EditorServiceImplementation: IEditorService) {
        return EditorServiceImplementation;
    }
}