document.body.innerHTML += `<div style="height: 50%; width: 50%; top: 25%; left: 25%; position: fixed; border: 2px solid; background-color: white; z-index: 100;">
  <button style="left: 75%; position: fixed; transform: translateX(-100%); margin-top: 2px;" onclick="this.parentNode.remove()">X</button>
  <div style="position: fixed;transform: translateX(-50%);left: 50%;/*! top: 50%; */margin-top: 3em;">
    <input placeholder="Add project (id)"><button>+</button>
  </div>
  <center style=""><h2>Scratch RSS</h2></center>
  <table style="margin-top: 3em;border: 1px solid black;position: fixed;left: 50%;transform: translateX(-50%);"> <style>table img{height: 1em;}</style>     <tbody style=""><tr>       <th>Title</th>       <th>Last updated</th>       <th></th>            </tr>       <tr>       <td><a href="/labbet/2693158">SKOLARBETE</a></td>       <td class="updated">2021-05-27 10:43:24</td>       <td> <img onclick="deleteFile("2693158")" class="trashcan" src="http://selma.friskola.nu/images/trashcan.png">       </td>     </tr>       <tr>       <td><a href="/labbet/89885965">sierpinski</a></td>       <td class="updated">2021-05-19 08:47:51</td>        <td> <img onclick="deleteFile("89885965")" class="trashcan" src="http://selma.friskola.nu/images/trashcan.png">       </td>     </tr>       <tr>       <td><a href="/labbet/36885973">gamepad test</a></td>       <td class="updated">2021-05-15 14:59:05</td>       <td> <img onclick="deleteFile("36885973")" class="trashcan" src="http://selma.friskola.nu/images/trashcan.png">       </td>     </tr> </tbody></table>
  <script>
    
  </script>
</div>`;
