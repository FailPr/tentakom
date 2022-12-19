function createOverFlowWindow(time = 1300) {
  const createElement = document.createElement("div");
  createElement.classList.add("overflowWindow");
  createElement.addEventListener("click", (e) => {
    if (e.target === createElement) {
      createElement.remove();
    }
  });
  if (time === 1300) {
    setInterval(() => {
      createElement.remove();
    }, time);
    return createElement;
  }
  return createElement;
}
