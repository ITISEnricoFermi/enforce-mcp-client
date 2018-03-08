const socket = io()

let rmotorOn = false;
let lmotorOn = false;

function sendCommand (event, val) {
    socket.emit(event, val);
}

window.onload = function() {
    document.addEventListener("keydown", function(e) {
        if (e.code === "KeyD" && !rmotorOn) {
            rmotorOn = true;
            sendCommand('right', true);
        } else if (e.code === "KeyA" && !lmotorOn) {
            lmotorOn = true;
            sendCommand('left', true);
        }
    });
    document.addEventListener("keyup", function(e) {
        if (e.code === "KeyD" && rmotorOn) {
            rmotorOn = false;
            sendCommand('right', false);
        } else if (e.code === "KeyA" && lmotorOn) {
            lmotorOn = false;
            sendCommand('left', false);
        }
    });
}

// Right motor status
let rightMotor = $('#right-motor-status');

socket.on('rmotorOn', (e) => {
    rightMotor.removeClass('alert-danger').addClass('alert-success').html('On');
});
socket.on('rmotorOff', (e) => {
    rightMotor.removeClass('alert-success').addClass('alert-danger').html('Off');
});

// Left motor status
let leftMotor = $('#left-motor-status');

socket.on('lmotorOn', (e) => {
    leftMotor.removeClass('alert-danger').addClass('alert-success').html('On');
});
socket.on('lmotorOff', (e) => {
    leftMotor.removeClass('alert-success').addClass('alert-danger').html('Off');
});