import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from './equipment/equipment.component';
import { PointComponent } from './point/point.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';

const routes: Routes = [
  { path: 'equipment', component: EquipmentComponent },
  { path: 'equipment/add', component: AddEquipmentComponent },
  // { path: 'equipment/edit', component: AddEquipmentComponent },
  { path: 'point', component: PointComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
