import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'adm-not-found',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
})
export default class NotFoundComponent {}
