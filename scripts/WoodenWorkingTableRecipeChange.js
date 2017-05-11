var GamePathINPUT,GamePathOUTPUT,TechPointReaderINPUT,TechPointReaderOUTPUT,recipehashmapINPUT,recipehashmapOUTPUT;
var S,S1,i,j,k,l,m,n,weather,LINE,change,materialcount,recipedump;
var A1=[],A2=[],A3=[];
var FullAdd;//支线1

GamePathINPUT="/mods/CS2_jinshucraft/scripts/WoodenWorkingTableScript.js";
mod.loadScript("apiGamePath.js");
S=mod.readFile(GamePathOUTPUT);
S1=S;
A1=S.split(";");

GamePathINPUT="/data/techPoint/"+player.getUsername()+".karma";
mod.loadScript("apiGamePath.js");
S=mod.readFile(GamePathOUTPUT);

TechPointReaderINPUT=[S,"Wooden","workingtable",1,0];
mod.loadScript("apiTechPointReader.js");
LINE=TechPointReaderOUTPUT;

for(l=0;l<LINE;l++){//l:基于技能等级
	if(FullAdd==1){
		weather=A1.length-1;
		l=LINE;
	}
	else{
		weather=1;
	}
	
	for(n=0;n<weather;n++){//n:基于技能类型
		for(j=0;j<50;j++){//j:基于尝试添加
			if(FullAdd==1&&A1[n].slice(2,4)=="//"){
				i=n;
				j=50;
			}
			else if(FullAdd==1&&A1[n].slice(2,4)!="//"){
				break;
			}
			else if(FullAdd!=1){
				i=parseInt(Math.round(Math.random()/(1/(A1.length-1))));
			}
			
			recipedump="";
			change=0;
			A2=A1[i].split(",");
			A3=[];		

			if(A1[i].substring(A1[i].indexOf(".")+1,A1[i].indexOf("("))=="addRecipeFor"){
				for(k=0;k<A2.length;k++){
					if(k==0){
						A3[0]=A2[0].slice(A2[0].indexOf("(")+2,-1);
					}			
					else if(k==1||(k>3&&k<A2.length-1)){
						A3[k]=A2[k].slice(2,-1);
					}
					else if(k>1&&k<4){
						A3[k]=parseInt(A2[k].slice(1));
					}
					else if(k==A2.length-1){
						A3[k]=A2[k].slice(2,-2);
					}
				}

				materialcount=parseInt(A3[2])*parseInt(A3[3]);
			
				if(A1[i].substring(2,4)!="//"){
					for(k=Math.floor(4+(A2.length-4)*Math.random());k<A2.length;k++){
						if(A3[k]==":logWood"||A3[k]==":itemWood"||A3[k]=="jinshucraft:itemCocoaLeaves"||A3[k]=="jinshucraft:itemLeavesBucket"||A3[k]=="jinshucraft:itemWood:0"||A3[k]=="jinshucraft:itemPineNeedles"||A3[k]==":stickWood"||A3[k]==":DriedLeaves"||A3[k]==":DriedLeaves"||A3[k]=="minefantasy2:MF_Com_plank"||A3[k]=="minefantasy2:MF_Com_vine"){
							A3[k]="";
							change=1;
							break;
						}
					}				
				}
				else{
					change=1;
				}

				for(m=0;m<4+materialcount;m++){
					if(m==2||m==3){
						recipedump+=A3[m];
					}
					else{
						recipedump+="\""+A3[m]+"\"";
					}
					if(m==3+materialcount){
						break;
					}
					recipedump+=", ";
				}
				recipedump="mod.addRecipeFor("+recipedump+");\r\n";

				recipecheck=recipedump;
				for(m=0;m<4;m++){
					recipecheck=recipecheck.slice(recipecheck.indexOf(",")+1);
				}
				recipecheck=recipecheck.slice(0,-3);
				
				GamePathINPUT="/mods/CS2_jinshucraft/scripts/WoodenWorkingTableScript_advanced.js";
				mod.loadScript("apiGamePath.js");			
				recipehashmapINPUT=[S1,mod.readFile(GamePathOUTPUT)];
				mod.loadScript("RecipeHashMap.js");
				
				for(m=0;m<recipehashmapOUTPUT.length-1;m++){
					if(recipecheck==recipehashmapOUTPUT[m]){
						change=0;
						break;
					}		
				}

				if(change==1){		
					switch(materialcount){
						case 1:
						mod.addRecipeFor(A3[0], A3[1], A3[2], A3[3], A3[4]);
						break;
							
						case 2:
						mod.addRecipeFor(A3[0], A3[1], A3[2], A3[3], A3[4], A3[5]);
						break;
							
						case 3:
						mod.addRecipeFor(A3[0], A3[1], A3[2], A3[3], A3[4], A3[5], A3[6]);
						break;
							
						case 4:
						mod.addRecipeFor(A3[0], A3[1], A3[2], A3[3], A3[4], A3[5], A3[6], A3[7]);
						break;
							
						case 6:
						mod.addRecipeFor(A3[0], A3[1], A3[2], A3[3], A3[4], A3[5], A3[6], A3[7], A3[8], A3[9]);
						break;
							
						default:
						break;
					}

					GamePathINPUT="/mods/CS2_jinshucraft/scripts/WoodenWorkingTableScript_advanced.js";
					mod.loadScript("apiGamePath.js");
					mod.appendFile(GamePathOUTPUT,recipedump);			
					break;				
				}
			}
			else if(A1[i].substring(A1[i].indexOf(".")+1,A1[i].indexOf("("))=="addShapelessRecipeFor"){
				for(k=0;k<A2.length;k++){
					if(k==0){
						A3[0]=A2[0].slice(A2[0].indexOf("(")+2,-1);
					}
					else if(k>0&&k<A2.length-1){
						A3[k]=A2[k].slice(2,-1);
					}
					else if(k==A2.length-1){
						A3[k]=A2[k].slice(2,-2);
					}
				}
		
				materialcount=A3.length-2;
			
				if(A1[i].substring(2,4)=="//"){
				change=1
				}
				else {
					change=0
				}			

				for(m=0;m<2+materialcount;m++){
					recipedump+="\""+A3[m]+"\"";
					if(m==1+materialcount){
						break;
					}
					recipedump+=", ";
				}			
				recipedump="mod.addShapelessRecipeFor("+recipedump+");\r\n";
			
				recipecheck=recipedump;
				for(m=0;m<2;m++){
					recipecheck=recipecheck.slice(recipecheck.indexOf(",")+1);
				}
				recipecheck=recipecheck.slice(0,-3);
				
				GamePathINPUT="/mods/CS2_jinshucraft/scripts/WoodenWorkingTableScript_advanced.js";
				mod.loadScript("apiGamePath.js");				
				recipehashmapINPUT=[S1,mod.readFile(GamePathOUTPUT)];
				mod.loadScript("RecipeHashMap.js");
				for(m=0;m<recipehashmapOUTPUT.length-1;m++){
					if(recipecheck==recipehashmapOUTPUT[m]){
						change=0;
						break;
					}
				}	
					
				if(change==1){			
					switch(materialcount){
						case 1:
						mod.addShapelessRecipeFor(A3[0], A3[1], A3[2]);
						break;
				
						case 2:
						mod.addShapelessRecipeFor(A3[0], A3[1], A3[2], A3[3]);
						break;
				
						case 3:
						mod.addShapelessRecipeFor(A3[0], A3[1], A3[2], A3[3], A3[4]);
						break;

						case 4:
						mod.addShapelessRecipeFor(A3[0], A3[1], A3[2], A3[3], A3[4], A3[5]);
						break;
				
						case 5:
						mod.addShapelessRecipeFor(A3[0], A3[1], A3[2], A3[3], A3[4], A3[5], A3[6]);
						break;
				
						case 6:
						mod.addShapelessRecipeFor(A3[0], A3[1], A3[2], A3[3], A3[4], A3[5], A3[6], A3[7]);
						break;
				
						default:
						break;
					}
		
					GamePathINPUT="/mods/CS2_jinshucraft/scripts/WoodenWorkingTableScript_advanced.js";
					mod.loadScript("apiGamePath.js");
					mod.appendFile(GamePathOUTPUT,recipedump);
					break;
				}					
			}
		}		
	}
}

