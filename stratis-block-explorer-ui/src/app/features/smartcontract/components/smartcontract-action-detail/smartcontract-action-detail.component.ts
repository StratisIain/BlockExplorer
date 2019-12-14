import { Component, Input } from '@angular/core';
import { SmartContractAction } from '../../models';
import { CoreStoreFacade } from '@core/store/core-store.facade';

@Component({
   selector: 'smartcontract-action-detail',
   templateUrl: './smartcontract-action-detail.component.html',
   styleUrls: ['./smartcontract-action-detail.component.scss']
})
export class SmartContractActionDetail {
   @Input() smartContractAction: SmartContractAction;

   constructor() { }

   getSmartContractLogs(smartContractAction: SmartContractAction) {
      if (smartContractAction.logs == null) {
         return null;
      }

      return JSON.stringify(JSON.parse(smartContractAction.logs), null, 2);
   }
}
