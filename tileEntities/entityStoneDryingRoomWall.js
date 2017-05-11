/*石质风干塔壁*/

/*属性*/
name = "entityStoneDryingRoomWall";//名称

/*触发器*/
onUpdate = "if(world.getTime()>=parseInt(world.getTileEntityStringData(position,'Time'))+60){world.setBlock(position,'jinshucraft:StoneDryingRoomWall');};";