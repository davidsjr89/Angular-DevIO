import { TodoComponent } from './demos/todo-list/todo.component';
import { BarServices } from './demos/bar-di-zones/bar.services';
import { BarComponent } from './demos/bar-di-zones/bar.component';
import { NgModule, Provider } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

export const BAR_PROVIDERS: Provider[] = [
    BarServices
];

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},    
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent},    
    { path: 'filmes', component: FilmesComponent },
    { path: 'bar', component: BarComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)},
    { path: 'admin', 
            loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
            canLoad: [AuthGuard], canActivate: [AuthGuard]},
    {path: 'todo', component: TodoComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
        CadastroGuard,
        // BAR_PROVIDERS
    ]
})
export class AppRoutingModule{}