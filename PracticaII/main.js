//constantes del boton ocultar y el div
const hidebtn = document.querySelector("#hideElements")
const listdiv = document.querySelector("#list")

//evento al boton hide
hidebtn.addEventListener("click", ()=>{
    if(listdiv.style.display == "none"){
        listdiv.style.display = "block"
        hidebtn.textContent = "Ocultar"
    } else{
        listdiv.style.display = "none"
        hidebtn.textContent = "Mostrar"
    }    

})

//agregar elementos
const addItemInput = document.querySelector("#addItem")
const addItemButton = document.querySelector("button#addItemButton")

addItemButton.addEventListener("click", () => {
    let list = document.querySelector("ul")
    let li = document.createElement("li")
    li.textContent = addItemInput.value
    list.appendChild(li)
    //limpiar Input
    document.getElementById("addItem").value = ""
    //no dejar campo vacio
    if(addItemInput.value === ""){
        alert("El cuadro no debe estar vacio")
        return false
    }else{
        return true
    }
})
