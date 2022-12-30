class Heap {
  #heap;
  #type = 'min'; // 최대, 최소 구분
  constructor(type) {
	this.#heap = [];
	this.#type = type;
  }

  // 부모 정점
  parentIndex = (index) => Math.floor((index - 1) / 2);
  // 왼쪽 자식
  leftChildIndex = (index) => (2 * index + 1);
  // 오른쪽 자식
  rightChildIndex = (index) => (2 * index + 2);

  // 위치 변경
  swap = (a, b) => {
	let temp = this.#heap[a];
	this.#heap[a] = this.#heap[b];
	this.#heap[b] = temp;
  }

  // 힙구조로 만들기
  insert = (arr) => {
	for (let i = 0; i < arr.length; i++) {
	  this.#heap.push(arr[i]);
	  var index = this.#heap.length - 1;
	  var parent = this.parentIndex(index);

	  // 최대힙 > 큰 값이 root
	  if (this.#type === 'max') {
		while (this.#heap[parent] < this.#heap[index]) {
		  this.swap(parent, index);
		  index = this.parentIndex(index);
		  parent = this.parentIndex(index);
		}
	  }
	  // 최소힙 > 작은 값이 root 또는 기본값
	  else {
		while (this.#heap[parent] > this.#heap[index]) {
		  this.swap(parent, index);
		  index = this.parentIndex(index);
		  parent = this.parentIndex(index);
		}

	  }


	}
  }

  delete = () => {
	// 가장 마지막 값을 처음으로 이동
	var item = this.#heap.shift();
	this.#heap.unshift(this.#heap.pop());

	// 다시 힙 구조로 만들기 Start
	var index = 0;
	var leftChild = this.leftChildIndex(index);
	var rightChild = this.rightChildIndex(index);

	// 최대힙 > 큰 값이 root
	if (this.#type === 'max') {
	  while (this.#heap[leftChild] > this.#heap[index] || this.#heap[rightChild] > this.#heap[index]) {
		var min = leftChild;
		if (this.#heap[rightChild] > this.#heap[min]) {
		  min = rightChild
		}
		this.swap(min, index);
		index = min;
		leftChild = this.leftChildIndex(min);
		rightChild = this.rightChildIndex(min);
	  }
	}
	// 최소힙 > 작은 값이 root
	else {
	  while (this.#heap[leftChild] < this.#heap[index] || this.#heap[rightChild] < this.#heap[index]) {
		var min = leftChild;
		if (this.#heap[rightChild] < this.#heap[min]) {
		  min = rightChild
		}
		this.swap(min, index);
		index = min;
		leftChild = this.leftChildIndex(min);
		rightChild = this.rightChildIndex(min);
	  }
	}

	return item;
  }
}


// 힙 정렬
const heapSort = (arr, type) => {
  var result = [];
  var heap = new Heap(type);

  heap.insert(arr);
  for (let i = 0; i < arr.length; i++) {
	result.push(heap.delete());
  }
  return result;
}

// 임의 배열 생성
const makeRandomValueArr = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
	arr.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
	const randomNum = Math.floor(Math.random() * arr.length);
	[arr[i], arr[randomNum]] = [arr[randomNum], arr[i]];
  }

  return arr;
}

// 결과

const minArr = makeRandomValueArr(10);
console.log('minArr==', minArr);
// minArr== (10) [2, 1, 8, 4, 6, 7, 3, 0, 9, 5]
console.time('min Heap');
const minResult = heapSort(minArr, 'min');
console.timeEnd('min Heap');
console.log('minResult==', minResult);
// minResult== (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const maxArr = makeRandomValueArr(10);
console.log('maxArr==', maxArr);
// maxArr== (10) [8, 1, 0, 5, 2, 6, 7, 9, 4, 3]
console.time('max Heap');
const maxResult = heapSort(maxArr, 'max');
console.timeEnd('max Heap');
console.log('maxResult==', maxResult);
// maxResult== (10) [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
