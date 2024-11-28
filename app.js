// let canvas=document.querySelector('canvas')
// let ctx=canvas.getContext('2d')  //brush

// let cellSize=50;
// let boardWidth=1200;
// let boardheight=800;

// let snakeCell=[[0,0],[50,0]]

// ////////draw() draw snake with help of snakecell array co-ordinates
// function draw(){
//     ctx.clearRect(0,0,1200,800)
//     for(let cell of snakeCell){
//         ctx.fillStyle="red"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize)

//     }

// }

// ///update( to update the new co-ordinate of snake)
// function update(){
//     let headX=snakeCell[snakeCell.length-1][0]
//     let headY=snakeCell[snakeCell.length-1][1]

//     let newHeadX=headX+cellSize;
//     let newHeadY=headY;
//     snakeCell.push([newHeadX,newHeadY])
//     snakeCell.shift()
// }

// let id=setInterval(()=>{
  
//     update();
//     draw()
   
// },200)

// // ///part 2 movement of snake according to arrow key dirction in part 1 snake move in right direction only.

// let direction="right"

// ////The document.addEventListener method is used in JavaScript to listen for events on the entire document. This is commonly used for capturing user interactions and other events at the global level rather than on a specific element. Here are some scenarios where document.addEventListener is commonly used:

// document.addEventListener('keydown',(event)=>{
//    if(event.key==="ArrowRight"){
//     direction="right"
//    }else if(event.key==="ArrowLeft"){
//     direction='left'
//    }else if(event.key==="ArrowUp"){
//     direction="upward"
//    }else if(event.key==="ArrowDown"){
//      direction="downward"
//    }
   
// })

// function update(){
//     let headX=snakeCell[snakeCell.length-1][0]
//     let headY=snakeCell[snakeCell.length-1][1]

//     let newHeadX
//     let newHeadY
//     if(direction==="right"){
//         newHeadX=headX+cellSize
//         newHeadY=headY
//     }else if(direction==="left"){
//         newHeadX=headX-cellSize
//         newHeadY=headY
//     }else if(direction==="upward"){
//         newHeadX=headX
//         newHeadY=headY-cellSize
//     }else if(direction="downward"){
//         newHeadX=headX
//         newHeadY=headY+cellSize
//     }


//     snakeCell.push([newHeadX,newHeadY])
//     snakeCell.shift()
// }


//////////////part 3 gameOver when snake touch boundary

// let direction="right"

// let gameOver=false

// document.addEventListener('keydown',(event)=>{
//     if(event.key==="ArrowRight"){
//      direction="right"
//     }else if(event.key==="ArrowLeft"){
//      direction='left'
//     }else if(event.key==="ArrowUp"){
//      direction="upward"
//     }else if(event.key==="ArrowDown"){
//       direction="downward"
//     }
    
//  })
 

// function update(){
//     let headX=snakeCell[snakeCell.length-1][0]
//     let headY=snakeCell[snakeCell.length-1][1]

//     let newHeadX
//     let newHeadY
//     if(direction==="right"){
//         newHeadX=headX+cellSize
//         newHeadY=headY
//         if(newHeadX===boardWidth){
//             gameOver=true
//         }
//     }else if(direction==="left"){
//         newHeadX=headX-cellSize
//         newHeadY=headY
//         if(newHeadX<0){
//             gameOver=true
//         }
//     }else if(direction==="upward"){
//         newHeadX=headX
//         newHeadY=headY-cellSize
//         if(newHeadY<0){
//             gameOver=true

//         }
//     }else if(direction="downward"){
//         newHeadX=headX
//         newHeadY=headY+cellSize
//         if(newHeadY===boardheight){
//             gameOver=true
//         }
//     }


//     snakeCell.push([newHeadX,newHeadY])
//     snakeCell.shift()
// }

// function draw(){
//     if(gameOver===true){
//         clearInterval(id) ///to stop setinterval if gameover is true
//         return
//     }
//     ctx.clearRect(0,0,1200,800)
//     for(let cell of snakeCell){
//         ctx.fillStyle="red"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize)

//     }

// }

// let id=setInterval(()=>{
    
//     draw()
//     update();
    
   
   
// },200)


// ///part4 make food pointer for snake
// let foodCells=generateRandomFood()

// function generateRandomFood(){
//     return [
//         Math.round(Math.random()*(boardWidth-cellSize)/cellSize)*cellSize,
//         Math.round(Math.random()*(boardheight-cellSize)/cellSize)*cellSize
//         ]
// }

