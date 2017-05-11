/*神圣之灵*/

/*通用属性*/
/*anvilMaterial = "";//铁砧修复材料*/
/*containerItem = "";//乘装容器*/
creativeTab = "_Wood";//所在标签
damage = 0;//额外攻击力
effectiveBlocks = "";//能有速度加成采掘方块列表
enchantability = 0;//附魔加成
/*harvestBlocks = "";//能普通速度破坏方块列表*/
harvestLevel = 0;//挖掘等级
maxDamage = 0;//最大耐久
maxStack = 1//最大堆叠
name = "itemGodPower";//名称
toolClass = "noHarvest";//工具类型

/*布尔值*/
full3d = false;//是否持剑型握物品
leaveContainerItem = false;//是否参与合成后残留在合成格中
repairable = true;//能否使用修复配方

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*神圣之灵(泥木时代)*/
efficiency[0] = 1.0;//对应方块采掘速度加成
information[0] = "§2泥木时代";//显示信息
maxUsingDuration[0] = 1;//使用物品最大时间
usingAction[0] = "block";//使用时玩家动作
addToCreative[0] = false;//是否添加到创造标签下
hasEffect[0] = false;//是否能附魔

/*贴图*/
textureFile[0] = "itemGodPower0.png";

/*触发器*/
onUpdate[0] = "mod.loadScript('GodPowerUpdate.js');";
onRightClick[0] = "mod.loadScript('GodPowerWorking.js');";