var SpeechRecongnition = window.webkitSpeechRecognition
var Recognition = new SpeechRecongnition

function Begin(){
    document.getElementById("Text_area").innerHTML = " "
    Recognition.start()
}

 Recognition.onresult =  function(event){
    console.log(event)
    var Result = event.results[0][0].transcript
    document.getElementById("Text_area").innerHTML = Result
    if(Result == "take my selfie"){
        Speak()
    }   
}
function Speak(){
    var Api = window.speechSynthesis
    var Speech = "The selfie will be taken in 5 seconds"
    var Speek = new SpeechSynthesisUtterance(Speech)
    Api.speak(Speek)
    Webcam.attach("#Webcam")
}
Webcam.set({
    width:300,
    height:420,
    image_format:'jpeg',
    jpeg_quality:100
});