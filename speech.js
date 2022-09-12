function speakS(text){
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
