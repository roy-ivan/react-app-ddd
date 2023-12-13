import { type } from "../type.enum";

export interface ItemRegisterInterface {
  spec: string;
  sub: number;
  title: string;
  description: string;
  type: type;
}
