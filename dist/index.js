import { Computer } from "./model/Computer.js";
import { Component } from "./model/Component.js";
import { Presale } from "./model/Presale.js";
import { dbProcessor } from "./db/db-processor.js";
import { dbInputOutput } from "./db/db-input-output.js";
import { dbOutput } from "./db/db-output.js";
import { dbInput } from "./db/db-input.js";
let listProcessors = document.querySelector("#listProcessors");
let listInputs = document.querySelector("#listInputs");
let listOutputs = document.querySelector("#listOutputs");
let listSpecials = document.querySelector("#listSpecials");
let listBuyProducts = document.querySelector("#listBuyProducts");
let buyPrice = document.querySelector("#buyPrice");
let btnBuy = document.querySelector("#btnBuy");
let presale = new Presale();
let computer = new Computer();
function addProducts() {
    for (let processor of dbProcessor) {
        let card = createCardProduct(processor.brand, processor.name, processor.price, processor.image, "Processor", "show");
        listProcessors === null || listProcessors === void 0 ? void 0 : listProcessors.appendChild(card);
    }
    for (let input of dbInput) {
        let card = createCardProduct(input.brand, input.name, input.price, input.image, "Input", "show");
        listInputs === null || listInputs === void 0 ? void 0 : listInputs.appendChild(card);
    }
    for (let output of dbOutput) {
        let card = createCardProduct(output.brand, output.name, output.price, output.image, "Output", "show");
        listOutputs === null || listOutputs === void 0 ? void 0 : listOutputs.appendChild(card);
    }
    for (let special of dbInputOutput) {
        let card = createCardProduct(special.brand, special.name, special.price, special.image, "Special", "show");
        listSpecials === null || listSpecials === void 0 ? void 0 : listSpecials.appendChild(card);
    }
}
function createCardProduct(name, description, price, img, type, mode) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "100%";
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardRow = document.createElement("div");
    cardRow.classList.add("row");
    let cardColInfo = document.createElement("div");
    cardColInfo.classList.add("col-md-9");
    let cardColImg = document.createElement("div");
    cardColImg.classList.add("col-md-3");
    let titleProduct = document.createElement("h5");
    titleProduct.classList.add("card-title");
    titleProduct.innerText = name;
    let descriptionProduct = document.createElement("p");
    descriptionProduct.classList.add("card-text");
    descriptionProduct.innerText = description;
    let priceProduct = document.createElement("p");
    priceProduct.classList.add("card-text");
    priceProduct.innerText = price.toString();
    let addButton = document.createElement("button");
    if (mode === "show") {
        addButton.classList.add("btn", "btn-outline-primary");
        addButton.innerText = "Agregar";
        addButton.onclick = selectProduct;
    }
    else {
        addButton.classList.add("btn", "btn-outline-danger");
        addButton.innerText = "Eliminar";
        addButton.onclick = deleteProduct;
    }
    addButton.setAttribute("data-brand", name);
    addButton.setAttribute("data-description", description);
    addButton.setAttribute("data-price", price.toString());
    addButton.setAttribute("data-type", type);
    addButton.setAttribute("data-img", img);
    let imgProduct = document.createElement("img");
    imgProduct.classList.add("img-fluid");
    imgProduct.src = img;
    cardColInfo.appendChild(titleProduct);
    cardColInfo.appendChild(descriptionProduct);
    cardColInfo.appendChild(priceProduct);
    cardColInfo.appendChild(addButton);
    cardColImg.appendChild(imgProduct);
    cardRow.appendChild(cardColInfo);
    cardRow.appendChild(cardColImg);
    cardBody.appendChild(cardRow);
    card.appendChild(cardBody);
    return card;
}
function selectProduct() {
    let brandData = this.getAttribute("data-brand");
    let descriptionData = this.getAttribute("data-description");
    let priceData = this.getAttribute("data-price");
    let typeData = this.getAttribute("data-type");
    let imgData = this.getAttribute("data-img");
    let brand = brandData ? brandData : "";
    let description = descriptionData ? descriptionData : "";
    let price = priceData ? Number.parseFloat(priceData) : 0.0;
    let type = typeData ? typeData : "";
    let img = imgData ? imgData : "";
    let component = new Component(price, brand, description, img);
    computer.addComponent(component, type);
    if (computer.verifyRequirements()) {
        btnBuy.disabled = false;
    }
    else {
        btnBuy.disabled = true;
    }
    presale.components = computer.components;
    buyPrice.innerText = `$ ${presale.getTotalPrice().toString()}`;
    let cardBuy = createCardProduct(brand, description, price, img, type, "buy");
    listBuyProducts === null || listBuyProducts === void 0 ? void 0 : listBuyProducts.appendChild(cardBuy);
}
function deleteProduct() {
    var _a, _b, _c, _d, _e, _f, _g;
    let button = this;
    let card = (_c = (_b = (_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode;
    let listBuy = (_g = (_f = (_e = (_d = button.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.parentNode) === null || _g === void 0 ? void 0 : _g.parentNode;
    let deletedCard = card ? card : button;
    listBuy === null || listBuy === void 0 ? void 0 : listBuy.removeChild(deletedCard);
    let brandData = this.getAttribute("data-brand");
    let descriptionData = this.getAttribute("data-description");
    let priceData = this.getAttribute("data-price");
    let typeData = this.getAttribute("data-type");
    let imgData = this.getAttribute("data-img");
    let brand = brandData ? brandData : "";
    let description = descriptionData ? descriptionData : "";
    let price = priceData ? Number.parseFloat(priceData) : 0.0;
    let type = typeData ? typeData : "";
    let img = imgData ? imgData : "";
    let component = new Component(price, brand, description, img);
    computer.removeComponent(component);
    if (computer.verifyRequirements()) {
        btnBuy.disabled = false;
    }
    else {
        btnBuy.disabled = true;
    }
    presale.components = computer.components;
    buyPrice.innerText = `$ ${presale.getTotalPrice().toString()}`;
}
addProducts();
