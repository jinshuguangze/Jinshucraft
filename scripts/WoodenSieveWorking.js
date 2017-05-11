var i=0,NetSize;
var k,TM,xx,yy,zz,element1,element2,element3,element4;
var SievedDegree=0;
var TIME=0;
var size=-1;
var SparsityArray=[];
var DurabilityArray=[];
var arrayConst=[];


function TimeFunction(a,b){ //与筛孔大小b和被筛程度a有关的一次处理时间函数
	a=parseInt(a);
	return parseInt(40000/(Math.pow((a+40)/40,2)*b));
}


function sizeFunction(a,b){ //一次筛处理后被筛程度与原被筛程度a和筛孔大小b的函数
	return parseFloat(a+(350/b)*(0.5+Math.random()));
}


function ProbabilityFunction(a,b){ //给出掉落数学期望a后与随机数b作用的实际掉落函数
	var kk=0;
	while(a>=1){a--;kk++;};
	return (1+0.5*b)*kk; //0.5不固定,基于筛子质量
}


function MathematicalExpectation(a,b,c){ //与被筛程度b与筛孔大小a和掉落类型c相关的掉落数学期望函数
	a=parseFloat(a);
	switch(c){
		case 1:arrayConst=[[0.0,0.3],[6.0,0.8],[11.0,0.02]];break;
		case 2:arrayConst=[[0.0,0.8],[7.0,1.6],[11.0,0.24]];break;
		case 3:arrayConst=[[0.0,1.4],[8.0,2.4],[11.0,0.82]];break;
		case 4:arrayConst=[[0.0,2.0],[9.0,3.2],[11.0,1.86]];break;
		case 5:arrayConst=[[0.0,2.6],[10.0,4.0],[11.0,3.82]];break;
		case 6:arrayConst=[[0.0,3.2],[11.0,4.8],[15.0,5.04]];break;
		default:break;
	}
	element1=Math.pow(arrayConst[0][1]/arrayConst[1][1], 1/(arrayConst[0][0]-arrayConst[1][0]));
	element2=arrayConst[0][0]-(Math.log(arrayConst[0][1])/Math.log(element1));
	element3=Math.pow(arrayConst[1][1]/arrayConst[2][1], 1/(arrayConst[1][0]-arrayConst[2][0]));
	element4=arrayConst[1][0]-(Math.log(arrayConst[2][1])/Math.log(element3));
	switch(c){
		case 1:if(b<=arrayConst[1][0]){
				return ((Math.pow(a,0.5)*Math.pow(element1,b-element2))/10);}
			   else{
				return ((Math.pow(a,0.5)*Math.pow(element3,b-element4))/10);}
			   break;
		case 2:if(b<=arrayConst[1][0]){
				return ((Math.pow(a+21,0.5)*Math.pow(element1,b-element2))/11);}
			   else{
				return ((Math.pow(a+21,0.5)*Math.pow(element3,b-element4))/11);}
			   break;
		case 3:if(b<=arrayConst[1][0]){
				return ((Math.pow(a+44,0.5)*Math.pow(element1,b-element2))/12);}
			   else{
				return ((Math.pow(a+44,0.5)*Math.pow(element3,b-element4))/12);}
			   break;
		case 4:if(b<=arrayConst[1][0]){
				return ((Math.pow(a+44,-0.5)*Math.pow(element1,b-element2))*12);}
			   else{
				return ((Math.pow(a+44,-0.5)*Math.pow(element3,b-element4))*12);}
			   break;
		case 5:if(b<=arrayConst[1][0]){
				return ((Math.pow(a+21,-0.5)*Math.pow(element1,b-element2))*11);}
			   else{
				return ((Math.pow(a+21,-0.5)*Math.pow(element3,b-element4))*11);}
			   break;
		case 6:if(b<=arrayConst[1][0]){
				return ((Math.pow(a,-0.5)*Math.pow(element1,b-element2))*10);}
			   else{
				return ((Math.pow(a,-0.5)*Math.pow(element3,b-element4))*10);}
			   break;
		default:break;
	}
}


function SievedBlockFunction(a,b){ //筛后方块内部储存的岩石和土壤数,与实际掉落函数结果a和岩石类型b有关
	switch(b){
		case 1: return 0.75/(a+1);break;
		case 2: return 1.25/(a+1);break;
		case 3: return 2.25/(a+1);break;
		case 4: return 3.75/(a+1);break;
		case 5: return 5.25/(a+1);break;
		case 6: return 7.75/(a+1);break;
		case 7: return 20.0/(a+1);break;
		default: break;
	}
}


