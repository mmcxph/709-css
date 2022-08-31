(async function () {
  const response = await fetch("api/chart.json");
  const chart = await response.json();
  renderChart(chart);

  // const chart = [
  //   {
  //     id: "1",
  //     title: "title",
  //     subtitle: "subtitle",
  //     image:
  //       "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg",
  //     href: "https://www.shazam.com/track/104382921/ginseng-strip-2002",
  //   },
  //   {
  //     id: "2",
  //     title: "title",
  //     subtitle: "subtitle",
  //     image:
  //       "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg",
  //     href: "https://www.shazam.com/track/104382921/ginseng-strip-2002",
  //   },
  //   {
  //     id: "3",
  //     title: "title",
  //     subtitle: "subtitle",
  //     image:
  //       "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg",
  //     href: "https://www.shazam.com/track/104382921/ginseng-strip-2002",
  //   },
  // ];

  function renderChart() {
    const songContainer = document.querySelector(".song__container");
    songContainer.innerHTML = "";
    for (const song of chart) {
      songContainer.innerHTML += `
      <article class="song-card">
        <img
          class="song-card__image"
          src="${chart.image}"
          alt="${chart.title}"
        />
        <h3 class="song-card__h3">${chart.id} - ${chart.title}</h3>
        <p class="song-card__description">${chart.subtitle}</p>
        <div class="song-card__button button button-card">
          <a href="${chart.href}">Go to Shazam!</a>
          </div>
      </article>`;
    }
  }
})();
