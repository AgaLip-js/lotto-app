var chosen = document.querySelector("#chosen")
var btn2 = document.querySelector("#dwa")
var numbers = document.querySelectorAll(".numbers");
let start = document.querySelector(".start");
let newGame = document.querySelector("#newGame");

const container = document.querySelector('.myButtonContainer');
let answer = document.querySelector('.answer');
for (let i = 0; i < 49; i++) {
    const el = document.createElement('button');
    el.innerHTML = i + 1;
    container.appendChild(el);
}

const childs = container.childNodes;
const clickedElements = [];
childs.forEach((btn) => {

    btn.addEventListener("click", function (e) {
        console.log(clickedElements);
        if (clickedElements.includes(e.target.innerText)) {
            return; //return null
        }

        if (clickedElements.length < 6) {
            clickedElements.push(e.target.innerText);
            chosen.innerHTML = chosen.innerHTML + e.target.innerText + " ";
        }
    });
});

var clean = document.querySelector("#clean");
clean.addEventListener("click", function (e) {
    clickedElements.length = 0;
    chosen.innerHTML = [];
});

var button = document.querySelector("#button");
var output = document.querySelector("#output");

let lotto = [];

button.addEventListener("click", function (e) {
    let counter = 1;
    lotto = [];
    while (1) {
        const v = (Math.floor(Math.random() * 49 + 1))
        if (counter < 7 && !lotto.includes(v)) {
            lotto.push(v);
            ++counter;
        }
        if (counter == 7) break;
    }

    output.innerHTML = lotto;

});
let finalarray = [];

var check = document.querySelector('#check')

check.addEventListener('click', (e) => {
    let cnt = 1;
    var chos = chosen.value.split(' ').map((item) => {
        return item && item !== "" && parseInt(item, 10);
    });
    lotto.forEach((l) => {
        if (chos.includes(l)) {
            finalarray.push(l);
        }
    });

    let titleAnswer = document.createElement('p');
    titleAnswer.innerHTML = 'Trafiłeś następujące liczby: '
    titleAnswer.className = 'myFinalOutput';
    let myOutput = document.createElement('p');
    myOutput.innerHTML = finalarray;
    myOutput.className = 'myOutput';

    if (chosen.value.split(' ').length == 7 && lotto.length == 6) {

        answer.appendChild(titleAnswer);
        answer.appendChild(myOutput);
        cnt = 2;
    } else {
        cnt = 1;
        alert("Podaj 6 liczb i kliknij przycisk losuj liczby!");
    }
    if (cnt !== 1) {
        e.target.setAttribute("disabled", true);
    }
    // if (finallarray.length === 0) {
    //     var t = document.createTextNode("Przykro mi, nie trafiłeś!");
    //     document.appendChild(t);
    // }
});


newGame.addEventListener("click", function () {
    chosen.innerHTML = [];
    output.innerHTML = [];
    clickedElements.length = 0;
    const el = document.querySelector('.answer');
    let elementsToRemove = [];

    const tablica = ['a', 'b', 'c'];
    for (let elementtablicy of tablica) {
        console.log(elementtablicy)
    }
    console.log('-------------------------')
    for (let indextablicy in tablica) {
        console.log(indextablicy)
        console.log(tablica[indextablicy])
    }

    for (let item of el.children) {
        if (item.nodeName != 'BUTTON') elementsToRemove.push(item);
    }
    if (elementsToRemove.length == 2) {
        el.removeChild(elementsToRemove[0]);
        el.removeChild(elementsToRemove[1]);
    }

    check.removeAttribute("disabled", true);

});
