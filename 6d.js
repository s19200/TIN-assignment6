function addRow() {
    let array = document.getElementById("input").value.split(" ");
    let name =  array[0];
    let surname = array[1];
    let newRow = document.getElementById("table").insertRow(1);
    let nameCell = newRow.insertCell(0);
    let surnameCell = newRow.insertCell(1);
    nameCell.innerText=name;
    surnameCell.innerText=surname;
}
