
let showFriends = () => {
    const lista = $("#lista");
    lista.empty();
    $.get("http://localhost:5000/amigos", (response) => {
        response.forEach(element => {
            let li = document.createElement("li");
            li.textContent = element["name"];
            lista.append(li);
        });
    });
};

$("#boton").click(showFriends);

$("#search").click( () => {
    let valor = $("#input").val();
    $.get(`http://localhost:5000/amigos/${valor}`, (response) => {
        $("#amigo").text(response.name);
    });
});


$("#delete").click(() => {
    let valor = $("#inputDelete").val();
        $.ajax({
            type: "DELETE",
            url: `http://localhost:5000/amigos/${valor}`,
            success: () =>{
                $("#success").text("Amigo eliminado con exito");
            }
        });
});

