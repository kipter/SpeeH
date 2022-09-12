var txt = document.querySelector(".text");

var time = new Date();

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

var recog = new window.SpeechRecognition();

recog.interimResults = true;

let p = document.createElement("p");

recog.addEventListener("result", (e) => {
  var text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  p.innerHTML = text;
  txt.appendChild(p)
  if(e.results[0].isFinal){
    if(text.includes('hello')){
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "hi"
        speakS('hi')
        txt.appendChild(p)
    }

    if(text.includes('how are you')){
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "I'm good, what about you?"
        speakS("I'm good, what about you?")
        txt.appendChild(p)
    }

    if(text.includes('open the Google') || text.includes('open Google')){
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "OKay!"
        speakS("OKay!")
        txt.appendChild(p)
        window.open('https://google.com')
    }

    if(text.includes('open YouTube') || text.includes('open the YouTube')){
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "OKay!"
        speakS("OKay!")
        txt.appendChild(p)
        window.open('https://youtube.com')
    }

    if(text.includes('open Instagram') || text.includes('open the Instagram')){
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "OKay!"
        speakS("OKay!")
        txt.appendChild(p)
        window.open('https://instagram.com')
    }

    if(text.includes('what is the time') || text.includes("what's the time")){
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "It's about "+time.getHours()+":"+time.getMinutes()+"!"
        speakS("It's about "+time.getHours()+":"+time.getMinutes()+"!")
        txt.appendChild(p)
    }

    if(text.includes("what's your name") || text.includes("what is your name")){
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "I'm David"
        speakS("I'm David")
        txt.appendChild(p)
    }

    if(text.includes("who's your developer") || text.includes("who is your developer")){
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "<b><em>Sir MirZohaib</em></b>"
        speakS("Sir MirZohaib")
        txt.appendChild(p)
    }

    if(text.includes("good")){
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "Thank U"
        speakS("Thank you")
        txt.appendChild(p)
    }

    if(text.includes("search Google") || text.includes("Search Google")){
        var elem = text;
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "Okay Wait!"
        speakS("Okay Wait")
        txt.appendChild(p)
        window.open('https://www.google.com/search?q='+elem.replace('search ', '')+'&oq='+elem.replace('search ', ''))
    }

    if(text.includes("search YouTube") || text.includes("Search YouTube")){
        var elem = text;
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "Okay Wait!"
        speakS("Okay Wait")
        txt.appendChild(p)
        window.open('https://www.youtube.com/results?search_query='+elem.replace('search YouTube ', ''))
    }

    if(text.includes("set background colour") || text.includes("set background color")){
        var elem = text;
        p = document.createElement('p');
        p.classList.add('bot');
        p.innerHTML = "Okay Wait!"
        speakS("Okay Wait")
        txt.appendChild(p)
        document.body.style.backgroundColor = elem.replace('set background colour ', '');
    }

    p = document.createElement('p')
  }
});

recog.addEventListener('end', ()=>{
    recog.start()
})

recog.start();