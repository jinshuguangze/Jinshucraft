/*var xx=Math.round(player.getPosX()-0.5);
var yy=player.getPosY()
var zz=Math.round(player.getPosZ()-0.5);
var HorizontalAngel=player.getHorizontalAngle();
var VerticalAngel=player.getVerticalAngle();

if(HorizontalAngel>=-45&&HorizontalAngel<45){
	zz+=2;
}
else if(HorizontalAngel>=45&&HorizontalAngel<135){
	xx-=2;
}
else if(HorizontalAngel>=135||HorizontalAngel<-135){
	zz-=2;
}
else if(HorizontalAngel>=-135&&HorizontalAngel<-45){
	xx+=2;
}

if(VerticalAngel>=80){
	xx=Math.round(player.getPosX()-0.5);
	zz=Math.round(player.getPosZ()-0.5);
	yy-=2;
}
else if(VerticalAngel>=74&&VerticalAngel<80){
	yy-=1;
}
else if(VerticalAngel>=53&&VerticalAngel<74){
	yy-=0;
}
else if(VerticalAngel<53||VerticalAngel>=-40){
	yy+=1;
}
else if(VerticalAngel>=-72&&VerticalAngel<-40){
	yy+=2;
}
else if(VerticalAngel>=-79&&VerticalAngel<-72){
	yy+=3;
}
else if(VerticalAngel<-79){
	xx=Math.round(player.getPosX()-0.5);
	zz=Math.round(player.getPosZ()-0.5);
	yy+=4;
}

if(world.getBlockName(xx,yy,zz)=="minecraft:air"){
	world.setBlock(xx,yy,zz,"jinshucraft:GodPowerGuiBlock");
	world.addToContainer(xx,yy,zz,"minecraft:stone",11,0);
	itemstack.setIntData("x",xx);
	itemstack.setIntData("y",yy);
	itemstack.setIntData("z",zz);
	itemstack.setStringData("state","OpenGui");
}
*/



