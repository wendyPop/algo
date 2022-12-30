//
// Circular Linked List(원형 연결 리스트)
// https://ukcasso.tistory.com/6

/*
* 링버퍼

// <ref *1> LinkedNodeType {
//   data: 'head',
// 	link: LinkedNodeType { data: 3, link: LinkedNodeType { data: 2, link: [Circular *1] } }
// }
* */


class LinkedNodeType {
data: number | string;
link: null | LinkedNodeType
  constructor(item: number | string) {
	this.data = item;
	this.link = null;
  }

  firstNodeIn(item: number) {
	let newNode = new LinkedNodeType(item)
	if(this.link === null) {
	  // Linked List(연결 리스트)와 다른 점은
	  // 노드를 생성할 때 마지막 노드를 처음 노드에 연결 시켜주는 것이 다르다.
	  // ! 마지막 노드를 처음 노드에 연결
	  newNode.link = this;
	  this.link = newNode;
	} else {
	  newNode.link = this.link;
	  this.link = newNode;
	}
  }

  firstNodeOut() {
	if(this.link === null) return null;
	const innerNode = this.link;
	// console.log(innerNode.link)  // LinkedNodeType { data:3, link: LinkedNodeType { data:2, link: ... }}
	// console.log(this.link) 		// LinkedNodeType { data:4, link: LinkedNodeType { data: 3, link: ... }}
	this.link = innerNode.link;
  }

  lastNodeIn(item: number) {
	let newNode = new LinkedNodeType(item)
	let p: LinkedNodeType  = this;
	if(this.link === null) {
	  this.link = newNode;
	  newNode.link = this;
	} else {
	  while(p.link && p.link !== this) {
		p = p.link;
	  }
	  p.link = newNode;
	  newNode.link = this;
	}
  }

  lastNodeOut() {
	if(this.link === null) return null;
	let p: LinkedNodeType = this;
	while(p.link && p.link.link !== this) {
	  p = p.link;
	}
	p.link = this;
  }

  print() {
	let string = `${this.data} | `;
	let p: LinkedNodeType|null = this.link;
	while(p && p !== this) {
	  string += `${p.data} | `;
	  p = p.link;
	}
	string += p && p.data;
	console.log(string)
  }
}

let circularLinkedList = new LinkedNodeType("head");
circularLinkedList.firstNodeIn(1)
circularLinkedList.firstNodeIn(2)
circularLinkedList.firstNodeIn(3)
circularLinkedList.firstNodeIn(4)
circularLinkedList.firstNodeOut()
circularLinkedList.lastNodeOut()
// console.log(circularLinkedList)
// circularLinkedList.print()


