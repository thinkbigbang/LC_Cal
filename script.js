document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    
    // 계산 로직
    const result = input1 + input2;  

    document.getElementById('result').value = result;
});

//A=⌈(5N+Q+75)/6 ⌉