var Application = require('spectron').Application;
    var electronPath = require('electron');
    const path = require('path');
    const fs = require('fs');
    jest.setTimeout(40000);
    const createApp = async () => {

    var app = new Application({
        path: electronPath,
        args: [
            path.join(__dirname, '..')
        ],
    });
        
    await app.start();
    // await app.client.url('https://www.yandex.ru');
    return app;
}
test('11111', async () => {
  const app = await createApp();
  await app.client.url('https://www.yandex.ru');
  await app.client.waitUntilWindowLoaded();
  await app.client.keys('w').then();
await app.client.keys('e').then();
await app.client.keys('r').then();
await new Promise((resolve) => setTimeout(resolve, 1000));
await app.client.keys('Backspace').then();
await app.client.keys('Backspace').then();
await app.client.keys('Backspace').then();
expect(await app.client.getText('/HTML[1]/BODY[1]/DIV[1]/DIV[3]/DIV[2]/DIV[2]/DIV[1]/DIV[2]/DIV[1]/DIV[2]/DIV[1]/FORM[1]/DIV[1]/SPAN[1]/SPAN[1]/INPUT[1]')).toEqual('');

await app.client.url('https://news.yandex.ru/?msid=1543828913.243.122140.486037&mlid=1543828461.glob_225');
await app.client.waitUntilWindowLoaded();
await app.stop();
});