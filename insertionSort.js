// 임의 데이터 생성
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

// 삽입 정렬
const insertionSort = (array) => {
  console.table(array)
  for(let i = 1; i < array.length-1; i++) {
	let curIndex = i - 1;
	let curValue = array[i];
	while(curIndex >= 0 && array[curIndex] > curValue) {
	  array[curIndex + 1] = array[curIndex];
	  curIndex--;
	}
	array[curIndex + 1] = curValue;
	console.log(array)
  }
  return array;
}

const arr = makeRandomValueArr(10);

console.log('arr=', arr);
// 랜덤정렬 : [4, 3, 8, 2, 5, 7, 1, 6, 0, 9]

console.time('insertion');
const result = insertionSort(arr);
console.timeEnd('insertion'); // insertion: 15.64ms

console.log('result=', result);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
