var xx=position.x,yy=position.y;zz=position.z;
if(world.getBlockName(position)=="jinshucraft:PineWood"||(world.getBlockName(position)=="jinshucraft:StoneDryingRoomWall"&&world.getBlockMetadata(position)==0)){
	switch(side){
		case 2:
		if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemPineNeedles"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u677e\u9488\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemCocoaLeaves"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u53ef\u53ef\u6811\u53f6\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemWillowTwig"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u67f3\u6761\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==1){
			if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemDriedLeaves0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u677e\u9488\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemDriedLeaves1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u53ef\u53ef\u6811\u53f6\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemDriedLeaves2"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u67f3\u6761\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==2){
			if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemWood1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6a61\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemWood2"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u677e\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemWood3"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u53ef\u53ef\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemWood4"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u68d5\u6988\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemWood5"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u67f3\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemWood6"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u94c1\u76ae\u6728\u6728\u5757\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==3){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u6728\u5757\u5806");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==4){
			if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemBark0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u677e\u6811\u6811\u76ae\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemBark1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u68d5\u6988\u6811\u6811\u76ae\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==5){
			if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemDriedBark0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u5e72\u67af\u677e\u6811\u6811\u76ae\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz+1,"name")=="itemDriedBark1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u5e72\u67af\u68d5\u6988\u6811\u6811\u76ae\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==6){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u8150\u6b96\u8d28\u5806");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="Forestry:soil"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u8150\u6b96\u571f");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="Forestry:soil"&&world.getBlockMetadata(xx,yy,zz+1)==1){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6cbc\u6cfd\u6ce5");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz+1)==4){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6de4\u6ce5");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6ce5\u5df4");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u80a5\u6c83\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="minecraft:dirt"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u71e5\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u786c\u5316\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz+1)==2){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6c99\u8d28\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u7c97\u6c99");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="minecraft:sand"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6c99\u5b50");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx,yy,zz+1)==1){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6d41\u6c99");
		}
		else if(world.getBlockName(xx,yy,zz+1)=="minecraft:air"){
			player.sendMessage("\u6b64\u5904\u6ca1\u6709\u98ce\u5e72\u7684\u65b9\u5757");
		}
		player.damageItem(player.getCurrentSlot(),1);
		break;

		case 3:
		if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==0){
			if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemPineNeedles"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u677e\u9488\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemCocoaLeaves"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u53ef\u53ef\u6811\u53f6\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemWillowTwig"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u67f3\u6761\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==1){
			if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemDriedLeaves0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u677e\u9488\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemDriedLeaves1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u53ef\u53ef\u6811\u53f6\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemDriedLeaves2"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u67f3\u6761\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==2){
			if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemWood1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6a61\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemWood2"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u677e\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemWood3"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u53ef\u53ef\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemWood4"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u68d5\u6988\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemWood5"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u67f3\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemWood6"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u94c1\u76ae\u6728\u6728\u5757\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==3){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u6728\u5757\u5806");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==4){
			if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemBark0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u677e\u6811\u6811\u76ae\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemBark1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u68d5\u6988\u6811\u6811\u76ae\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==5){
			if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemDriedBark0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u5e72\u67af\u677e\u6811\u6811\u76ae\u5806");
			}
			else if(world.getTileEntityStringData(xx,yy,zz-1,"name")=="itemDriedBark1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u5e72\u67af\u68d5\u6988\u6811\u6811\u76ae\u5806");
			}
		}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==6){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u8150\u6b96\u8d28\u5806");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="Forestry:soil"&&world.getBlockMetadata(xx,yy,zz-1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u8150\u6b96\u571f");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="Forestry:soil"&&world.getBlockMetadata(xx,yy,zz-1)==1){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6cbc\u6cfd\u6ce5");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz-1)==4){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6de4\u6ce5");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx,yy,zz-1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6ce5\u5df4");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz-1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u80a5\u6c83\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="minecraft:dirt"&&world.getBlockMetadata(xx,yy,zz-1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(xx,yy,zz-1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u71e5\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(xx,yy,zz-1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u786c\u5316\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz-1)==2){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6c99\u8d28\u6ce5\u571f");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(xx,yy,zz-1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u7c97\u6c99");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="minecraft:sand"&&world.getBlockMetadata(xx,yy,zz-1)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6c99\u5b50");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx,yy,zz-1)==1){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6d41\u6c99");
		}
		else if(world.getBlockName(xx,yy,zz-1)=="minecraft:air"){
			player.sendMessage("\u6b64\u5904\u6ca1\u6709\u98ce\u5e72\u7684\u65b9\u5757");
		}
		player.damageItem(player.getCurrentSlot(),1);
		break;		

		case 4:
		if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==0){
			if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemPineNeedles"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u677e\u9488\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemCocoaLeaves"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u53ef\u53ef\u6811\u53f6\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemWillowTwig"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u67f3\u6761\u5806");
			}
		}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==1){
			if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemDriedLeaves0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u677e\u9488\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemDriedLeaves1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u53ef\u53ef\u6811\u53f6\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemDriedLeaves2"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u67f3\u6761\u5806");
			}
		}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==2){
			if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemWood1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6a61\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemWood2"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u677e\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemWood3"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u53ef\u53ef\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemWood4"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u68d5\u6988\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemWood5"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u67f3\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemWood6"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u94c1\u76ae\u6728\u6728\u5757\u5806");
			}
		}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==3){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u6728\u5757\u5806");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==4){
			if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemBark0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u677e\u6811\u6811\u76ae\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemBark1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u68d5\u6988\u6811\u6811\u76ae\u5806");
			}
		}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==5){
			if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemDriedBark0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u5e72\u67af\u677e\u6811\u6811\u76ae\u5806");
			}
			else if(world.getTileEntityStringData(xx+1,yy,zz,"name")=="itemDriedBark1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u5e72\u67af\u68d5\u6988\u6811\u6811\u76ae\u5806");
			}
		}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==6){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u8150\u6b96\u8d28\u5806");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="Forestry:soil"&&world.getBlockMetadata(xx+1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u8150\u6b96\u571f");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="Forestry:soil"&&world.getBlockMetadata(xx+1,yy,zz)==1){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6cbc\u6cfd\u6ce5");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx+1,yy,zz)==4){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6de4\u6ce5");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx+1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6ce5\u5df4");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx+1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u80a5\u6c83\u6ce5\u571f");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="minecraft:dirt"&&world.getBlockMetadata(xx+1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6ce5\u571f");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(xx+1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u71e5\u6ce5\u571f");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(xx+1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u786c\u5316\u6ce5\u571f");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx+1,yy,zz)==2){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6c99\u8d28\u6ce5\u571f");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(xx+1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u7c97\u6c99");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="minecraft:sand"&&world.getBlockMetadata(xx+1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6c99\u5b50");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx+1,yy,zz)==1){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6d41\u6c99");
		}
		else if(world.getBlockName(xx+1,yy,zz)=="minecraft:air"){
			player.sendMessage("\u6b64\u5904\u6ca1\u6709\u98ce\u5e72\u7684\u65b9\u5757");
		}
		player.damageItem(player.getCurrentSlot(),1);
		break;		
		
		case 5:
		if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==0){
			if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemPineNeedles"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u677e\u9488\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemCocoaLeaves"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u53ef\u53ef\u6811\u53f6\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemWillowTwig"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u67f3\u6761\u5806");
			}
		}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==1){
			if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemDriedLeaves0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u677e\u9488\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemDriedLeaves1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u53ef\u53ef\u6811\u53f6\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemDriedLeaves2"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u67f3\u6761\u5806");
			}
		}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==2){
			if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemWood1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6a61\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemWood2"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u677e\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemWood3"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u53ef\u53ef\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemWood4"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u68d5\u6988\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemWood5"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u67f3\u6728\u6728\u5757\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemWood6"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u94c1\u76ae\u6728\u6728\u5757\u5806");
			}
		}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==3){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u67af\u6728\u5757\u5806");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==4){
			if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemBark0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u677e\u6811\u6811\u76ae\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemBark1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u68d5\u6988\u6811\u6811\u76ae\u5806");
			}
		}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==5){
			if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemDriedBark0"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u5e72\u67af\u677e\u6811\u6811\u76ae\u5806");
			}
			else if(world.getTileEntityStringData(xx-1,yy,zz,"name")=="itemDriedBark1"){
				player.sendMessage("\u6b64\u5904\u98ce\u5e72\u65b9\u5757\u4e3a\u5e72\u67af\u68d5\u6988\u6811\u6811\u76ae\u5806");
			}
		}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==6){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u8150\u6b96\u8d28\u5806");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="Forestry:soil"&&world.getBlockMetadata(xx-1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u8150\u6b96\u571f");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="Forestry:soil"&&world.getBlockMetadata(xx-1,yy,zz)==1){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6cbc\u6cfd\u6ce5");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx-1,yy,zz)==4){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6de4\u6ce5");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx-1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6ce5\u5df4");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx-1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u80a5\u6c83\u6ce5\u571f");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="minecraft:dirt"&&world.getBlockMetadata(xx-1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6ce5\u571f");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(xx-1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u5e72\u71e5\u6ce5\u571f");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(xx-1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u786c\u5316\u6ce5\u571f");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx-1,yy,zz)==2){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6c99\u8d28\u6ce5\u571f");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(xx-1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u7c97\u6c99");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="minecraft:sand"&&world.getBlockMetadata(xx-1,yy,zz)==0){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6c99\u5b50");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx-1,yy,zz)==1){
			player.sendMessage("\u6b64\u5904\u98ce\u5e72\u7684\u65b9\u5757\u4e3a\u6d41\u6c99");
		}
		else if(world.getBlockName(xx-1,yy,zz)=="minecraft:air"){
			player.sendMessage("\u6b64\u5904\u6ca1\u6709\u98ce\u5e72\u7684\u65b9\u5757");
		}
		player.damageItem(player.getCurrentSlot(),1);
		break;		
	}
}
if(player.getItemName(player.getCurrentSlot())!="jinshucraft:itemWoodenExplorationDrill"){
	if(world.getBlockName(position)=="jinshucraft:StoneDryingRoomWall"&&world.getBlockMetadata(position)==0){
		world.setBlockMetadata(position,1);
		world.setTileEntityStringData(position,"Time",world.getTime());
	}
	else if(world.getBlockName(position)=="jinshucraft:StoneDryingRoomWall"&&world.getBlockMetadata(position)==1){
		mod.loadScript("ExplorationDrillOutput.js");
	}
}