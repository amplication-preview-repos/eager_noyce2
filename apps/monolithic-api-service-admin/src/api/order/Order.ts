import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderDate: Date | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
