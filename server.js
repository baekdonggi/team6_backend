// /* 기본적인 함수 설명
// socket.on('이벤트명', callback function) : 해당 이벤트를 받고 콜백함수 실행
// socket.emit('이벤트명', Data) : 이벤트명 지정, 데이터 보냄 */

// const app = require('express')();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http, {
//   cors: {
//     origin: 'http://localhost:8080',
//     credentials: true,
//   },
//   allowEIO3: true,
// });

// const port = 3001; // port 3001번으로 서버 실행
// http.listen(port, () => {
//   console.log(`listening on *:${port}`); // 실행 시 콘솔로그 출력
// });

// io.on('connection', (socket) => { // socket 객체의 io 변수에 Client와의 연결 이벤트 'connection'를 받는 on 함수
//   console.log(socket.id, 'Connected');

//   socket.emit('msg', `${socket.id} 연결 되었습니다.`);
//   // 연결이 될 시 'msg'라는 이벤트명으로 데이터 받았다는 메세지를 client에게 전달

//   socket.on('msg', (data) => { // 'msg'라는 이벤트를 client에게 받게 되면 해당 socketId와 msg 이벤트로 받은 데이터 출력
//     console.log(socket.id, data);

//     socket.emit('msg', `Server : "${data}" 받았습니다.`); // 다시 데이터를 받았다는 메세지를 client에게 전달
//   });
// });
