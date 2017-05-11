/*木制工作台*/

/*通用属性*/
creativeTab = "_Wood";//所在标签
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "WoodenWorkingTable";//名称
opacity = 255;//遮光率
stepSound = "wood";//行走声音
tickrate = "20";//方块更新速率
slipperiness = 0.6;//粗糙度
blocksPiston = false;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = false;//是否使用透明纹理
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "jinshucraft:WoodenWorkingTable:0";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 5;//火焰蔓延速度
flammability[0] = 20;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 3.5;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8他很粗糙，但是你需要它";//显示信息
light[0] = 0;//光照强度
pick[0] = "WoodenWorkingTable:0 1";//鼠标中键获得方块
resistance[0] = 0.0;//爆炸抗性
tileEntity[0] = "entityWoodenWorkingTable";//方块实体值
toolClass[0] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[0] = false;//是否添加到创造标签下
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = true;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = true;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = true;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[0] = "WoodenWorkingTable0.png";//西面贴图
textureFileXP[0] = "WoodenWorkingTable0.png";//东面贴图
textureFileYN[0] = "WoodenWorkingTable_Bottom0.png";//底部贴图
textureFileYP[0] = "WoodenWorkingTable_Top0.png";//顶部贴图
textureFileZN[0] = "WoodenWorkingTable0.png";//北面贴图
textureFileZP[0] = "WoodenWorkingTable0.png";//南面贴图

/*触发器*/
onAdded[0] = "mod.loadScript('WoodenWorkingTableAdded.js');";
onPlacedByPlayer[0] = "mod.loadScript('WoodenWorkingTablePlaced.js');";
onActivated[0] = "if(side==1){mod.loadScript('WoodenWorkingTableBuild.js');}";
onClicked[0] = "mod.loadScript('WoodenWorkingTableBuild.js');";
onUpdate[0] = "mod.loadScript('WoodenNurtureBenchInstall.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "jinshucraft:WoodenWorkingTable:2";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 5;//火焰蔓延速度
flammability[1] = 20;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 3.5;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8他很粗糙，但是你需要它";//显示信息
light[1] = 0;//光照强度
pick[1] = "WoodenWorkingTable:0 1";//鼠标中键获得方块
resistance[1] = 0.0;//爆炸抗性
tileEntity[1] = "entityWoodenWorkingTable";//方块实体值
toolClass[1] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[1] = true;//是否添加到创造标签下
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = true;//是否能被精准采集
hasCollision[1] = true;//是否有碰撞箱
hasTileEntity[1] = true;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = true;//是否能成为树干
tileTransparent[1] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[1] = "WoodenWorkingTable1.png";//西面贴图
textureFileXP[1] = "WoodenWorkingTable1.png";//东面贴图
textureFileYN[1] = "WoodenWorkingTable_Top1.png";//底部贴图
textureFileYP[1] = "WoodenWorkingTable_Top1.png";//顶部贴图
textureFileZN[1] = "WoodenWorkingTable1.png";//北面贴图
textureFileZP[1] = "WoodenWorkingTable1.png";//南面贴图

/*触发器*/
onAdded[1] = "mod.loadScript('WoodenWorkingTableAdded.js');";
onPlacedByPlayer[1] = "mod.loadScript('WoodenWorkingTablePlaced.js');";
onActivated[1] = "mod.loadScript('WoodenWorkingTableWorking.js');";
onClicked[1] = "mod.loadScript('WoodenWorkingTableDismantle.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
drop[2] = "jinshucraft:WoodenWorkingTable:3";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 5;//火焰蔓延速度
flammability[2] = 20;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 3.5;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8他很粗糙，但是你需要它";//显示信息
light[2] = 0;//光照强度
pick[2] = "WoodenWorkingTable:0 1";//鼠标中键获得方块
resistance[2] = 0.0;//爆炸抗性
tileEntity[2] = "entityWoodenWorkingTable";//方块实体值
toolClass[2] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[2] = false;//是否添加到创造标签下
canPlaceOnCeiling[2] = true;//是否能被放置在天花板上
canPlaceOnFloor[2] = true;//是否能被放置在地板上
canPlaceOnWall[2] = true;//是否能被放置在墙面上
canSilkHarvest[2] = true;//是否能被精准采集
hasCollision[2] = true;//是否有碰撞箱
hasTileEntity[2] = true;//是否有方块实体值
isBeaconBase[2] = false;//是否能成为信标基座
isBurning[2] = false;//是否能点燃并造成火焰伤害
isFireSource[2] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[2] = true;//是否能成为树干
tileTransparent[2] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[2] = "WoodenWorkingTable2.png";//西面贴图
textureFileXP[2] = "WoodenWorkingTable2.png";//东面贴图
textureFileYN[2] = "WoodenWorkingTable_Top2.png";//底部贴图
textureFileYP[2] = "WoodenWorkingTable_Top2.png";//顶部贴图
textureFileZN[2] = "WoodenWorkingTable2.png";//北面贴图
textureFileZP[2] = "WoodenWorkingTable2.png";//南面贴图

