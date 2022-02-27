const fs = require('fs');
fs.writeFileSync(process.env.GIT_PARAMS, 'some message edited');

fs.writeFile('hello.txt', 'hello world', (err) => {
	if(err) throw err;
});