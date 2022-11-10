function lonelyinteger(a: number[]): number {
	const numbers: any = {};

	a.forEach((num, i) => {
		if (numbers[num] > 0) Reflect.deleteProperty(numbers, num);
		else numbers[num] = 1;
	});

	return +Object.keys(numbers)[0];
}

export default lonelyinteger;
