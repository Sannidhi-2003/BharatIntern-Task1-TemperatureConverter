function convert() {
    const input_temp = document.getElementsByName("input_temperature");
    let input;
    for (let i = 0; i < 3; i++) {
        if (input_temp[i].checked)
            input = input_temp[i].value;
    }
    const output_temp = document.getElementsByName("output_temperature");
    let output;
    for (let i = 0; i < 3; i++) {
        if (output_temp[i].checked)
            output = output_temp[i].value;
    }
    const tempValue = document.getElementsByName("tempValue")[0];
    let temp = parseFloat(tempValue.value);
    //input out temp
    let result = Result(input, output, temp);
    const outputDiv = document.getElementsByClassName("output")[0];
    outputDiv.innerHTML = result;

}
function Result(input, output, temp) {
    //code
    //let result
    return result;
}