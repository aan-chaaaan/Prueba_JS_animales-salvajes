"use strict";

import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animales.js";

(async () => {
  const Response = await fetch("/animales.json");
  const { animales: Animales } = await Response.json();

  const nombreAnimal = document.getElementById("animal");
  const edadAnimal = document.getElementById("edad");
  const comentariosAnimal = document.getElementById("comentarios");
  const imgAnimal = document.getElementById("preview");
  const btnRegistrar = document.getElementById("btnRegistrar");
  const tablaAnimales = document.getElementById("Animales");

  const cardsAnimal = [];

  nombreAnimal.addEventListener("change", () => {
    const animalSeleccionado = nombreAnimal.value;
    const animalEncontrado = Animales.find(
      (animal) => animal.name === animalSeleccionado
    );

    // console.log(animalEncontrado);

    imgAnimal.setAttribute("src", `/assets/imgs/${animalEncontrado.imagen}`);

    console.log(animalEncontrado.sonido);

    console.log(nombreAnimal);
  });

  btnRegistrar.addEventListener("click", () => {
    const nombreDeAnimal = nombreAnimal.value;
    const edadDeAnimal = edadAnimal.value;
    const comentariosDeAnimal = comentariosAnimal.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === nombreDeAnimal
    );

    switch (nombreDeAnimal) {
      case "Leon":
        {
          cardsAnimal.push(
            new Leon(
              nombreDeAnimal,
              edadDeAnimal,
              animalEncontrado.imagen,
              comentariosDeAnimal,
              animalEncontrado.sonido
            )
          );
        }
        break;
      case "Lobo":
        {
          cardsAnimal.push(
            new Lobo(
              nombreDeAnimal,
              edadDeAnimal,
              animalEncontrado.imagen,
              comentariosDeAnimal,
              animalEncontrado.sonido
            )
          );
        }
        break;
      case "Oso":
        {
          cardsAnimal.push(
            new Oso(
              nombreDeAnimal,
              edadDeAnimal,
              animalEncontrado.imagen,
              comentariosDeAnimal,
              animalEncontrado.sonido
            )
          );
        }
        break;
      case "Serpiente":
        {
          cardsAnimal.push(
            new Serpiente(
              nombreDeAnimal,
              edadDeAnimal,
              animalEncontrado.imagen,
              comentariosDeAnimal,
              animalEncontrado.sonido
            )
          );
        }
        break;
      case "Aguila":
        {
          cardsAnimal.push(
            new Aguila(
              nombreDeAnimal,
              edadDeAnimal,
              animalEncontrado.imagen,
              comentariosDeAnimal,
              animalEncontrado.sonido
            )
          );
        }
        break;
    }
    ShowIt();

    console.log(cardsAnimal);
  });
  function ShowIt() {
    tablaAnimales.innerHTML = "";

    cardsAnimal.forEach((animal) => {
      const ContainerDivs = document.createElement("div");
      const etiqImg = document.createElement("img");
      const ButtonCard = document.createElement("div");

      ContainerDivs.appendChild(etiqImg);
      ContainerDivs.appendChild(ButtonCard);

      tablaAnimales.appendChild(ContainerDivs);

      ContainerDivs.classList.add("card");

      etiqImg.setAttribute("src", `/assets/imgs/${animal.img}`);
      console.log(animal.img);

      etiqImg.classList.add("img-small");

      ButtonCard.classList.add("card-footer", "p-0");

      ButtonCard.innerHTML = `
      <button class="btn btn-secondary btn-block">
      <img src="/assets/imgs/audio.svg" style="width: 10px">
      </button>
      `;
      //modal
      etiqImg.addEventListener("click", () => {
        console.log("click imagen", animal);
      });

      etiqImg.addEventListener("click", () => {
        console.log("click imagen => ", animal);
        $("#Modal").modal("show");

        const mostrarModal = document.querySelector("#Modal .modal-body");

        mostrarModal.innerHTML = `
          <img src="/assets/imgs/${animal.img}" style="height: 200px"/>
          <ul class="text-white list-unstyled text-center img-fluid">
            <li>Nombre: ${animal.nombre}</li>
            <li>Edad: ${animal.edad}</li>
            <li>Comentarios: ${animal.comentarios}</li>
          </ul>
        `;
      });
      //modal
      //llamar metodos para sonido
      ButtonCard.addEventListener("click", () => {
        console.log("click", animal);
        switch (animal.nombre) {
          case "Leon":
            animal.Rugir();
            break;
          case "Lobo":
            animal.Aullar();
            break;
          case "Oso":
            animal.Gruñir();
            break;
          case "Serpiente":
            animal.Sisear();
            break;
          case "Aguila":
            animal.Chillar();
            break;
        }
      });
    });
  }
})();
