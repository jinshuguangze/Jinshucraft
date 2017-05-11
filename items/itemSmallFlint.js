/*小块燧石*/
/*通用属性*/
/*anvilMaterial = "";//铁砧修复材料*/
/*containerItem = "";//乘装容器*/
creativeTab = "_Stone";//所在标签
damage = 0;//额外攻击力
effectiveBlocks = "jinshucraft:CocoaLeaves";//能有速度加成采掘方块列表
enchantability = 0;//附魔加成
/*harvestBlocks = "";//能普通速度破坏方块列表*/
harvestLevel = 0;//挖掘等级
maxDamage = 0;//最大耐久
maxStack = 1//最大堆叠
name = "itemSmallFlint";//名称
toolClass = "weave";//工具类型
full3d = false;//是否持剑型握物品
leaveContainerItem = false;//是否参与合成后残留在合成格中
repairable = false;//能否使用修复配方

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
efficiency[0] = 1.5;//对应方块采掘速度加成
information[0] = "§8一小块坚硬的燧石，是块好材料";//显示信息
maxUsingDuration[0] = 1;//使用物品最大时间
usingAction[0] = "block";//使用时玩家动作

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
hasEffect[0] = false;//是否能附魔

/*贴图*/
textureFile[0] = "itemSmallFlint0.png";

/*触发器*/
onUse[0] = "if(world.getBlockName(position)=='yegamolchattels:grindstone'){mod.loadScript('GrindWorking.js');};";
onBlockStartBreak[0] = "mod.loadScript('GrindWorking2.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
efficiency[1] = 1.5;//对应方块采掘速度加成
information[1] = "§8一小块坚硬的燧石，是块好材料";//显示信息
maxUsingDuration[1] = 1;//使用物品最大时间
usingAction[1] = "block";//使用时玩家动作

/*布尔值*/
addToCreative[1] = true;//是否添加到创造标签下
hasEffect[1] = false;//是否能附魔

/*贴图*/
textureFile[1] = "itemSmallFlint1.png";

/*触发器*/
onUse[1] = "if(world.getBlockName(position)=='yegamolchattels:grindstone'){mod.loadScript('GrindWorking.js');};";
onBlockStartBreak[1] = "mod.loadScript('GrindWorking2.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
efficiency[2] = 1.5;//对应方块采掘速度加成
information[2] = "§8一小块坚硬的燧石，是块好材料";//显示信息
maxUsingDuration[2] = 1;//使用物品最大时间
usingAction[2] = "block";//使用时玩家动作

/*布尔值*/
addToCreative[2] = true;//是否添加到创造标签下
hasEffect[2] = false;//是否能附魔

/*贴图*/
textureFile[2] = "itemSmallFlint2.png";

/*触发器*/
onUse[2] = "if(world.getBlockName(position)=='yegamolchattels:grindstone'){mod.loadScript('GrindWorking.js');};";
onBlockStartBreak[2] = "mod.loadScript('GrindWorking2.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
efficiency[3] = 1.5;//对应方块采掘速度加成
information[3] = "§8一小块坚硬的燧石，是块好材料";//显示信息
maxUsingDuration[3] = 1;//使用物品最大时间
usingAction[3] = "block";//使用时玩家动作

/*布尔值*/
addToCreative[3] = true;//是否添加到创造标签下
hasEffect[3] = false;//是否能附魔

/*贴图*/
textureFile[3] = "itemSmallFlint3.png";

/*触发器*/
onUse[3] = "if(world.getBlockName(position)=='yegamolchattels:grindstone'){mod.loadScript('GrindWorking.js');};";
onBlockStartBreak[3] = "mod.loadScript('GrindWorking2.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
efficiency[4] = 1.5;//对应方块采掘速度加成
information[4] = "§8一小块坚硬的燧石，是块好材料";//显示信息
maxUsingDuration[4] = 1;//使用物品最大时间
usingAction[4] = "block";//使用时玩家动作

/*布尔值*/
addToCreative[4] = true;//是否添加到创造标签下
hasEffect[4] = false;//是否能附魔

/*贴图*/
textureFile[4] = "itemSmallFlint4.png";

/*触发器*/
onUse[4] = "if(world.getBlockName(position)=='yegamolchattels:grindstone'){mod.loadScript('GrindWorking.js');};";
onBlockStartBreak[4] = "mod.loadScript('GrindWorking2.js');";
