const hw = shadowRoot.querySelector(".hello-world");

setTimeout(() => {
	hw.classList.add('hello-world__visible');
}, 1000);