var AA;
if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemPineNeedles"&&player.getItemCount("jinshucraft:itemPineNeedles",0)>=8)
  {AA=0;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemCocoaLeaves"&&player.getItemCount("jinshucraft:itemCocoaLeaves",0)>=4)
  {AA=1;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemWillowTwig"&&player.getItemCount("jinshucraft:itemWillowTwig",0)>=6)
  {AA=2;}
else if(player.getItemName(player.getCurrentSlot())=="minecraft:sapling"&&player.getItemMetadata(player.getCurrentSlot())==0&&player.getItemStackSize(player.getCurrentSlot())==4)
  {AA=10;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:PineTree"&&player.getItemStackSize(player.getCurrentSlot())==3)
  {AA=11;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:CocoaTree"&&player.getItemStackSize(player.getCurrentSlot())==3)
  {AA=12;}
else if(player.getItemName(player.getCurrentSlot())=="BiomesOPlenty:colorizedSaplings"&&player.getItemMetadata(player.getCurrentSlot())==2&&player.getItemStackSize(player.getCurrentSlot())==3)
  {AA=13;}
else if(player.getItemName(player.getCurrentSlot())=="BiomesOPlenty:colorizedSaplings"&&player.getItemMetadata(player.getCurrentSlot())==4&&player.getItemStackSize(player.getCurrentSlot())==3)
  {AA=14;}
else if(player.getItemName(player.getCurrentSlot())=="minefantasy2:ironbark_sapling"&&player.getItemStackSize(player.getCurrentSlot())==2)
  {AA=15;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemShoot"&&player.getItemMetadata(player.getCurrentSlot())==0&&player.getItemCount("jinshucraft:itemShoot",0)>=6)
  {AA=20;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemShoot"&&player.getItemMetadata(player.getCurrentSlot())==1&&player.getItemCount("jinshucraft:itemShoot",1)>=5)
  {AA=21;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemShoot"&&player.getItemMetadata(player.getCurrentSlot())==2&&player.getItemCount("jinshucraft:itemShoot",2)>=4)
  {AA=22;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemShoot"&&player.getItemMetadata(player.getCurrentSlot())==3&&player.getItemCount("jinshucraft:itemShoot",3)>=4)
  {AA=23;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemShoot"&&player.getItemMetadata(player.getCurrentSlot())==4&&player.getItemCount("jinshucraft:itemShoot",4)>=4)
  {AA=24;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemShoot"&&player.getItemMetadata(player.getCurrentSlot())==5&&player.getItemCount("jinshucraft:itemShoot",5)>=3)
  {AA=25;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemPineCone"&&player.getItemCount("jinshucraft:itemPineCone",0)>=6)
  {AA=30;}
else if(player.getItemName(player.getCurrentSlot())=="minecraft:dye"&&player.getItemMetadata(player.getCurrentSlot())==3&&player.getItemCount("minecraft:dye",3)>=6)
  {AA=31;}
switch (AA)
{case 0: player.remove("jinshucraft:itemPineNeedles",8,0);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",0);break;
 case 1: player.remove("jinshucraft:itemCocoaLeaves",4,0);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",1);break;
 case 2: player.remove("jinshucraft:itemWillowTwig",6,0);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",6);break;
 
 case 10: player.remove("minecraft:sapling",4,0);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",2);break;
 case 11: player.remove("jinshucraft:PineTree",3,0);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",2);break;
 case 12: player.remove("jinshucraft:CocoaTree",3,0);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",2);break;
 case 13: player.remove("BiomesOPlenty:colorizedSaplings",3,2);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",2);break;
 case 14: player.remove("BiomesOPlenty:colorizedSaplings",3,4);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",2);break;
 case 15: player.remove("minefantasy2:ironbark_sapling",2,0);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",2);break;
 
 case 20: player.remove("jinshucraft:itemShoot",6,0);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",3);break;
 case 21: player.remove("jinshucraft:itemShoot",5,1);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",3);break;
 case 22: player.remove("jinshucraft:itemShoot",4,2);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",3);break;
 case 23: player.remove("jinshucraft:itemShoot",4,3);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",3);break;
 case 24: player.remove("jinshucraft:itemShoot",4,4);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",3);break;
 case 25: player.remove("jinshucraft:itemShoot",3,5);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",3);break;
	
 case 30: player.remove("jinshucraft:itemPineCone",6,0);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",4);break;
 case 31: player.remove("minecraft:dye",6,3);world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",5);break;
 default:break;
}