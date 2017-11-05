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
    createjs.Ticker.setFPS(15);
    createjs.Ticker.addEventListener("tick",tick);

}
function tick(e) {
    var num=stage.getNumChildren();
    if (num<100)
    {
        var s=sprite.clone();
        s.x=Math.random()*1800;
        s.y=Math.random()*1000;
        s.scaleX=s.scaleY=Math.random();
        s.alpha=Math.random();
        stage.addChild(s);
    }
    for (var i=num-1;i>=0;i--)
    {
        var s=stage.getChildAt(i);
        if (s.x>1800 || s.y>1000)
        {
            stage.removeChildAt(i);
        }
        else
        {
            s.x+=Math.random()*2;
            s.y+=Math.random()*1;
            s.alpha=Math.random();
        }
    }
    stage.update(e);

}
