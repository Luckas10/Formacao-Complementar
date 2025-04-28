function multiplicationTable() {
    let number = document.getElementById('txtNumber');
    let table = document.getElementById('selTable');

    if (number.value.length == 0) {
        window.alert('Please enter a number');
    } else {
        let value = Number(number.value);

        let count = 1;
        table.innerHTML = ''
        while (count <= 10) {
            let item = document.createElement('option')
            item.text = `${value} x ${count} = ${value * count}`;
            item.value = `tab${count}`
            table.appendChild(item);
            count++;
        }
    }
}