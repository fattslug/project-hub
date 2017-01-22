import { AccountService } from './account/account.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private account: AccountService) {}

	login() {
		this.account.login();
	}
	logout() {
		this.account.logout();
	}
}
