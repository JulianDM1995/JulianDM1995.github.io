function actualizarTabla() {
    var Table = document.getElementById('datosTabla');
    Table.innerHTML = "";
    for (var i = 0; i < Fechas.length; i++) {
        //labels
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerHTML = Fechas[i];
        tr.appendChild(td);

        //Temperatura 1
        var td = document.createElement("td");
        td.innerHTML = Temperatura_1[i];
        tr.appendChild(td);

        //Temperatura 2
        var td = document.createElement("td");
        td.innerHTML = Temperatura_2[i];
        tr.appendChild(td);

        //Temperatura 3
        var td = document.createElement("td");
        td.innerHTML = Temperatura_3[i];
        tr.appendChild(td);

        //Temperatura 4
        var td = document.createElement("td");
        td.innerHTML = Temperatura_4[i];
        tr.appendChild(td);

        //Humedad 1
        var td = document.createElement("td");
        td.innerHTML = Humedad_1[i];
        tr.appendChild(td);

        //Humedad 2
        var td = document.createElement("td");
        td.innerHTML = Humedad_2[i];
        tr.appendChild(td);

        //Humedad 3
        var td = document.createElement("td");
        td.innerHTML = Humedad_3[i];
        tr.appendChild(td);

        //Humedad 4
        var td = document.createElement("td");
        td.innerHTML = Humedad_4[i];
        tr.appendChild(td);

        Table.appendChild(tr);
    }
}