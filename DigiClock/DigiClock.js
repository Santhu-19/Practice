




  function getTime(){
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    h = formatTime(h);
    m = formatTime(m);
    s = formatTime(s);

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;

    setTimeout(getTime, 1000);
  }

  function formatTime(par){ return par>10?par:"0"+par; }
