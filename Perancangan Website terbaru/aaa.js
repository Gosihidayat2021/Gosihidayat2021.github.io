function cetakTabel() {
    var username = document.forms["document"]["username"].value;
    var email = document.forms["document"]["email"].value;
    var nomor = document.forms["document"]["nomor hp"].value;
    var password = document.forms["document"]["password"].value;


    var tabel = document.getElementById("tabel");
    var baris = tabel.insertRow(1);
    var cell1 = baris.insertCell(0);
    var cell2 = baris.insertCell(1);
    var cell3 = baris.insertCell(2);
    var cell4 = baris.insertCell(3);

    cell1.innerHTML = username;
    cell2.innerHTML = email;
    cell3.innerHTML = nomor;
    cell4.innerHTML = password;

    alert("Data Berhasil Disimpan")
}
