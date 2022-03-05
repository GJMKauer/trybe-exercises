const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  console.log(`Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}.`);
};
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizza1 = Object.keys(order.order.pizza)[0];
  const pizza2 = Object.keys(order.order.pizza)[1];
  order.name = 'Luiz Silva';
  const customer = order.name;
  const bebida = Object.values(order.order.drinks.coke)[0];
  order.order.pizza.marguerita.price = 20;
  order.order.drinks.coke.price = 5;
  const total = order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price + order.order.delivery.price;

  console.log(`Olá, ${customer}, o total do seu pedido de ${pizza1}, ${pizza2}, e ${bebida} é R$ ${total},00.`);
};

orderModifier(order);