// function draw(){
//     if(gameOver===true){
//         clearInterval(id) ///to stop setinterval if gameover is true
//         return
//     }
//     ctx.clearRect(0,0,1200,800)
//     for(let cell of snakeCell){
//         ctx.fillStyle="red"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize)

//     }

//     ctx.fillStyle="orange"
//     ctx.fillRect(foodCells[0],foodCells[1],cellSize,cellSize) //////////draw foodcells

// }

// let id=setInterval(()=>{
    
//     draw()
//     update();
    
   
   
// },200)


// ////////////// part5 increase snake length if snake eat food means if snake headX and heady is equal to foodCells[0],foodCells[1]
// function update(){
//     let headX=snakeCell[snakeCell.length-1][0]
//     let headY=snakeCell[snakeCell.length-1][1]

//     let newHeadX
//     let newHeadY
//     if(direction==="right"){
//         newHeadX=headX+cellSize
//         newHeadY=headY
//         if(newHeadX===boardWidth){
//             gameOver=true
//         }
//     }else if(direction==="left"){
//         newHeadX=headX-cellSize
//         newHeadY=headY
//         if(newHeadX<0){
//             gameOver=true
//         }
//     }else if(direction==="upward"){
//         newHeadX=headX
//         newHeadY=headY-cellSize
//         if(newHeadY<0){
//             gameOver=true

//         }
//     }else if(direction="downward"){
//         newHeadX=headX
//         newHeadY=headY+cellSize
//         if(newHeadY===boardheight){
//             gameOver=true
//         }
//     }


//     snakeCell.push([newHeadX,newHeadY])
    
//     //////////if snake head cordinate and foodcells co-ordinate same then previous snake cell don't remove meanwhile snake size increase by one cell
//     if(newHeadX===foodCells[0] && newHeadY===foodCells[1]){
//         foodCells=generateRandomFood()


//     }else{
//         snakeCell.shift()///to remove previous cell
//     }
    
// }


// ///////part6  draw game score score  and game over
// let score=0  //score

// function update(){
//     let headX=snakeCell[snakeCell.length-1][0]
//     let headY=snakeCell[snakeCell.length-1][1]

//     let newHeadX
//     let newHeadY
//     if(direction==="right"){
//         newHeadX=headX+cellSize
//         newHeadY=headY
//         if(newHeadX===boardWidth){
//             gameOver=true
//         }
//     }else if(direction==="left"){
//         newHeadX=headX-cellSize
//         newHeadY=headY
//         if(newHeadX<0){
//             gameOver=true
//         }
//     }else if(direction==="upward"){
//         newHeadX=headX
//         newHeadY=headY-cellSize
//         if(newHeadY<0){
//             gameOver=true

//         }
//     }else if(direction="downward"){
//         newHeadX=headX
//         newHeadY=headY+cellSize
//         if(newHeadY===boardheight){
//             gameOver=true
//         }
//     }


//     snakeCell.push([newHeadX,newHeadY])
    
//     //////////if snake head cordinate and foodcells co-ordinate same then previous snake cell don't remove meanwhile snake size increase by one cell
//     if(newHeadX===foodCells[0] && newHeadY===foodCells[1]){
//         foodCells=generateRandomFood()
//         score +=1


//     }else{
//         snakeCell.shift()///to remove previous cell
//     }
    
// // }

// function draw(){
//     if(gameOver===true){

//         ctx.font="60px sans-serif"
//         ctx.fillStyle="red"
//         ctx.fillText("Game over !!!",430,400)  ///draw game over

//         clearInterval(id) ///to stop setinterval if gameover is true
//         return
//     }
//     ctx.clearRect(0,0,1200,800)//eraser erase previous blocks
//     for(let cell of snakeCell){
//         ctx.fillStyle="brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize)  //draw snake
//     }

//     ctx.fillStyle="orange"
//     ctx.fillRect(foodCells[0],foodCells[1],cellSize,cellSize) //////////draw foodcells
    
//     ctx.font="30px monospace"
//     ctx.fillStyle="green"
//     ctx.fillText(`score:${score}`,20,20)   ///draw score

// }

// let id=setInterval(()=>{
    
//     draw()
//     update();
    
   
   
// },200)


// // //////////part7 if snake bite itself then game over

// function ex(newHeadX,newHeadY){ 
//     for(let item of snakeCell){
//         if(newHeadX===item[0] && newHeadY===item[1]){
//             return true
//         }else{
//             return false
//         }
//     }
   
// }

// function update(){
//     let headX=snakeCell[snakeCell.length-1][0]
//     let headY=snakeCell[snakeCell.length-1][1]

