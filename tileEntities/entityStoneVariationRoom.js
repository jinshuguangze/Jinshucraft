/*石质变异室*/

/*属性*/
name = "entityStoneVariationRoom";//名称

/*特殊*/
//onItemSmelted = "";
ticksToSmelt = "350";
usedFuelLists = "fuelVariation";
usedRecipeLists = "StoneVariation";

/*触发器*/
onUpdate = "if(world.getContainerSlotItemName(position,0)!= null){mod.loadScript('StoneVariationRoomWorking.js');};";