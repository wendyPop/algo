

/*
* FIFO(First In First Out)
* 1 |2 |3 |4 |5 |6 |
* [1, 2, 3, 4, 5]
* */

class queueType {

  constructor(size) {
	this.maxSize = size;
	this.front = -1;
	this.rear = -1;
	this.array = [];
  }
  queueIn(item) {
	if(this.rear !== this.maxSize -1) {
	  this.array[++this.rear] = item;
	} else {
	  console.log(new Error('Queue is full'))
	}
  }
  queueOut() {
	if(this.front === this.rear) {
	  console.log(new Error('queue is empty'))
	} else {
	  ++this.front;
	  return this.array[this.front]
	}
  }
  print() {
	let str = '';
	for(let i = 0; i < this.maxSize; i++) {
	  if(this.front >= i || i > this.rear) {
		str += " | "
	  } else {
		str += `${this.array[i]} |`
	  }
	}
	console.log(str)
  }
}

let queue = new queueType(6);
queue.queueIn(1);
queue.queueIn(2);
queue.queueIn(3);
queue.queueIn(4);
queue.queueIn(5);
queue.queueIn(6);
queue.print()