//     let newHeadX
//     let newHeadY
//     if(direction==="right"){
//         newHeadX=headX+cellSize
//         newHeadY=headY
//         if(newHeadX===boardWidth || ex(newHeadX,newHeadY)){  //to check ex() function condition or boundary condition if any codition true then game over
//                gameOver=true
//         }
//     }else if(direction==="left"){
//         newHeadX=headX-cellSize
//         newHeadY=headY
//         if(newHeadX<0  || ex(newHeadX,newHeadY)){
//             gameOver=true
//         }
//     }else if(direction==="upward"){
//         newHeadX=headX
//         newHeadY=headY-cellSize
//         if(newHeadY<0 || ex(newHeadX,newHeadY)){
//             gameOver=true

//         }
//     }else if(direction="downward"){
//         newHeadX=headX
//         newHeadY=headY+cellSize
//         if(newHeadY===boardheight || ex(newHeadX,newHeadY)){
//             gameOver=true
//         }
//     }


//     snakeCell.push([newHeadX,newHeadY])
    
//     //////////if snake head cordinate and foodcells co-ordinate same then previous snake cell don't remove meanwhile snake size increase by one cell
//     if(newHeadX===foodCells[0] && newHeadY===foodCells[1]){
//         foodCells=generateRandomFood()
//         score +=1


//     }else{
//         snakeCell.shift()///to remove previous cell
//     }
    
// }

///////////////////////////////////////////////////////////////////////////

// function ex(newHeadX,newHeadY){   ////function to check wether snake cut itself or not and catch 2 variable newHeadX,newHeadY from update fn()
//                                   //// we can catch newHeadX,newHeadY from update because we re calling ex() within update() function
//         for(let item of snakeCell){
//         if(newHeadX===item[0] && newHeadY===item[1]){
//             return true
//         }else{
//             return false
//         }
//     }
   
// }


/////////////////////////////////////////Final full code:

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;
let boardWidth = 1200;
let boardHeight = 800;
let snakeCells = [[0,0] , [50,0]] ;
let direction = 'right';
let gameOver = false;

let foodCells = generateRandomFood();
let score = 0;

document.addEventListener('keydown' , (event)=>{
    if(event.key === 'ArrowUp'){direction = "up"}
    else if(event.key === 'ArrowDown'){direction = "down"}
    else if(event.key === 'ArrowLeft'){direction = "left"}
    else if(event.key === 'ArrowRight'){direction = "right"}
})

function draw(){
    if(gameOver === true){
        clearInterval(id);
        ctx.fillStyle = "red"
        ctx.font = "50px sans-serif"
        ctx.fillText('GAME OVER !!' , 430,400)
        return;
    }
    // eraser
    ctx.clearRect(0,0,1200,800)
    // draw
    for(let cell of snakeCells){
        ctx.fillStyle = "brown"
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
        ctx.strokeStyle = "golden"
        ctx.strokeRect(cell[0],cell[1],cellSize,cellSize )
    }
    // draw food
    ctx.fillStyle = "orange"
    ctx.fillRect(foodCells[0] , foodCells[1] , cellSize , cellSize)
    // draw score
    ctx.fillStyle = "white"
    ctx.font = "20px monospace"
    ctx.fillText(`Score: ${score}` , 20,30)
}

function update(){ 
    let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
    let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
    let newHeadX;
    let newHeadY;
    if(direction ==='up'){
        newHeadX = headX;
        newHeadY = headY - cellSize;
        if(newHeadY < 0 || ex(newHeadX , newHeadY)){gameOver = true}
    }
    else if(direction ==='down'){
        newHeadX = headX;
        newHeadY = headY + cellSize;
        if(newHeadY === boardHeight || ex(newHeadX , newHeadY)){gameOver=true}
    }
    else if(direction ==='left'){
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if(newHeadX <0 || ex(newHeadX , newHeadY)){gameOver = true}
    }
    else if(direction ==='right'){
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX === boardWidth || ex(newHeadX , newHeadY)){gameOver=true}
    }
    snakeCells.push([newHeadX , newHeadY]);
    if(newHeadX === foodCells[0] && newHeadY === foodCells[1]){
        foodCells = generateRandomFood()
        score+=1;
    }else{
        snakeCells.shift()
    }
}


function generateRandomFood(){
    return [
        Math.round(Math.random()*(boardWidth-cellSize)/cellSize)*cellSize ,  //x
        Math.round(Math.random()*(boardHeight-cellSize)/cellSize)*cellSize   //y
    ]
}

function ex(newHeadX , newHeadY){
    for(let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY){
            return true;
        }
    }
    return false;
}

let id = setInterval(function(){
    update()
    draw()
} , 150)






