
setTimeout(() => {
    const para = document.createElement('p');
    const node = document.createTextNode('This is new.');
    para.appendChild(node);

    console.log(new URLSearchParams(window.location.search).get('time'));

    const element = document.getElementById('time-left');
    element.appendChild(para);


    const form = document.getElementById('form');
    console.log(document.getElementById('form'));
    
    form.addEventListener('submit', (event) => {
        console.log(event);
    });
}, 1000);