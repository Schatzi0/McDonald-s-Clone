function hideshow(){
    let dropiconsss  = document.querySelector(".mend");
    let person = document.querySelector(".Outer");
    if(person.style.display==="none"){

        dropiconsss.style.transform = "rotate(180deg)";
        person.style.display = "block";
    }
    else{
        dropiconsss.style.transform = "rotate(360deg)";
        person.style.display = "none";
    }
}

function langshow(){
    let dropicons2  = document.querySelector(".langd");
    let lang = document.querySelector(".lang");
    if( lang.style.display==="none"){
        dropicons2.style.transform = "rotate(180deg)";
        lang.style.display = "block";
    }
    else{
        dropicons2.style.transform = "rotate(360deg)";
        lang.style.display = "none";
    }
}



// For navdrop down
let dropbtn = document.querySelector("#headbtn");
let dropContent = document.querySelector("#inner-content");
function navbtn(){
    if(dropContent.style.display==='none'){
        
        if(dropContent3.style.display==="block" || dropContent2.style.display === "block" || dropContent4.style.display === "block"){
            dropContent2.style.display = "none";
            dropbtn2.style.transform = "rotate(360deg)";   
            dropContent3.style.display = "none";
            dropbtn3.style.transform = "rotate(360deg)";   
            dropContent4.style.display = "none";
            dropbtn4.style.transform = "rotate(360deg)";   
        }

        dropbtn.style.transform = "rotate(180deg)";
        dropContent.style.display = "block";
    }
    else{
        dropbtn.style.transform = "rotate(360deg)";
        dropContent.style.display = "none"
    }
}

let dropbtn2 = document.querySelector("#headbtn2");
let dropContent2 = document.querySelector("#inner-content2");
function navbtn2(){
    if(dropContent2.style.display==='none'){

         if(dropContent.style.display==="block" || dropContent3.style.display === "block" || dropContent4.style.display === "block"){
            dropContent.style.display = "none";
            dropbtn.style.transform = "rotate(360deg)";   
            dropContent3.style.display = "none";
            dropbtn3.style.transform = "rotate(360deg)";   
            dropContent4.style.display = "none";
            dropbtn4.style.transform = "rotate(360deg)";   
        }

        dropbtn2.style.transform = "rotate(180deg)";
        dropContent2.style.display = "block";
    }
    else{
        dropbtn2.style.transform = "rotate(360deg)";
        dropContent2.style.display = "none"
    }
}

let dropbtn3 = document.querySelector("#headbtn3");
let dropContent3 = document.querySelector("#inner-content3");
function navbtn3(){
    if(dropContent3.style.display==='none'){

         if(dropContent.style.display==="block" || dropContent2.style.display === "block" || dropContent4.style.display === "block"){
            dropContent2.style.display = "none";
            dropbtn2.style.transform = "rotate(360deg)";   
            dropContent.style.display = "none";
            dropbtn.style.transform = "rotate(360deg)";   
            dropContent4.style.display = "none";
            dropbtn4.style.transform = "rotate(360deg)";   
        }

        dropbtn3.style.transform = "rotate(180deg)";
        dropContent3.style.display = "block";
    }
    else{
        dropbtn3.style.transform = "rotate(360deg)";
        dropContent3.style.display = "none"
    }
}
let dropbtn4 = document.querySelector("#headbtn4");
let dropContent4 = document.querySelector("#inner-content4");
function navbtn4(){
    if(dropContent4.style.display==='none'){

         if(dropContent3.style.display==="block" || dropContent2.style.display === "block" || dropContent.style.display === "block"){
            dropContent2.style.display = "none";
            dropbtn2.style.transform = "rotate(360deg)";   
            dropContent3.style.display = "none";
            dropbtn3.style.transform = "rotate(360deg)";   
            dropContent.style.display = "none";
            dropbtn.style.transform = "rotate(360deg)";   
        }

        dropbtn4.style.transform = "rotate(180deg)";
        dropContent4.style.display = "block";
    }
    else{
        dropbtn4.style.transform = "rotate(360deg)";
        dropContent4.style.display = "none"
    }
}