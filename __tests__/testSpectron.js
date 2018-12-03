// import fs from 'fs';

// const a = fs.createWriteStream(path.join(__dirname, '../tmp/test.txt'));

var Application = require('spectron').Application;
var electronPath = require('electron');
const path = require('path');

const fs = require('fs');

// const ipc = require('electron').ipcRenderer;textFind
jest.setTimeout(40000);
const createApp = async () => {
    console.log(electronPath);

    var app = new Application({
        path: electronPath,
        args: [
            path.join(__dirname, '..')
        ],
    });
        
    await app.start();
    await app.client.url('https://www.yandex.ru');
    return app;
}

test('app starts', async () => {
    const app = await createApp();
    await app.client.waitUntilWindowLoaded();
    await app.client.doubleClick('/HTML[1]/BODY[1]/DIV[1]/DIV[3]/DIV[2]/DIV[2]/DIV[1]/DIV[2]/DIV[1]/DIV[2]/DIV[1]/FORM[1]/DIV[1]/SPAN[1]/SPAN[1]/INPUT[1]');
    await app.client.keys('t').then();
    await app.client.keys('h').then();
    await app.client.keys('d').then();
    await app.client.keys('h').then();
    expect(await app.client.getText('/HTML[1]/BODY[1]/DIV[1]/DIV[3]/DIV[2]/DIV[2]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/A[4]')).toEqual('Карты');
    expect(await app.client.getElementSize('/HTML[1]/BODY[1]/DIV[1]/DIV[3]/DIV[2]/DIV[2]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/A[5]')).toEqual({height: 18, width: 53});
    expect(await app.client.getAttribute('/HTML[1]/BODY[1]/DIV[1]/DIV[3]/DIV[2]/DIV[2]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/A[5]', 'class')).toEqual('home-link home-link_blue_yes home-tabs__link home-tabs__search');

    await app.stop();
});