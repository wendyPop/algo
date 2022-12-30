const arr = [7,5,9,1,3,2,4];

// O(n^2) 의 시간복잡도를 평균적으로 나타냅니다
// 버블 정렬
const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
	for (let j = 0; j < array.length -i -1; j++) {
	  // 구조분해 할당을 통해 위치 교환
	  if(array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]];
	}
  }
};

console.log('arr=', arr);
// [7, 5, 9, 1, 3, 2, 4]

bubbleSort(arr);

console.log('arr=', arr);
// [1, 2, 3, 4, 5, 7, 9]
