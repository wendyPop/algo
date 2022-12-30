
/*
stack
* LIFO(Last In First Out)
*  ['hi', 'hello']
* */
class Stack {

  size: number
  indexTop: number
  array: undefined[] | string[]

  constructor(size: number) {
    this.size = size;
    this.indexTop = -1;
    this.array = [];
  }

  pop() {
    if(this.indexTop === 0) {
      console.log('Stack is empty')
    } else {
      this.array[this.indexTop] = undefined;
      this.indexTop--;
      return this.array[this.indexTop]
    }
  }

  push(item: string) {
    if(this.size > this.indexTop) {
      this.indexTop++;
      return this.array[this.indexTop] = item;
    } else {
      console.log(new Error('stack is full'))
    }
  }

  peek() {
    return this.array[this.indexTop]
  }
}


let arr = new Stack(2);
arr.push('hi');
arr.push('hello');
console.log(arr.peek())
console.log(arr);

