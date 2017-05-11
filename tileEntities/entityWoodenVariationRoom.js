/*木质变异室*/

/*属性*/
name = "entityWoodenVariationRoom";//名称

/*特殊*/
//onItemSmelted = "";
ticksToSmelt = "400";
usedFuelLists = "fuelVariation";
usedRecipeLists = "WoodenVariation";

/*触发器*/
onUpdate = "if(world.getContainerSlotItemName(position,0)!= null){mod.loadScript('WoodenVariationRoomWorking.js');};";