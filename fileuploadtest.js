document.getElementById('openFile').addEventListener("change", function() {
    var fr = new FileReader();
    fr.onload = function(){
        var lines = this.result.split('\n');
        for(var i = 0; i < lines.length; i++){
          var words = lines[i].split(" ");
          cy.add([
              {group: "nodes", data: {id: words[0], name: words[0], nodecolor: '#88cc88'}},
              {group: "nodes", data: {id: words[1], name: words[1], nodecolor: '#88cc88'}},
              {group: "edges", data: { id: "e0", source: words[0], target: words[1]}}
          ]);
        }
    }
    fr.readAsText(this.files[0]);

})
