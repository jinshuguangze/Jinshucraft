var hasbouns,Unknown,GrowTest,j,S,T,BaseT,P;
var D1,D2,D3,D4,D5,D6,D7,D8,D9;
var GamePathINPUT,GamePathOUTPUT,ListReaderINPUT,ListReaderOUTPUT,AdditionTreeResearchReaderINPUT,AdditionTreeResearchReaderOUTPUT;

var A1=[],A2=[],A3=[],AA=[],Factor_GrowthRate=[],Factor_Resistance=[];
var String_tree_List="",String_treeA_List="",String_dirt_List="",String_biome_List="";
var GrowthRateBouns=0,YieldBouns=0,ResistanceBouns=0,FertilityBouns=0,PHBouns=0,PorosityBouns=0,TemperatureBouns=0,HumidityBouns=0,HeightBouns=0;

var Biome=world.getBiome(position);
var i;//BlockMetadata
var owner;//owner
var Times;//Time
if(Unknown!=1){
	i=world.getBlockMetadata(position);
	owner=world.getTileEntityStringData(position,"owner");
	Times=0;
}
else{
	owner=player.getUsername();
	Times=parseInt(world.getTileEntityStringData(position,"Times"));
}

position.y--;
var N=world.getBlockName(position); 
var M=world.getBlockMetadata(position);
position.y++;

GamePathINPUT="/data/treeList.karma";
mod.loadScript("apiGamePath.js");
String_tree_List=mod.readFile(GamePathOUTPUT);
ListReaderINPUT=[String_tree_List,i+1];
mod.loadScript("apiListReader.js");
A1=ListReaderOUTPUT;

GamePathINPUT="/data/treeData/"+owner+".karma";
mod.loadScript("apiGamePath.js");
String_treeA_List=mod.readFile(GamePathOUTPUT);
AdditionTreeResearchReaderINPUT=[String_treeA_List,i+1];
mod.loadScript("apiAdditionTreeResearchReader.js");
AA=AdditionTreeResearchReaderOUTPUT;

GamePathINPUT="/data/dirtList.karma";
mod.loadScript("apiGamePath.js");
String_dirt_List=mod.readFile(GamePathOUTPUT);
S=String_dirt_List;
for(j=0;j<S.split("\r\n").length;j++){//由于一些特殊的原因,这里j初始值设置为0
	ListReaderINPUT=[String_dirt_List,j];
	mod.loadScript("apiListReader.js");
	A2=ListReaderOUTPUT;
	if(mod.isItemInOreDictClass(N,M,"NurtureBench")){
		for(var k=0;k<A2.length;k++){
			A2[k]=world.getTileEntityFloatData(position.x,position.y-1,position.z,"Dirt"+A2[k].slice(A2[k].indexOf("|")+1));//吃饱了撑的自动加上限
		}
		break;
	}
	else{
		if(A2[1]==N&&A2[2]==M){
			break;
		}
	}
	if(j==S.split("\r\n").length-1){
		A2[0]=undefined;
		for(var k=1;k<A2.length;k++){
			A2[k]=NaN;
		}
	}
}

GamePathINPUT="/data/biomeList.karma";
mod.loadScript("apiGamePath.js");
String_biome_List=mod.readFile(GamePathOUTPUT);
S=String_biome_List;
for(j=1;j<S.split("\r\n").length;j++){
	ListReaderINPUT=[String_biome_List,j];
	mod.loadScript("apiListReader.js");
	A3=ListReaderOUTPUT;
	if(A3[1]==Biome){
		break;
	}
	if(j==S.split("\r\n").length-1){
		A3[0]=undefined;
		for(k=1;k<A3.length;k++){
			A2[k]=NaN;
		}
	}
}

if(mod.isItemInOreDictClass(N,M,"treePlantOn")){
	position.y--;
	D1=world.getTileEntityFloatData(position,"GrowthRateBouns");
	D2=world.getTileEntityFloatData(position,"YieldBouns");
	D3=world.getTileEntityFloatData(position,"ResistanceBouns");
	D4=world.getTileEntityFloatData(position,"FertilityBouns");
	D5=world.getTileEntityFloatData(position,"PHBouns");
	D6=world.getTileEntityFloatData(position,"PorosityBouns");
	D7=world.getTileEntityFloatData(position,"TemperatureBouns");
	D8=world.getTileEntityFloatData(position,"HumidityBouns");
	D9=world.getTileEntityFloatData(position,"HeightBouns");
	position.y++;
	
	D1==-1.0?D1=0:GrowthRateBouns+=D1;
	D2==-1.0?D2=0:YieldBouns+=D2;
	D3==-1.0?D3=0:ResistanceBouns+=D3;
	D4==-1.0?D4=0:FertilityBouns+=D4;
	D5==-1.0?D5=0:PHBouns+=D5;
	D6==-1.0?D6=0:PorosityBouns+=D6;
	D7==-1.0?D7=0:TemperatureBouns+=D7;
	D8==-1.0?D8=0:HumidityBouns+=D8;
	D9==-1.0?D9=0:HeightBouns+=D9;
}

