document.getElementById('red').addEventListener('input', mycolor);
document.getElementById('green').addEventListener('input',mycolor);
document.getElementById('blue').addEventListener('input',mycolor);
function mycolor(){
    var red=document.getElementById('red').value;
    var green=document.getElementById('green').value;
    var blue=document.getElementById('blue').value;
    var color=`rgb(${red},${green},${blue})`;
    document.getElementById('box').value=color;
    document.body.style.backgroundColor=color;
}