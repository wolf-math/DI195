interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

// Define a type Customer as an intersection type of BusinessPartner and Contact. Create an instance of the Customer type and initialize it with the appropriate properties.

type Customer = BusinessPartner & Contact;

let betty: Customer = {
  name: 'Betty Boop',
  credit: 100,
  email: 'bettyboop@oldcartoons.com',
  phone: '(555) 555-5555'
};

type BussinessIdentity = BusinessPartner & Identity;

let guy: BussinessIdentity = {
  id: 0,
  credit: 5,
  name: 'Guy'
};
