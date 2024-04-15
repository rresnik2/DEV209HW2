document.addEventListener("DOMContentLoaded", function(event) {
  
    let myArray = [];
    for (let i = 0; i < 3; i++){
      myArray.push(prompt("Please enter a word"));
    }
    document.getElementById("myList").innerHTML = myArray;
    let x = "";
    for(let i=0; i<myArray.length; i++){
        x += "<li>" + myArray[i] + "</li>";
    }
    document.getElementById("myList").innerHTML = x;

    document.getElementById("caps").addEventListener("click", function () {
        document.getElementById("myList").innerHTML = "";
        let z = myArray.map(function(element){return element.toUpperCase();});
        let x = "";
        for(let i=0; i<z.length; i++){
            x += "<li>" + z[i] + "</li>";
    }
    document.getElementById("myList").innerHTML = x;
    });
    
    document.getElementById("swap").addEventListener("click", function () {
        document.getElementById("myList").innerHTML = "";
        let z = myArray.map(swapFL);
        let x = "";
        for(let i=0; i<z.length; i++){
            x += "<li>" + z[i] + "</li>";
    }
    document.getElementById("myList").innerHTML = x;    
    });

});
  
function swapFL(oneWord){
return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); 
}

function turnRed(){
    document.getElementById("myList").classList.add('redList');
}
