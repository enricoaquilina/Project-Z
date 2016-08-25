import {Component, OnInit, Input} from '@angular/core';
import {HubMessage} from './hubmessage';

@Component({
    moduleId: module.id,
    selector: 'hub-message',
    templateUrl: 'hub-message.component.html',
})
export class HubMessageComponent {
    @Input() message: HubMessage;


}