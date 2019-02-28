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
  append(value) {
    const newNode = {
      value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.lenght++;
    return this;
  }

  //// Below also works
  //   prepend(value) {
  //     const newNode = {
  //       value,
  //       next: this.head
  //     };
  //     this.head.next = this.head;
  //     this.head = newNode;
  //     this.lenght++;
  //     return this
  //   }

  prepend(value) {
    const newNode = {
      value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.lenght++;
    return this;
  }
}

const myLinkedList = new LinkedList(7);
myLinkedList.append(9);
myLinkedList.prepend(15);
console.log(myLinkedList);
