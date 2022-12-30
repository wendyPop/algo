// 위치 변경
const swap = (arr, leftIndex, rightIndex) => {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}


// 분할
const partition = (arr, start, end) => {
  const pivot = arr[end]; // 피벗 설정
  let left = start;
  for (let i = start; i < end; i++) {
	if (arr[i] < pivot) {
	  swap(arr, i, left);
	  left++;
	}
  }
  swap(arr, left, end);
  return left;
};

// 퀵 정렬
const quickSort = (arr, start, end) => {
  if (start >= end) {
	return;
  }

  let index = partition(arr, start, end);

  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
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

// 실행

const arr = makeRandomValueArr(10);

console.log('arr==', arr);
// [4, 3, 2, 5, 1, 8, 6, 7, 9, 0]
console.time('quick');
quickSort(arr, 0 , arr.length -1);
console.timeEnd('quick');

console.log('result==', arr);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
