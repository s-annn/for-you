let yes=document.querySelector("#yes");
let no=document.querySelector("#no");
let msg=document.querySelector(".msg");

yes.addEventListener("click",()=>{
    if(msg.style.display==='none'){
        msg.style.display = 'block';
        msg.classList.add("hide");
    }
    else{
        msg.classList.remove("hide");
        msg.style.display = 'none';
    }
});

no.addEventListener("mouseenter",()=>{
    if(no.style.transform==="translateX(800px)"){
        no.style.transform="translateY(-500px)";
    
    }
    else if(no.style.transform==="translateY(-500px)"){
        no.style.transform="translateY(-180px)";
    }
    else if(no.style.transform==="translateY(-180px)"){
        no.style.transform="translateX(400px)";
    }
    else if(no.style.transform==="translateX(400px)"){
        no.style.transform="translateX(-400px)";
    }
    else if(no.style.transform==="translateX(-400px)"){
        no.style.transform="translateX(800px)";
    }
    else{
        no.style.transform="translateX(800px)";
    }

});

function alrt(){
    alert("Why don't click on Yessss???");
}

no.addEventListener("mouseenter",setTimeout(alrt,20000));

