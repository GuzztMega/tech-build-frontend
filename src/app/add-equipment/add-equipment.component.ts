import { Component } from '@angular/core';
import { EquipmentService } from '../equipment/equipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent {
  newEquipment = { name: '', serialNumber: '' };

  constructor(private equipmentService: EquipmentService, private router: Router) {}

  return(){
    this.router.navigate(['/equipment']);
  }
  onSubmit() {
    this.equipmentService.addEquipment(this.newEquipment).subscribe(() => {
      this.router.navigate(['/equipment']);
    });
  }
}
