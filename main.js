var canbas=new fabric.Canvas('myCanvas');
blayerX=10;
blayerY=10;
blckImgWibth=30;
blckImgHeiht=30;
var blayerOdjet="";
var blckImadeOdjet="";
function blayerUbtate() {
   fabric.Image.fromURL("player.png",function(Img) {
    blayerOdjet=Img;
    blayerOdjet.scaleToWidth(150);
    blayerOdjet.scaleToHeight(140);
    blayerOdjet.set({top:blayerY,left:blayerX});
    canbas.add(blayerOdjet);
   });
}
function NiyuIbache(get_image) {
    fabric.Image.fromURL(get_image,function(Img) {
     blckImadeOdjet=Img;
     blckImadeOdjet.scaleToWidth(blckImgWibth);
     blckImadeOdjet.scaleToHeight(blckImgHeiht);
     blckImadeOdjet.set({top:blayerY,left:blayerX});
     canbas.add(blckImadeOdjet);
    });
 }
 window.addEventListener("keydown",byKeedoun);
 function byKeedoun(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=='80') {
       console.log("p and shift pressed together");
          blckImgWibth=blckImgWibth+10;
          blckImgHeiht=blckImgHeiht+10;
          document.getElementById("current_width").innerHTML=blckImgWibth;
          document.getElementById("current_height").innerHTML=blckImgHeiht;
    }
    if (e.shiftKey==true && keyPressed=='77') {
      console.log("m and shift pressed together");
         blckImgWibth=blckImgWibth-10;
         blckImgHeiht=blckImgHeiht-10;
         document.getElementById("current_width").innerHTML=blckImgWibth;
         document.getElementById("current_height").innerHTML=blckImgHeiht;
   }
   if (keyPressed=='38') {
      up();
      console.log("up");
   }
   if (keyPressed=='40') {
      down();
      console.log("down");
   }
   if (keyPressed=='37') {
      left();
      console.log("left");
   }
   if (keyPressed=='39') {
      right();
      console.log("right");
   }
   if (keyPressed=='87') {
      NiyuIbache('wall.jpg');
      console.log("w");
   }
   if (keyPressed=='65') {
      NiyuIbache('roof.jpg');
      console.log("a");
   }
   if (keyPressed=='67') {
      NiyuIbache('yellow_wall.png');
      console.log("c");
   }
   if (keyPressed=='68') {
      NiyuIbache('trunk.jpg');
      console.log("d");
   }
   if (keyPressed=='84') {
      NiyuIbache('unique.png');
      console.log("t");
   }
   if (keyPressed=='82') {
      NiyuIbache('light_green.png');
      console.log("r");
   }
   if (keyPressed=='83') {
      NiyuIbache('ground.png');
      console.log("s");
   }
   if (keyPressed=='85') {
      NiyuIbache('cloud.jpg');
      console.log("u");
   }
   if (keyPressed=='90') {
      NiyuIbache('dark_green.png');
      console.log("z");
   }
 }
 function up() {
    if (blayerY>=0) {
       blayerY=blayerY-blckImgHeiht;
       console.log("blck Img Height ="+blckImgHeiht);
       console.log("when up arrow key is pressed, x = "+ blayerX + ", y="+blayerY);
       canbas.remove(blayerOdjet);
       blayerUbtate();
    }
 }
 function down() {
   if (blayerY<=500) {
      blayerY=blayerY+blckImgHeiht;
      console.log("blck Img Height ="+blckImgHeiht);
      console.log("when down arrow key is pressed, x = "+ blayerX + ", y="+blayerY);
      canbas.remove(blayerOdjet);
      blayerUbtate();
   }
}
 function left() {
   if (blayerX>=0) {
      blayerX=blayerX-blckImgWibth;
      console.log("blck Img Width ="+blckImgWibth);
      console.log("when leftarrow key is pressed, x = "+ blayerX + ", y="+blayerY);
      canbas.remove(blayerOdjet);
      blayerUbtate();
   }
}
function right() {
   if (blayerX<=900) {
      blayerX=blayerX+blckImgWibth;
      console.log("blck Img Width ="+blckImgWibth);
      console.log("when right arrow key is pressed, x = "+ blayerX + ", y="+blayerY);
      canbas.remove(blayerOdjet);
      blayerUbtate();
   }
}