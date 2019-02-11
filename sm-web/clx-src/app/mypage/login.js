/************************************************
 * login.js
 * Created at 2019. 1. 28. 오후 3:41:39.
 *
 * @author bumil
 ************************************************/



/*
 * "login" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var button = e.control;
	alert("login");
}
