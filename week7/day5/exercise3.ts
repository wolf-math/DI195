// Create two types TypeA and TypeB with different properties. Then create an intersection type of TypeA and TypeB and demonstrate that the order of the types doesn't matter.

interface Partner {
  name: string;
}

interface Ident {
  id: number;
}

type BI = Partner & Ident;
type IB = Ident & Partner;

const person1: BI = { name: 'person', id: 2 };
const person2: IB = { name: 'person', id: 2 };
