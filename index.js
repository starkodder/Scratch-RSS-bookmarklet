box = document.createElement('div');
box.style = `
height: 50%;
width: 50%;
top: 25%;
left: 25%;
position: fixed;
border: solid 2px;
background-color: white;
z-index: 100;
`;
document.body.appendChild(box);

div = document.createElement('div');
box.appendChild(div);

element = document.createElement('button');
element.textContent = 'X';
element.style = `
left: 75%;
position: fixed;
transform: translateX(-100%);
margin-top: 2px;
`;
box.appendChild(element);

element = document.createElement('label');
element.textContent = 'Add project: ';
div.appendChild(element);

element = document.createElement('input');
div.appendChild(element);

element = document.createElement('center');
element.textContent = 'Scratch RSS';
box.appendChild(element);
