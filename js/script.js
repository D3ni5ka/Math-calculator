
// Задача 1.
let div = document.createElement('div');
document.body.appendChild(div);
let titleExsercise = document.createElement('h2');
titleExsercise.innerHTML = 'Задача №1. Кальтулятор квадратного корня уравнения!'

let inputA = document.createElement('input');
inputA.setAttribute('placeholder', 'a');
let inputB = document.createElement('input');
inputB.setAttribute('placeholder', 'b');
let inputC = document.createElement('input');
inputC.setAttribute('placeholder', 'c');

let buttonSquare = document.createElement('button');
buttonSquare.innerHTML = 'Вычислить!'
div.append(titleExsercise, inputA, inputB, inputC, buttonSquare)

function quad(a, b, c) {
    if (a == 0) return "Ошибка, a=0 недопустимое значение!";
    let D = b * b - 4 * a * c;
    let x1, x2;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return "Коэффициенты: а=" + a + ", b=" + b + ", c= " + c + "\nКорни уравнения: X1=" + x1 + ", X2=" + x2 + "\nДискриминант(D)= " + D;
    } else if (D == 0) {
        x1 = -b / (2 * a);
        return "Коэффициенты: а=" + a + ", b=" + b + ", c= " + c + "\nКорень уравнения: X=" + x1 + "\nДискриминант(D)= " + D;
    } else if (D < 0) return "Коэффициенты: а=" + a + ", b=" + b + ", c= " + c + "\nКорней нет!\nДискриминант(D)= " + D;
}

buttonSquare.addEventListener('click', function () {
    let out = document.createElement('p');
    out.innerHTML = quad(inputA.value, inputB.value, inputC.value);
    div.appendChild(out);
})



// Задача 2.

let div2 = document.createElement('div');
document.body.appendChild(div2);

let title2 = document.createElement('h2');
title2.innerHTML = `Задача №2. Калькулятор по теореме Пифагора. 
c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>`;

div2.append(title2)

let inputC2 = document.createElement('input');
inputC2.setAttribute('placeholder', 'c');
let inputB2 = document.createElement('input');
inputB2.setAttribute('placeholder', 'b');
let inputA2 = document.createElement('input');
inputA2.setAttribute('placeholder', 'a');


let buttonPifagor = document.createElement('button');
buttonPifagor.innerHTML = 'Вычислить!'
div2.append(title2, inputC2, inputB2, inputA2, buttonPifagor);



function pifagor(c, b, a) {
    // let formula = (c * c) = ((a * a) + (b * b));
    let part1 = c * c;
    let part2 = ((a * a) + (b * b));

    if (part1 == part2) {
        return 'Сумма квардратов катетов равна квадрату гипотенузы!'
    } else {
        return 'Не равна!'
    }
}

buttonPifagor.addEventListener('click', function () {
    let out = document.createElement('p');
    out.innerHTML = pifagor(inputC2.value, inputB2.value, inputA2.value);
    div2.appendChild(out);
})



// Задача 3.


let div3 = document.createElement('div');
document.body.appendChild(div3);
let title3 = document.createElement('h2');
title3.innerHTML = 'Задача №3. Калькулятор делителей числа!';

let inputAddNum = document.createElement('input');
inputAddNum.setAttribute('placeholder', 'Введите число!');
let buttonNum3 = document.createElement('button');
buttonNum3.innerHTML = 'Делить!';

div3.append(title3, inputAddNum, buttonNum3);

let count = 0;
let result = '';

function deleteNum(num) {
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            count++;
            result += i + ' ';
        }
    }
}

buttonNum3.addEventListener('click', function () {
    let out = document.createElement('p');
    deleteNum(+inputAddNum.value);
    out.innerHTML = `Все делители числа ${inputAddNum.value}: </br> ${result}, </br> Всего делителей: ${count}`;
    div3.appendChild(out);
})

// Задача 4.


let div4 = document.createElement('div');
document.body.appendChild(div4);

let title4 = document.createElement('h2');
title4.innerHTML = 'Задача №4. Калькулятор общих делителей!';

