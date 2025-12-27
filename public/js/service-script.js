const socket = io();

const msgs = document.getElementById('msgs');
const input = document.getElementById('message');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

socket.emit('user-connection');
// appendMsg('You joined');

socket.on('handle-user-connection', (name) => {
	appendMsg(`${name} connected`);
});

btn1.addEventListener('click', (e) => {
	e.preventDefault();
	const msg = input.value;
	appendMsg(`You: ${msg}`);
	const data = {
		name: null,
		message: msg
	};
	socket.emit('send-message', data);
	input.value = '';
});

socket.on('handle-send-message', (data) => {
	appendMsg(`${data.name}: ${data.message}`);
});

btn2.addEventListener('click', () => {
	socket.emit('user-disconnection');
});

socket.on('handle-user-disconnection', (name) => {
	appendMsg(`${name} disconnected`);
});

function appendMsg(message) {
	const newDiv = document.createElement('div');
	newDiv.textContent = message;
	msgs.append(newDiv);
	msgs.scrollTop = msgs.scrollHeight;
};
