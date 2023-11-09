function publicar(event) {
  event.preventDefault();
  const tweet = document.getElementById("tweet");
  const tweetText = tweet.value;
  console.log("Enviado");

  const newTweet = document.createElement("div");
  const id = new Date().getTime();
  newTweet.id = id;
  newTweet.innerHTML = `<p>${tweetText}</p> <button class="btn btn-danger d-block ms-auto" onclick="deleteTweet(${id})">Eliminar</button>`;
  newTweet.classList.add(
    "text-light",
    "bg-secondary",
    "p-3",
    "tweet-styles",
    "my-2"
  );
  const tweetContainer = document.querySelector(".twitts-container");
  tweetContainer.appendChild(newTweet);

  document.querySelector("form").reset();
}

const deleteTweet = (id) => {
  const tweetToDelete = document.getElementById(id);
  tweetToDelete.remove();
};
