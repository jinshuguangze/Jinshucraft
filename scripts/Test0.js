var meta=player.getItemMetadata(player.getCurrentSlot());
switch (meta){
	case 0: var DictClassses=[];
			var i;
			DictClassses=mod.getOreDictClasses();
			mod.writeFile("oreDictionary.txt","");
			for(i=0;i<DictClassses.length;i++){
				mod.appendFile("oreDictionary.txt",DictClassses[i]+"\n");
			}
}