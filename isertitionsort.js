// Убываетние чисел

function insertionSortDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] < current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

let array1 = [5, 3, 8, 6, 2];
console.log(insertionSortDescending(array1));

// Возрастание чисел

function insertionSortIncrase(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

let array2 = [5, 3, 8, 6, 2];
console.log(insertionSortIncrase(array2));

// Убывание строк
function insertionSortDescendingStr(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j].localeCompare(current) < 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

let array3 = ["momy", "dad", "son", "grandmother", "grandfather"];
console.log(insertionSortDescendingStr(array3));

// Возрастание строк
function insertionSortDescendingStr(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j].localeCompare(current) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

let array4 = ["momy", "dad", "son", "grandmother", "grandfather"];
console.log(insertionSortDescendingStr(array4));
