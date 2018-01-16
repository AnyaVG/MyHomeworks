function numRandom()
{
    var min = parseInt(document.getElementById('numMin').value);
    var max = parseInt(document.getElementById('numMax').value);

    if (isNaN(min)==true) min=0;
    if (isNaN(max)==true) max=0;

    var result=Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById('result').innerHTML='Случайное число из интервала от '+ min+' до '+max+' это '+result;
}

function task2Func() {
    var user = {};
    user.name='Вася';
    user.surname='Петров';
    user.name='Сергей';
    delete user.name;
    document.getElementById('result2').innerHTML='Выполнено';
}

function task3Func() {
    var user = {};
    document.getElementById('result31').innerHTML=isEmpty(user);

    user = {
        name: 'Василий',
        surname: 'Петров',
        age:'25'
    };
    document.getElementById('result32').innerHTML=isEmpty(user);

    function isEmpty(obj) {
        for (var prop in obj) {
            return false; // name, surname, age
        }
        return true;
    }
}

function task4Func() {
    var salaries = {};
    document.getElementById('result41').innerHTML=sumFunc(salaries);

    function sumFunc(obj) {
        var sum = 0;
        for (var name in obj) {
            sum += obj[name];
        }
        return sum;
    }

    salaries = {
        'Александр' : 500,
        'Дмитрий' : 300,
        'Евгений' : 250
    };
    document.getElementById('result42').innerHTML=sumFunc(salaries) ;
}

function task5Func() {
    var salaries = {};
    maxFunc(salaries);
    document.getElementById('result51').innerHTML=maxFunc(salaries);

    salaries = {
        'Александр' : 100,
        'Дмитрий' : 300,
        'Евгений' : 250
    };
    document.getElementById('result52').innerHTML=maxFunc(salaries);

    function maxFunc(obj) {
        var max = 0;
        var maxName = "";
        for (var name in salaries) {
            if (max < salaries[name]) {
                max = salaries[name];
                maxName = name;
            }
        }
        return maxName || "нет сотрудников";
    }

}

function task6Func() {
    test = {
        name: 'Block',
        length : 100,
        width: 50,
        weight : 300
    };
    document.getElementById('result61').innerHTML="test name=" + test.name + " length=" + test.length + " width=" + test.width + " weight=" + test.weight;

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function multiplyNumeric(obj) {
        for (var name in obj) {
            if (isNumeric(obj[name]))
            {
                obj[name]*=2;
            }
        }
    }
    multiplyNumeric(test);
    document.getElementById('result62').innerHTML="test name=" + test.name + " length=" + test.length + " width=" + test.width + " weight=" + test.weight;
}

function task7Func() {
    var array = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    var randIndex = Math.floor(Math.random() * array.length);

    document.getElementById('result7').innerHTML='Элемент массива с индексом ' + randIndex +' - ' + array[randIndex];
}

function task8Func() {
    var array=[];

    while (true){
        var num=prompt('Ввведите элемент массива?', 0);
        if ((num==='') || (num===null) || (isNaN(num))) break;
        array.push(+num);
    }

    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    document.getElementById('result8').innerHTML='Сумма элементов массива ' + sum;
}

function task9Func() {
    function find(arr, value){
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === value) return i;
        }
        return -1;
    }

    var array= ['word', 24, 8.4, 'one', false];
    var Element='test';

    document.getElementById('result9').innerHTML=find(array, Element);
}

function task10Func() {
    function filter(arr, a, b){
        var filterArray=[];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= a && arr[i] <= b) {
                filterArray.push(arr[i]);
            }
        }
        return filterArray;
    }

    var array= [2, 4, 3, 15, 6, 24, 9];
    document.getElementById('result101').innerHTML='Исходный массив ' + array;
    document.getElementById('result102').innerHTML='Фильтрованный массив ' + filter(array, 1, 10);
}

function task11Func() {
    function pow(x, n){
        var result=x;
        for (var i = 1; i < n; i++) {
            result*=x;
        }
        return result;
    }

    var x = prompt("Введите x?", '');
    var n = prompt("Введите n?", '');

    if (n <= 1) {
        alert('Введите целую степень большую 1');
    } else {
        alert( pow(x, n) );
    }
    document.getElementById('result11').innerHTML='Выполнено';
}

function task12Func() {
    var newDate=new Date(2012, 1, 20, 3, 12, 0, 0);

    document.getElementById('result12').innerHTML=newDate;
}

function task13Func() {
    function getWeekDay(date) {
        var weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

        return weekdays[date.getDay()];
    }

    var newDate = new Date(2018, 0, 16);

    document.getElementById('result13').innerHTML=getWeekDay(newDate);
}

function task14Func() {
    function getLocalDay(date) {
        var dayweek = date.getDay();

        if (dayweek == 0) {
            dayweek=7;
        }

        return dayweek;
    }

    var newDate = new Date(2012, 0, 3);

    document.getElementById('result14').innerHTML=getLocalDay(newDate);
}

function task15Func() {
    function getDateAgo(date, days) {
        var dateCopy = new Date(date);

        dateCopy.setDate(date.getDate() - days);
        return dateCopy.getDate();
    }

    var dateC = new Date(2015, 0, 2);

    document.getElementById('result151').innerHTML=getDateAgo(dateC, 1);
    document.getElementById('result152').innerHTML=getDateAgo(dateC, 2);
    document.getElementById('result153').innerHTML=getDateAgo(dateC, 365);
    document.getElementById('result154').innerHTML=dateC;
}