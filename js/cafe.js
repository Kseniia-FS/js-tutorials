import menu from "./db.menu.js";
import oficiants from "./db.oficiants.js";
import tables from "./db.tables.js";

class Cafe {
  getPresentWorkers = () => oficiants.filter((worker) => worker.isPresent);

  checkTables(tables) {
    this.presentWorkers = this.getPresentWorkers();
    tables.forEach((table, idx) => {
      const indexWorker = idx % this.presentWorkers.length;
      table.service = this.presentWorkers[indexWorker].name;
      this.presentWorkers[indexWorker].tables = [
        ...this.presentWorkers[indexWorker].tables,
        table.table,
      ];
    });
  }

  getOrderPosition(tableNum, dishId, quantity) {
    tables.forEach((table) => {
      if (table.table === tableNum) {
        if (!table.currentOrder) {
          table.currentOrder = {};
        }
        if (!table.currentOrder[dishId]) {
          table.currentOrder[dishId] = 0;
        }

        table.currentOrder[dishId] += quantity;
      }
    });
  }
}

// function getPresentWorkers() {
//   const presentWorkers = [];
//   for (const worker of oficiants) {
//     if (worker.isPresent === true) {
//       presentWorkers.push({ ...worker });
//     }
//   }

//   return presentWorkers;
// }

const cafe = new Cafe();

// console.log(cafe.getPresentWorkers());
console.log(cafe.checkTables(tables));
console.log(tables);
console.log(cafe.presentWorkers);
cafe.getOrderPosition(1, "napoleon", 3);
console.log(tables[0]);

// function checkTables(tables, presentWorkers) {
//   for (let i = 0; i < tables.length; i += 1) {
//     const indexWorker = i % presentWorkers.length;

//     tables[i].service = presentWorkers[indexWorker].name;

//     presentWorkers[indexWorker].tables = [
//       ...presentWorkers[indexWorker].tables,
//       tables[i].table,
//     ];
//   }
// }

// checkTables(tables);
// console.log(tables);
// console.log(presentWorkers);

//? 3. Написать функцию getOrder(table, dishId, num), которая принимает номер столика, id блюда(меню с
//?блюдами внешняя переменная из
//?глобальной области видимости) и кол - во данных блюд в заказе.добавляет в объекте столика,
//?свойство currentOrder - объект со свойствами,
//?где ключ - id блюда, значение ключа - кол - во этих блюд в текущем заказе,
//?Пример currentOrder: { capuchino: 2, napoleon: 2, zavarnoe: 1 },

// function getOrder(tableNum, dishId, quantity) {
//   for (const table of tables) {
//     if (table.table === tableNum) {
//       if (!table.currentOrder) {
//         table.currentOrder = {};
//       }
//       if (!table.currentOrder[dishId]) {
//         table.currentOrder[dishId] = 0;
//       }

//       table.currentOrder[dishId] += quantity;
//     }
//   }
// }
// getOrder(1, "espresso", 3);
// getOrder(1, "napoleon", 2);
// getOrder(1, "napoleon", 3);

// console.log(tables);

//? 4. Написать функцию для обработки заказа на кухне и на баре, которая принимает
//? объект tabel(номер столика) и если в нём есть заполненное свойствами значение currentOrder,
//? создает массив вида - пример: ["Капучино - 2", "Торт Наполеон - 2", "Пирожное заварное - 1"] и добавляет
//? этот массив в свойстово prepearing в объекте соотвоетствующего столика.

// function orderForBar(tableNum) {
//   for (const table of tables) {
//     if (table.currentOrder) {
//       if (table.table === tableNum) {
//         table.preparing = [];
//         table.preparing.push(Object.entries(table.currentOrder));
//       }
//     }
//   }
// }
// orderForBar(1);
// console.log(tables);
