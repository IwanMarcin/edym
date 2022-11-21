document.getElementById("submit").onclick = function(){
    //Wartości brutto
    let rap1 = document.getElementById("rap1").value;
    let rap2 = document.getElementById("rap2").value;
    
    //Karty
    let ter1 = document.getElementById("ter1").value;
    let ter2 = document.getElementById("ter2").value;
    let ter3 = document.getElementById("ter3").value;
    
    //Kalkulatorek gotówki
    let zl500 = document.getElementById("500zl").value;
    let zl200 = document.getElementById("200zl").value;
    let zl100 = document.getElementById("100zl").value;
    
    let zl50 = document.getElementById("50zl").value;
    let zl20 = document.getElementById("20zl").value;
    let zl10 = document.getElementById("10zl").value;
    
    let zl5 = document.getElementById("5zl").value;
    let zl2 = document.getElementById("2zl").value;
    let zl1 = document.getElementById("1zl").value;
    
    let gr50 = document.getElementById("50gr").value;
    let gr20 = document.getElementById("20gr").value;
    let gr10 = document.getElementById("10gr").value;
    
    let gr5 = document.getElementById("5gr").value;
    let gr2 = document.getElementById("2gr").value;
    let gr1 = document.getElementById("1gr").value;
    
    let sumabanknoty = 0;
    let sumamonety = 0;
    let total = 0;
    let kasa = 0;
    let roz = 0;
    
    console.log(typeof(sumabanknoty));
    sumabanknoty = (zl500 * 500) + (zl200 * 200) + (zl100 * 100) + (zl50 * 50) + (zl20 * 20) + (zl10 * 10);
    sumamonety = (zl5 * 5) + (zl2 * 2) + (zl1 * 1) + (gr50 * 0.5) + (gr20 * 0.2) + (gr10 * 0.1) + (gr5 * 0.05) + (gr2 * 0.02) + (gr1 * 0.01);
    
    total = sumabanknoty + sumamonety;
    
    //Pobranie zawartości Gotówka Subiekt
    kasa = document.getElementById("got").value;
    
    roz = total - kasa;
    
    kasa = Number(kasa);
    roz = Number(roz);
    total = Number(total);
    
    total = total.toFixed(2);
    roz = roz.toFixed(2);
    
    //Pobranie imienia
    let name = document.getElementById("name").value;
    
    document.getElementById("mail").innerHTML =
    `Cześć,
    
    ${rap1} - Raport fiskalny
    ${rap2} - Raport z Subiekta
    
    ${ter1} - Terminal karty
    ${ter2} - Karty prezentowe
    ${ter3} - Subiekt karty
    
    ${kasa} - Gotówka Subiekt
    ${Number(total)} - Gotówka Kasa
    ${roz} - Różnica
    
    Pozdrawiam,
    ${name}
    `
    }