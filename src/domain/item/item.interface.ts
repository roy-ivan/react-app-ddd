import { CountInterface } from "./count.interface";
import { type } from "../type.enum";

export interface ItemInterface {
  id: number;
  status: string;
  number: number;
  spec: string;
  rev: number;
  title: string;
  type: type.IMPORT;
  priority: string;
  package: string;
  count: CountInterface;
  dueDate: string;
  responsive: string;
}
