function getODiv(id){
  return document.getElementById(id);
};
var oBtn = getODiv("oDiv6");

oBtn.onclick = function fn(){
  alert("在不没有努力之前，请先不要谈基础额！");
}
