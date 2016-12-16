(function() {
  var toggle = document.getElementById('toggle'),
    markdown = document.getElementsByClassName('markdown-body')[0]
  
  getReadme(toggleReadme);
  toggle.onclick = toggleReadme;
   
  function toggleReadme () {
    var showMarkdown = markdown.dataset.show === 'true' || markdown.dataset.show === undefined;
    
    if (showMarkdown) {
      var markdownChildren = Array.prototype.slice.call(markdown.childNodes);
        
      markdown.style.height = getChildrenHeight(markdownChildren) + 'px';
      markdown.classList.add('show');
      toggle.innerText = 'Hide Info';
    } else {
      markdown.style.height = 0;
      markdown.classList.remove('show');
      toggle.innerText = 'Show Info';
    }
    
    markdown.dataset.show = !showMarkdown;
  };
  
  function getChildrenHeight(markdownChildren) {
    return markdownChildren.map(function(child) {
        return child.clientHeight;
      })
      .filter(function(height) {
        return height !== undefined;
      })
      .reduce(function(previous, next) {
        return previous + next;
      }, 0);
  }
  
  function getReadme(callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            markdown.innerHTML = xmlHttp.responseText
            callback();
          }
      }
      xmlHttp.open("GET", 'README.html', true); // true for asynchronous 
      xmlHttp.send(null);
  }
}());