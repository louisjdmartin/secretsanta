function shuffle(array) {
  // Thank you StackOverflow :D
  for (i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function checkNoConflict(l1, l2){
  // It checks if there is no elements placed in same position in both lists.
  if(l1.length != l2.length) return false;
  for(i = 0; i<l1.length; i++){
    if(l1[i] == l2[i]){
      return false;
    }
  }
  return true;
}

function generateSantas(){
  var santas = $('#listOfSantas').val().split("\n");
  var receiver = $('#listOfSantas').val().split("\n");

  // remove last blank line
  santas.pop()
  receiver.pop();

  // Check if nobody send gift to himself
  // TODO: prevent infinite loop
  while(checkNoConflict(santas,receiver) == false){
    shuffle(receiver)
  }

  displaySantas(santas,receiver);
  return receiver
}

function displaySantas(santas, receiver){
  html = "";
  $('#createSanta').hide();
  for(i = 0; i<santas.length; i++){
    // Each line look like "name mail@domain.tld"
    a = santas[i].split(" ")
    b = receiver[i].split(" ")
    santa = a[0]
    santaMail = a[1]
    receiverName=b[0]

    // TODO: I think it can be cleaner than this ugly html code
    html += "<a class='santa' href='mailto:"+santaMail+"?subject=Le père Noel Secret!&body=Bonjour "+santa+". Pour Noël tu devras offrir un cadeau à "+receiverName+".'>"+santas[i]+"</a>"
  }
  $('#showSanta').html(html);
}

function addSanta(){
  santa = prompt("Nom du père Noel")
  mail  = prompt("Email du père Noel")
  $('#listOfSantas').append(santa + " " + mail + "\n")
  // TODO: some DESIGN, but i'm not a designer.
  $('#santaForm').append("<br />" + santa + " " + mail)
  if($('#listOfSantas').val().split("\n").length>2)$('#send').show()
}
