const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('id');

if (id === null) {
  id = Math.floor(Math.random() * 100) + 1;
}

window.id = id;