if(mod.isItemInOreDictClass(N,M,"Shoot")){
	D1=world.getTileEntityFloatData(position,"GrowthRateBouns");
	D2=world.getTileEntityFloatData(position,"YieldBouns");
	D3=world.getTileEntityFloatData(position,"ResistanceBouns");
	D4=world.getTileEntityFloatData(position,"FertilityBouns");
	D5=world.getTileEntityFloatData(position,"PHBouns");
	D6=world.getTileEntityFloatData(position,"PorosityBouns");
	D7=world.getTileEntityFloatData(position,"TemperatureBouns");
	D8=world.getTileEntityFloatData(position,"HumidityBouns");
	D9=world.getTileEntityFloatData(position,"HeightBouns");

	D1==-1.0?D1=0:GrowthRateBouns+=D1;
	D2==-1.0?D2=0:YieldBouns+=D2;
	D3==-1.0?D3=0:ResistanceBouns+=D3;
	D4==-1.0?D4=0:FertilityBouns+=D4;
	D5==-1.0?D5=0:PHBouns+=D5;
	D6==-1.0?D6=0:PorosityBouns+=D6;
	D7==-1.0?D7=0:TemperatureBouns+=D7;
	D8==-1.0?D8=0:HumidityBouns+=D8;
	D9==-1.0?D9=0:HeightBouns+=D9;
}

//将来有可能的天上扩展

//Go!
/*
Temperature=ROUND((C2-0.3)*15+3*RAND(),0)
Height=ROUND((E3+1)*60+RAND()*10,0)
*/

var GrowthRate=(parseInt(A1[5])+parseInt(AA[1]))*(1+GrowthRateBouns/100);//总生长速度(未反馈调整)
var Yield=(parseInt(A1[6])+parseInt(AA[2]))*(1+YieldBouns/100);//总产量(未反馈调整)
var Resistance=(parseInt(A1[7])+parseInt(AA[3]))*(1+ResistanceBouns/100);//总抗性(未反馈调整)
var Fertility=parseFloat(A2[5])*(1+FertilityBouns/100);//总营养度
var PH=parseFloat(A2[6])*(1+PHBouns/100);//总酸碱度
var Porosity=parseFloat(A2[7])*(1+PorosityBouns/100);//总孔隙度
var Temperature=parseInt(A3[2])*(1+TemperatureBouns/100);//总温度
var Humidity=parseFloat(A3[3])*(1+HumidityBouns/100);//总湿度
var Height=parseInt(A3[4])*(1+HeightBouns/100);//总海拔高度

