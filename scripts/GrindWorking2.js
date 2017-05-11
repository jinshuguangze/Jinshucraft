var a,b,s;
var k=0;
a=world.getBlockName(position);
b=world.getBlockMetadata(position);
s=player.getItemMetadata(player.getCurrentSlot());
if(a=="BiomesOPlenty:driedDirt"&&b==0){k=0.2;}
else if(a=="BiomesOPlenty:hardDirt"&&b==0){k=0.3;}
else if(a=="BiomesOPlenty:newBopDirt"&&b==2){k=0.5;}
else if(a=="BiomesOPlenty:hardSand"&&b==0){k=0.4;}
else if(a=="minecraft:sand"){k=0.1;}
else if(a=="minecraft:gravel"){k=0.7;}
if(k>0)
  {if(Math.random()<0.2){world.setBlock(position,"minecraft:air")};
   if(s<4)
     {if(Math.random()<k){player.setSlot(player.getCurrentSlot(),"jinshucraft:itemSmallFlint",1,s+1);};}
   else{player.setSlot(player.getCurrentSlot(),"minefantasy2:MF_Com_sharp_rock",1,0);}}