const converterButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectPrimary = document.querySelector(
  ".currency-select-primary"
);

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value; //valor digitado no input
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); // outras moedas

  const dolarToday = 4.8; //valor do dolar
  const euroToday = 5.2; // vvalor do euro
  const libraToday = 6.04; // valor da libra
  const bitcoinToday = 177.3; // valor do bitcoin

  if (
    currencySelectPrimary.value == "real" &&
    currencySelect.value == "dolar"
  ) {
    // conversão de REAL para Dolar
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelectPrimary.value == "real" && currencySelect.value == "euro") {
    // conversão de REAL para Euro
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (
    currencySelectPrimary.value == "real" &&
    currencySelect.value == "libra"
  ) {
    // conversão de REAL para Libra
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (
    currencySelectPrimary.value == "real" &&
    currencySelect.value == "bitcoin"
  ) {
    // conversão de REAL para Bitcoin
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  //currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
  //style: "currency",
  //currency: "BRL",
  //}).format(inputCurrencyValue);

  if (
    currencySelectPrimary.value == "dolar" &&
    currencySelect.value == "real"
  ) {
    // conversão de Dolar para Real
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * dolarToday);
  }

  if (
    currencySelectPrimary.value == "dolar" &&
    currencySelect.value == "euro"
  ) {
    // conversão de Dolar para Euro
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * 0.92);
  }

  if (
    currencySelectPrimary.value == "dolar" &&
    currencySelect.value == "libra"
  ) {
    // conversão de Dolar para Libra
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * 0.80);
  }

  if (
    currencySelectPrimary.value == "dolar" &&
    currencySelect.value == "bitcoin"
  ) {
    // conversão de Dolar para Libra
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue * 0.0027);
  }

  function formatCurrency() {
    if (currencySelectPrimary.value == "dolar") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputCurrencyValue);
    } 
     if (currencySelectPrimary.value == "real") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputCurrencyValue);
    }

    if (currencySelectPrimary.value == "euro") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputCurrencyValue);
    }

    if (currencySelectPrimary.value == "libra") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(inputCurrencyValue);
    }
  }
  formatCurrency();
}
function changeCurrency1() {
  const currencyName1 = document.getElementById("currency-name1");
  const currencyImage1 = document.querySelector(".currency-img1");

  if (currencySelectPrimary.value == "real") {
    currencyName1.innerHTML = "Real Brasileiro";
    currencyImage1.src = "./assets/real.png";
  }

  if (currencySelectPrimary.value == "dolar") {
    currencyName1.innerHTML = "Dólar Americano";
    currencyImage1.src = "./assets/dolar.png";
  }

  if (currencySelectPrimary.value == "euro") {
    currencyName1.innerHTML = "Euro";
    currencyImage1.src = "./assets/euro.png";
  }

  if (currencySelectPrimary.value == "libra") {
    currencyName1.innerHTML = "Libra";
    currencyImage1.src = "./assets/libra.png";
  }

  if (currencySelectPrimary.value == "bitcoin") {
    currencyName1.innerHTML = "Bitcoin";
    currencyImage1.src = "./assets/bitcoin.png";
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/dolar.png";
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImage.src = "./assets/real.png";
  }
  convertValues();
}

currencySelectPrimary.addEventListener("change", changeCurrency1);
currencySelect.addEventListener("change", changeCurrency);
converterButton.addEventListener("click", convertValues);
