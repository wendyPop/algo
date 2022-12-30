function quickSort(arr) {

  if(arr.length < 2) {
	return arr;
  };

  // quickSort 초기 배열을 선언 첫 pivot 배열의 첫 번째 요소이다.
  let pivot = [arr[0]];
  let left = [];
  let right = [];

  // for문을 돌면서 pivot보다 작은 것은 왼쪽 큰 것은 오른쪽 그렇지 않은 것은 pivot에 넣어준다.
  for(let i = 1; i < arr.length; i++) {
	if(arr[i] < pivot) {
	  left.push(arr[i]);
	} else if(arr[i] > pivot) {
	  right.push(arr[i]);
	} else {
	  pivot.push(arr[i]);
	}
  }
  // quickSort 진행상황을 단계별로 보여주기 위한 코드
  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);

  // 재귀함수 구조로 다시 선언해서 끝날때까지 시작한다.
  return quickSort(left).concat(pivot, quickSort(right));
}

let arr = [4, 3, 7, 8, 5, 2, 1, 6, 9, 4];
console.log(quickSort(arr));