function DurabilityFunction(a,b){ //每次筛虑的消耗耐久，与被筛程度b和筛孔大小a有关
	b=parseFloat(b);
	return 500/((Math.pow((b+40)/40,2)*a));
}


function ProbabilityBlockFunction(a,b){ //筛后方块消失几率,为负数时被筛方块消失,被筛程度a和随机数b作用的函数
	return 500*b/(a+1)-20;
}

if(world.getBlockName(position)=="jinshucraft:LeavesSieveNet"){
	NetSize=0;
}
else if(world.getBlockName(position)=="jinshucraft:WillowTwigSieveNet"){
	NetSize=1;
}

if(world.getTileEntityStringData(position,"Sparsity")>0.0){
	if(world.getTileEntityStringData(position,"Durability")<=0.0){
		world.setBlock(position,"minecraft:air");
		switch(NetSize){
			case 0:
			if(Math.random()<0.5){
				world.spawnItem(position,"minefantasy2:MF_Com_vine",1,0);
			}
			else{
				world.spawnItem(position,"minefantasy2:MF_Com_vine",2,0);
			}
			break;
			
			case 1:
			if(Math.random()<0.5){
				world.spawnItem(position,"jinshucraft:itemTransformation0",1,0);
			}
			else{
				world.spawnItem(position,"jinshucraft:itemTransformation0",2,0);
			}
			break;
			
			default:
			break;
		}
	}
}


position.y++;
if(world.getBlockName(position)=="Forestry:soil"&&world.getBlockMetadata(position)==0){size=0;SievedDegree=size;}
else if(world.getBlockName(position)=="Forestry:soil"&&world.getBlockMetadata(position)==1){size=1;SievedDegree=size;}
else if(world.getBlockName(position)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(position)==4){size=2;SievedDegree=size;}
else if(world.getBlockName(position)=="BiomesOPlenty:mud"&&world.getBlockMetadata(position)==0){size=3;SievedDegree=size;}
else if(world.getBlockName(position)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(position)==0){size=4;SievedDegree=size;}
else if(world.getBlockName(position)=="minecraft:dirt"&&world.getBlockMetadata(position)==0){size=5;SievedDegree=size;}
else if(world.getBlockName(position)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(position)==0){size=6;SievedDegree=size;}
else if(world.getBlockName(position)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(position)==0){size=7;SievedDegree=size;}
else if(world.getBlockName(position)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(position)==2){size=8;SievedDegree=size;}
else if(world.getBlockName(position)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(position)==0){size=9;SievedDegree=size;}
else if(world.getBlockName(position)=="minecraft:sand"&&world.getBlockMetadata(position)==0){size=10;SievedDegree=size;}
else if(world.getBlockName(position)=="BiomesOPlenty:mud"&&world.getBlockMetadata(position)==1){size=11;SievedDegree=size;}
else if(world.getBlockName(position)=="minecraft:air"){size=-1;}
else if(world.getBlockName(position)=="jinshucraft:SievedBlock"){size=world.getBlockMetadata(position);SievedDegree=world.getTileEntityStringData(position,"SievedDegree");}
position.y--;


