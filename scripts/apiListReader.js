function list_reader(ListReaderINPUT){
	var array1=[],array2=[];
	array1=ListReaderINPUT[0].split("\r\n");
	array2=array1[ListReaderINPUT[1]].split("\t");
	return array2;
}

/*
ListReaderINPUT[0]:文件
ListReaderINPUT[1]:序列号
ListReaderOUTPUT[0]:序列号
ListReaderOUTPUT[1]:名称
ListReaderOUTPUT[2]:元数据值
ListReaderOUTPUT[3]:本地名(zh_CN)
ListReaderOUTPUT[4]:生长速度
ListReaderOUTPUT[5]:产量
ListReaderOUTPUT[6]:抗性
ListReaderOUTPUT[7]:出现时代
*/

var ListReaderINPUT;
var ListReaderOUTPUT=list_reader(ListReaderINPUT);