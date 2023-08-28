import { Pizza } from "./pizza";
import { User } from "./user";

export class Order {
  constructor(
    public nbrPizzas:number,
    public adresse:string,
    public pizza:Pizza,
    public user:User
    ){}
}
