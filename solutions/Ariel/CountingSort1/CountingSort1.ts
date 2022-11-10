function countingSort(arr: number[]): number[] {
	const res: number[] = new Array(100).fill(0);

	arr.forEach((value) => (res[value] += 1));

	return res;
}

export default countingSort;
