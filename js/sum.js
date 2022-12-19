kostos.addEventListener("keyup", () => {
  let vat_counter = kostos.innerText * 0.24;
  if (checkNumber(vat_counter)) {
    vat.innerText = vat_counter.toFixed(3);
  } else {
    vat.innerText = vat_counter;
  }
  let sumVat = +vat.innerText + +kostos.innerText;
  if (checkNumber(sumVat)) {
    sumKostosVat.innerText = sumVat.toFixed(3);
  } else {
    sumKostosVat.innerText = sumVat;
  }
});
