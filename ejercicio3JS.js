function comprobar() {
    let email = document.querySelector("#usr").value;

    let password = document.querySelector("#psw").value;

    const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
        alert("El campo usuario esta vacio");
        return false;
    }

    if (!email.match(emailRegx)) {
        alert("Tu Usuario no contiene @ ");
        return false;
    }

    if (password == "") {
        alert("El campo clave esta vacio");
        return false;
    }

    return true;
}