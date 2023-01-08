class Render {
  tagName;
  tagContent;
  tagText;

  constructor(tagNameInput, tagContentInput, tagTextInput){
    this.tagName = tagNameInput;
    this.tagContent = tagContentInput;
    this.tagText = tagTextInput;
  }
  printHTML(){
    let theDiv = document.getElementById('mainDiv');
    let newTextElement = document.createTextNode(Render(p, 'i like to move it move it'));
    theDiv.appendChild(newTextElement);
  }
  alertFunction(){
    let theDiv = document.getElementById('mainDiv');
    theDiv.addEventListener('click', ()=>{
      alert('Game Over!');
    });
  }
}
