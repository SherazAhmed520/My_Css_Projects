var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onstart = function() {};
recognition.onerror = function(event) {};
recognition.onspeechend = function() {};
recognition.onresult = function(e) {
    var transcript = "";
    for (var i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
            transcript += e.results[i][0].transcript + "";
        }
    }
    document.getElementById("textbox").value += transcript;
    speak(transcript); // Speak the recognized speech
};

document.getElementById("btnSpeech").addEventListener("click", function() {
    recognition.start();
});

document.getElementById("btnNewSpeech").addEventListener("click", function() {
    recognition.stop();
    document.getElementById("textbox").value = "";
});

function speak(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ur-PK"; // Set the language for speech synthesis
    speechSynthesis.speak(utterance);
}