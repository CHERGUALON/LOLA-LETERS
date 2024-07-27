window.onload = function() {
    var lyrics = document.querySelector(".lyrics-large");
    var popup = document.querySelector(".lyrics-box");
  
  
    var fontSize = 30; 
    while (lyrics.scrollHeight > lyrics.offsetHeight) {
        fontSize -= 1;
        lyrics.style.fontSize = fontSize + "px";
    }
  
  
    var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
    popup.style.width = maxWidth + "px";
  }
  
  var currentIndex = 0; 
  
  function closeAlert() {
    var lyrics = document.querySelector(".lyrics-large");
    var songLines = [
        "TE AMO REINA",
        "ME ENCANTA ESA SONRISA",
        "NO TE VAYAS",
        "TE QUIERO, TE NECCESITO, TE AMO",
        "MMM...",
        "ERES LO MAS BONITO QUE TENGO",
        "Porfavor no te vayas nunca",
        "Extraño tu cariño",
        "TE AMO MUCHOOOO",
        "ERES ESO QUE TANTO HE DESEADO",
        "Oh-oh-oh-oh",
        "Ooh",
        "Porfvor cuidemos esto que tenemos",
        "el dia que te abracé me senti seguro",
        "contigo solo hay pz",
        "a tu ldo todo es bonito",
        "te extaño"
    ];
  
    currentIndex = (currentIndex + 1) % songLines.length; 
    lyrics.textContent = songLines[currentIndex]; 
  }