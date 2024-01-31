# Multiple document.body titles 

Achies through setInterval & document.title : </br> 

let titles = ["Welcome to my website !", "Home of cool and creative stuff", "Amazing content !"]; </br>

let counter = 0; </br>

setInterval(function() { </br>
    document.title = titles[counter % titleText.length];</br>
    counter++;</br>

}, 1500);</br>
