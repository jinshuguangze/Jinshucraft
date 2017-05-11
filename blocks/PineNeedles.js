/*松针*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[0] = "";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 30;//火焰蔓延速度
flammability[0] = 60;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 0.5;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8小心里面的虫子...";//显示信息
light[0] = 0;//光照强度
material = "grass";//材料类型
maxStack = 64;//最大堆叠
name = "PineNeedles";//名称
opacity = 0;//遮光率
pick[0] = "PineNeedles:0 1";//鼠标中键获得方块
resistance[0] = 0.0;//爆炸抗性
slipperiness = 0.9;//粗糙度
stepSound = "grass";//行走声音
tickrate = "100";//方块更新速率
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
blocksPiston = true;//是否能被活塞推动
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
semiTransparent = false;//是否使用半透明纹理
tileTransparent[0] = true;//是否拥有连接处的渲染
transparent = true;//是否使用透明纹理

/*贴图*/
textureFileXN[0] = "PineNeedles.png";//西面贴图
textureFileXP[0] = "PineNeedles.png";//东面贴图
textureFileYN[0] = "PineNeedles.png";//底部贴图
textureFileYP[0] = "PineNeedles.png";//顶部贴图
textureFileZN[0] = "PineNeedles.png";//北面贴图
textureFileZP[0] = "PineNeedles.png";//南面贴图

/*触发器*/
onUpdate[0] = "if(Math.random()<0.3){mod.loadScript('LeavesDying.js')};if(Math.floor(Math.random()*2000)==0&&world.getBlockLightLevel(position)>=9){mod.loadScript('PineConeGrow0.js');}";