    function cargarPagina(url) {
      const visor = document.getElementById("visor");
      visor.src = url;
      visor.scrollIntoView({ behavior: "smooth" });
    }