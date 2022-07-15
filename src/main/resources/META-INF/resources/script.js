const URL = 'http://localhost:8080';
let entries = [];

const dateAndTimeToDate = (dateString, timeString) => {
    return new Date(`${dateString}T${timeString}`).toISOString();
};

let categories = [];

const createEntry = (e) => {
    const formData = new FormData(e.target);
    const entry = {};
    entry['checkIn'] = dateAndTimeToDate(formData.get('checkInDate'), formData.get('checkInTime'));
    entry['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate'), formData.get('checkOutTime'));
    entry['category'] = categories[formData.get('category')];

    fetch(`${URL}/entries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    }).then((result) => {
        result.json().then((entry) => {
            entries.push(entry);
            renderEntries();
        });
    });
};



const indexEntries = () => {
    fetch(`${URL}/entries`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            entries = result;
            renderEntries();
        });
    });
    renderEntries();
};

const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

const renderEntries = () => {
    const display = document.querySelector('#entryDisplay');
    display.innerHTML = '';
    entries.forEach((entry) => {
        const row = document.createElement('tr');
        row.appendChild(createCell(entry.id));
        row.appendChild(createCell(new Date(entry.checkIn).toLocaleString()));
        row.appendChild(createCell(new Date(entry.checkOut).toLocaleString()));
        row.appendChild(createCell(entry.category.name))
        display.appendChild(row);
    });
};



document.addEventListener('DOMContentLoaded', function(){
    const createEntryForm = document.querySelector('#createEntryForm');
    createEntryForm.addEventListener('submit', createEntry);
    indexEntries();
});

function openUpdateEntryForm() {
    document.getElementById("error").innerText = "";
    document.getElementById("createEntryForm").removeEventListener("submit", createEntry);
    document.getElementById("createEntryForm").addEventListener("submit", updateEntry);
    document.getElementById("formTitle").innerText = "Update entry";
    document.getElementById("updateBack").style.display = "block";
}

function closeUpdateEntryForm() {
    document.getElementById("error").innerText = "";
    document.getElementById("createEntryForm").removeEventListener("submit", updateEntry);
    document.getElementById("createEntryForm").addEventListener("submit", createEntry);
    document.getElementById("formTitle").innerText = "Add entry";
    document.getElementById("updateBack").style.display = "none";
}

const updateEntry = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};
    data["id"] = formData.get("id");
    data["checkIn"] = formData.get("checkIn");
    data["checkOut"] = formData.get("checkOut");
    data["category"] = categories[formData.get("category")];

    fetch(`${URL}/entries`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((result) => {
        result.json().then((entry) => {
                closeUpdateEntryForm();
                indexEntries();

        });
    })
};