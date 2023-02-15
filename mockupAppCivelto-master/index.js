let modal = document.getElementById("myModal");

let btn = document.getElementById("btnModal");

let cont=0;
console.log("rodo o code dvn");
btn.onclick = function () {
    modal.style.display = "block";
   // clear();
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
}
//vetor será usado futuramente
//let cilindros =[];

const btnSalvar = document.querySelector("form");
btnSalvar.addEventListener('submit',function(e){
  e.preventDefault();
  cont=cont+1;
  criaCilindro(cont);
})
function criaCilindro(cont){
  
  let nCilindro = document.createElement("div");
  let gCilindro = document.createElement("div");
  //cabeçalho 1
  let linha1 = document.createElement("div");
  let divLabelMarca = document.createElement("div");
  let labelMarca = document.createElement("label");
  let lista1 = document.createElement("div");
  let divMarca = document.createElement("div");
  let marca = document.createElement("p");

  //cabecalho 2
  let linha2 = document.createElement("div");
  let divLabelSerie = document.createElement("div");
  let labelNSerie = document.createElement("label");
  let lista2 = document.createElement("div");
  let divnSerie = document.createElement("div");
  let nSerie = document.createElement("p");

  let divLabeldtFabri = document.createElement("div");
  let labeldtFabri = document.createElement("label");
  let divdtFrabri = document.createElement("div");
  let dtFabri = document.createElement("p");


  //cabecalho 3
  let linha3 = document.createElement("div");
  let divLabelVolume = document.createElement("div");
  let labelVolume = document.createElement("label");
  let lista3 = document.createElement("div");
  let divVolume = document.createElement("div");
  let volume = document.createElement("p");

  let divLabelMassa = document.createElement("div");
  let labelMassa = document.createElement("label");
  let divMassa = document.createElement("div");
  let massa = document.createElement("p");

  //cabeçalho 4
  let linha4 = document.createElement("div");
  let divLabeldtReteste = document.createElement("div");
  let labeldtReteste = document.createElement("label");
  let divdtReteste = document.createElement("div");
  let dtResteste = document.createElement("p");
  let lista4 = document.createElement("div");
  let divLabelnSelo = document.createElement("div");
  let labelnSelo = document.createElement("label");
  let divnSelo = document.createElement("div");
  let nSelo = document.createElement("p");

  let divconfirmacao = document.querySelector("#confirmacao");
  let camponSelo = document.querySelector("#nSelo").value;
  let campoMarca = document.querySelector("#marca").value;
  let campoVolume = document.querySelector("#volume").value;
  let camponSerie = document.querySelector("#nSerie").value;
  let campodtFabri = document.querySelector("#dfFabri").value;
  let campodtResteste = document.querySelector("#dtReteste").value;
  let campoMassa = document.querySelector("#massa").value;
  
  //let cilindro = {
  // Nselo: camponSelo,
  // Marca: campoMarca,
  // Volume: campoVolume,
  // nSerie: camponSerie,
  // dtFabri: campodtFabri,
  // dtReteste: campodtResteste,
  // Massa: campoMassa
  //}
  //cilindros.push(cilindro);

  nCilindro.className = "nCilindro";
  gCilindro.className = "gCilindro";
  linha1.className = "linha";
  lista1.className = "lista";
  linha2.className = "linha";
  lista2.className = "lista";
  linha3.className = "linha";
  lista3.className = "lista";
  linha4.className = "linha";
  lista4.className = "lista";
  divLabelMarca.className = "itencenter";
  divMarca.className = "itencenter";
  nCilindro.textContent = cont;
  labelMarca.textContent = "marca";
  marca.textContent = campoMarca;

  labelNSerie.textContent = "Nº de serie";
  nSerie.textContent = camponSerie;
  labeldtFabri.textContent = "Data Fabricação";
  dtFabri.textContent = campodtFabri;


  labelVolume.textContent = "Volume";
  volume.textContent = campoVolume;
  labelMassa.textContent = "Massa";
  massa.textContent = campoMassa;

  labeldtReteste.textContent = "Data Reteste";
  dtResteste.textContent = campodtResteste;
  labelnSelo.textContent = "nº Selo";
  nSelo.textContent = camponSelo;

  divconfirmacao.appendChild(nCilindro);
  divconfirmacao.appendChild(gCilindro);

  gCilindro.appendChild(linha1);
  linha1.appendChild(divLabelMarca);
  divLabelMarca.appendChild(labelMarca);
  gCilindro.appendChild(lista1);
  lista1.appendChild(divMarca);
  divMarca.appendChild(marca);

  gCilindro.appendChild(linha2);
  linha2.appendChild(divLabelSerie);
  divLabelSerie.appendChild(labelNSerie);
  gCilindro.appendChild(lista2);
  lista2.appendChild(divnSerie);
  divnSerie.appendChild(nSerie);
  linha2.appendChild(divLabeldtFabri);
  divLabeldtFabri.appendChild(labeldtFabri);
  lista2.appendChild(divdtFrabri);
  divdtFrabri.appendChild(dtFabri);

  gCilindro.appendChild(linha3);
  linha3.appendChild(divLabelVolume);
  divLabelVolume.appendChild(labelVolume);
  gCilindro.appendChild(lista3);
  lista3.appendChild(divVolume);
  divVolume.appendChild(volume);
  
  linha3.appendChild(divLabelMassa);
  divLabelMassa.appendChild(labelMassa);
  lista3.appendChild(divMassa);
  divMassa.appendChild(massa);
  
  gCilindro.appendChild(linha4);
  linha4.appendChild(divLabeldtReteste);
  divLabeldtReteste.appendChild(labeldtReteste);
  gCilindro.appendChild(lista4);
  lista4.appendChild(divdtReteste);
  divdtReteste.appendChild(dtResteste);

  linha4.appendChild(divLabelnSelo);
  divLabelnSelo.appendChild(labelnSelo);
  lista4.appendChild(divnSelo);
  divnSelo.appendChild(nSelo);


  
  

 
  
}