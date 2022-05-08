let yator = 366
let xator = 85
let colisao = false
let meuspontos = 0

function mostraator(){
  image(imagemdoator,xator,yator,30,30)
}

function movimentaator(){
  if(keyIsDown(UP_ARROW)){
     yator -= 3
  }
  if(keyIsDown(DOWN_ARROW)){
     yator += 3
  }
}
function verificarcolisao(){
   for(let i = 0; i < imagemcarros.length; i++){
     colisao = collideRectCircle(xcarro[i],ycarrofaixacarro[i],comprimentocarro,alturacarro,xator,yator,15)
     if(colisao){  
       voltaposicaoiniciala()
   
       if(meuspontos > 0){
        meuspontos -= 1
       }
     }
   }
}
function voltaposicaoiniciala(){
  yator = 366
}

function incluipontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,240,60))
  text(meuspontos, width / 5, 27)
}

function marcaponto(){
  if(yator < 15){
    meuspontos += 1
    voltaposicaoiniciala()
  }
} 
function atormaiorq366(){
  if( yator > 366){ 
    yator = 366
  }
}

