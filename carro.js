let xcarro = [400,400,400, 400, 400, 400]
let ycarrofaixacarro = [40, 99, 150, 210, 270, 318]
let velocidade = [2.0, 2.6, 3.2, 10, 3.3, 2,3]
let comprimentocarro = 50
let alturacarro = 40

function mostracarro(){
  for(let i = 0; i < imagemcarros.length; i++ ){
  image(imagemcarros[i],xcarro[i],ycarrofaixacarro[i],comprimentocarro,alturacarro) 
   
 }
}
function movimentacarro(){
  for(let i = 0; i < imagemcarros.length ; i++)
  xcarro[i] -= velocidade[i]
 
}
function voltaposicaoinicial(){
  for(let i = 0; i < imagemcarros.length; i++)
    if(xcarro[i] < -50){
      xcarro[i] = 400
    }
}