let inputAdd41 = document.createElement('input');
inputAdd41.setAttribute('placeholder', 'Введите первое число!');
let inputAdd42 = document.createElement('input');
inputAdd42.setAttribute('placeholder', 'Введите второе число!');

let buttonNum4 = document.createElement('button');
buttonNum4.innerHTML = 'Делить!';

div4.append(title4, inputAdd41, inputAdd42, buttonNum4);


function addDivisor(num, num2) {
    let out4 = '';
    for (let i = 0; i <= num; i++) {
        for (let k = 0; k <= num2; k++) {
            if (num % i == 0 && num2 % k == 0) {
                if (i == k) {
                    result += i + ' ';
                }
            }
        }
    }
    return out4;
}


buttonNum4.addEventListener('click', function () {
    let out = document.createElement('p');
    addDivisor(+inputAdd41.value, +inputAdd42.value);
    out.innerHTML = `Общие делители числа: ${+inputAdd41.value} и числа ${+inputAdd42.value} </br>
    равны: ${result}`;
    div4.appendChild(out);
})


// Задача 5.


let div5 = document.createElement('div');
document.body.appendChild(div5);

let title5 = document.createElement('h2');
title5.innerHTML = 'Задача №5. Наибольший делитель.'

let inputAdd51 = document.createElement('input');
inputAdd51.setAttribute('placeholder', 'Введите первое число!');
let inputAdd52 = document.createElement('input');
inputAdd52.setAttribute('placeholder', 'Введите второе число!');

let buttonNum5 = document.createElement('button');
buttonNum5.innerHTML = 'Делить!';

div5.append(title5, inputAdd51, inputAdd52, buttonNum5);


function addDivisor5(num, num2) {
    let out5 = [];
    for (let i = 0; i <= num; i++) {
        for (let k = 0; k <= num2; k++) {
            if (num % i == 0 && num2 % k == 0) {
                if (i == k) {
                    out5.push(i);
                }
            }
        }
    }
    return out5;
}


function maxSum(param) {
    let max = 0;
    for (let elem of addDivisor5(+inputAdd51.value, +inputAdd52.value)) {
        if (elem > max) {
            max = elem;
        }
    }
    return max;
}


buttonNum5.addEventListener('click', function () {
    let out = document.createElement('p');
    let otvet = maxSum(addDivisor5(+inputAdd51.value, +inputAdd52.value));
    out.innerHTML = `Введены числа: ${+inputAdd51.value} и число ${+inputAdd52.value} </br>
    наибольший делитель введенных чисел равен: ${otvet}`;

    div5.appendChild(out);
})



// Задача 6.


let div6 = document.createElement('div');
document.body.appendChild(div6);

let title6 = document.createElement('h2');
title6.innerHTML = 'Задача №6. Наименьший делитель.'

let inputAdd61 = document.createElement('input');
inputAdd61.setAttribute('placeholder', 'Введите первое число!');
let inputAdd62 = document.createElement('input');
inputAdd62.setAttribute('placeholder', 'Введите второе число!');

let buttonNum6 = document.createElement('button');
buttonNum6.innerHTML = 'Делить!';

div6.append(title6, inputAdd61, inputAdd62, buttonNum6);


function addDivisor6(num, num2) {
    let out6 = [];
    for (let i = 0; i <= num; i++) {
        for (let k = 0; k <= num2; k++) {
            if (num % i == 0 && num2 % k == 0) {
                if (i == k) {
                    out6.push(i);
                }
            }
        }
    }
    return out6;
}


function minSum(param) {
    let arr = addDivisor6(+inputAdd61.value, +inputAdd62.value);
    let min;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            min = arr[i - 1];
        }
    }
    return min;
}


buttonNum6.addEventListener('click', function () {
    let out = document.createElement('p');
    let otvet2 = minSum(addDivisor6(+inputAdd61.value, +inputAdd62.value));
    out.innerHTML = `Введены числа: ${+inputAdd61.value} и число ${+inputAdd62.value} </br>
    наименьший делитель введенных чисел равен: ${otvet2}`;

    div6.appendChild(out);
})


