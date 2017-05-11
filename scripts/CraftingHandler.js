var TechPointReaderINPUT,TechPointReaderOUTPUT,GamePathINPUT,GamePathOUTPUT;
var xx=player.getLookX();
var yy=player.getLookY();
var zz=player.getLookZ();
var Durability,S;

GamePathINPUT="/data/techPoint/"+player.getUsername()+".karma";
mod.loadScript("apiGamePath.js");
S=mod.readFile(GamePathOUTPUT);

if(world.getBlockName(xx,yy,zz)=="jinshucraft:WoodenWorkingTable"){
	TechPointReaderINPUT=[S,"Wooden","workingtable",0,0];//合成掉落随机物品
	mod.loadScript("apiTechPointReader.js");
	var LINE=TechPointReaderOUTPUT;
	
	TechPointReaderINPUT=[S,"Wooden","workingtable",0,1];//提高5倍掉落几率
	mod.loadScript("apiTechPointReader.js");
	var LINE_1=TechPointReaderOUTPUT;
	
	TechPointReaderINPUT=[S,"Wooden","workingtable",0,2];//掉落物改成合成物本身,大幅降低掉落几率
	mod.loadScript("apiTechPointReader.js");
	var LINE_2=TechPointReaderOUTPUT;
	
	if(LINE>0&&LINE_2==0){
		if(LINE_1==0){
			var Arraydata0=[0.05+0.02*LINE,0.35-0.03*LINE,0.65-0.02*LINE,0.85-0.15*LINE,0.95-0.01*LINE,0.99-0.005*LINE];
		}
		else{
			var Arraydata0=[0.25+0.02*LINE,0.35-0.03*LINE,0.65-0.02*LINE,0.85-0.15*LINE,0.95-0.01*LINE,0.99-0.005*LINE];
		}
		if(Math.random()<Arraydata0[0]){
			var R=Math.random();
			if(R<=Arraydata0[1]){
				world.spawnItem(xx,yy,zz,"minecraft:deadbush",1,0);
			}
			else if(R>Arraydata0[1]&&R<=Arraydata0[2]){
				world.spawnItem(xx,yy,zz,"minecraft:stick",1,0);
			}
			else if(R>Arraydata0[2]&&R<=Arraydata0[3]){
				world.spawnItem(xx,yy,zz,"jinshucraft:itemWood",1,parseInt(Math.round(1+2*Math.random())));
			}
			else if(R>Arraydata0[3]&&R<=Arraydata0[4]){
				var R1=Math.random();
				if(R1<=0.333){
					world.spawnItem(xx,yy,zz,"minecraft:log",1,0);
				}
				else if(R1>0.333&&R1<=0.667){
					world.spawnItem(xx,yy,zz,"jinshucraft:PineWood",1,0);
				}
				else if(R1>0.667){
					world.spawnItem(xx,yy,zz,"jinshucraft:CocoaWood",1,0);
				}
			}
			else if(R>Arraydata0[4]&&R<=Arraydata0[5]){
				world.spawnItem(xx,yy,zz,"jinshucraft:itemShoot",1,parseInt(Math.round(2*Math.random())));
			}
			else if(R>Arraydata0[5]){
				world.spawnItem(xx,yy,zz,"jinshucraft:itemShoot",1,parseInt(Math.round(2*Math.random())));
			}
		}
	}
	else if(LINE_1==0&&LINE_2>0){
		if(Math.random()<0.05){
			world.spawnItem(xx,yy,zz,itemstack.getItemName(),1,itemstack.getDamage());
		}
	}
	
	//耐久消耗
	var i,Durability,maxDurability,owner;
	var imax=4;
	
	TechPointReaderINPUT=[S,"Wooden","workingtable",2,0];//增加工作台耐久,GUI增加耐久度显示条,增加少量制作时间
	mod.loadScript("apiTechPointReader.js");
	var LINE2=TechPointReaderOUTPUT;
	
	TechPointReaderINPUT=[S,"Wooden","workingtable",2,2];//工作台不毁
	mod.loadScript("apiTechPointReader.js");
	var LINE2_1=TechPointReaderOUTPUT;
	
	if(Math.random()<1.0-LINE2*0.1){
		Durability=world.getTileEntityFloatData(xx,yy,zz,"Durability")-(1-LINE2_1);
	}
	else{
		Durability=world.getTileEntityFloatData(xx,yy,zz,"Durability");
	}
	
	maxDurability=world.getTileEntityFloatData(xx,yy,zz,"maxDurability");
	owner=world.getTileEntityStringData(xx,yy,zz,"owner");
	
	for(i=imax;i>0;i--){//四次循环
		if(Durability==maxDurability*((i-1)/imax)){
			if(Durability<=1){
				world.setBlock(xx,yy,zz,"minecraft:air");
				world.spawnItem(xx,yy,zz,"jinshucraft:itemWood",1,1);
			}
			else{
				world.setBlockAndMetadata(xx,yy,zz,"jinshucraft:WoodenWorkingTable",imax+2-i);
			}			
			break;
		}
	}
	world.setTileEntityStringData(xx,yy,zz,"owner",owner);
	world.setTileEntityFloatData(xx,yy,zz,"Durability",Durability);
	world.setTileEntityFloatData(xx,yy,zz,"maxDurability",maxDurability);
}
