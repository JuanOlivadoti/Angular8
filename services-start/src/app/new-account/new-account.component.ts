import { Component } from '@angular/core';

//Services
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']/*,
  providers: [LoggingService]*/
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accoutsService: AccountService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accoutsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus)
    this.accoutsService.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status)
    )
  }
}
