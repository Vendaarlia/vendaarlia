const nav = document.getElementById("ulCNT");

window.onmousemove = (e) => {
  const percent = e.clientX / window.innerWidth;

  nav.animate(
    {
      transform: `translateX(${percent * nav.offsetWidth * -1}px)`,
    },
    {
      fill: "forwards",
      duration: 100,
    }
  );
};