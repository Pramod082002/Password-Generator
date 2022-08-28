var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower="abcdefghijklmnopqrstuvwxyz";
var numbers="1234567890";
var symbols="!@#$%^&*_";
var pass=[];
var checkBoxup = document.querySelector(".up");
var checkBoxlow = document.querySelector(".low");
var checkBoxno = document.querySelector(".no");
var checkBoxsy = document.querySelector(".sy"); 
var len = document.querySelector(".nolen");
var j=0; 
var addc = document.querySelector(".passhere");
var check = $(".check");
var count;

    function GeneratePass(){
        if(checkBoxup.checked || checkBoxlow.checked || checkBoxno.checked || checkBoxsy.checked){
            if(len.value>=8 && len.value<=15){
                
                for(var i=0;j<len.value;i++){
                    if(checkBoxup.checked && j<len.value){
                        var upran=Math.floor(Math.random()*26);
                        pass.push(upper[upran]);
                        j++;
                    }
                    if(checkBoxlow.checked && j<len.value){
                        var lowran=Math.floor(Math.random()*26);
                        pass.push(lower[lowran]);
                        j++;
                    }
                    if(checkBoxno.checked && j<len.value){ 
                        var numran=Math.floor(Math.random()*10);
                        pass.push(numbers[numran]);
                        j++;
                    }
                    if(checkBoxsy.checked && j<len.value){
                        var syran=Math.floor(Math.random()*9);
                        pass.push(symbols[syran]);
                        j++;
                    }
                }
                ranPassword();
                return pass.toString().replace(/,/g,"");
            }
            else{
                return "***Select valid length(8-15)***";
            }}
            else{
                return "***Select Atleast Any One Option***";
            }
}

function ranPassword(){
    for(var i=0 ; i<pass.length ; i++){
        var ran = Math.floor(Math.random()*pass.length);
        [pass[i],pass[ran]]=[pass[ran],pass[i]];
    }
}

function addclass(){
    count=0;
    for(var i=0 ; i<check.length ; i++){
        if(check[i].checked){
            count++;
        }
    }
    switch(count){
        case 1:
            addc.classList.remove("yellow","green","darkgreen");
            addc.classList.add("red");
            break;
        case 2:
            addc.classList.remove("red","green","darkgreen");
            addc.classList.add("yellow");
            break;
        case 3:
            addc.classList.remove("red","yellow","darkgreen");
            addc.classList.add("green");
            break;
        case 4:
            addc.classList.remove("red","yellow","green");
            addc.classList.add("darkgreen");
            break;
        default:
            addc.classList.remove("red","yellow","green","darkgreen");
            break;
    }
}

document.querySelector("button").addEventListener("click",function(){
        document.querySelector("span").innerHTML=GeneratePass();
        addclass();
        pass=[];
        j=0;
});
