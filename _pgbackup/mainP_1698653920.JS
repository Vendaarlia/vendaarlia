const nav = document.getElementById("ulCNT");

window.onmousemove = (e) => {
  const percent = e.clientX / window.innerWidth;

  nav.animate(
    {
      transform: `translateX(${percent * nav.offsetWidth * -5}px)`,
    },
    {
      fill: "forwards",
      duration: 4000,
    }
  );
};