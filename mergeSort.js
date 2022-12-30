// 합병 정렬
const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
	if (left[0] < right[0]) arr.push(left.shift());
	else arr.push(right.shift());
  }
  return [...arr, ...left, ...right];
}

// 합병 정렬
const mergeSort = (array) => {
  if (array.length < 2) return array;
  const half = array.length / 2;
  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}


/// 실행

// 임의 배열 만들기
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

const arr = makeRandomValueArr(10); // 10개

console.log('arr==', arr);
// [1, 3, 4, 5, 8, 0, 6, 7, 9, 2]
console.time('merge');
const result = mergeSort(arr);
console.timeEnd('merge');
console.log('result==', result);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
