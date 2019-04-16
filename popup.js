const siparisform=document.getElementById("siparisform")
const siparisyazdir=document.getElementById("siparisyazdir")
const siparisdurum=document.getElementById("siparisdurum")
const siparisno=document.getElementById("siparisno")
const siparisdurumliste=document.getElementById("siparisdurumliste")
const siparisveren=document.getElementById("siparisveren")
getLocation();
manifest();
addEventListeners();

function addEventListeners(){
    siparisform.addEventListener("submit",siparistakip)
    siparisdurum.addEventListener("click",siparisdurumgoster)
}

function siparisdurumgoster(e) {
    e.preventDefault();
}

function siparistakip(e) {
    
    console.log(siparisno.value)
    siparisdurumgetir(siparisno.value)
    // else {
    //     siparisdurum.style.display="none" 
    // }

    e.preventDefault()
}

async function siparisdurumgetir(id){
    getLocation();
    const response=await fetch("http://localhost:3000/siparis/"+id);
    if (response.status===200) {
        siparisdurumliste.style.display="block"
        const responsedata= await response.json(); 
        siparisveren.innerHTML="Sipariş Veren: "+responsedata.SiparisVeren+"<br/>"+"Pizza Tipi: "+responsedata.PizzaTipi;
        if (responsedata.Durum==siparisdurumliste.children[0].textContent) {
            siparisdurumliste.children[0].style.backgroundColor="#555"
            siparisdurumliste.children[0].firstElementChild.style.color="red"
            siparisdurumliste.children[1].style.backgroundColor=null
            siparisdurumliste.children[1].firstElementChild.style.color=null
            siparisdurumliste.children[2].style.backgroundColor=null
            siparisdurumliste.children[2].firstElementChild.style.color=null
            siparisdurumliste.children[3].style.backgroundColor=null
            siparisdurumliste.children[3].firstElementChild.style.color=null
            siparisdurumliste.children[4].style.backgroundColor=null
            siparisdurumliste.children[4].firstElementChild.style.color=null
        } 
        if (responsedata.Durum==siparisdurumliste.children[1].textContent) {
            siparisdurumliste.children[1].style.backgroundColor="#555"
            siparisdurumliste.children[1].firstElementChild.style.color="red"
            siparisdurumliste.children[0].style.backgroundColor=null
            siparisdurumliste.children[0].firstElementChild.style.color=null
            siparisdurumliste.children[2].style.backgroundColor=null
            siparisdurumliste.children[2].firstElementChild.style.color=null
            siparisdurumliste.children[3].style.backgroundColor=null
            siparisdurumliste.children[3].firstElementChild.style.color=null
            siparisdurumliste.children[4].style.backgroundColor=null
            siparisdurumliste.children[4].firstElementChild.style.color=null
        } 
        if (responsedata.Durum==siparisdurumliste.children[2].textContent) {
            siparisdurumliste.children[2].style.backgroundColor="#555"
            siparisdurumliste.children[2].firstElementChild.style.color="red"
            siparisdurumliste.children[0].style.backgroundColor=null
            siparisdurumliste.children[0].firstElementChild.style.color=null
            siparisdurumliste.children[1].style.backgroundColor=null
            siparisdurumliste.children[1].firstElementChild.style.color=null
            siparisdurumliste.children[3].style.backgroundColor=null
            siparisdurumliste.children[3].firstElementChild.style.color=null
            siparisdurumliste.children[4].style.backgroundColor=null
            siparisdurumliste.children[4].firstElementChild.style.color=null
        } 
        if (responsedata.Durum==siparisdurumliste.children[3].textContent) {
            siparisdurumliste.children[3].style.backgroundColor="#555"
            siparisdurumliste.children[3].firstElementChild.style.color="red"
            siparisdurumliste.children[0].style.backgroundColor=null
            siparisdurumliste.children[0].firstElementChild.style.color=null
            siparisdurumliste.children[2].style.backgroundColor=null
            siparisdurumliste.children[2].firstElementChild.style.color=null
            siparisdurumliste.children[1].style.backgroundColor=null
            siparisdurumliste.children[1].firstElementChild.style.color=null
            siparisdurumliste.children[4].style.backgroundColor=null
            siparisdurumliste.children[4].firstElementChild.style.color=null
        } 
        if (responsedata.Durum==siparisdurumliste.children[4].textContent) {
            siparisdurumliste.children[4].style.backgroundColor="#555"
            siparisdurumliste.children[4].firstElementChild.style.color="red"
            siparisdurumliste.children[0].style.backgroundColor=null
            siparisdurumliste.children[0].firstElementChild.style.color=null
            siparisdurumliste.children[2].style.backgroundColor=null
            siparisdurumliste.children[2].firstElementChild.style.color=null
            siparisdurumliste.children[3].style.backgroundColor=null
            siparisdurumliste.children[3].firstElementChild.style.color=null
            siparisdurumliste.children[1].style.backgroundColor=null
            siparisdurumliste.children[1].firstElementChild.style.color=null
        } 
    }
    else
    {
     
        siparisdurumliste.style.display="none"
        siparisveren.innerHTML="Sipariş Veren bulunamadı";
    }
   
}

async function manifest(){
    const response=await fetch("manifest.json");
    const responsedata= await response.json(); 
    console.log(responsedata)
}
function getLocation () {
    // Tarayıcınızın  Geolocation API desteği var mı?
    if (!navigator.geolocation) {
      alert('Tarayıcınız Geolocation desteği bulunmuyor')
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        // Mevcut konumumuzun kordinatlarını alıyoruz.
        var lat = position.coords.latitude
        var lng = position.coords.longitude
        console.log("x:"+ lat + " y:" +lng)
  
      })
    }
  }

// async post(data){
//     const response=await fetch(this.url,{
//      method: 'POST',
//      body: JSON.stringify(data),
//      headers: {
//        "Content-type": "application/json; charset=UTF-8"
//      }
//     });
//     const responsedata= await response.json();
//     return responsedata;  
// }

// async put(data,id){
//  const response=await fetch(this.url+"/"+id,{
//   method: 'PUT',
//   body: JSON.stringify(data),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
//  });
//  const responsedata= await response.json();
//  return responsedata;  
//  }

//  async delete(id){
//      const response=await fetch(this.url+"/"+id,{
//       method: 'DELETE'
//      });
//      // const responsedata= await response.json();
//      return "Silme başarılı";  
//  }

