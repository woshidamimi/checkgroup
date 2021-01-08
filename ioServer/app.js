var WebSocketServer = require('ws').Server;

const fs = require('fs')




let wss = new WebSocketServer({ port: 8181 });//服务端口8181
wss.on('connection', function (ws) {
    console.log('服务端：客户端已连接');
   
    fs.watch(__dirname+'./../dist/index.html', () => {
        console.log('watch')
        ws.send('hello')
    })
    ws.on('message', function (message) {
        //打印客户端监听的消息
        console.log(message);
    });
});
