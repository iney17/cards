let productRow = document.querySelector("#cards");
const url =
  "https://ubereats-demo-api.herokuapp.com/v1/places?offset=1&limit=10";

getPlaces(url); //вызываем функцию получения

function getPlaces(url) {
  fetch(url)
    .then(function(res) {
      if (res.status === 200) {
        return res.json();
      } else {
        alert("Fatal Error \n" + res.status);
      }
    })
    .then(function(json) {
      //работаем с json
      let items = json.items;
      insertCard(items);
    })

    .catch(function(err) {
      console.log(err);
    });
}

function insertCard(items) {
  // функция для вставки
  let template = "";
  items.forEach(function(item) {
    template += `      <div class="card">
    <a href="#" class="card-link">
      <div class="card__image">
        <img style='height:300px' src="${item.img}" alt="${item.title}" />
        <button
          type="submit"
          value="liked"
          class="card__imge__likebutton"
        ></button>
      </div>
      <h3 class="card__title">${item.title}</h3>
      <div class="card__info">
        ${item.price} • ${item.type}
      </div>
      <div class="card__description">
        <div class="card__delivery">
          <span class="card__delivery">30-40 мин</span>
        </div>
        <div class="card__rating">
        ${item.rating} <img src="./img/star.svg" alt="star" /> (${item.reviews})
        </div>
      </div>
    </a>
  </div>`;
    console.dir(item); // показывыет свойства обьекта item (исп. для вставки в template)
    productRow.innerHTML = template; // вставляеем html в productRow
  });
}
