const btnEncriptar = document.querySelector(".boton-encriptar");
const txtEncriptar = document.querySelector(".texto-uno");
const aviso = document.querySelector(".aviso-texto");
const respuesta = document.querySelector(".evaluar");
    const contenido = document.querySelector(".tarjetas-contenedor");
const btnCopiar = document.querySelector(".copiar");
const btnDesencriptar = document.querySelector(".boton-desencriptar");

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.color = "#2C9539";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Prueba introduciendo algún texto";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if(texto !== txt){
        aviso.style.color = "#DB2F2F";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe contener acentos ni carácteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.color = "#DB2F2F";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe estar completo en minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else{
        texto = texto.replace(/hola/mg, "sul sul");
        texto = texto.replace(/adios/mg, "dag dag");
        texto = texto.replace(/holi/mg, "chabaduchiya");
        texto = texto.replace(/tu/mg, "vous");
        texto = texto.replace(/nosotros/mg, "wui");
        texto = texto.replace(/uno/mg, "mik");
        texto = texto.replace(/dos/mg, "mak");
        texto = texto.replace(/tres/mg, "maka");
        texto = texto.replace(/bebe/mg, "nooboo");
        texto = texto.replace(/pizza/mg, "chumcha");
        texto = texto.replace(/te agradezco/mg, "litzergam");
        texto = texto.replace(/gracias/mg, "vadish");
        texto = texto.replace(/bingo/mg, "myshuno");
        texto = texto.replace(/llama/mg, "gerbit");
        texto = texto.replace(/que tal/mg, "comansnala");
        texto = texto.replace(/con quien hablo/mg, "platanu");
        texto = texto.replace(/no puedo pasar/mg, "mistofah");
        texto = texto.replace(/esta esto en medio/mg, "estooflar");
        texto = texto.replace(/esta comida esta deliciosa/mg, "dis wompf is fredische");
        texto = texto.replace(/quiero descansar/mg, "ragen");
        texto = texto.replace(/quiero dormir/mg, "plaga");
        texto = texto.replace(/como estas/mg, "isubalathe");
        texto = texto.replace(/no puedo pasar/mg, "cuixas elacanda");
        texto = texto.replace(/que calor/mg, "florpito");
        texto = texto.replace(/no estoy de humor/mg, "oh gadauie shisei");
        texto = texto.replace(/yo no puedo/mg, "no ne pooh");
        texto = texto.replace(/que rico/mg, "yumi");
        texto = texto.replace(/adios y suerte/mg, "in cla cla cla cla");
        texto = texto.replace(/vete/mg, "a fafa");
        texto = texto.replace(/noche/mg, "nart");
        texto = texto.replace(/no/mg, "nou");
        texto = texto.replace(/venga ya/mg, "wabna");
        texto = texto.replace(/felicidades/mg, "bobu naube");
        texto = texto.replace(/tengo hambre/mg, "oh feebee lay");
        texto = texto.replace(/leche/mg, "lalo");
        texto = texto.replace(/jaque mate/mg, "checkmar");
        texto = texto.replace(/creo que eres caliente/mg, "za woka genava");
        texto = texto.replace(/muy bien/mg, "ooh be gah");
        texto = texto.replace(/perro/mg, "woofum");
        texto = texto.replace(/ser/mg, "xor");
        texto = texto.replace(/hay algo en el camino/mg, "choo wagga choo choo");
        texto = texto.replace(/esto es genial/mg, "whippna choba dog");
        texto = texto.replace(/puedo hacer algo mas/mg, "plerg majah bliff");
        texto = texto.replace(/sacudir/mg, "sherb");
        texto = texto.replace(/ven aqui/mg, "gerb woof em");
        texto = texto.replace(/es repugnante/mg, "sass awrful");
        texto = texto.replace(/muchas gracias/mg, "badeesh");
        texto = texto.replace(/perdon/mg, "blursh");
        texto = texto.replace(/sal de mi camino/mg, "meshaloob");
        texto = texto.replace(/interesante/mg, "jowlenin");
        texto = texto.replace(/chica/mg, "girl");
        texto = texto.replace(/habla/mg, "sperk");
        texto = texto.replace(/mas/mg, "zor");
        texto = texto.replace(/detonante/mg, "dooby zession");
        texto = texto.replace(/gato/mg, "minicule");
        texto = texto.replace(/que estas haciendo/mg, "cummuns nala");
        texto = texto.replace(/buenas/mg, "van vesua");
        texto = texto.replace(/es un presentador de tv aburrido/mg, "arriba chandler");
        texto = texto.replace(/hacer/mg, "mik up");
        texto = texto.replace(/dominos/mg, "dobbinips");
        texto = texto.replace(/me estoy quemando/mg, "wabadebadoo");
        texto = texto.replace(/eso se siente mejor/mg, "turkey nurbler");
        texto = texto.replace(/tienes valor/mg, "firby nurbs");
        texto = texto.replace(/creelo o no/mg, "delco webney");
        texto = texto.replace(/por cierto/mg, "arbo gwinchey");
        texto = texto.replace(/a quien le importa/mg, "kabuna");
        texto = texto.replace(/nada es imposible si lo crees/mg, "benzi chibna looble bazebni gweb");
        texto = texto.replace(/gran idea/mg, "gwanda blitz");
        texto = texto.replace(/recuerda esto/mg, "ribby wibbs");
        texto = texto.replace(/tu sabes a que me refiero/mg, "docka morpher");
        texto = texto.replace(/muevete/mg, "araganda");
        texto = texto.replace(/estoy aburrido/mg, "awasa poa");
        texto = texto.replace(/quiero ir al baño/mg, "atohteh");
        texto = texto.replace(/esto es divertido/mg, "bum bum");
        texto = texto.replace(/que sucede/mg, "bloo bagoo");
        texto = texto.replace(/estoy embarazada/mg, "baba");
        texto = texto.replace(/no me gustas/mg, "boobasnot");
        texto = texto.replace(/como esta yendo/mg, "cuh teekaloo");
        texto = texto.replace(/es/mg, "ne");
        texto = texto.replace(/que/mg, "cunta");
        texto = texto.replace(/me/mg, "rgset");

        texto = texto.replace(/una/mg, "nua");
        texto = texto.replace(/prueba/mg, "hugi");
        texto = texto.replace(/palabras/mg, "maskine");
        texto = texto.replace(/de/mg, "due");
        texto = texto.replace(/trabajo/mg, "jobi");
        texto = texto.replace(/el/mg, "le");
        texto = texto.replace(/en/mg, "emenne");

        respuesta.innerHTML = texto;
    }
});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.color = "#2C9539";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Prueba introduciendo algún texto";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.color = "#DB2F2F";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe contener acentos ni carácteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.color = "#DB2F2F";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe estar completo en minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/sul sul/mg, "hola");
        texto = texto.replace(/dag dag/mg, "adios");
        texto = texto.replace(/chabaduchiya/mg, "holi");
        texto = texto.replace(/vous/mg, "tu");
        texto = texto.replace(/wui/mg, "nosotros");
        texto = texto.replace(/mik/mg, "uno");
        texto = texto.replace(/mak/mg, "dos");
        texto = texto.replace(/maka/mg, "tres");
        texto = texto.replace(/nooboo/mg, "bebe");
        texto = texto.replace(/chumcha/mg, "pizza");
        texto = texto.replace(/litzergam/mg, "te agradezco");
        texto = texto.replace(/vadish/mg, "gracias");
        texto = texto.replace(/myshuno/mg, "bingo");
        texto = texto.replace(/gerbit/mg, "llama");
        texto = texto.replace(/comansnala/mg, "que tal");
        texto = texto.replace(/platanu/mg, "con quien hablo");
        texto = texto.replace(/mistofah/mg, "no puedo pasar");
        texto = texto.replace(/estooflar/mg, "esta esto en medio");
        texto = texto.replace(/dis wompf is fredische/mg, "esta comida esta deliciosa");
        texto = texto.replace(/ragen/mg, "quiero descansar");
        texto = texto.replace(/plaga/mg, "quiero dormir");
        texto = texto.replace(/isubalathe/mg, "como estas");
        texto = texto.replace(/cuixas elacanda/mg, "no puedo pasar");
        texto = texto.replace(/florpito/mg, "que calor");
        texto = texto.replace(/oh gadauie shisei/mg, "no estoy de humor");
        texto = texto.replace(/no ne pooh/mg, "yo no puedo");
        texto = texto.replace(/yumi/mg, "que rico");
        texto = texto.replace(/in cla cla cla cla/mg, "adios y suerte");
        texto = texto.replace(/a fafa/mg, "vete");
        texto = texto.replace(/nart/mg, "noche");
        texto = texto.replace(/nou/mg, "no");
        texto = texto.replace(/wabna/mg, "venga ya");
        texto = texto.replace(/bobu naube/mg, "felicidades");
        texto = texto.replace(/oh feebee lay/mg, "tengo hambre");
        texto = texto.replace(/lalo/mg, "leche");
        texto = texto.replace(/checkmar/mg, "jaque mate");
        texto = texto.replace(/za woka genava/mg, "creo que eres caliente");
        texto = texto.replace(/ooh be gah/mg, "muy bien");
        texto = texto.replace(/woofum/mg, "perro");
        texto = texto.replace(/xor/mg, "ser");
        texto = texto.replace(/choo wagga choo choo/mg, "hay algo en el camino");
        texto = texto.replace(/whippna choba dog/mg, "esto es genial");
        texto = texto.replace(/plerg majah bliff/mg, "puedo hacer algo mas");
        texto = texto.replace(/sherb/mg, "sacudir");
        texto = texto.replace(/gerb woof em/mg, "ven aqui");
        texto = texto.replace(/sass awrful/mg, "es repugnante");
        texto = texto.replace(/badeesh/mg, "muchas gracias");
        texto = texto.replace(/blursh/mg, "perdon");
        texto = texto.replace(/meshaloob/mg, "sal de mi camino");
        texto = texto.replace(/jowlenin/mg, "interesante");
        texto = texto.replace(/gurl/mg, "chica");
        texto = texto.replace(/sperk/mg, "habla");
        texto = texto.replace(/zor/mg, "mas");
        texto = texto.replace(/dooby zession/mg, "detonante");
        texto = texto.replace(/minicule/mg, "gato");
        texto = texto.replace(/cummuns nala/mg, "que estas haciendo");
        texto = texto.replace(/van vesua/mg, "buenas");
        texto = texto.replace(/arriba chandler/mg, "es un presentador de tv aburrido");
        texto = texto.replace(/mik up/mg, "hacer");
        texto = texto.replace(/dobbinips/mg, "dominos");
        texto = texto.replace(/wabadebadoo/mg, "me estoy quemando");
        texto = texto.replace(/turkey nurbler/mg, "eso se siente mejor");
        texto = texto.replace(/firby nurbs/mg, "tienes valor");
        texto = texto.replace(/delco webney/mg, "creelo o no");
        texto = texto.replace(/arbo gwinchey/mg, "por cierto");
        texto = texto.replace(/kabuna/mg, "a quien le importa");
        texto = texto.replace(/benzi chibna looble bazebni gweb/mg, "nada es imposible si lo crees");
        texto = texto.replace(/gwanda blitz/mg, "gran idea");
        texto = texto.replace(/ribby wibbs/mg, "recuerda esto");
        texto = texto.replace(/docka morpher/mg, "tu sabes a que me refiero");
        texto = texto.replace(/araganda/mg, "muevete");
        texto = texto.replace(/awasa poa/mg, "estoy aburrido");
        texto = texto.replace(/atohteh/mg, "quiero ir al baño");
        texto = texto.replace(/bum bum/mg, "esto es divertido");
        texto = texto.replace(/bloo bagoo/mg, "que sucede");
        texto = texto.replace(/baba/mg, "estoy embarazada");
        texto = texto.replace(/boobasnot/mg, "no me gustas");
        texto = texto.replace(/cuh teekaloo/mg, "como esta yendo");
        texto = texto.replace(/ne/mg, "es");
        texto = texto.replace(/cunta/mg, "que");
        texto = texto.replace(/rgset/mg, "me");

        texto = texto.replace(/nua/mg, "una");
        texto = texto.replace(/hugi/mg, "prueba");
        texto = texto.replace(/maskine/mg, "palabras");
        texto = texto.replace(/due/mg, "de");
        texto = texto.replace(/jobi/mg, "trabajo");
        texto = texto.replace(/le/mg, "el");
        texto = texto.replace(/emenne/mg, "en");

        respuesta.innerHTML = texto;
    }
});

function copyText() {
    let inputText = respuesta;

    inputText.select();
    inputText.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(inputText.value);

    alert("Se ha copiado el texto con éxito");
}