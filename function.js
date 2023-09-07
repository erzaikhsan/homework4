// Function untuk mendapatkan array dengan 100 nilai random antara 1 - 50
function Random() {
    let array = [];
    for (let i = 0; i < 100; i++) {
        let getNilai = Math.floor(Math.random() * 50) + 1;
        array.push(getNilai);
    }
    return array;
}

// Function untuk mendapatkan array dengan nilai index Genap
function Genap(array) {
    let arrayGenap = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            arrayGenap.push(array[i]);
        }
    }
    return arrayGenap;
}

// Function untuk mendapatkan array dengan nilai index Ganjil
function Ganjil(array) {
    let arrayGanjil = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 1) {
            arrayGanjil.push(array[i]);
        }
    }
    return arrayGanjil;
}

// Function untuk menghitung nilai Max
function hitungMax(array) {
    let maksimum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maksimum < array[i]) {
            maksimum = array[i];
        }

    }
    return maksimum;
}

// Function untuk menghitung nilai Min
function hitungMin(array) {
    let minimum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (minimum > array[i]) {
            minimum = array[i];
        }

    }
    return minimum;
}

// Function untuk menghitung Total
function hitungTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Function untuk menghitung Rata - rata
function hitungAvg(array) {
    const avg = hitungTotal(array) / array.length;
    return avg;
}

// Function untuk membandingkan nilai Max
function pembandingMax(maxGenap, maxGanjil) {
    let max = 0;
    if (maxGenap > maxGanjil) {
        max = "Max lebih besar array Genap";
    }
    if (maxGenap < maxGanjil) {
        max = "Max lebih besar array Ganjil";
    }
    if (maxGenap === maxGanjil) {
        max = "Max array genap sama dengan array ganjil";
    }
    return max;
}

// Function untuk membandingkan nilai Min
function pembandingMin(minGenap, minGanjil) {
    let min = 0;
    if (minGenap > minGanjil) {
        min = "Min lebih besar array Genap";
    }
    if (minGenap < minGanjil) {
        min = "Max lebih besar array Ganjil";
    }
    if (minGenap === minGanjil) {
        min = "Min array genap sama dengan array ganjil";
    }
    return min;
}

// Function untuk membandingkan Total
function pembandingTotal(totalGenap, totalGanjil) {
    let total = 0;
    if (totalGenap > totalGanjil) {
        total = "Total lebih besar array Genap";
    }
    if (totalGenap < totalGanjil) {
        total = "Total lebih besar array Ganjil";
    }
    if (totalGenap === totalGanjil) {
        total = "Total array genap sama dengan array ganjil";
    }
    return total;
}

// Function untuk membandingkan Rata - rata
function pembandingAvg(avgGenap, avgGanjil) {
    let avg = 0;
    if (avgGenap > avgGanjil) {
        avg = "Rata - rata lebih besar array Genap";
    }
    if (avgGenap < avgGanjil) {
        avg = "Rata - rata lebih besar array Ganjil";
    }
    if (avgGenap === avgGanjil) {
        avg = "Rata - rata array genap sama dengan array ganjil";
    }
    return avg;
}

// Memanggil function 
const arrayRandom = Random();
console.log("Nilai Random : [" + arrayRandom + "]");

const arrayGenap = Genap(arrayRandom);
console.log("Array Genap : [" + arrayGenap + "]");

const arrayGanjil = Ganjil(arrayRandom);
console.log("Array Ganjil : [" + arrayGanjil + "]");

const maxGenap = hitungMax(arrayGenap);
console.log("Max Genap : " + maxGenap);

const maxGanjil = hitungMax(arrayGanjil);
console.log("Max Ganjil : " + maxGanjil);

const minGenap = hitungMin(arrayGenap);
console.log("Min Genap : " + minGenap);

const minGanjil = hitungMin(arrayGanjil);
console.log("Min Ganjil : " + minGanjil);

const totalGenap = hitungTotal(arrayGenap);
console.log("Total Genap : " + totalGenap);

const totalGanjil = hitungTotal(arrayGanjil);
console.log("Total Ganjil : " + totalGanjil);

const avgGenap = hitungAvg(arrayGenap);
console.log("Rata - rata Genap : " + avgGenap);

const avgGanjil = hitungAvg(arrayGanjil);
console.log("Rata - rata Ganjil : " + avgGanjil);

console.log("Max : " + pembandingMax(maxGenap, maxGanjil));
console.log("Min : " + pembandingMin(minGenap, minGanjil));
console.log("Total : " + pembandingTotal(totalGenap, totalGanjil));
console.log("Rata - rata : " + pembandingAvg(avgGenap, avgGanjil));