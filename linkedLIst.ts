// https://ukcasso.tistory.com/2

/*
* Linked List(연결 리스트) 만들기
* 1. 데이터 추가/제거시 시간복잡도가 증가하지 않는다.
* 2. 데이터 탐색속도가 오래걸린다.
*
* 3. 연속되는 데이터들은 포인터로 연결되어 있다.
* 4. 마지막 항목은 null 을 가르킨다.
* 5. 연산에 따라 크기가 늘어나거나 작아지지 않는다.
* */

class NodeType {
  private data: string | number;
  private link: null | NodeType;


	constructor(item: number | string) {
	this.data = item;
	this.link = null;
  }

  firstNodeIn(item: number) {
	let newNode = new NodeType(item);
	if(this.link === null) {
	  // 최초에 한번
	  this.link = newNode;
	} else {
	  // 그 다음부터는 모든 링크를 째로 this.link 로 바꿔치기
	  // link: NodeType { data: 4, link: NodeType { data: 3, link: { data: 2, link: { data: 1, link: null } } } }
	  newNode.link = this.link;
	  this.link = newNode;
	}
  }

  firstNodeOut() {
	if(this.link === null) return null;

	const tmp = this.link
	this.link = tmp.link;
  }

  lastNodeIn(item: number) {
	let newNode = new NodeType(item)
	let p: NodeType = this;

	// 마지막 노드를 제외하고
	while(p.link !== null) {
	  p = p.link;
	}
	// console.log(this)
	// console.log(newNode) // NodeType { data: 0, link: null }
	p.link = newNode;   // NodeType { data: 1, link: NodeType { data: 0, link: null } }
	this.print()
  }

  lastNodeOut() {
	if(this.link === null) return null;

	let p: NodeType = this;
	// p.link.link !== null 을 통해 다음 노드가 있는지 확인
	while( p.link && p.link.link !== null) {
	  p = p.link;
	}
	// 현재 노드 p에서 바로 link 를 끊어주어 삭제가 되는 것
	p.link = null;
  }

  print() {
	let string = '';
	// this 가 null 이 아니면 ( 마지막이 아니면, 마지막 노드는 link 가 null 이다 )
	// p.link 를 계속 넣어준다.
	for(let p:NodeType | null = this; p!==null; p = p.link) {
	  string += `${p.data} | `
	}
	string += 'NULL'
	console.log(string)
  }
}

let head = new NodeType('head')
// console.log(head) // NodeType { data: 'head', link: null }
head.firstNodeIn(1)
head.firstNodeIn(2)
head.firstNodeIn(3)
head.firstNodeIn(4)
head.firstNodeIn(5)
head.firstNodeIn(6)
head.firstNodeIn(7)
head.firstNodeIn(8)
head.lastNodeIn(0)
head.firstNodeOut()
head.lastNodeOut()
head.print()
/*
	head | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 | NULL
	head | 7 | 6 | 5 | 4 | 3 | 2 | 1 | NULL
*/


/*

// head.firstNodeIn(5) 가 호출됬을때 Linked List(연결 리스트)는 이렇게 생겼다.
NodeType {
  data: 5,
  link: NodeType { data: 4, link: NodeType { data: 3, link: { data: 2, link: { data: 1, link: null } } } }
}*/
