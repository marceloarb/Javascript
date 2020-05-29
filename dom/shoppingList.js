let input = document.getElementById('item');
    let btn = document.getElementById('btn-add');
    let list = document.getElementById('list');
    function  AddItem(){
      let inputValue = document.getElementById('item').value;
      console.log(inputValue);
      inputValue = "";
      let li = document.createElement('li');
      let span = document.createElement('span');
      let button = document.createElement('button');
      button.textContent = "Delete";
      span.textContent = document.getElementById('item').value;
      li.appendChild(span);
      li.appendChild(button);
      document.getElementById('list').appendChild(li);
      button.onclick = function(){
        li.remove();
      }
      document.getElementById('item').focus();
      document.getElementById('item').value = "";
      console.log(li);
    }