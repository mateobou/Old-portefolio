const contact = document.getElementById('contact');
const bandeau = document.getElementById('bandeau');


  
function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function() {
      /* clipboard successfully set */
    }, function() {
    });
  }
  
contact.addEventListener('click',()=>{
    bandeau.className = "bandeau";
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            updateClipboard("m_boukhobza1@etu-webschoolfactory.fr");
        }
      });
    setTimeout(()=>{
        bandeau.className = "bandeau none";
    },3000)
})