const _ = require('lodash');
const FileSystem = require('fs');
const Colors = require('colors');

const testsDir = `./src/tests/`;

const results = {p: 0, f: 0};

Colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

console.log(Colors.warn(`Tests Directory : ${testsDir}`));

FileSystem.readdir(testsDir, (err, files) => {
    files.map(file => {
        console.log(Colors.info('Test File : %s'), file);
        let script = require(`${testsDir}` + file);
        _.map(script['t'](), (value, key) => {
            results[key] += value;
        });
    });

    console.log(Colors.info('Passed Tests : %s'), results['p']);
    console.log(Colors.error('Failed Tests : %s'), results['f']);

});