const timeInMinutes = new URLSearchParams(window.location.search).get('time');

if (timeInMinutes) {
    // HANDLE IN THE CASE OF A FILLED IN USER
    
    // We want to not show the input/form info
    setTimeout(() => {
        const formEl = document.getElementById('time-form');
        formEl.remove();

        addTextToBody(`You have selected ${timeInMinutes} minutes of timer`);
    }, 0);
} else {
    // HANDLE AS A NEW USER

    // We want to show the form stuff
}

function addTextToBody() {
    // Create a <p> tag
    const para = document.createElement('p');
    // Create the text to go inside
    const node = document.createTextNode(`You have selected ${timeInMinutes} minutes of timer`);
    // Find the body tag
    const bodyEl = document.getElementById('body');
    
    // Add the text to the newly created <p> tag
    para.appendChild(node);
    // Add the new element to the body
    bodyEl.appendChild(para);
}
