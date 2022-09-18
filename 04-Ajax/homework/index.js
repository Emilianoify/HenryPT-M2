const lista = document.getElementById("lista")
$("#boton").one("click", function () {
    $.get("http://localhost:5000/amigos",
        function (amigos) {
            amigos.forEach(element => {
                let li = document.createElement("li")
                li.textContent = element["name"]
                lista.appendChild(li)
            });
        }
    );
});



const friendFound = document.getElementById("amigo")

$("#search").click(function () {
    let valor = document.getElementById("input").value;
    if (valor > 0 && valor <= 6) {
        $.get("http://localhost:5000/amigos/" + valor,
            function (amigo) {
                friendFound.textContent = amigo.name
            }
        );
    } else {
        friendFound.textContent = "No se han encontrado resultados"
    }



});


$("#delete").click(function () {
    let valor = document.getElementById("inputDelete").value;
    if (valor) {
        $.ajax({
            type: "DELETE",
            url: "http://localhost:5000/amigos/" + valor,
            success: function (response) {
                response = document.getElementById("success");
                response.textContent = "Amigo eliminado con exito";
            }
        }
        );
    }

});

