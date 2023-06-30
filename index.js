// // XMLHttpRequest
// function reqListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();

// req.onload = reqListener;

// // req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
// req.send();

//----------------------------------------
//FETCH
//-----------------

// fetch("mon lien", "objet d'options")
//   .then((response) => {
//     //response
//     console.log(response);
//   })
//   .catch((err) => console.log(err));

// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//Les options de requête

const myHeaders = new Headers();
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

// CRUD => CREATE(POST), read(GET), update(PUT), delete (DELETE)

const init2 = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    age: 25,
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/users", init2).then(() =>
    console.log("data envoye")
  );
});
