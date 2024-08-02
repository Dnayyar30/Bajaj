document.getElementById('apiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dataInput = document.getElementById('dataInput').value;
    const dataArray = dataInput.split(',').map(item => item.trim());

    fetch('http://localhost:5000/bfhl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: dataArray })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('response').textContent = 'Error: ' + error;
    });
});