/*触发器*/
onAdded[2] = "mod.loadScript('WoodenWorkingTableAdded.js');";
onPlacedByPlayer[2] = "mod.loadScript('WoodenWorkingTablePlaced.js');";
onActivated[2] = "mod.loadScript('WoodenWorkingTableWorking.js');";
onClicked[2] = "mod.loadScript('WoodenWorkingTableDismantle.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
drop[3] = "jinshucraft:WoodenWorkingTable:4";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 5;//火焰蔓延速度
flammability[3] = 20;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 3.5;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8他很粗糙，但是你需要它";//显示信息
light[3] = 0;//光照强度
pick[3] = "WoodenWorkingTable:0 1";//鼠标中键获得方块
resistance[3] = 0.0;//爆炸抗性
tileEntity[3] = "entityWoodenWorkingTable";//方块实体值
toolClass[3] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[3] = false;//是否添加到创造标签下
canPlaceOnCeiling[3] = true;//是否能被放置在天花板上
canPlaceOnFloor[3] = true;//是否能被放置在地板上
canPlaceOnWall[3] = true;//是否能被放置在墙面上
canSilkHarvest[3] = true;//是否能被精准采集
hasCollision[3] = true;//是否有碰撞箱
hasTileEntity[3] = true;//是否有方块实体值
isBeaconBase[3] = false;//是否能成为信标基座
isBurning[3] = false;//是否能点燃并造成火焰伤害
isFireSource[3] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[3] = true;//是否能成为树干
tileTransparent[3] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[3] = "WoodenWorkingTable3.png";//西面贴图
textureFileXP[3] = "WoodenWorkingTable3.png";//东面贴图
textureFileYN[3] = "WoodenWorkingTable_Top3.png";//底部贴图
textureFileYP[3] = "WoodenWorkingTable_Top3.png";//顶部贴图
textureFileZN[3] = "WoodenWorkingTable3.png";//北面贴图
textureFileZP[3] = "WoodenWorkingTable3.png";//南面贴图

/*触发器*/
onAdded[3] = "mod.loadScript('WoodenWorkingTableAdded.js');";
onPlacedByPlayer[3] = "mod.loadScript('WoodenWorkingTablePlaced.js');";
onActivated[3] = "mod.loadScript('WoodenWorkingTableWorking.js');";
onClicked[3] = "mod.loadScript('WoodenWorkingTableDismantle.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
drop[4] = "jinshucraft:itemWood:1";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 5;//火焰蔓延速度
flammability[4] = 20;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 3.5;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8他很粗糙，但是你需要它";//显示信息
light[4] = 0;//光照强度
pick[4] = "WoodenWorkingTable:0 1";//鼠标中键获得方块
resistance[4] = 0.0;//爆炸抗性
tileEntity[4] = "entityWoodenWorkingTable";//方块实体值
toolClass[4] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[4] = false;//是否添加到创造标签下
canPlaceOnCeiling[4] = true;//是否能被放置在天花板上
canPlaceOnFloor[4] = true;//是否能被放置在地板上
canPlaceOnWall[4] = true;//是否能被放置在墙面上
canSilkHarvest[4] = true;//是否能被精准采集
hasCollision[4] = true;//是否有碰撞箱
hasTileEntity[4] = true;//是否有方块实体值
isBeaconBase[4] = false;//是否能成为信标基座
isBurning[4] = false;//是否能点燃并造成火焰伤害
isFireSource[4] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[4] = true;//是否能成为树干
tileTransparent[4] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[4] = "WoodenWorkingTable4.png";//西面贴图
textureFileXP[4] = "WoodenWorkingTable4.png";//东面贴图
textureFileYN[4] = "WoodenWorkingTable_Top4.png";//底部贴图
textureFileYP[4] = "WoodenWorkingTable_Top4.png";//顶部贴图
textureFileZN[4] = "WoodenWorkingTable4.png";//北面贴图
textureFileZP[4] = "WoodenWorkingTable4.png";//南面贴图

/*触发器*/
onAdded[4] = "mod.loadScript('WoodenWorkingTableAdded.js');";
onPlacedByPlayer[4] = "mod.loadScript('WoodenWorkingTablePlaced.js');";
onActivated[4] = "mod.loadScript('WoodenWorkingTableWorking.js');";
onClicked[4] = "mod.loadScript('WoodenWorkingTableDismantle.js');";
