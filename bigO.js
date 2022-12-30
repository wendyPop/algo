const exampleArrLength = 100000;
const exampleArr = (function () {
  const arr = [];
  for (let i = 0; i < exampleArrLength; i++) {
	arr.push(i);
  }
  return arr;
})();


// Case 1 : O(1)
// 어떤 입력 값에도 일정한 처리 속도
const caseOne = (arr) => {
  return arr[0] === 0;
}
console.time('case-one');
caseOne(exampleArr)
console.timeEnd('case-one');



// Case 2 : O(log n)
// 이진 검색
const caseTwo = (key, arr, start, end) => {
  if (start > end) return -1;
  let middle = Math.floor((start + end) / 2);
  if (arr[middle] === key) return middle;
  else if (arr[middle] > key) return caseTwo(key, arr, start, middle - 1);
  else return caseTwo(key, arr, middle + 1, end);
}

console.time('case-two');
caseTwo(23412, exampleArr, 0, exampleArr.length - 1)
console.timeEnd('case-two');

// Case 3 : O(n)
// 입력 값 수가 증가함에 따라 비례해서 처리 시간도 같이 증가
const caseThree = (arr) => {
  for (let i = 0; i < arr.length; i++) {

  }
}
console.time('case-three');
caseThree(exampleArr);
console.timeEnd('case-three');

// Case 4 : O(n log n)
// 퀵 정렬
const caseFour = (array) => {
  if (array.length < 2) {
	return array;
  }
  const pivot = [array[0]];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
	if (array[i] < pivot) {
	  left.push(array[i]);
	} else if (array[i] > pivot) {
	  right.push(array[i]);
	} else {
	  pivot.push(array[i]);
	}
  }
  return caseFour(left).concat(pivot, caseFour(right));
}

console.time('case-four');
caseFour(exampleArr);
console.timeEnd('case-four');


// Case 5 : O(n^2)
// 2중 for 문, 입력 값 수가 증가함에 따라 제곱으로 증가
const caseFive = (arr) => {
  for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length; j++) {
	}
  }
}
console.time('case-five');
caseFive(exampleArr)
console.timeEnd('case-five');

// Case 6 : O(n^3)
// 큐빅의 모양, 입력 값 수가 증가함에 따라 3제곱으로 증가
const caseSix = (arr) => {
  for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length; j++) {
	  for (let k = 0; k < arr.length; k++) {
	  }
	}
  }
}
console.time('case-six');
caseSix(exampleArr)
console.timeEnd('case-six');

// Case 7 : O(2^n)
// 피보나치 수열
// const caseSeven = (num) => {
//     if (num < 2) return num;
//     return caseSeven(num - 1) + caseSeven(num - 2);
// }
// console.time('case-seven');
// caseSeven(100)
// console.timeEnd('case-seven');

// Case 8 : O(c^n)
// recursion


// Case 9 : O(n!)
