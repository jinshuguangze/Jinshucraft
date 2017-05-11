function addition_tree_research_reader(AdditionTreeResearchReaderINPUT){
	var array1=[],array2=[];
	array1=AdditionTreeResearchReaderINPUT[0].split("\r\n");
	array2=array1[AdditionTreeResearchReaderINPUT[1]-1].split("\t");
	return array2;
}

/*
AdditionTreeResearchReaderINPUT[0]:文件
AdditionTreeResearchReaderINPUT[1]:序列号
AdditionTreeResearchReaderOUTPUT[0]:序列号
AdditionTreeResearchReaderOUTPUT[1]:生长速度加成
AdditionTreeResearchReaderOUTPUT[2]:产量加成
AdditionTreeResearchReaderOUTPUT[3]:抗性加成
*/

var AdditionTreeResearchReaderINPUT;
var AdditionTreeResearchReaderOUTPUT=addition_tree_research_reader(AdditionTreeResearchReaderINPUT);