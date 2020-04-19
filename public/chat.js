// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var pname = document.getElementById('pname'),
      number = document.getElementById('number'),
      enumber = document.getElementById('enumber'),
      readings = document.getElementById('readings'),
      accident = document.getElementById('accident'),
      condition = document.getElementById('condition'),
      btn = document.getElementById('send')

// Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        pname: pname.value,
        number: number.value,
        enumber: enumber.value,
        readings: readings.value,
        accident: accident.value,
        condition: condition.value
    });
    alert("name sent");
});



