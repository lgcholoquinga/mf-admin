import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => loadRemoteModule('mf-admin-auth', './routes').then((r) => r.routes),
	},
	{
		path: '',
		loadComponent: () => import('./shared/pages/not-found/not-found.component'),
	},
	{
		path: '',
		redirectTo: 'auth',
		pathMatch: 'full',
	},
	{
		path: '**',
		loadComponent: () => import('./shared/pages/not-found/not-found.component'),
	},
];
