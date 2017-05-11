function recipehashmap(recipehashmapINPUT){
	var i,j,size;
	var S="";
	var A=[],A1=[];
	
	for(i=0;i<recipehashmapINPUT.length;i++){
		S+=recipehashmapINPUT[i];
	}
	
	A=S.split(";");
	A1=recipehashmapINPUT[0].split(";");
	
	for(i=0;i<A.length-1;i++){
		if(A[i].slice(A[i].indexOf(".")+1,A[i].indexOf("("))=="addRecipeFor"){
			size=4;
		}
		else if(A[i].slice(A[i].indexOf(".")+1,A[i].indexOf("("))=="addShapelessRecipeFor"){
			size=2;
		}
		
		if(i<A1.length&&A[i].slice(2,4)=="//"){
			A[i]="It is unlocked.";
		}
		else{
			for(j=0;j<size;j++){
				A[i]=A[i].slice(A[i].indexOf(",")+1);
			}
		}
	}
	return A;
}

/*
recipehashmapINPUT[0]:主处理字符串,用于储存待添加合成
recipehashmapINPUT[i+1]:次处理字符串数组,会判定待添加合成是否重复
recipehashmapOUTPUT[i]:处理后字符串数组
*/

var recipehashmapINPUT;
var recipehashmapOUTPUT=recipehashmap(recipehashmapINPUT);