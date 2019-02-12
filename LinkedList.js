// 7-->9-->15

// let myLinkedList = {
//     head:{
//         value: 7,
//         next:{
//             value: 9,
//             next: {
//                 value: 15,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.lenght = 1;
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
