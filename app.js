if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
var kratkodobe = []
var stredni = []
var Dlouhodobe = []

function Pridat() {
    var nazev = document.getElementById("nazev").value
    var cil = document.getElementById("typ").value
    switch (cil) {
        case "Kratkodobe":
            kratkodobe.push(nazev)
            break;
        case "Stredni":
            stredni.push(nazev)
            break;
        case "Dlouhodobe":
            Dlouhodobe.push(nazev)
            break;
        default:
            break;
    }
    Obnovit()
}
function Odebrat() {
    var nazev = document.getElementById("nazev").value
    var cil = document.getElementById("typ").value
    switch (cil) {
        case "Kratkodobe":
            const newArr = kratkodobe.filter(item => item !== nazev);
            kratkodobe = newArr
            break;
        case "Stredni":
            const newArr1 = stredni.filter(item => item !== nazev);
            stredni = newArr
            break;
        case "Dlouhodobe":
            const newArr2 = Dlouhodobe.filter(item => item !== nazev);
            Dlouhodobe = newArr
            break;
        default:
            break;
    }
    
    Obnovit()
}
function Obnovit() {
    const listContainer = document.getElementById('kratkodobe');
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }
    kratkodobe.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        listContainer.appendChild(listItem);
    });
    const listContainer2 = document.getElementById('stredni');
    while (listContainer2.firstChild) {
        listContainer2.removeChild(listContainer2.firstChild);
    }
    stredni.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        listContainer.appendChild(listItem);
    });
    const listContainer3 = document.getElementById('dlouhodobe');
    while (listContainer3.firstChild) {
        listContainer3.removeChild(listContainer3.firstChild);
    }
    Dlouhodobe.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        listContainer.appendChild(listItem);
    });
}
function ZmenStranku1(){
    document.getElementById("strana1").className = "page_visible"
    document.getElementById("strana2").className = "page";
}

function ZmenStranku2(){
    document.getElementById("strana1").className = "page"
    document.getElementById("strana2").className = "page_visible";
}
