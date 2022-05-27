import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AuthGuard } from './auth/auth.guard';
import { CustomerComponent } from './customer/customer.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'adminhome', component: AdminhomeComponent,canActivate:[AuthGuard]
    },
    {
        path: 'customer', component: CustomerComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];