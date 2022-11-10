import fs from 'fs';

const args = process.argv;
const challengeName: string = args[3] ?? 'NewChallenge';
const user = args[4] ?? 'Anonymous';
const challengePath = `./challenges/${challengeName}`;
const solutionsPath = `./solutions/${user}/${challengeName}`;

console.log('creating folder...');
if (!fs.existsSync(solutionsPath)) {
	fs.mkdirSync(solutionsPath);
	console.log(`${challengeName} solution folder is created successfully`);
}

if (!fs.existsSync(challengePath)) {
	fs.mkdirSync(challengePath);
	console.log(`${challengeName} challenge folder is created successfully`);
}

fs.writeFile(`${solutionsPath}/${challengeName}.ts`, '// Write your Code here...', function (err) {
	if (err != null) throw err;
	console.log(`${challengeName}.ts is created successfully.`);
});

fs.writeFile(`${solutionsPath}/${challengeName}.test.ts`, '// Write your test here...', function (err) {
	if (err != null) throw err;
	console.log(`${challengeName}.test.ts is created successfully.`);
});
