function getpara1() {
    var input=[];
    for(var i=1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("para1_input_box_1" + i).value);

    }
        inputs.join(". ");
        document.getElementById("showParagrah1").innerHTML = inputs.join(". ");
}