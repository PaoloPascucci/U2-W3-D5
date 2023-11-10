//https://picsum.photos/300
const url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = function () {
  fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTdlMzI1NGU4ODAwMTgzZjE4NzAiLCJpYXQiOjE2OTk2MDQ0NTEsImV4cCI6MTcwMDgxNDA1MX0.Fso8KUf_Ei74-It5EYnLN8VbbQYbmhJOHaAJ-nMV2sc",
    },
  })
    .then((response) => response.json())
    .then((dataObj) => {
      const pL = document.querySelector(".prodList");
      for (let i = 0; i < dataObj.length; i++) {
        const card = document.createElement("div");
        card.className = "card text-center border border-dark";

        const cardImage = document.createElement("img");
        cardImage.src = dataObj[i].imageUrl;
        cardImage.className = "card-img-top imgLink";
        cardImage.style = "width:100%;";
        cardImage.alt = dataObj[i].description;

        const cardText = document.createElement("h4");
        cardText.classList.add("card-title");
        cardText.innerHTML = dataObj[i].name;

        const cardDesc = document.createElement("p");
        cardDesc.classList.add("card-text");
        cardDesc.innerHTML = dataObj[i].description;

        const btnV = document.createElement("a");
        btnV.className = "btnV btn btn-outline-dark m-3";
        btnV.textContent = "Scopri di più";
        btnV.href = `product.html?id=${dataObj[i]._id}`;
        
        const btnD = document.createElement("a");
        btnD.className = "btnD btn btn-danger  m-3";
        btnD.innerHTML = '<i class="bi bi-trash3-fill"></i>';
        const btnM = document.createElement("a");
        btnM.className = "btnM btn btn-primary  m-3";
        btnM.innerHTML = '<i class="bi bi-pencil-square"></i>';
        btnM.href = `update.html?id=${dataObj[i]._id}`;
        btnD.onclick = () => {
          fetch(url + dataObj[i]._id, {
            method: "DELETE",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTdlMzI1NGU4ODAwMTgzZjE4NzAiLCJpYXQiOjE2OTk2MDQ0NTEsImV4cCI6MTcwMDgxNDA1MX0.Fso8KUf_Ei74-It5EYnLN8VbbQYbmhJOHaAJ-nMV2sc",
            },
          }).then((resp) =>
            resp.json().then((delObj) => {
              alert("Hai eliminato il prodotto " + delObj.name);
              window.location.assign("./homepage.html");
            })
          );
        };

        const btnCont = document.createElement("div");
        btnCont.className = "btnContainer";
        btnCont.appendChild(btnV);
        btnCont.appendChild(btnM);
        btnCont.appendChild(btnD);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const col = document.createElement("div");
        col.className = "col-md-4";
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardDesc);
        card.appendChild(cardImage);
        card.appendChild(cardBody);
        card.appendChild(btnCont);
        col.appendChild(card);
        pL.appendChild(col);
      }
    })
    .catch((err) => console.log("Errore " + err));
};
