function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var target = document.querySelectorAll('ul.ranked-list li')
  for(let i=0; i<target.length; i++){
    target[i].innerHTML = parseInt(target[i].innerHTML) + n
  }
}

function deepestChild(){
  var grandNode = document.querySelector('div#grand-node');
  var child = grandNode.children[0];

  for(let i=0; child.children[i] !== undefined; i){
    child = child.children[0]
  }
  return child
}
