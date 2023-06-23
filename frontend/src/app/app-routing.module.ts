import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { GLOBAL_ROUTES } from './core/routes/frontend.routes';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: GLOBAL_ROUTES.WELCOME },
	{ path: GLOBAL_ROUTES.WELCOME, component: WelcomeComponent },
	{ path: '**', redirectTo: GLOBAL_ROUTES.WELCOME },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
