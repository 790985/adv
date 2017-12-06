window.onload = examples;
     function examples(){
         // create a couple of elements in an otherwise empty HTML page
         var heading = document.createElement("h1");
         var heading_text = document.createTextNode("header");
         heading.appendChild(heading_text);
         document.body.appendChild(heading);
         createButton();
         createForm();
     }
     function createButton(){
       var button = document.createElement("button");
       var button_text = document.createTextNode('Click here');
       button.appendChild(button_text);
       button.onclick = changeBackgroundColor;
       document.body.appendChild(button);
     }
     function createForm(){
       var input = document.createElement("input");
       input.setAttribute("type","checkbox");
       document.body.appendChild(input);

     }
     function changeBackgroundColor(){
      var color = '#'; // hexadecimal starting symbol https://teamtreehouse.com/community/random-background-color
      var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
      color += letters[Math.floor(Math.random() * letters.length)];
      document.body.style.backgroundColor = color;
     }
