let imgarray=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','7.jpg','8.jpg','9.jpg']

let render=document.getElementById("images");

for(let i=0; i<imgarray.length;i++){
  let img =  imgarray[i].replace(/.[^/.]+$/, "");
  render.innerHTML+=` <div class="row">
  <div class=" col-6 mx-auto my-3">
      <img src="${imgarray[i]}" onclick="openfullimg(this.src)">
  </div>
</div>
<div class="row" >
  <div class="col-6 mx-auto my-3">
      <button id="like${img}"  class="btn btn-primary likeBTN">Like <span ></span></button>
      <button  class="btn btn-secondary"data-bs-toggle="modal" data-bs-target="#img${img}">Comment</button>
      <div class="col-6 mx-auto">        
          <div id="allComments${img}">
                   
          </div>
      </div>
  </div>
</div>`
}

let modals = document.getElementById('modals');

for (let i = 0; i < imgarray.length; i++){
  let img =  imgarray[i].replace(/.[^/.]+$/, "");
  modals.innerHTML += `<div class="modal fade" id="img${img}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add comment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id = "comments">
        <label for="name">Name</label> 
        <input hidden type = "text" value = "${img}">
        <input type="text" id = "name${img}"><br>
        <label for = "comment">Comment</label>
        <textarea id="comment${img}"></textarea>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" id = "save${img}" onclick = 'store()'>Save</button>
      </div>
        </form>
      </div>
      
    </div>
  </div>
</div>`
}


function appendToStorage(name, data) {
  let old = localStorage.getItem(name);
  if (old === null) {
    old = "";
    localStorage.setItem(name, '<p>' + data + '</p>');
  } else {
    localStorage.setItem( name, old + '<p>' + data + '</p>');
  }
}

function store() {

  for (let i = 0; i < imgarray.length; i++){
    let img = imgarray[i].replace(/.[^/.]+$/, "");
    let name = document.getElementById(`name${img}`).value;
    let comment = document.getElementById(`comment${img}`).value;
    appendToStorage(`comment${img}`, name + '  ' + comment); 
  }
}

var likes = 0;




for (let i = 0; i < imgarray.length; i++) {
  let img = imgarray[i].replace(/.[^/.]+$/, "");
  document.getElementById(`allComments${img}`).innerHTML += `<span>${localStorage.getItem(`comment${img}`)}</span>`;
  
}


const likesBtn = [...document.querySelectorAll('.likeBTN')];
const likesCnt = new Array(likesBtn.length);

likesBtn.forEach((el, i) => {
  likesCnt[i] = localStorage.getItem(`${likesBtn[i].id}`);;
  el.addEventListener('click', function () {
     el.textContent = ++likesCnt[i];
    localStorage.setItem(`${likesBtn[i].id}`, likesCnt[i]);
  } 
   
  );
});