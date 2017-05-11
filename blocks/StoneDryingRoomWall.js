/*石质风干塔墙*/

/*通用属性*/
creativeTab = "_Stone";//所在标签
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "StoneDryingRoomWall";//名称
opacity = 0;//遮光率
slipperiness = 0.6;//粗糙度
stepSound = "stone";//行走声音
tickrate = "20";//方块更新速率
blocksPiston = false;//是否能被活塞推动
semiTransparent = true;//是否使用半透明纹理
transparent = true;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "jinshucraft:StoneDryingRoomWall:0";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 15;//火焰蔓延速度
flammability[0] = 30;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 1.5;//空手破坏时间
harvestLevel[0] = 1;//挖掘等级
information[0] = "§8拥有良好的透风性";//显示信息
light[0] = 0;//光照强度
pick[0] = "jinshucraft:StoneDryingRoomWall:0";//鼠标中键获得方块
resistance[0] = 0;//爆炸抗性
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = false;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = false;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[0] = "StoneDryingRoomWall0.png";//西面贴图
textureFileXP[0] = "StoneDryingRoomWall0.png";//东面贴图
textureFileYN[0] = "StoneDryingRoomWall0.png";//底部贴图
textureFileYP[0] = "StoneDryingRoomWall0.png";//顶部贴图
textureFileZN[0] = "StoneDryingRoomWall0.png";//北面贴图
textureFileZP[0] = "StoneDryingRoomWall0.png";//南面贴图

/*触发器*/
onNeighborChange[0] = "mod.loadScript('StoneDryingRoomWallCheck.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*元数据1*/
/*属性*/
drop[1] = "jinshucraft:StoneDryingRoomWall:0";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 15;//火焰蔓延速度
flammability[1] = 30;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 1.5;//空手破坏时间
harvestLevel[1] = 1;//挖掘等级
information[1] = "§8拥有良好的透风性";//显示信息
light[1] = 0;//光照强度
pick[1] = "jinshucraft:StoneDryingRoomWall:1";//鼠标中键获得方块
resistance[1] = 0;//爆炸抗性
tileEntity[1] = "entityStoneDryingRoomWall";//方块实体值
toolClass[1] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[1] = false;//是否添加到创造标签下
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = false;//是否能被精准采集
hasCollision[1] = true;//是否有碰撞箱
hasTileEntity[1] = true;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
tileTransparent[1] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[1] = "Blank.png";//西面贴图
textureFileXP[1] = "Blank.png";//东面贴图
textureFileYN[1] = "Blank.png";//底部贴图
textureFileYP[1] = "Blank.png";//顶部贴图
textureFileZN[1] = "Blank.png";//北面贴图
textureFileZP[1] = "Blank.png";//南面贴图

/*触发器*/
onNeighborChange[1] = "mod.loadScript('StoneDryingRoomWallCheck.js');";