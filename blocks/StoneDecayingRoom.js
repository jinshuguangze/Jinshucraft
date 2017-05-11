/*石制腐化室*/

/*通用属性*/
creativeTab = "_Stone";//所在标签
material = "rock";//材料类型
maxStack = 64;//最大堆叠
name = "StoneDecayingRoom";//名称
opacity = 255;//遮光率
stepSound = "stone";//行走声音
tickrate = "60";//方块更新速率
blocksPiston = false;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
slipperiness = 0.6;//粗糙度
transparent = false;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "jinshucraft:StoneDecayingRoom";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 10;//火焰蔓延速度
flammability[0] = 5;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 5;//空手破坏时间
harvestLevel[0] = 1;//挖掘等级
information[0] = "§8石制豪华升级版!||§5腐化下方7*7*7范围|§6接收上方水5*1*5范围|§9运作一次时间期望:20s|§a运作一次消耗水:400mb";//显示信息
light[0] = 0;//光照强度
pick[0] = "StoneDecayingRoom:0 1";//鼠标中键获得方块
resistance[0] = 0.8;//爆炸抗性
tileEntity[0] = "entityStoneDecayingRoom";//方块实体值
toolClass[0] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = true;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = true;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染


/*贴图*/
textureFileXN[0] = "StoneDecayingRoom.png";//西面贴图
textureFileXP[0] = "StoneDecayingRoom.png";//东面贴图
textureFileYN[0] = "StoneDecayingRoom_Top.png";//底部贴图
textureFileYP[0] = "StoneDecayingRoom_Top.png";//顶部贴图
textureFileZN[0] = "StoneDecayingRoom.png";//北面贴图
textureFileZP[0] = "StoneDecayingRoom.png";//南面贴图

/*触发器*/
onUpdate[0] = "mod.loadScript('StoneDecayingRoomWorking.js');";
onActivated[0] = "player.openGui('StoneDecayingRoomGUI',position);result = true;";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "jinshucraft:StoneDecayingRoom";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 10;//火焰蔓延速度
flammability[1] = 5;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 5;//空手破坏时间
harvestLevel[1] = 1;//挖掘等级
information[1] = "§8工作中,请勿打扰||§5腐化下方7*7*7范围|§6接收上方水5*1*5范围|§9运作一次时间期望:20s|§a运作一次消耗水:400mb";//显示信息
light[1] = 0;//光照强度
pick[1] = "StoneDecayingRoom:1 1";//鼠标中键获得方块
resistance[1] = 0.8;//爆炸抗性
tileEntity[1] = "entityStoneDecayingRoom";//方块实体值
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
textureFileXN[1] = "StoneDecayingRoom.png";//西面贴图
textureFileXP[1] = "StoneDecayingRoom.png";//东面贴图
textureFileYN[1] = "StoneDecayingRoom_Top.png";//底部贴图
textureFileYP[1] = "StoneDecayingRoom_Top.png";//顶部贴图
textureFileZN[1] = "StoneDecayingRoom.png";//北面贴图
textureFileZP[1] = "StoneDecayingRoom.png";//南面贴图

/*触发器*/
onUpdate[1] = "mod.loadScript('StoneDecayingRoomWorking.js');";
onActivated[1] = "player.openGui('StoneDecayingRoomGUI',position);result = true;";
