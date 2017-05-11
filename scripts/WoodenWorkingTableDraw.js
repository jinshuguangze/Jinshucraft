renderer.drawColoredRect(guiX+23,guiY+69,world.getTileEntityFloatData(position,"Durability")*1.1,4,0xAADAA520+2*world.getTileEntityFloatData(position,"Durability"));
if(mouseX>=guiX+22&&mouseX<=guiX+75&&mouseY>=guiY+68&&mouseY<=guiY+74){
	renderer.drawString("\u8010\u4e45:\n"+world.getTileEntityFloatData(position,"Durability")+" / "+world.getTileEntityFloatData(position,"maxDurability"),mouseX+10,mouseY-20,0xFFFFFF);
	renderer.drawColoredRect(mouseX+5,mouseY-25,35,28,0x50000000);
}
