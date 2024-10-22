const dishesAndChefs = new Map([
  ['Пицца "Маргарита"', "Виктор"],
  ['Пицца "Пепперони"', "Виктор"],
  ['Суши "Филадельфия"', "Ольга"],
  ['Суши "Калифорния"', "Ольга"],
  ["Тирамису", "Дмитрий"],
  ["Чизкейк", "Дмитрий"],
]);
const client1 = {
  name: "Алексей",
};
const client2 = {
  name: "Марина",
};
const client3 = {
  name: "Ирина",
};

const clientOrders = new Map();

clientOrders.set(client1, ['Пицца "Пепперони"', 'Тирамису']);
clientOrders.set(client2, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
clientOrders.set(client3, ['Чизкейк']);

function getChefByDish(dish) {
  return dishesAndChefs.get(dish);
}



function printClientOrders() {
    clientOrders.forEach((orders, client) => {
        console.log(`Клиент ${client.name} заказал:`);
        orders.forEach(dish => {
            const chef = getChefByDish(dish);
            console.log(`- ${dish} (повар: ${chef})`);
        });
    });
}

printClientOrders();