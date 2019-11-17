const _ = require('lodash'),
    FileSystem = require('fs'),
    FileName = __dirname + '/Readme.md';

let lines = [
    "# Geometry JS",
    "",
    "## Available functionality"
];

_.map(FileSystem.readdirSync('./src/figures/', 'utf8'), file => {
    let [name, ext] = file.split('.');
    name = name.split('_');

    lines.push("- [ ] " + _.map(name, o => _.upperFirst(o)).join(' '));
});

lines = [
    ...lines,
    "   ",
    "## Scaffold",
    "If You need to scaffold some new figure, You should run:",
    "```bash",
    "npm run g <figure> <functions*>",
    "",
    "* - optional argument (ex. getA,getB,getC)",
    "```",
    "## Contribution",
    "If You do have any functionality You would like to add or/and improve, then please - do PR after fork.",
    "All contributors will be listed."
];

FileSystem.writeFileSync(FileName, lines.join("\n"), 'utf8');