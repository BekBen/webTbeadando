import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/services/auth.guard';

const routes: Routes = [
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'aboutus', loadChildren: () => import('./pages/aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'services', loadChildren: () => import('./common/services/services/services.module').then(m => m.ServicesModule) }, 
  { path: 'worker', loadChildren: () => import('./pages/worker/worker.module').then(m => m.WorkerModule),canActivate: [AuthGuard] },
  { path: 'prices', loadChildren: () => import('./pages/prices/prices.module').then(m => m.PricesModule) },
  { path: 'book', loadChildren: () => import('./pages/book/book.module').then(m => m.BookModule), 
    canActivate: [AuthGuard] },
  { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'worker', loadChildren: () => import('./pages/worker/worker.module').then(m => m.WorkerModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },

  { path: '**',redirectTo: '/not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
