function dateCheck(from,to,check) {
    var fDate,lDate,cDate;
    fDate = Date.parse(from);
    lDate = Date.parse(to);
    cDate = Date.parse(check);

    if((cDate <= lDate && cDate >= fDate)) {
        return true;
    }
    return false;
}

//LA FECHA DEBE ESTAR EN FORMATO MM/DD/AAAA
//Debe haber exactamente 18 fechas de inicio y 18 fechas de fin
fechasInicio=["01/04/2021","01/21/2021","02/06/2021","02/24/2021","03/12/2021","04/01/2021","04/22/2021","05/11/2021","05/29/2021","06/24/2021","07/14/2021","08/03/2021","08/21/2021","09/09/2021","09/29/2021","10/15/2021","11/09/2021","12/01/2021"];

fechasFin=["01/20/2021","02/05/2021","02/23/2021","03/11/2021","03/31/2021","04/21/2021","05/10/2021","05/28/2021","06/23/2021","07/13/2021","08/02/2021","08/20/2021","09/08/2021","09/27/2021","10/14/2021","11/08/2021","11/30/2021","12/17/2021"];

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var ciclo = 0;

var fechaHoy = month+"/"+day+"/"+year;

for (i = 0; i < fechasInicio.length; i++) {

  if(dateCheck(fechasInicio[i],fechasFin[i],fechaHoy)) {
    var startdate=new Date(fechasInicio[i]);

    var monthNameS = new Intl.DateTimeFormat("es-CO", { month: "long" }).format;
    var longNameS = monthNameS(startdate);
    var dayS = startdate.getDate();

    var enddate=new Date(fechasFin[i]);

    var monthNameE = new Intl.DateTimeFormat("es-CO", { month: "long" }).format;
    var longNameE = monthNameE(enddate); 
    var dayE = enddate.getDate();

    ciclo=i+1;
  }
 }

var vigencia = dayS + " de " + longNameS + " al "+ dayE + " de " + longNameE;

function ponFecha(fecha) {
  var cat1 = document.getElementById('fechacatalogo1');
  cat1.innerHTML = vigencia;
  var cat2 = document.getElementById('fechacatalogo2');
  cat2.innerHTML = vigencia;
  var catpremios = document.getElementById('fechapremios');
  
  if(ciclo<=9) {
    catpremios.innerHTML = "4 de enero al 23 de junio";
  } else {
    catpremios.innerHTML = "24 de junio al 17 de diciembre";
  }
}