import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'app',loadChildren:()=> import('./budget-planner/budget-planner.module').then(m=> m.BudgetPlannerModule)}
];
