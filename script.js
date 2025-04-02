const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

    
}
function esconderForm(){
    form.style.left = "-130px"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "hidden"
    
}

/*form.slyte.left = "50%"
    form.slyte.transform = "translateX(-50%)"*/