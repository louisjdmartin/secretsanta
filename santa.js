function shuffle(array) {
  for (i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function checkNoConflict(l1, l2){
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
    html += "<div class='santa' onclick='showReceiver(\""+santas[i]+"\",\""+receiver[i]+"\")'>"+santas[i]+"</div>"
  }
  $('#showSanta').html(html);
}


function showReceiver(s,r){
  alert(s + " tu dois offrir un cadeau à " + r);
}
