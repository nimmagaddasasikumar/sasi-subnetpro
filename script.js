
function calculateSubnet() {
    const ip = document.getElementById('ip').value.trim();
    const mask = document.getElementById('mask').value.trim();
    if(!ip || !mask) {
        alert('Please enter both IP and Subnet Mask');
        return;
    }
    const resultDiv = document.getElementById('result');
    // Basic demo: just show entered values
    resultDiv.innerHTML = '<strong>IP:</strong> ' + ip + '<br><strong>Subnet Mask:</strong> ' + mask;
}

document.getElementById('calculate').addEventListener('click', calculateSubnet);
