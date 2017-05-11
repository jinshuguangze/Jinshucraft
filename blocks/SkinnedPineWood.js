/*剥皮松木倒向*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[0] = "jinshucraft:itemWood:2 2";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 20;//火焰蔓延速度
flammability[0] = 40;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 3;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8周扒皮";//显示信息
light[0] = 0;//光照强度
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "SkinnedPineWood";//名称
opacity = 255;//遮光率
pick[0] = "SkinnedPineWood:0 1";//鼠标中键获得方块
resistance[0] = 0.0;//爆炸抗性
slipperiness = 0.5;//粗糙度
stepSound = "wood";//行走声音
tickrate = "20";//方块更新速率
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
blocksPiston = true;//是否能被活塞推动
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = false;//是否能被放置在墙面上
canSilkHarvest[0] = true;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = false;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
semiTransparent = false;//是否使用半透明纹理
tileTransparent[0] = true;//是否拥有连接处的渲染
transparent = false;//是否使用透明纹理

/*特殊*/
length[0] = 1.0;//长度
thickness[0] = 0.625;//厚度
canFaceBottom = false;//能面对底面
canFaceSides = false;//能面对边面
canFaceTop = true;//能面对顶面
faceBySide = false;//放置正面面对于玩家

/*贴图*/
textureFileBack[0] = "PineWood_Top.png";//底面贴图
textureFileFront[0] = "PineWood_Top.png";//顶面贴图
textureFileSides[0] = "SkinnedPineWood.png";//边面贴图

/*触发器*/
onUpdate[0] = "if(Math.floor(Math.random()*3000)==0){world.setBlock(position,'jinshucraft:TurpentinePineWood');};";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*剥皮松木正向*/


/*属性*/
creativeTab = "_Wood";//所在标签
drop[1] = "jinshucraft:itemWood:2 2";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 20;//火焰蔓延速度
flammability[1] = 40;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 3;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8周扒皮";//显示信息
light[1] = 0;//光照强度
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "SkinnedPineWood";//名称
opacity = 255;//遮光率
pick[1] = "SkinnedPineWood:1 1";//鼠标中键获得方块
resistance[1] = 0.0;//爆炸抗性
slipperiness = 0.7;//粗糙度
stepSound = "wood";//行走声音
tickrate = "20";//方块更新速率
/*tileEntity[0] = "";//方块实体值*/
toolClass[1] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[1] = false;//是否添加到创造标签下
blocksPiston = true;//是否能被活塞推动
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = false;//是否能被放置在墙面上
canSilkHarvest[1] = true;//是否能被精准采集
hasCollision[1] = true;//是否有碰撞箱
hasTileEntity[1] = false;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
semiTransparent = false;//是否使用半透明纹理
tileTransparent[1] = true;//是否拥有连接处的渲染
transparent = false;//是否使用透明纹理

/*特殊*/
length[1] = 1;//长度
thickness[1] = 0.625;//厚度
canFaceBottom = false;//能面对底面
canFaceSides = false;//能面对边面
canFaceTop = true;//能面对顶面
faceBySide = false;//放置正面面对于玩家

/*贴图*/
textureFileBack[1] = "PineWood_Top.png";//底面贴图
textureFileFront[1] = "PineWood_Top.png";//顶面贴图
textureFileSides[1] = "SkinnedPineWood.png";//边面贴图

/*触发器*/
onUpdate[1] = "if(Math.floor(Math.random()*3000)==0){world.setBlock(position,'jinshucraft:TurpentinePineWood');};";