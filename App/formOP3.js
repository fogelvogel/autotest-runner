let organisation = document.getElementById("comp-input");
let part = document.getElementById("parts-input");
let position = document.getElementById("position-input");
let button = document.getElementById("add-button");
let fio = document.getElementById("fio-input");

let products = [];
let productFathers = [];
let countProd = 0;
let units = [];
let prodNames = [];
let unitNames = [];
let unitFathers = [];
let countUnits = 0;
let countNames = 0;
let countUnitNames = 0;

let counter = 0;

organisation.addEventListener("change", () => {
    let OKPOFather = document.querySelector("#okpo");
    OKPOFather.removeChild(document.querySelector("#okpo input"));

    let OKPOInput = document.createElement("input");
    OKPOInput.setAttribute("type", "text");
    switch(organisation.value) {
        case "ООО 'Шаляй-Валяй'": {
            OKPOInput.setAttribute("value", "1337");
            break;
        }
        case "Трест 'Рога и копыта'": {
            OKPOInput.setAttribute("value", "0451");
            break;
        }
        case "ООО 'Шаг вперед'": {
            OKPOInput.setAttribute("value", "1234");
            break;
        }
        default: {
            OKPOInput.setAttribute("value", "");
            break;
        }
    }
    OKPOFather.appendChild(OKPOInput);
});

part.addEventListener("change", () => {
    let OKDPFather = document.querySelector("#okdp");
    OKDPFather.removeChild(document.querySelector("#okdp input"));

    let OKDPInput = document.createElement("input");
    OKDPInput.setAttribute("type", "text");
    OKDPInput.setAttribute("class", "no-need");
    switch(part.value) {
        case "Бухгалтерия": {
            OKDPInput.setAttribute("value", "A1");
            break;
        }
        case "Служба безопасности": {
            OKDPInput.setAttribute("value", "C5");
            break;
        }
        case "Отдел сбыта": {
            OKDPInput.setAttribute("value", "P3");
            break;
        }
        default: {
            OKDPInput.setAttribute("value", "");
            break;
        }
    }
    OKDPFather.appendChild(OKDPInput);
});

position.addEventListener("change", () => {
    let fioFather = document.querySelector("#fio-father");
    fioFather.removeChild(document.querySelector("#fio-father input"));

    let fioInput = document.createElement("input");
    fioInput.setAttribute("type", "text");
    switch(position.value) {
        case "Директор": {
            fioInput.setAttribute("value", "Штейн Карл");
            break;
        }
        case "Начальник кладовой": {
            fioInput.setAttribute("value", "Зимний Яков Иванович");
            break;
        }
        case "Дворник": {
            fioInput.setAttribute("value", "Попеску Эмилиэн Петрика");
            break;
        }
        default: {
            fioInput.setAttribute("value", "");
            break;
        }
    }
    fioInput.setAttribute("list","surnames");
    fioInput.setAttribute("id","fio-input");
    fioFather.appendChild(fioInput);
});
fio.addEventListener("change", () => {
    let posFather = document.querySelector("#pos-father");
    posFather.removeChild(document.querySelector("#pos-father input"));

    let posInput = document.createElement("input");
    posInput.setAttribute("type", "text");
    switch(fio.value) {
        case "Штейн Карл": {
            posInput.setAttribute("value", "Директор");
            break;
        }
        case "Зимний Яков Иванович": {
            posInput.setAttribute("value", "Начальник кладовой");
            break;
        }
        case "Попеску Эмилиэн Петрика": {
            posInput.setAttribute("value", "Дворник");
            break;
        }
        default: {
            posInput.setAttribute("value", "");
            break;
        }
    }
    posInput.setAttribute("list","positions");
    posInput.setAttribute("id","position-input");
    posFather.appendChild(posInput);
});

button.addEventListener("click", () => {
let table = document.querySelector("#table-to-insert");
let row = document.createElement("tr");
let td = [];
counter++;
td[0] = document.createElement("td");
td[0].append(counter);
row.appendChild(td[0]);
for (let i = 1; i < 7; i++) {
    let tmp = document.createElement("input");
    tmp.setAttribute("type", "text");
    td[i] = document.createElement("td");

    switch (i) {
        case 1: {
           
            tmp.addEventListener("change", () => {
           
                let currName = tmp.value;
                let numbers = prodNames.map((current) => {
                   
                    switch (current.value) {
                        case 'Яблоко': return '4532';
                        case 'Кашка': return '1458';
                        case 'Жасминовый фреш': return '9568';
                        case 'Семга': return '4728';
                        case 'Сыр': return '4235';
                        case 'Таракан': return '7852';
                        default: return;
                    }
                });

                // let numbers = ["1", "2", "3", "4", "5", "6"];

                for (let j = 0; j < countProd; j++) {
                    if (currName === prodNames[j].value) {
                        productFathers[j].removeChild(products[j]);
                        let newElem = document.createElement("input");
                        newElem.setAttribute("type", "text");
                        newElem.setAttribute("class", "code-of-product");
                        newElem.setAttribute("list", "codes");
                        newElem.setAttribute("value", numbers[j]);
    
                        productFathers[j].appendChild(newElem);
                        break;
                    }
                    
                }

            });
            
            tmp.setAttribute("class", "name-of-product");
            tmp.setAttribute("list", "goods");
            prodNames[countNames] = tmp;
            
            countNames++;
            break;
        }
        case 2: {
            productFathers[countProd] = td[i];
            products[countProd] = tmp;
            countProd++;
            tmp.setAttribute("class", "code-of-product");
            tmp.setAttribute("list", "codes");
            break;
        }
        case 3: {
           
            tmp.addEventListener("change", () => {
                let currName = tmp.value;
                let numbers = unitNames.map((current) => {
                   
                    switch (current.value) {
                        case 'штука': return '214';
                        case 'коробка': return '754';
                        case 'ящик': return '213';
                        default: return;
                    }
                });

                for (let j = 0; j < countUnits; j++) {
                    if (currName === unitNames[j].value) {
                        unitFathers[j].removeChild(units[j]);
                        let newElem = document.createElement("input");
                        newElem.setAttribute("type", "text");
                        newElem.setAttribute("class", "code-of-unit");
                        newElem.setAttribute("list", "unit-codes");
                        newElem.setAttribute("value", numbers[j]);
    
                        unitFathers[j].appendChild(newElem);
                        break;
                    }
                    
                }
                });
            
                tmp.setAttribute("class", "name-of-unit");
                tmp.setAttribute("list", "units");
                unitNames[countUnitNames] = tmp;
                
                countUnitNames++;
                break;
        }
        case 4: {
            unitFathers[countUnits] = td[i];
            units[countUnits] = tmp;
            countUnits++;
            tmp.setAttribute("class", "code-of-unit");
            tmp.setAttribute("list", "unit-codes");
            break;
        }
        case 5: {
            tmp.setAttribute("class", "quantity");
            break;
        }
        default: break;
    }
    
    td[i].appendChild(tmp);
    row.appendChild(td[i]);
}
table.appendChild(row);
});