
let organisation = document.getElementById("comp-input");
let part = document.getElementById("parts-input");
let position = document.getElementById("position-input");
let button = document.getElementById("add-button");
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
    fioFather.appendChild(fioInput);
});

button.addEventListener("click", () => {
let table = document.querySelector("#table-to-insert");
let row = document.createElement("tr");
let td = [];
for (let i = 0; i < 7; i++) {
    let tmp = document.createElement("input");
    tmp.setAttribute("type", "text");
    tmp.setAttribute("class", "text");
    td[i] = document.createElement("td");
    td[i].appendChild(tmp);
    row.appendChild(td[i]);
}
table.appendChild(row);
});