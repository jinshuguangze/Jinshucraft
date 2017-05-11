/*可可木*/
/*通用属性*/
creativeTab = "_Wood";//所在标签
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "CocoaWood";//名称
opacity = 255;//遮光率
slipperiness = 0.6;//粗糙度
stepSound = "wood";//行走声音
tickrate = "20";//方块更新速率
blocksPiston = true;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = false;//是否使用透明纹理

/*特殊属性*/
rotateSideTextures = true;
canFaceBottom = false;
canFaceSides = true;
canFaceTop = false;
faceBySide = true;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "jinshucraft:CocoaWood";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 5;//火焰蔓延速度
flammability[0] = 20;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 3;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8这木头不怎么起眼";//显示信息
light[0] = 0;//光照强度
pick[0] = "CocoaWood:0 1";//鼠标中键获得方块
resistance[0] = 0;//爆炸抗性
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = true;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = false;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = true;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileBack [0] = "CocoaWood_Top.png"
textureFileFront[0] = "CocoaWood_Top.png";
textureFileSides[0] = "CocoaWood.png"

/*触发器*/
onUpdate[0] = "if(Math.random()<0.05){mod.loadScript('CocoaBeanGrow.js');}";
onBreak[0] = "position.x--;if(world.getBlockName(position)=='minecraft:cocoa'&&(world.getBlockMetadata(position)==3||world.getBlockMetadata(position)==7||world.getBlockMetadata(position)==11)){world.harvestBlock(position);};position.x+=2;if(world.getBlockName(position)=='minecraft:cocoa'&&(world.getBlockMetadata(position)==1||world.getBlockMetadata(position)==5||world.getBlockMetadata(position)==9)){world.harvestBlock(position);};position.x--;position.z--;if(world.getBlockName(position)=='minecraft:cocoa'&&(world.getBlockMetadata(position)==0||world.getBlockMetadata(position)==4||world.getBlockMetadata(position)==8)){world.harvestBlock(position);};position.z+=2;if(world.getBlockName(position)=='minecraft:cocoa'&&(world.getBlockMetadata(position)==2||world.getBlockMetadata(position)==6||world.getBlockMetadata(position)==10)){world.harvestBlock(position);};position.z--;"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "jinshucraft:CocoaWood";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 5;//火焰蔓延速度
flammability[1] = 20;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 3;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8这木头不怎么起眼";//显示信息
light[1] = 0;//光照强度
pick[1] = "CocoaWood:0 1";//鼠标中键获得方块
resistance[1] = 0;//爆炸抗性
/*tileEntity[1] = "";//方块实体值*/
toolClass[1] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[1] = false;//是否添加到创造标签下
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = true;//是否能被精准采集
hasCollision[1] = true;//是否有碰撞箱
hasTileEntity[1] = false;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = true;//是否能成为树干
tileTransparent[1] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileBack [1] = "CocoaWood_Top.png"
textureFileFront[1] = "CocoaWood_Top.png";
textureFileSides[1] = "CocoaWood.png"

/*触发器*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
drop[2] = "jinshucraft:CocoaWood";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 5;//火焰蔓延速度
flammability[2] = 20;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 3;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8这木头不怎么起眼";//显示信息
light[2] = 0;//光照强度
pick[2] = "CocoaWood:0 1";//鼠标中键获得方块
resistance[2] = 0;//爆炸抗性
/*tileEntity[2] = "";//方块实体值*/
toolClass[2] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[2] = false;//是否添加到创造标签下
canPlaceOnCeiling[2] = true;//是否能被放置在天花板上
canPlaceOnFloor[2] = true;//是否能被放置在地板上
canPlaceOnWall[2] = true;//是否能被放置在墙面上
canSilkHarvest[2] = true;//是否能被精准采集
hasCollision[2] = true;//是否有碰撞箱
hasTileEntity[2] = false;//是否有方块实体值
isBeaconBase[2] = false;//是否能成为信标基座
isBurning[2] = false;//是否能点燃并造成火焰伤害
isFireSource[2] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[2] = true;//是否能成为树干
tileTransparent[2] = true;//是否拥有连接处的渲染

