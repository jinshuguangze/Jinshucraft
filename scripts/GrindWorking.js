var a=player.getItemMetadata(player.getCurrentSlot());
if(a<4)
  {if(Math.random()<0.2){player.setSlot(player.getCurrentSlot(),"jinshucraft:itemSmallFlint",1,a+1);}}
else{player.setSlot(player.getCurrentSlot(),"minefantasy2:MF_Com_sharp_rock",1,0);};
if(Math.random()<0.02){world.setBlock(position,"yegamolchattels:grindstone");};