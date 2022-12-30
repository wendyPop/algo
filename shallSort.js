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

// 쉘 정렬
const shellSort = (arr) =>{
  let length = arr.length; // 전체 길이

  // 전체 길이의 1/2로 줄여가며 Gap 간격으로 설정
  for (let gap = Math.floor(length/2); gap > 0; gap = Math.floor(gap/2))	{
	for (let i = gap; i < length; i++) {
	  let temp = arr[i];

	  let j = i;
	  while(j >= gap && arr[j-gap] > temp) {
		arr[j] = arr[j-gap];
		j-=gap;
	  }

	  arr[j] = temp;
	}
  }
  return arr;
}

const arr = makeRandomValueArr(10);

console.log('arr==', arr);
// [9, 6, 0, 2, 1, 8, 7, 3, 5, 4]
console.time('shell');
const result = shellSort(arr);
console.timeEnd('shell');
console.log('result==', result);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