if(size==-1){world.setTileEntityStringData(position,"Times",0);}
else if(size>=0){
		do{
			i++;
			position.y--;
		}while(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"SieveNet"));
		position.y+=i;
		for(k=0;k<i;k++){
			SparsityArray[k]=world.getTileEntityStringData(position,"Sparsity");
			DurabilityArray[k]=world.getTileEntityStringData(position,"Durability");
			TIME+=TimeFunction(SievedDegree,SparsityArray[k]);
			SievedDegree=sizeFunction(SievedDegree,SparsityArray[k]);
			position.y--;
		}
		position.y+=i;
		xx=position.x;
		yy=position.y;
		zz=position.z;
		while(TIME%2==0||TIME%3==0||TIME%3==2){TIME++;}
		TM=world.getTileEntityStringData(position,"Times");
		world.sendMessageToAllPlayers(TM);
		if(TM==2.0&&TM==3.0&&TM==5.0){TM=1.0;}
		if(TM==0.0){world.setTileEntityStringData(position,"Times",TIME);}
		else if(TM>1.0){world.setTileEntityStringData(position,"Times",TM-1);}
		else if(TM!=null){
			var amount1=0.0,amount2=0.0,amount3=0.0,amount4=0.0,amount5=0.0,amount6=0.0;
			var SievedLump=0.0,SievedNormal=0.0,SievedSmall=0.0,SievedCrushed=0.0,SievedDrossy=0.0,SievedDust=0.0,SievedDirt=0.0;
			position.y++;
			if(world.getBlockName(position)=="jinshucraft:SievedBlock"){
				SievedDegree=world.getTileEntityStringData(position,"SievedDegree");
			}
			else{
				SievedDegree=size;
			}
			position.y--;
			for(k=0;k<i;k++){
				amount1+=Math.round(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,1),Math.random()));
				amount2+=Math.round(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,2),Math.random()));
				amount3+=Math.round(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,3),Math.random()));
				amount4+=Math.round(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,4),Math.random()));
				amount5+=Math.round(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,5),Math.random()));
				amount6+=Math.round(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,6),Math.random()));
				world.spawnItem(xx,yy+1,zz,"jinshucraft:itemGravel_Lump",amount1,size);
				world.spawnItem(xx,yy+1,zz,"jinshucraft:itemGravel_Normal",amount2,size);
				world.spawnItem(xx,yy+1,zz,"jinshucraft:itemGravel_Small",amount3,size);
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Crushed",amount4,size);
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Drossy",amount5,size);
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Dust",amount6,size);
				SievedLump+=Math.round(SievedBlockFunction(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,1),Math.random()),1));
				SievedNormal+=Math.round(SievedBlockFunction(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,2),Math.random()),2));
				SievedSmall+=Math.round(SievedBlockFunction(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,3),Math.random()),3));
				SievedCrushed+=Math.round(SievedBlockFunction(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,4),Math.random()),4));
				SievedDrossy+=Math.round(SievedBlockFunction(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,5),Math.random()),5));
				SievedDust+=Math.round(SievedBlockFunction(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,6),Math.random()),6));
				SievedDegree=Math.round(sizeFunction(SievedDegree,SparsityArray[k]));
				SievedDirt+=Math.round(SievedBlockFunction(ProbabilityFunction(MathematicalExpectation(SparsityArray[k],SievedDegree,6),Math.random()),7));
				world.setBlock(xx,yy+1,zz,"minecraft:air");
				world.setTileEntityStringData(position,"Durability",DurabilityArray[k]-DurabilityFunction(SparsityArray[k],SievedDegree));
				position.y--;
			}
			world.setTileEntityStringData(xx,yy,zz,"Times",0);
			position.y--;
            if(world.getBlockName(position)=="minecraft:air"){
				if(ProbabilityBlockFunction(SievedDegree,Math.random())>0.0){
					for(k=0;k<255;k++){position.y--;if(world.getBlockName(position)!="minecraft:air"){break;};}
					position.y++;
					world.setBlockAndMetadata(position,"jinshucraft:SievedBlock",size);
					world.setTileEntityStringData(position,"SievedDegree",SievedDegree);
					world.setTileEntityStringData(position,"SievedLump",SievedLump);
					world.setTileEntityStringData(position,"SievedNormal",SievedNormal);
					world.setTileEntityStringData(position,"SievedSmall",SievedSmall);
					world.setTileEntityStringData(position,"SievedCrushed",SievedCrushed);
					world.setTileEntityStringData(position,"SievedDrossy",SievedDrossy);
					world.setTileEntityStringData(position,"SievedDust",SievedDust);
					world.setTileEntityStringData(position,"SievedDirt",SievedDirt);
				}
				else{
					world.spawnItem(xx,yy+1,zz,"jinshucraft:itemGravel_Lump",Math.round(SievedLump/2),size);
					world.spawnItem(xx,yy+1,zz,"jinshucraft:itemGravel_Normal",Math.round(SievedNormal/2),size);
					world.spawnItem(xx,yy+1,zz,"jinshucraft:itemGravel_Small",Math.round(SievedSmall/2),size);
					world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Crushed",Math.round(SievedCrushed/2),size);
					world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Drossy",Math.round(SievedDrossy/2),size);
					world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Dust",Math.round(SievedDust/2),size);
					world.spawnItem(xx,yy-i,zz,"jinshucraft:itemSoil",Math.round(SievedDirt/2),size);
				}
            }
			else{
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Lump",Math.round(SievedLump/2),size);
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Normal",Math.round(SievedNormal/2),size);
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Small",Math.round(SievedSmall/2),size);
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Crushed",Math.round(SievedCrushed/2),size);
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Drossy",Math.round(SievedDrossy/2),size);
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemGravel_Dust",Math.round(SievedDust/2),size);
				world.spawnItem(xx,yy-i,zz,"jinshucraft:itemSoil",Math.round(SievedDirt/2),size);
			}
		}
	}



