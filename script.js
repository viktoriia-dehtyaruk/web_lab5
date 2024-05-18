// 1 завдання
function createArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100)); // Генеруємо випадкові числа в межах від 0 до 99
    }
    return array;
}

function findMaxEven(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function findMinAtEvenIndex(array) {
    let min = Infinity;
    for (let i = 0; i < array.length; i += 2) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

// основна функція для завдання 1
function runScript1() {
    let sizeInput = document.getElementById('arraySize');
    let size = parseInt(sizeInput.value);

    if (isNaN(size) || size <= 0) {
        alert("Будь ласка, введіть додатне число для кількості елементів.");
        return;
    }

    let array = createArray(size);
    console.log('Вхідний масив для завдання 1:', array);

    let maxEven = findMaxEven(array);
    let minAtEvenIndex = findMinAtEvenIndex(array);

    let maxIndex = array.indexOf(maxEven);
    let minIndex = array.findIndex((element, index) => index % 2 === 0 && element === minAtEvenIndex);

    swap(array, maxIndex, minIndex);
    console.log('Масив після обміну місцями максимального та мінімального елементів:', array);

    let sortedArray = insertionSort(array.slice());
    console.log('Масив після сортування за зростанням методом вставки:', sortedArray);
}

// 2 завдання 
function findMax(array) {
    return Math.max(...array);
}
// Функція для обчислення значень масиву B
function calculateB(array, max) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(max * array[i]);
    }
    return newArray;
}
// Функція для сортування масиву за зменшенням методом вставки
function insertionSortDecreasing(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] < current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

function runScript2() {
    let sizeInput = document.getElementById('arraySize2');
    let size = parseInt(sizeInput.value);

    if (isNaN(size) || size <= 0) {
        alert("Будь ласка, введіть додатне число для кількості елементів.");
        return;
    }

    let arrayA = createArray(size);
    console.log('Вхідний масив А для завдання 2:', arrayA);

    let max = findMax(arrayA);
    console.log('Максимальний елемент масиву А для завдання 2:', max);

    let arrayB = calculateB(arrayA, max);
    console.log('Масив B, обчислений за формулою bі = max*ai для завдання 2:', arrayB);

    let sortedArrayB = insertionSortDecreasing(arrayB.slice());
    console.log('Масив B після сортування за зменшенням методом вставки для завдання 2:', sortedArrayB);
}

// 3 завдання 
// Функція для знаходження максимального значення серед елементів з парними та непарними індексами
function findMinMaxWithIndices(array) {
    let minEven = Infinity;
    let maxEven = -Infinity;
    let minOdd = Infinity;
    let maxOdd = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) { // Парні індекси
            if (array[i] < minEven) {
                minEven = array[i];
            }
            if (array[i] > maxEven) {
                maxEven = array[i];
            }
        } else { // Непарні індекси
            if (array[i] < minOdd) {
                minOdd = array[i];
            }
            if (array[i] > maxOdd) {
                maxOdd = array[i];
            }
        }
    }

    return {
        minEven: minEven,
        maxEven: maxEven,
        minOdd: minOdd,
        maxOdd: maxOdd
    };
}

// Функція для сортування масиву методом вибору у порядку зменшення
function selectionSortDecreasing(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            let temp = array[i];
            array[i] = array[maxIndex];
            array[maxIndex] = temp;
        }
    }
    return array;
}

function runScript3() {
    let sizeInput = document.getElementById('arraySize3');
    let size = parseInt(sizeInput.value);

    if (isNaN(size) || size <= 0) {
        alert("Будь ласка, введіть додатне число для кількості елементів.");
        return;
    }

    let array = createArray(size);
    console.log('Вхідний масив А для завдання 3:', array);

    let { minEven, maxEven, minOdd, maxOdd } = findMinMaxWithIndices(array);
    console.log('Мінімальне значення серед елементів з парними індексами:', minEven);
    console.log('Максимальне значення серед елементів з парними індексами:', maxEven);
    console.log('Мінімальне значення серед елементів з непарними індексами:', minOdd);
    console.log('Максимальне значення серед елементів з непарними індексами:', maxOdd);

    let sortedArray = selectionSortDecreasing(array.slice());
    console.log('Масив після сортування у порядку зменшення:', sortedArray);
}

// 4 завдання 
// Функція для створення масиву заданого розміру з випадковими цілими числами в заданому діапазоні
function createArray4(size, min, max) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}

// Функція для пошуку найбільшого серед від'ємних та найменшого серед додатних елементів масиву
function findMinMax(array) {
    let maxNegative = -Infinity;
    let minPositive = Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 && array[i] > maxNegative) {
            maxNegative = array[i];
        }
        if (array[i] > 0 && array[i] < minPositive) {
            minPositive = array[i];
        }
    }

    return {
        maxNegative: maxNegative,
        minPositive: minPositive
    };
}

// Функція для сортування масиву методом вибору у порядку зменшення
function selectionSortDecreasing(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            let temp = array[i];
            array[i] = array[maxIndex];
            array[maxIndex] = temp;
        }
    }
    return array;
}

function runScript4() {
    let sizeInput = document.getElementById('arraySize4');
    let size = parseInt(sizeInput.value);

    if (isNaN(size) || size <= 0) {
        alert("Будь ласка, введіть додатне число для кількості елементів.");
        return;
    }

     // Генеруємо масив з випадковими числами в межах від -100 до 100
     let array = createArray4(size, -100, 100);
     console.log('Вхідний масив для завдання 4:', array);
 
     // Знаходимо найбільший серед від'ємних та найменший серед додатних елементів
     let { maxNegative, minPositive } = findMinMax(array);
     console.log('Найбільший серед від\'ємних:', maxNegative);
     console.log('Найменший серед додатних:', minPositive);
 
     // Сортуємо масив у порядку зменшення
     let sortedArray = selectionSortDecreasing(array.slice());
     console.log('Масив після сортування у порядку зменшення:', sortedArray);
}

// 5 завдання 
function buildNewArray(array) {
    let divisibleBy2 = [];
    let divisibleBy2And3 = [];
    let divisibleBy3 = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] % 3 !== 0) {
            divisibleBy2.push(array[i]);
        } else if (array[i] % 2 === 0 && array[i] % 3 === 0) {
            divisibleBy2And3.push(array[i]);
        } else if (array[i] % 3 === 0) {
            divisibleBy3.push(array[i]);
        }
    }

    return divisibleBy2.concat(divisibleBy2And3, divisibleBy3);
}

// Функція для швидкого сортування масиву
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[Math.floor(array.length / 2)];
    let left = [];
    let right = [];
    let equal = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else if (array[i] > pivot) {
            right.push(array[i]);
        } else {
            equal.push(array[i]);
        }
    }

    return quickSort(left).concat(equal, quickSort(right));
}

function runScript5() {
    let sizeInput = document.getElementById('arraySize5');
    let size = parseInt(sizeInput.value);

    if (isNaN(size) || size <= 0) {
        alert("Будь ласка, введіть додатне число для кількості елементів.");
        return;
    }

    // Генеруємо масив з випадковими числами в межах від -100 до 100
    let array = createArray(size);
     console.log('Вхідний масив для завдання 5:', array);
 
    let newArray = buildNewArray(array);
     console.log('Новий масив:', newArray);
 
    // Сортування масиву методом Швидкого сортування
    let sortedArray = quickSort(array.slice());
    console.log('Масив після сортування методом Швидкого сортування:', sortedArray);

    // Сортування нового масиву
    let sortedNewArray = quickSort(newArray.slice());
    console.log('Новий масив після сортування методом Швидкого сортування:', sortedNewArray);
}
