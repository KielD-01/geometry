const _ = require('lodash'),
    FileSystem = require('fs'),
    FiguresPath = './src/figures',
    FilesList = FileSystem.readdirSync(FiguresPath + '/'),
    ScriptsWithFunctions = [];

_.map(FilesList, file => {
    let RequireFilePath = `${FiguresPath}/${file}`,
        FigureExists = FileSystem.existsSync(RequireFilePath);

    console.log(file, 'exists?', FigureExists);
});