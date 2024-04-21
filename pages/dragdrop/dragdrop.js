
let drop_area = document.getElementById("drag-drop");


drop_area.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

drop_area.addEventListener('drop', (event) => {
    event.preventDefault();
    event.stopPropagation();

    let paths = [];
    for (const f of event.dataTransfer.files) {
        paths.push(f.path);
    }
    
    do_with_dropped(...paths);
});

let pathArr = [];

async function do_with_dropped() {
    for (let i = 0; i < arguments.length; i++) {
        if (!pathArr.includes(arguments[i])) {
            pathArr.push(arguments[i]);
            let filename = await parsepath(arguments[i]);
            appendToList(filename);
        }
    }
}

const ul = document.getElementById("items-list");
ul.addEventListener('click', function (e) {
    if (e.target.matches(".list-path")) {
        e.target.remove();
    }
});

function appendToList(fname) {
    
    const li = document.createElement("li");
    li.setAttribute("class", "list-path");
    li.setAttribute('onclick', 'remove')
    li.appendChild(document.createTextNode(fname));
    ul.appendChild(li);

    // double excl. mark turns return value into a boolean
    if (!!document.getElementById("dummy-item")) {
        const dummy = document.getElementById("dummy-item");
        dummy.remove();
    }
}

async function parsepath(path) {
    let filename = await window.versions.parse(path)
    
    console.log("received filename: " + filename);
    return filename;
}