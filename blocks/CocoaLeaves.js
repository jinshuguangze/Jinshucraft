/*可可树叶*/
/*通用属性*/
creativeTab = "_Wood";//所在标签
material = "grass";//材料类型
maxStack = 64;//最大堆叠
name = "CocoaLeaves";//名称
opacity = 0;//遮光率
slipperiness = 0.6;//粗糙度
stepSound = "grass";//行走声音
tickrate = "100";//方块更新速率
blocksPiston = true;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = true;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 30;//火焰蔓延速度
flammability[0] = 60;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 0.5;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8毫无特色的可可树叶";//显示信息
light[0] = 0;//光照强度
pick[0] = "CocoaLeaves:0 1";//鼠标中键获得方块
resistance[0] = 0;//爆炸抗性
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "weave";//破坏工具类型

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
isWood[0] = false;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[0] = "CocoaLeaves.png";//西面贴图
textureFileXP[0] = "CocoaLeaves.png";//东面贴图
textureFileYN[0] = "CocoaLeaves.png";//底部贴图
textureFileYP[0] = "CocoaLeaves.png";//顶部贴图
textureFileZN[0] = "CocoaLeaves.png";//北面贴图
textureFileZP[0] = "CocoaLeaves.png";//南面贴图

/*触发器*/
onDestroyedByPlayer[0] = "if(player.getItemName(player.getCurrentSlot())=='jinshucraft:itemSmallFlint'||player.getItemName(player.getCurrentSlot())=='minecraft:flint'){if(Math.random()<0.2){world.spawnItem(position,'minefantasy2:MF_Com_vine',1,0);}}";
onUpdate[0] = "if(Math.random()<0.3){mod.loadScript('LeavesDying.js')};";
