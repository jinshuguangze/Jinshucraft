var AA;
var BB;
if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemPineNeedles"&&player.getItemCount("jinshucraft:itemPineNeedles",0)>=8)
	{AA=0;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemCocoaLeaves"&&player.getItemCount("jinshucraft:itemCocoaLeaves",0)>=4)
	{AA=1;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemWillowTwig"&&player.getItemCount("jinshucraft:itemWillowTwig",0)>=6)
	{AA=2;}

else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemWood"&&player.getItemMetadata(player.getCurrentSlot())==1&&player.getItemCount("jinshucraft:itemWood",1)>=4)
	{AA=10;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemWood"&&player.getItemMetadata(player.getCurrentSlot())==2&&player.getItemCount("jinshucraft:itemWood",2)>=6)
	{AA=11;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemWood"&&player.getItemMetadata(player.getCurrentSlot())==3&&player.getItemCount("jinshucraft:itemWood",3)>=4)
	{AA=12;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemWood"&&player.getItemMetadata(player.getCurrentSlot())==4&&player.getItemCount("jinshucraft:itemWood",4)>=4)
	{AA=13;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemWood"&&player.getItemMetadata(player.getCurrentSlot())==5&&player.getItemCount("jinshucraft:itemWood",5)>=4)
	{AA=14;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemWood"&&player.getItemMetadata(player.getCurrentSlot())==6&&player.getItemCount("jinshucraft:itemWood",6)>=4)
	{AA=15;}

else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemBark"&&player.getItemMetadata(player.getCurrentSlot())==0&&player.getItemCount("jinshucraft:itemBark",0)>=2)
	{AA=20;}
else if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemBark"&&player.getItemMetadata(player.getCurrentSlot())==1&&player.getItemCount("jinshucraft:itemBark",1)>=2)
	{AA=21;}

else if(player.getItemName(player.getCurrentSlot())=="Forestry:mulch"&&player.getItemCount("Forestry:mulch",0)>=4)
	{AA=30;}

switch (AA)
{
 case 0: player.remove("jinshucraft:itemPineNeedles",8,0);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",0);world.setTileEntityStringData(position,"name","itemPineNeedles");break;
 case 1: player.remove("jinshucraft:itemCocoaLeaves",4,0);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",0);world.setTileEntityStringData(position,"name","itemCocoaLeaves");break;
 case 2: player.remove("jinshucraft:itemWillowTwig",6,0);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",0);world.setTileEntityStringData(position,"name","itemWillowTwig");break;
 
 case 10: player.remove("jinshucraft:itemWood",4,1);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",2);world.setTileEntityStringData(position,"name","itemWood1");break;
 case 11: player.remove("jinshucraft:itemWood",6,2);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",2);world.setTileEntityStringData(position,"name","itemWood2");break;
 case 12: player.remove("jinshucraft:itemWood",4,3);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",2);world.setTileEntityStringData(position,"name","itemWood3");break;
 case 13: player.remove("jinshucraft:itemWood",4,4);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",2);world.setTileEntityStringData(position,"name","itemWood4");break;
 case 14: player.remove("jinshucraft:itemWood",4,5);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",2);world.setTileEntityStringData(position,"name","itemWood5");break;
 case 15: player.remove("jinshucraft:itemWood",4,6);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",2);world.setTileEntityStringData(position,"name","itemWood6");break;
 
 case 20: player.remove("jinshucraft:itemBark",2,0);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",4);world.setTileEntityStringData(position,"name","itemBark0");break;
 case 21: player.remove("jinshucraft:itemBark",2,1);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",4);world.setTileEntityStringData(position,"name","itemBark1");break;
 
 case 30: player.remove("Forestry:mulch",4,0);world.setBlockAndMetadata(position,"jinshucraft:DryingBlock",6);break;
 
 default:break;
}
 
 