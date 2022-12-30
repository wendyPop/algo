// 랜덤 임의 배열 만들기
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

// 선택 정렬
const selectionSort = (array) => {
  // 각 자리
  for (let i = 0; i < array.length; i++) {
	let minIndex = i;
	// 가장 작은 값 찾기
	for (let j = i + 1; j < array.length; j++) {
	  if(array[minIndex] > array[j]) minIndex = j;
	}
	if(minIndex !== i ) [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}


const arr = makeRandomValueArr(10);
console.log('arr=',arr);
// [5, 1, 0, 9, 8, 7, 2, 6, 4, 3]

console.time('selection');
const result = selectionSort(arr);
console.timeEnd('selection');

console.log('result=',result);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
