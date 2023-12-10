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
let buyPrice = document.querySelector("#buyPrice") as HTMLParagraphElement;
let btnBuy = document.querySelector("#btnBuy") as HTMLButtonElement;

let presale: Presale = new Presale();
let computer: Computer = new Computer();

function addProducts() {
  for (let processor of dbProcessor) {
    let card = createCardProduct(
      processor.brand,
      processor.name,
      processor.price,
      processor.image,
      "Processor",
      "show"
    );
    listProcessors?.appendChild(card);
  }

  for (let input of dbInput) {
    let card = createCardProduct(
      input.brand,
      input.name,
      input.price,
      input.image,
      "Input",
      "show"
    );
    listInputs?.appendChild(card);
  }

  for (let output of dbOutput) {
    let card = createCardProduct(
      output.brand,
      output.name,
      output.price,
      output.image,
      "Output",
      "show"
    );
    listOutputs?.appendChild(card);
  }

  for (let special of dbInputOutput) {
    let card = createCardProduct(
      special.brand,
      special.name,
      special.price,
      special.image,
      "Special",
      "show"
    );
    listSpecials?.appendChild(card);
  }
}

function createCardProduct(
  name: string,
  description: string,
  price: number,
  img: string,
  type: string,
  mode: string
) {
  let card = document.createElement("div") as HTMLDivElement;
  card.classList.add("card");
  card.style.width = "100%";
  let cardBody = document.createElement("div") as HTMLDivElement;
  cardBody.classList.add("card-body");
  let cardRow = document.createElement("div") as HTMLDivElement;
  cardRow.classList.add("row");
  let cardColInfo = document.createElement("div") as HTMLDivElement;
  cardColInfo.classList.add("col-md-9");
  let cardColImg = document.createElement("div") as HTMLDivElement;
  cardColImg.classList.add("col-md-3");
  let titleProduct = document.createElement("h5") as HTMLHeadingElement;
  titleProduct.classList.add("card-title");
  titleProduct.innerText = name;
  let descriptionProduct = document.createElement("p") as HTMLParagraphElement;
  descriptionProduct.classList.add("card-text");
  descriptionProduct.innerText = description;
  let priceProduct = document.createElement("p") as HTMLParagraphElement;
  priceProduct.classList.add("card-text");
  priceProduct.innerText = price.toString();
  let addButton = document.createElement("button") as HTMLButtonElement;
  if (mode === "show") {
    addButton.classList.add("btn", "btn-outline-primary");
    addButton.innerText = "Agregar";
    addButton.onclick = selectProduct;
  } else {
    addButton.classList.add("btn", "btn-outline-danger");
    addButton.innerText = "Eliminar";
    addButton.onclick = deleteProduct;
  }
  addButton.setAttribute("data-brand", name);
  addButton.setAttribute("data-description", description);
  addButton.setAttribute("data-price", price.toString());
  addButton.setAttribute("data-type", type);
  addButton.setAttribute("data-img",img);

  let imgProduct = document.createElement("img") as HTMLImageElement;
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

function selectProduct(this: GlobalEventHandlers) {
  let brandData = (this as HTMLButtonElement).getAttribute("data-brand");
  let descriptionData = (this as HTMLButtonElement).getAttribute(
    "data-description"
  );
  let priceData = (this as HTMLButtonElement).getAttribute("data-price");
  let typeData = (this as HTMLButtonElement).getAttribute("data-type");
  let imgData = (this as HTMLButtonElement).getAttribute("data-img");

  let brand = brandData ? brandData : "";
  let description = descriptionData ? descriptionData : "";
  let price = priceData ? Number.parseFloat(priceData) : 0.0;
  let type = typeData ? typeData : "";
  let img = imgData ? imgData: "";

  let component: Component = new Component(price, brand, description, img);

  computer.addComponent(component, type);

  if (computer.verifyRequirements()) {
    btnBuy.disabled = false;
  } else {
    btnBuy.disabled = true;
  }

  presale.components = computer.components;
  buyPrice.innerText = `$ ${presale.getTotalPrice().toString()}`;

  let cardBuy = createCardProduct(brand, description, price, img, type, "buy");
  listBuyProducts?.appendChild(cardBuy);
}

function deleteProduct(this: GlobalEventHandlers) {
  let button = this as HTMLButtonElement;
  let card = button.parentNode?.parentNode?.parentNode?.parentNode;
  let listBuy =
    button.parentNode?.parentNode?.parentNode?.parentNode?.parentNode;
  let deletedCard = card ? card : button;
  listBuy?.removeChild(deletedCard);

  let brandData = (this as HTMLButtonElement).getAttribute("data-brand");
  let descriptionData = (this as HTMLButtonElement).getAttribute(
    "data-description"
  );
  let priceData = (this as HTMLButtonElement).getAttribute("data-price");
  let typeData = (this as HTMLButtonElement).getAttribute("data-type");
  let imgData = (this as HTMLButtonElement).getAttribute("data-img");


  let brand = brandData ? brandData : "";
  let description = descriptionData ? descriptionData : "";
  let price = priceData ? Number.parseFloat(priceData) : 0.0;
  let type = typeData ? typeData : "";
  let img = imgData ? imgData: "";

  let component: Component = new Component(price, brand, description, img);

  computer.removeComponent(component);

  if (computer.verifyRequirements()) {
    btnBuy.disabled = false;
  } else {
    btnBuy.disabled = true;
  }

  presale.components = computer.components;
  buyPrice.innerText = `$ ${presale.getTotalPrice().toString()}`;
}


addProducts();

