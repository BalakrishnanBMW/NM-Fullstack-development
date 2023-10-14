document.getElementById("submited").addEventListener('click',(e) => {
    e.preventDefault();
    const label = document.querySelectorAll('label');
    const input = document.querySelectorAll("input:not([type='submit'])");
    for(let i=0;i<label.length;i++)
    {
        console.log(label[i].innerText + " = "+ input[i].value)
    }
})