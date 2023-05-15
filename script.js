
/* LIKE BUTTON FUNCTIONALITY */
function likeButton() {
    alert("Ninja was liked.")
}


/* LOGOUT & LOGIN FUNCTIONALITY */
const btn = document.getElementsByClassName(".nb-login-btn").innerText;

function login(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}

/* REMOVE ADD DEFINITION BUTTON FUNCTIONALITY */
function addDefinition(element) {
    element.remove();

    console.log("hello")
}

