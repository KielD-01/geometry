let [figure, functions = null] = process.argv.slice(2);
const FileSystem = require('fs'),
    _ = require('lodash'),
    scaffold = {
        figure: 'figure',
        test: 'figure_test',
        function: 'figure_function',
        exports: 'figure_functions_exports',
        getScaffoldPath: (module) => {
            return scaffold.hasOwnProperty(module) ?
                `./src/scaffold/${scaffold[module]}.scaffold` : false;
        }
    };

String.prototype.replaceAll = function (search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

const f = {
    scaffold: {
        makeFigureTests(figure) {
            FileSystem.readFile(scaffold.getScaffoldPath('test'), 'utf8', (err, content) => {
                if (!err) {
                    FileSystem.writeFile(`./src/tests/${figure}.js`, content.replaceAll('{replace}', figure), 'utf8', (err) => {
                        if (!err) {
                            console.log(`JS Script Figure Test File for \`${figure}\` has been successfully created!`);
                        }
                    });
                }
            });
        },
        makeFigureFunction(figure, functions) {
            let f = [],
                content = FileSystem.readFileSync(scaffold.getScaffoldPath('function'), 'utf8');

            _.map(functions, (func) => {
                f.push(content.replaceAll('{function}', func).replace('{figure}', figure));
            });

            return f.join("\r\n".repeat(2))
        },
        makeFunctionsExports(figure, functions = []) {
            return FileSystem.readFileSync(scaffold.getScaffoldPath('exports'), 'utf8')
                .replace('{figure}', figure)
                .replace('{functions}', functions.join(",\r\n\t"));
        },
        makeFigure(figure, functions = []) {
            let exports = f.scaffold.makeFunctionsExports(figure, functions || []);

            if (functions !== null) {
                functions = f.scaffold.makeFigureFunction(figure, functions);
            }

            FileSystem.readFile(scaffold.getScaffoldPath('figure'), 'utf8', (err, content) => {
                if (!err) {
                    content = content
                        .replaceAll('{replace}', figure)
                        .replace('{exports}', exports)
                        .replace('{functions}', functions || '');

                    FileSystem.writeFile(`./src/figures/${figure}.js`, content, 'utf8', (err) => {
                        if (!err) {
                            console.log(`JS Script Figure File for \`${figure}\` has been successfully created!`);
                            f.scaffold.makeFigureTests(figure);
                        }
                    });
                }
            });
        },
    }
};

if (!figure) {
    throw new Error('No Figure has been specified to be generated');
}

figure = figure.toLowerCase();

if (typeof functions === 'string') functions = functions.split(',');

console.log(`Scaffold \`${figure}\`...`);

console.log(`Needed scaffold functions :`, Array.isArray(functions) && functions.length ? functions : 'none');
f.scaffold.makeFigure(figure, functions);