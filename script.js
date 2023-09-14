function convert() {
    const input_temp = document.getElementsByName("input_temperature");
    let input;
    for (let i = 0; i < 3; i++) {
        if (input_temp[i].checked){
            input = input_temp[i].value;
            break;
        }
    }
    const output_temp = document.getElementsByName("output_temperature");
    let output;
    for (let i = 0; i < 3; i++) {
        if(output_temp[i].checked){
            output = output_temp[i].value;
            break;
        }

    }
    const tempValue = document.getElementsByName("tempValue")[0];
    let temp = parseFloat(tempValue.value);
    //input out temp
    let result = Result(input, output, temp);
    const outputDiv = document.getElementsByClassName("output")[0];
    outputDiv.innerHTML = result;

}
function Result(input, output, temp) {
    let result;
    if (input=="Celsius" && output=="Fahrenheit"){
       result= cTof(temp);
    }
    else if (input=="Fahrenheit" && output=="Kelvin"){
        result=fTok(temp);
    }
    else if (input=="Kelvin" && output=="Celsius"){
        result=kToc(temp);
    }
    else if (input=="Celsius" && output=="Kelvin"){
        result=fTok(cTof(temp));
    }
    else if (input=="Fahrenheit" && output=="Celsius"){
        result=kToc(fTok(temp));
    }
    else if (input=="Kelvin" && output=="Fahrenheit"){
        result=cTof(kToc(temp));
    }
    else
    {
        result=temp;
    }
    
    return result.toFixed(3) +"° "+ output[0];
}

function cTof(temp){
    return((temp * (9/5)) + 32 );
}
function fTok(temp){
    return(((temp - 32) * (5/9)) + 273.15);
}
function kToc(temp){
    return(temp - 273.15 );
}
function inputchange(n){
    const intempradio = document.getElementsByClassName("input_temperature");
    for (let i = 1; i <= 3; i++){
        if(i == n){
            intempradio[i-1].style.background = "black";
            intempradio[i-1].style.color = "white";

        }
        else{
            intempradio[i-1].style.background = "white";
            intempradio[i-1].style.color = "black";
        }
    }
}
function outputchange(n){
    const outtempradio = document.getElementsByClassName("output_temperature");
    for (let i = 1; i <= 3; i++){
        if(i == n){
            outtempradio[i-1].style.background = "black";
            outtempradio[i-1].style.color = "white";

        }
        else{
            outtempradio[i-1].style.background = "white";
            outtempradio[i-1].style.color = "black";
        }
    }
}