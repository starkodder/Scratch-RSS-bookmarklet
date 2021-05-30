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
box.innerHTML = `<button style="left: 75%; position: fixed; transform: translateX(-100%); margin-top: 2px;">X</button><label>Add project: </label><input><center>Scratch RSS</center>`
document.body.appendChild(box);
