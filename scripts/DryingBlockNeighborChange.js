var AA,BB,CC,DD;
var k=0;
position.x--;
AA=world.getBlockName(position);
position.x+=2;
BB=world.getBlockName(position);
position.x--;position.z++;
CC=world.getBlockName(position);
position.z-=2;
DD=world.getBlockName(position);
position.z++;
if(AA=="jinshucraft:PineWood"&&AA==BB&&AA==CC&&AA==DD){
	k=1;
}
else if(AA=="jinshucraft:StoneDryingRoomWall"&&AA==BB&&AA==CC&&AA==DD){
	k=2;
}
if(k==0){
	mod.loadScript("DryingBlockClick.js");
}