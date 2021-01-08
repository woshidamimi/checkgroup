// import { websocket } from "../../src/static/socket.io";

var socket = new WebSocket('ws://127.0.0.1:8181');

console.log(socket)

socket.onmessage = (msg) => {
   window.location.reload();
}
