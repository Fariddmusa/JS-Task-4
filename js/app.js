let btn = document.getElementById('btn');

btn.onclick = () => {
    let inp1 = parseFloat(document.getElementById('inp1').value);
    let inp2 = parseFloat(document.getElementById('inp2').value);
    let inp3 = parseFloat(document.getElementById('inp3').value);

    if(isNaN(inp1) && isNaN(inp2) && isNaN(inp3)) {
        return 'Ədəd daxil edin';
    }
    else {
        let x = inp1 + inp1 * inp3 / 100;
        let y = x / inp2;
        document.getElementById('res1').innerHTML = `Ümumi məbləğ: ${x}`;
        document.getElementById('res2').innerHTML = `Aylıq ödəniş:${y}`;
    }
}
