let tableWasCreated = false;
let rowCount = 0;
let table;

const createTableButton = document.getElementById('createTableButton');
const addRowButton = document.getElementById('addRowButton');
const removeRowButton = document.getElementById('removeRowButton');
const lineIndex = document.getElementById('lineIndex');
createTableButton.disabled = false;
addRowButton.disabled = true;
removeRowButton.disabled = true;

function TryCreateTable()
{
    if(tableWasCreated)
    {
        alert('Таблица уже создана');
        return;
    }

    table = document.createElement("table");
    table.className = "tableNotes";
    table.id = "tableNotes";
    document.body.appendChild(table);
    table.style.width = '300px';
    table.style.border = '1px solid black';

    table.innerHTML = `<thead class="thead-dark">
    <tr>
      <th scope="col">№</th>
      <th scope="col">Date</th>
      <th scope="col">Note</th>
    </tr>
  </thead>`;

  const tr = table.insertRow();
  let td = tr.insertCell();
  td.style.border = '1px solid black';
  td.appendChild(document.createTextNode(`${++rowCount}`));

  td = tr.insertCell();
  td.style.border = '1px solid black';
  td.appendChild(document.createTextNode(`${new Date().toLocaleDateString()}`));

  td = tr.insertCell();
  td.style.border = '1px solid black';
  let inputbox = document.createElement("input");
  inputbox.setAttribute("type", "text");
  td.appendChild(inputbox);


    tableWasCreated = true;
    addRowButton.disabled = false;
    removeRowButton.disabled = false;

    rowCount = 1;
}

function AddRow()
{
    const tr = table.insertRow();
    let td = tr.insertCell();
    td.style.border = '1px solid black';
    td.appendChild(document.createTextNode(`${++rowCount}`));

    td = tr.insertCell();
    td.style.border = '1px solid black';
    td.appendChild(document.createTextNode(`${new Date().toLocaleDateString()}`));

    td = tr.insertCell();
    td.style.border = '1px solid black';
    let inputbox = document.createElement("input");
    inputbox.setAttribute("type", "text");
    td.appendChild(inputbox);
}

function RemoveRow()
{
    let index = lineIndex.value;
    
    if(index.trim() === '')
    {
        table.deleteRow(rowCount--);
        if(rowCount === 0)
            DropTable();
        return;
    }

    if(isNaN(index))
    {
        alert("NaN");
        return;
    }

    if(index > rowCount)
    {
        alert("Line not found");
        return;
    }

    table.deleteRow(index);
    rowCount--;

    if(rowCount < 1)
        DropTable();
}

function DropTable()
{
    tableWasCreated = false;
    addRowButton.disabled = true;
    removeRowButton.disabled = true;

    table.remove();
}

