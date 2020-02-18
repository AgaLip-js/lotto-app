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
// const btns = [...childs].filter((e) => {
//     return e.type == 'button';
// });

childs.forEach((btn) => {

    btn.addEventListener("click", function (e) {
        // chosen.innerHTML = chosen.innerHTML + e.target.innerHTML;
        var chnm = chosen.value.split(' ').map(function (item) {
            return parseInt(item, 10);
        });
        // var arr = chnm.filter(function (c) {
        //     return c != " " && c;
        // })
        if (chosen.innerHTML.includes(e.target.innerHTML)) {
            return btn.disabled;
        }

        if (chnm.length <= 6) {
            chosen.innerHTML = chosen.innerHTML + e.target.innerText + " ";
        }
    });
});

var clean = document.querySelector("#clean");
clean.addEventListener("click", function (e) {
    return chosen.innerHTML = [];
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
    console.log(lotto);

    output.innerHTML = lotto;

});
let finalarray = [];
// function compare(chosen.value.split(' ').map(function (item) {
//     return parseInt(item, 10)
// }), lotto) {
//     let finalarray = [];



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
    // });


    const titleAnswer = document.createElement('p');
    titleAnswer.innerHTML = 'Trafiłeś następujące liczby: '
    // titleAnswer.setAttribute('class', 'myFinalOutput');
    titleAnswer.className = 'myFinalOutput';
    const myOutput = document.createElement('p');
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
});


newGame.addEventListener("click", function () {
    chosen.innerHTML = [];
    lotto.innerHTML = [];
    finalarray.innerHTML = [];
});




// answer.innerHTML = finalarray;
// function compare(arr1, arr2) {
//     const finalarray = [];
//     chosen.value.split(' ').map(function (item) {
//         return parseInt(item, 10);
//     }).forEach((e1) => lotto.forEach((e2) => {
//         if (e1 === e2) {
//             finalarray.push(e1)
//         }
//     }
//     ));
//     return finalarray;
// };



// chosen.value.split(' ').map(function (item) {
//     return parseInt(item, 10);
// }).forEach(e => {
//     lotto.includes(e);

// })

// output.innerHTML = output.innerHTML + (Math.floor(Math.random() * 8 + 2));
// };


// const container = document.querySelector('.myButtonContainer');
// for (let i = 0; i < 49; i++) {
//     const el = document.createElement('button');
//     el.innerHTML = i + 1;
//     container.appendChild(el);
// }
