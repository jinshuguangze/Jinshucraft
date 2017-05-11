function tech_point_reader(TechPointReaderINPUT){
	var i,j,k;
	var unit=[],A=[],B=[],C=[],D=[];
	unit=TechPointReaderINPUT[0].split(",");
	for(i=1;i<unit.length;i++){
		A[i]=unit[i].substring(0,unit[i].indexOf("_"));
		B[i]=unit[i].substring((unit[i].indexOf("_"))+1,unit[i].indexOf("="));
		C=(unit[i].substring(unit[i].indexOf("<")+1,unit[i].indexOf(">"))).split(" ");
		for(j=0;j<C.length;j++){
			D=C[j].split("-");
			for(k=0;k<D.length;k++){
				if(TechPointReaderINPUT[1]==A[i].slice(2)&&TechPointReaderINPUT[2]==B[i]&&TechPointReaderINPUT[3]==j&&TechPointReaderINPUT[4]==k){
					return D[k];
				}
			}
		}
	}
}

/*
TechPointReaderINPUT[0]:文件
TechPointReaderINPUT[1]:时代
TechPointReaderINPUT[2]:对象
TechPointReaderINPUT[3]:线路
TechPointReaderINPUT[4]:技能等级
TechPointReaderOUTPUT:技能等级
*/

var TechPointReaderINPUT;
var TechPointReaderOUTPUT=parseInt(tech_point_reader(TechPointReaderINPUT));