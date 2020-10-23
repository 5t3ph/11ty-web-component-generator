const list = shadowRoot.querySelector(".eleventywr-list");
const limit = this.getAttribute("limit") ? this.getAttribute("limit") : false;
const current = this.getAttribute("current");
const random = this.getAttribute("random");
const hideJoin = this.getAttribute("hideJoin");

const getWebring = async () => {
  let webringUrl = "https://11ty.rocks/js/eleventy-webring.json";
  if (!window.location.href.includes("11ty.rocks")) {
    webringUrl = "/js/eleventy-webring.json";
  }
  const postResp = await fetch(webringUrl);
  let webring = await postResp.json();

  if (current) {
    webring = webring.filter((link) => link.title !== current);
  }

  if (random) {
    webring = webring.sort(() => Math.random() - 0.5);
  }

  if (limit) {
    webring = webring.slice(0, limit);
  }

  if (hideJoin) {
    shadowRoot
      .querySelector(".eleventywr-join")
      .classList.add("eleventywr-hide");
  }

  return webring
    .map((item) => {
      return `<li><a href="${item.link}">${item.title}</a></li>`;
    })
    .join("");
};

getWebring()
  .then((webring) => {
    list.innerHTML = webring;
  })
  .catch(() => {
    list.innerHTML = `<li><em>No one else is in the webring yet - will you join?</em></li>`;
  });
