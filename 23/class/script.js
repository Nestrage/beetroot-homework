function f1() {
  let ans = prompt("Введите число");

  if (ans !== null) {
    let num = Number(ans);
    if (!isNaN(num)) {
      if (num < 0) {
        alert(`число ${num} - отрицательное`);
      } else if (num == 0) {
        alert("Это ноль");
      } else {
        alert(`Число ${num} - положительное`);
      }
    } else {
      alert("я же просил число -_-");
    }
  } else {
    alert(`Отмена`);
  }
}