if(GrowTest==1){
	world.sendMessageToPlayer(owner,"\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u679d\u82bd\u73af\u5883\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u002d");
	world.sendMessageToPlayer(owner,"\u679d\u82bd\u540d\u79f0\u003a"+A1[3]+"\u679d\u82bd");
	world.sendMessageToPlayer(owner,"\u679d\u82bd\u5c5e\u6027\u0028\u751f\u957f\u901f\u5ea6\u002c\u4ea7\u91cf\u002c\u6297\u6027\u0029\u003a"+A1[5]+", "+A1[6]+", "+A1[7]);
	world.sendMessageToPlayer(owner,"\u002a\u73a9\u5bb6\u80fd\u529b\u52a0\u6210\u003a\u002b\u0028"+AA[1]+", "+AA[2]+", "+AA[3]+"\u0029");
	world.sendMessageToPlayer(owner,"\u679d\u82bd\u5c5e\u6027\u0028\u8425\u517b\u5ea6\u002c\u9178\u78b1\u5ea6\u002c\u5b54\u9699\u5ea6\u0029\u003a"+A1[8]+", "+A1[9]+", "+A1[10]);
	world.sendMessageToPlayer(owner,"\u679d\u82bd\u5c5e\u6027\u0028\u6e29\u5ea6\u002c\u6e7f\u5ea6\u002c\u6d77\u62d4\u9ad8\u5ea6\u0029\u003a"+A1[11]+", "+A1[12]+", "+A1[13]);
	world.sendMessageToPlayer(owner,"\u679d\u82bd\u521d\u51fa\u73b0\u65f6\u4ee3\u5e8f\u53f7\u003a"+A1[14]);
	world.sendMessageToPlayer(owner,"");
	world.sendMessageToPlayer(owner,"\u571f\u58e4\u73af\u5883\u003a"+A2[3]);
	world.sendMessageToPlayer(owner,"\u571f\u58e4\u5c5e\u6027\u003a"+A2[5]+", "+A2[6]+", "+A2[7]);
	world.sendMessageToPlayer(owner,"\u571f\u58e4\u7a00\u6709\u5ea6\u661f\u7ea7\u003a"+A2[8]);
	world.sendMessageToPlayer(owner,"");
	world.sendMessageToPlayer(owner,"\u7fa4\u7cfb\u73af\u5883\u003a"+A3[1]);
	world.sendMessageToPlayer(owner,"\u7fa4\u7cfb\u5c5e\u6027\u003a"+A3[2]+", "+A3[3]+", "+A3[4]);
	world.sendMessageToPlayer(owner,"\u7fa4\u7cfb\u751f\u6210\u7387\u003a"+A3[5]);
	world.sendMessageToPlayer(owner,"");
	world.sendMessageToPlayer(owner,"\u73af\u5883\u603b\u767e\u5206\u6bd4\u52a0\u6210\u003a"+GrowthRateBouns+"%, "+YieldBouns+"%, "+ResistanceBouns+"%, "+FertilityBouns+"%, "+PHBouns+"%, "+TemperatureBouns+"%, "+HumidityBouns+"%, "+HeightBouns+"%"+"\u0029");
	world.sendMessageToPlayer(owner,"\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u679d\u82bd\u72b6\u6001\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u002d");
	world.sendMessageToPlayer(owner,"\u751f\u957f\u901f\u5ea6\u003a"+GrowthRate);
	world.sendMessageToPlayer(owner,"\u4ea7\u91cf\u003a"+Yield);
	world.sendMessageToPlayer(owner,"\u6297\u6027\u003a"+Resistance);
	world.sendMessageToPlayer(owner,"\u8425\u517b\u5ea6\u003a"+Fertility);
	world.sendMessageToPlayer(owner,"\u9178\u78b1\u5ea6\u003a"+PH);
	world.sendMessageToPlayer(owner,"\u5b54\u9699\u5ea6\u003a"+Porosity);
	world.sendMessageToPlayer(owner,"\u6e29\u5ea6\u003a"+Temperature);
	world.sendMessageToPlayer(owner,"\u6e7f\u5ea6\u003a"+Humidity);
	world.sendMessageToPlayer(owner,"\u6d77\u62d4\u9ad8\u5ea6\u003a"+Height);
}

for(j=8;j<14;j++){
	var MM=A1[j].split("~");
	MM[0]=parseFloat(MM[0]);
	MM[1]=parseFloat(MM[1]);//MM[0]:最小值,MM[1]:最大值
	var Left=0;
	var Coefficient1=0,Coefficient2=0;
	
	switch(j){
		case 8:
		Left=parseFloat(Fertility);
		Coefficient1=0.05;
		Coefficient2=0.08;
		Coefficient3=0.04;
		break;
		
		case 9:
		Left=parseFloat(PH);
		Coefficient1=0.1;
		Coefficient1=0.11;
		Coefficient2=0.12;
		break;

		case 10:
		Left=parseFloat(Porosity);
		Coefficient1=0.04;
		Coefficient2=0.15;
		Coefficient3=0.07;
		break;

		case 11:
		Left=parseFloat(Temperature);
		Coefficient1=0.005;
		Coefficient2=0.06;
		Coefficient3=0.008;
		break;

		case 12:
		Left=parseFloat(Humidity);
		Coefficient1=0.12;
		Coefficient2=0.13;
		Coefficient3=0.1;
		break;

		case 13:
		Left=parseFloat(Height);
		Coefficient1=0.0015;
		Coefficient2=0.12;
		Coefficient3=0.0012;
		break;

		default:
		break;
	}

	if(Left<MM[0]){
		Factor_GrowthRate[j-8]=parseFloat(((MM[0]-Left)*(100-Resistance)*Coefficient1).toFixed(3));
		Factor_Resistance[j-8]=0;
	}
	else if(Left<=MM[1]&&Left>=MM[0]){
		var MH=(MM[1]-MM[0])/2;
		Factor_GrowthRate[j-8]=0;
		Factor_Resistance[j-8]=parseFloat(((Math.pow(10,-Math.abs(parseFloat(MM[0])+MH-Left)/MH))*(100-GrowthRate)*Coefficient2).toFixed(3));
	}
	else if(Left>MM[1]){
		Factor_GrowthRate[j-8]=parseFloat(((Left-MM[1])*(100-Resistance)*Coefficient3).toFixed(3));
		Factor_Resistance[j-8]=0;
	}
}

for(j=0;j<6;j++){
	GrowthRate=parseFloat(GrowthRate)-Factor_GrowthRate[j];
	Resistance=parseFloat(Resistance)+Factor_Resistance[j];
}
GrowthRate<0?GrowthRate=0:GrowthRate=parseFloat(GrowthRate.toFixed(3));
Resistance<0?Resistance=0:Resistance=parseFloat(Resistance.toFixed(3));

