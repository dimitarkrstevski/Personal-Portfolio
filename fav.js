const blogTitles = [...document.querySelectorAll('.blog-title')];
const searchBar = document.getElementById("search");
const blogs = [...document.querySelectorAll('.blog-box')];

function Search() {
 
  var input, filter,item, i, txtValue;

  input = document.getElementById("search");
  filter = input.value.toUpperCase();
 
  for (i = 0; i < blogTitles.length; i++) {
    item = blogs[i];
  
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    
      blogs[i].style.display = "";
    } else {
      blogs[i].style.display = "none";
    }
  }
}
