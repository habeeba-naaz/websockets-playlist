// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var  output = document.getElementById('output')



// Listen for events
socket.on('chat', function(data){
        console.log(data)
        output.innerHTML = '<p><strong>Patient Name: </strong>' + data.pname + '</p><br><p><strong>Contact Number: </strong>' + data.number + '</p><br><p><strong>Emergency Contact Number: </strong>'+ data.enumber + '</p><br><p><strong>Monitor Readings: </strong>'+ data.readings + '</p><br><p><strong>Nature of Accident: </strong>'+ data.accident + '</p><br><p><strong>Severity of Condition: </strong>'+ data.condition + '</p>';
});

