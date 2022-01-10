function populatePage() {
  fetch("projects.json")
    .then((req) => req.json())
    .then((data) => {
      const projectbox = document.querySelector(".projectbox");
      projectbox.innnerHTML = "";
      for (const item of data) {
        console.log(item.image);
        projectbox.insertAdjacentHTML(
          "beforeend",
          `      <a href=${item.link} target="_blank"><div class="projcard" style="background-image: url('${item.image}')">
                        <div class = "projbox">
                            <div class="projdesc">${item.description}</div>
                            <div class="projlang">Language: ${item.lang}</div>
                        </div>
                        <div class="projtitle">${item.name}</div>
                </div></a>
                `
        );
      }
    });
}
