import { Component, OnInit } from '@angular/core';
import { Equipment } from './equipment.model';
import { EquipmentService } from './equipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})

export class EquipmentComponent implements OnInit {
  equipmentList: Equipment[] = [];

  constructor(private equipmentService: EquipmentService, private router: Router){}

  addEquipment(){
    this.router.navigate(['equipment/add']);
  }

  editEquipment(equipment: Equipment){
    // a implementar
  }

  deleteEquipment(equipment: Equipment){
    this.equipmentService.deleteEquipment(equipment).subscribe();
    location.reload();
  }

  ngOnInit(): void {
    this.equipmentService.getEquipments().subscribe(equipments => {
      this.equipmentList = equipments;
    })
  }
}
