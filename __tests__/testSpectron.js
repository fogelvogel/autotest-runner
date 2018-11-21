// import fs from 'fs';

// const a = fs.createWriteStream(path.join(__dirname, '../tmp/test.txt'));

var Application = require('spectron').Application;
var electronPath = require('electron');
const path = require('path');

const fs = require('fs');

// const ipc = require('electron').ipcRenderer;textFind

const createApp = async () => {
    console.log(electronPath);

    var app = new Application({
        path: electronPath,
        args: [
            path.join(__dirname, '..')
        ],
    });
        
    await app.start();
    // await app.client.url('https://google.com');
    return app;
}

test('app starts', async () => {
    const app = await createApp();
    await app.client.waitUntilWindowLoaded();
    expect(await app.client.getText('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]')).toEqual('Найти');
    expect(await app.client.getText('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]/FORM[1]/DIV[1]/SPAN[1]/SPAN[1]/INPUT[1]')).toEqual('');
    expect(await app.client.getText('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[1]/TD[1]/DIV[1]')).toEqual('Войти в почту');

    // const textFind = await app.client.getText('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]');
    // const textMail = await app.client.getText('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[1]/TD[1]');
    // const htmlFind = await app.client.getHTML('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]');
    // const htmlMail = await app.client.getHTML('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[1]/TD[1]');

    // fs.writeFile( path.resolve(__dirname, 'loggggg'), textFind);

    // ipc.send('save-test', `${textFind}\n`);
    // console.log(textFind, '\n', textMail, '\n', htmlFind, '\n', htmlMail);

    await app.stop();
});