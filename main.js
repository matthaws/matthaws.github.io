document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".project-item").forEach(element => {
    element.onmousemove = e => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  };
});

  document.querySelectorAll('.growing-text').forEach( element => {
    const instance = basicScroll.create({
      elem: element,
      from: "bottom-bottom",
      to: "top-middle",
      props: {
        "--font-size": {
          from: '30px',
          to: '50px',
        }
      }
    });
    debugger
    instance.start();

  })

});
