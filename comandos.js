if (annyang) {
  var comandos = {
    hola: function() {
      alert("Hola bro");
    },
    reproducir: reproducirVideo,
    pausar: pausarVideo
  };
  annyang.addCommands(comandos);
  annyang.setLanguage("es-MX");
  annyang.start();
}
var video = document.getElementById("mivideo");
function reproducirVideo() {
  video.play();
}
function pausarVideo() {
  video.pause();
}
