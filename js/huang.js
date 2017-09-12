/**
 * Created by Administrator on 2017/9/8.
 */
var canvas;
var stage;
var flag=0;
var img=new Image();
var sprite;
var i=0;
window.onload=function () {
    canvas=document.getElementById("canvas");
    stage=new createjs.Stage(canvas);
    var data={
        images:["2.png"],
        frames:{width:100,height:100,regX:10,regY:10}
    }
    sprite  = new createjs.Sprite(new createjs.SpriteSheet(data));
    createjs.Ticker.setFPS(10);
    createjs.Ticker.addEventListener("tick",tick);

}
function tick(e) {
    var s=sprite.clone();
    s.x=Math.random()*1800;
    s.y=Math.random()*1000;
    s.scaleX=s.scaleY=Math.random();
    s.alpha=Math.random();
    stage.addChild(s);
    if (stage.getNumChildren()>50)
    {
        stage.removeAllChildren();
    }
    stage.update(e);

}