/*触发器*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
drop[3] = "jinshucraft:CocoaWood";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 5;//火焰蔓延速度
flammability[3] = 20;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 3;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8这木头不怎么起眼";//显示信息
light[3] = 0;//光照强度
pick[3] = "CocoaWood:0 1";//鼠标中键获得方块
resistance[3] = 0;//爆炸抗性
/*tileEntity[3] = "";//方块实体值*/
toolClass[3] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[3] = false;//是否添加到创造标签下
canPlaceOnCeiling[3] = true;//是否能被放置在天花板上
canPlaceOnFloor[3] = true;//是否能被放置在地板上
canPlaceOnWall[3] = true;//是否能被放置在墙面上
canSilkHarvest[3] = true;//是否能被精准采集
hasCollision[3] = true;//是否有碰撞箱
hasTileEntity[3] = false;//是否有方块实体值
isBeaconBase[3] = false;//是否能成为信标基座
isBurning[3] = false;//是否能点燃并造成火焰伤害
isFireSource[3] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[3] = true;//是否能成为树干
tileTransparent[3] = true;//是否拥有连接处的渲染

/*触发器*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
drop[4] = "jinshucraft:CocoaWood";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 5;//火焰蔓延速度
flammability[4] = 20;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 3;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8这木头不怎么起眼";//显示信息
light[4] = 0;//光照强度
pick[4] = "CocoaWood:0 1";//鼠标中键获得方块
resistance[4] = 0;//爆炸抗性
/*tileEntity[4] = "";//方块实体值*/
toolClass[4] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[4] = false;//是否添加到创造标签下
canPlaceOnCeiling[4] = true;//是否能被放置在天花板上
canPlaceOnFloor[4] = true;//是否能被放置在地板上
canPlaceOnWall[4] = true;//是否能被放置在墙面上
canSilkHarvest[4] = true;//是否能被精准采集
hasCollision[4] = true;//是否有碰撞箱
hasTileEntity[4] = false;//是否有方块实体值
isBeaconBase[4] = false;//是否能成为信标基座
isBurning[4] = false;//是否能点燃并造成火焰伤害
isFireSource[4] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[4] = true;//是否能成为树干
tileTransparent[4] = true;//是否拥有连接处的渲染

/*触发器*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据5*/
/*属性*/
drop[5] = "jinshucraft:CocoaWood";//掉落物
expDrop[5] = "0";//经验掉落
fireSpreadSpeed[5] = 5;//火焰蔓延速度
flammability[5] = 20;//易燃性
fortuneModifier[5] = 0;//时运采集增产
hardness[5] = 3;//空手破坏时间
harvestLevel[5] = 0;//挖掘等级
information[5] = "§8这木头不怎么起眼";//显示信息
light[5] = 0;//光照强度
pick[5] = "CocoaWood:0 1";//鼠标中键获得方块
resistance[5] = 0;//爆炸抗性
/*tileEntity[5] = "";//方块实体值*/
toolClass[5] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[5] = false;//是否添加到创造标签下
canPlaceOnCeiling[5] = true;//是否能被放置在天花板上
canPlaceOnFloor[5] = true;//是否能被放置在地板上
canPlaceOnWall[5] = true;//是否能被放置在墙面上
canSilkHarvest[5] = true;//是否能被精准采集
hasCollision[5] = true;//是否有碰撞箱
hasTileEntity[5] = false;//是否有方块实体值
isBeaconBase[5] = false;//是否能成为信标基座
isBurning[5] = false;//是否能点燃并造成火焰伤害
isFireSource[5] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[5] = true;//是否能成为树干
tileTransparent[5] = true;//是否拥有连接处的渲染

/*触发器*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////