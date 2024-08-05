// import If from "./utils/if_func.js";
// import Switch from "./utils/switch_func.js";
// import range from "./utils/range.js";


// Написать функцию, которая принимает два числа и возращает результат их умножения
const mult = (a, b) => a * b

// Написать функцию, которой передаем, имя, фамилия и возраст,
// и получаем строку "Привет Иван Петров с возрастом 17 лет"
// (только здесь данные, которые были переданы в функцию)
const greeting = (fName, sName, age) =>
    `Привет ${fName} ${sName} с возрастом ${age} лет`


// Написать функцию, которая принимает пол человека ('M','F') в виде строки,
// результат функции возвращает строку "Ваш пол мужской" (или женский) или же
// "Ваш пол не опеределен"
const printGender = (gender) => {
    if (gender === "F") console.log("Ваш пол мужской");
    else if (gender === "M") console.log("Ваш пол женский");
    else console.log("Ваш пол не опеределен");

    // If(gender === "F", () => console.log("Ваш пол мужской"))
    //     .elif(gender === "M", () => console.log("Ваш пол женский"))
    //     .else(() => console.log("Ваш пол не опеределен"))
}

// Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.
const toWeekDay = (n) => {
    switch (n) {
        case 1:
            return "Понедельник"
        case 2:
            return "Вторник"
        case 3:
            return "Среда"
        case 4:
            return "Четверг"
        case 5:
            return "Пятница"
        case 6:
            return "Суббота"
        case 7:
            return "Воскресенье"
        default:
            throw Error("Incorrect day of the week number: " + n)
    }
    /*
    return Switch(n)
        .case(1, () => "Понедельник")
        .case(2, () => "Вторник")
        .case(3, () => "Среда")
        .case(4, () => "Четверг")
        .case(5, () => "Пятница")
        .case(6, () => "Суббота")
        .case(7, () => "Восресенье")
        .default(() => {
            throw Error("Incorrect day of the week number: " + n)
        })
    */
}


// Написать функцию, которая принимает строку (в этом тексте 3-5 предложений),
// верните каждое первое слово в каждом предложении, через запятую.
const getFirstWords = (text) =>
    text.split(/[.?!]/)
        .map((e) => e.trim().split(" ")[0])
        .filter((e) => e !== "")

// Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости
// от времени суток (Доброе утро\день\вечер\ночи Иван)
const greeting2 = (name) => {
    const hour = new Date(Date.now()).getHours()
    let greeting = "Доброй ночи, "
    if (hour <= 4) greeting = "Доброй ночи, ";
    else if (hour <= 11) greeting = "Доброе утро, ";
    else if (hour <= 17) greeting = "Добрый день, ";
    else if (hour <= 21) greeting = "Добрый вечер, ";
    return greeting + name;

    /*
    return If(hour <= 4, () => "Доброй ночи, ")
        .elif(hour <= 11, () => "Доброе утро, ")
        .elif(hour <= 17, () => "Добрый день, ")
        .elif(hour <= 21, () => "Добрый вечер, ")
        .else("Доброй ночи, ") + name
    */
}

// Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста
// (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый
const toAgeState = (age) => {
    let ageState = "старый"
    if (age <= 17) ageState = "ребенок";
    else if (age <= 30) ageState = "молодой";
    else if (age <= 55) ageState = "зрелый";
    return ageState
    /*
    return If(age <= 17, () => "ребенок")
        .elif(age <= 30, () => "молодой")
        .elif(age <= 55, () => "зрелый")
        .else(() => "старый")
    */
}
const printAges = () => {
    for (let age = 1; age <= 100; age++)
        console.log(`${age} - ${toAgeState(age)}`)

    // for (const age of range(1, 101))
    //     console.log(`${age} - ${toAgeState(age)}`)
}

// Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение
// (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию из прошлого задания
const fmtUser = (name, age) =>
    `${name} меет возраст ${age} и он ${toAgeState(age)}`
