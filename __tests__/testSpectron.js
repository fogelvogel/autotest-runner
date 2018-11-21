var Application = require('spectron').Application;
var electronPath = require('electron');
const path = require('path');

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
// expect((await app.client.element('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]')).value).not.toBeNull();
expect((await app.client.element('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]/FORM[1]/DIV[1]/SPAN[1]/SPAN[1]/INPUT[1]')).value).not.toBeNull();
expect((await app.client.element('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]')).value).not.toBeNull();
// expect(await app.client.getText('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]')).toEqual('

// Найти
// ');
expect(await app.client.getElementSize('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]')).toEqual({height: 634, width: 1024});
expect(await app.client.getAttribute('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]', 'class')).toEqual('b-table__cell');
expect(await app.client.getText('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]/FORM[1]/DIV[1]/SPAN[1]/SPAN[1]/INPUT[1]')).toEqual('');
expect(await app.client.getElementSize('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]/FORM[1]/DIV[1]/SPAN[1]/SPAN[1]/INPUT[1]')).toEqual({height: 46, width: 652});
expect(await app.client.getAttribute('/HTML[1]/BODY[1]/TABLE[1]/TBODY[1]/TR[2]/TD[1]/FORM[1]/DIV[1]/SPAN[1]/SPAN[1]/INPUT[1]', 'class')).toEqual('input__control input__input');


    await app.stop();
});