if(Unknown!=1){
	if(GrowTest==1){
		world.sendMessageToPlayer(owner,"\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u5f71\u54cd\u56e0\u5b50\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u002d");
		world.sendMessageToPlayer(owner,"\u751f\u957f\u901f\u5ea6\u5f71\u54cd\u56e0\u5b50\u5217\u8868\u003a");
		world.sendMessageToPlayer(owner,"\u002d\u0028"+Factor_GrowthRate[0]+", "+Factor_GrowthRate[1]+", "+Factor_GrowthRate[2]+", "+Factor_GrowthRate[3]+", "+Factor_GrowthRate[4]+", "+Factor_GrowthRate[5]+"\u0029");
		world.sendMessageToPlayer(owner,"");
		world.sendMessageToPlayer(owner,"\u6297\u6027\u5f71\u54cd\u56e0\u5b50\u5217\u8868\u003a");
		world.sendMessageToPlayer(owner,"\u002b\u0028"+Factor_Resistance[0]+", "+Factor_Resistance[1]+", "+Factor_Resistance[2]+", "+Factor_Resistance[3]+", "+Factor_Resistance[4]+", "+Factor_Resistance[5]+"\u0029");
	}

	T=parseFloat(((1/30000)*GrowthRate*GrowthRate+(1/600)*GrowthRate).toFixed(5));//生长速度与几率,30时为0.1,50时为0.2.

	if(GrowthRate>=50){
		if(world.getTileEntityIntData(position,"JumpBaseTime")!=0){
			if(Math.random()<=GrowthRate/500||world.getTileEntityIntData(position,"JumpBaseTime")==1){
				BaseT=0;
				world.setTileEntityIntData(position,"JumpBaseTime",1);
			}
			else{
				BaseT=parseFloat((30000/GrowthRate).toFixed(5));
				world.setTileEntityIntData(position,"JumpBaseTime",0);
			}
		}
		else{
			BaseT=parseFloat((30000/GrowthRate).toFixed(5));
			world.setTileEntityIntData(position,"JumpBaseTime",0);
		}
	}
	else if(GrowthRate>5&&GrowthRate<50){
		BaseT=parseFloat((30000/GrowthRate).toFixed(5));//基础生长时长,20时为75秒,50时为30秒.
	}
	else if(GrowthRate>0&&GrowthRate<=5){
		BaseT=6000.0;//基础生长时长上限
	}
	else if(GrowthRate==0){
		BaseT=Number.POSITIVE_INFINITY;//无穷大
	}

	P=parseFloat((1-Math.pow(2,-0.025*Resistance)).toFixed(5));//抗性与几率,20时为0.29,50时为0.58.
	if(T<0)T=0;
	if(P<0)P=0;
	var TimeCount=parseFloat(((BaseT/20)+(5/T)).toFixed(1));

	if(GrowTest==1){
		world.sendMessageToPlayer(owner,"\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u6700\u7ec8\u6570\u636e\u002d\u002d\u002d\u002d\u002d\u002d\u002d\u002d");
		world.sendMessageToPlayer(owner,"\u603b\u4f53\u751f\u957f\u901f\u5ea6\u003a"+GrowthRate);
		world.sendMessageToPlayer(owner,"\u603b\u4f53\u6297\u6027\u003a"+Resistance);
		world.sendMessageToPlayer(owner,"\u6bcf\u0035\u79d2\u751f\u957f\u51e0\u7387\u003a"+T);
		world.sendMessageToPlayer(owner,"\u57fa\u7840\u751f\u957f\u65f6\u95f4\u003a"+(BaseT/20).toFixed(1)+"\u79d2");
		world.sendMessageToPlayer(owner,"\u751f\u957f\u7528\u65f6\u671f\u671b\u003a"+TimeCount+"\u79d2");
		world.sendMessageToPlayer(owner,"\u5b58\u6d3b\u51e0\u7387\u003a"+P);
	}

	world.setTileEntityFloatData(position,"GrowthRate",GrowthRate);
	world.setTileEntityFloatData(position,"Yield",Yield);
	world.setTileEntityFloatData(position,"Resistance",Resistance);

	if(world.getTime()>=Times+BaseT){
		if(GrowTest!=1&&Math.random()<=T){
			if(Math.random()<=P){
				world.setBlockAndMetadata(position,A1[1],A1[2]);
			}
			else{
				world.setBlock(position,"minecraft:deadbush");
			}
		}
	}	
}
else{
	if(Resistance>=50){
		world.spawnItem(position,"jinshucraft:itemShoot",1,0);
	}
	else{
		world.spawnItem(position,"minecraft:deadbush",1,0);
	}
}
