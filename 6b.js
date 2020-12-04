setInterval(function(){addParagraph()},5000);

function addParagraph(){
    let paragraph = document.createElement("p1");
    paragraph.id = "par1";
    document.body.appendChild(paragraph);
    document.getElementById("par1").innerText = "\"People have forgotten this truth,\" the fox said. \"But you mustn’t forget it. You become responsible forever for what you’ve tamed. You’re responsible for your rose.\"";
    }

