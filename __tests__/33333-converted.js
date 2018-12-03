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
    return app;
}
test('33333', async () => {
  const app = await createApp();
   await app.client.url('https://www.yandex.ru');
      await app.client.waitUntilWindowLoaded();
      await app.client.click('/HTML[1]/BODY[1]/DIV[1]/DIV[3]/DIV[2]/DIV[2]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/A[3]');
 await app.client.url('https://news.yandex.ru/');
      await app.client.waitUntilWindowLoaded();
      await new Promise((resolve) => setTimeout(resolve, 1000));
await app.stop();
});