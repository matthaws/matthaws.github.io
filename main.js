document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("project-item").onmousemove = e => {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;
      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
    };
  });
