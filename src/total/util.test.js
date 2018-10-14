import { totalSizeCalculator, totalFileCount } from './util';

it('calculate total file size correctly', () => {
	const test = [
		{
			type: 'file',
			size: 1
		}
	];

	expect(totalSizeCalculator(test)).toEqual(1);

	test.push({ type: 'file', size: 1 });
	expect(totalSizeCalculator(test)).toEqual(2);

	test.push({ type: 'folder', children: [{ type: 'file', size: 1 }] });
	expect(totalSizeCalculator(test)).toEqual(3);

	test.push({
		type: 'folder',
		children: [{ type: 'folder', children: [{ type: 'file', size: 1 }] }]
	});
	expect(totalSizeCalculator(test)).toEqual(4);
});

it('calculate total file count correctly', () => {
	const test = [
		{
			type: 'file',
			size: 1
		}
	];

	expect(totalSizeCalculator(test)).toEqual(1);

	test.push({ type: 'file', size: 1 });
	expect(totalSizeCalculator(test)).toEqual(2);

	test.push({ type: 'folder', children: [{ type: 'file', size: 1 }] });
	expect(totalSizeCalculator(test)).toEqual(3);

	test.push({
		type: 'folder',
		children: [{ type: 'folder', children: [{ type: 'file', size: 1 }] }]
	});
	expect(totalSizeCalculator(test)).toEqual(4);
});