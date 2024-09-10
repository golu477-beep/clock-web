
setInterval(function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var hourAngle = (hours * 30) + (minutes * 0.5);
    var minuteAngle = (minutes * 6) + (seconds * 0.1);
    var secondAngle = seconds * 6;
    
    document.getElementById("hour-hand").style.transform = "translate(-50%, -50%) rotate(" + hourAngle + "deg)";
    document.getElementById("minute-hand").style.transform = "translate(-50%, -50%) rotate(" + minuteAngle + "deg)";
    document.getElementById("second-hand").style.transform = "translate(-50%, -50%) rotate(" + secondAngle + "deg)";
  }, 1000);
  

