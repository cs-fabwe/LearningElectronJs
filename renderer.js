const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
}

const quit = async () => {
    await window.versions.quit();
    console.log("Shutting down");
}

const name_text = document.getElementById('name-text')
function sayHello()  {
    const text = document.getElementById('hello-text')
    text.innerText = "Hello " + name_text.value + "! How are you doing?"
}

const hello_btn = document.getElementById('say-hello-btn')
hello_btn.addEventListener('click', sayHello);
name_text.addEventListener('keydown', sayHello);

const close_app_button = document.getElementById('close-app')
close_app_button.addEventListener('click', quit);