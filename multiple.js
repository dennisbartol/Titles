let titles = ["Welcome to my website !", "Home of cool and creative stuff", "Amazing content !"]; 
let counter = 0; 

setInterval(function() {
    document.title = titles[counter % titleText.length];
    counter++;

}, 1500);
