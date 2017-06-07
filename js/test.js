var arrNames = ["Sania", "Sashka", "Alexander", "Jaja", "PES!"];

function names(arrNames) {

    var parentElement = document.body;
    var ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for (var i=0; i < arrNames.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = arrNames[i];
        ul.appendChild(newLi);
    }
}
names(arrNames);


var t = performance.now();
function uravnenie(a, b, c) {

    //Входные данные для уровнения
    var x1, x2;
    
        
    //deskriminant
    var d = Math.pow(b, 2) - 4*a*c;       
    if (d<0) {
        t = performance.now() - t;
        console.log("Дискриминант ниже нуля - корней нет t=" + t);
    } else if (d == 0) {
        x1 = -b/(2*a);
        t = performance.now() - t;
        console.log("Для значений a=" + a + " b=" + b + " c=" + c + " результат n(x1=" + parseFloat(x1.toFixed(4)) + ") - t = " + t);
    } else {
        x1 = (-b+Math.sqrt(d))/(2*a);
        x2 = (-b-Math.sqrt(d))/(2*a);
        t = performance.now() - t;
        console.log("Для значений a=" + a + " b=" + b + " c=" + c + " результат n(x1=" + parseFloat(x1.toFixed(4)) + ", x2=" + parseFloat(x2.toFixed(4)) + ") - t = " + t);
    }

}

uravnenie(-1, -1, -2);