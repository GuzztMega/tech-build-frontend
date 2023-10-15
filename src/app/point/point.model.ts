import { Equipment } from "../equipment/equipment.model";

export interface Point {
  id: string,
  name: string,
  dataType: string,
  value: any,
  equipment: Equipment
}
