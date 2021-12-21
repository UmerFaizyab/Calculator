function getvalue(value1){
    var output = document.getElementById("out")
    output.value += value1;
}
function calculate(){
    var output2 = document.getElementById("out")
    var solved = output2.value
    output2.value = eval(solved);
}
function one(){
    var del = document.getElementById("out");
    del.value = "";
}
function try1(){
    var del = document.getElementById("out");
    del.value -= 5;
}