/************************************************
 * app/test.js
 * Created at 2019. 1. 30. 오후 5:30:05.
 *
 * @author hong6
 ************************************************/

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms2SubmitSuccess(/* cpr.events.CSubmissionEvent */ e){
	/** 
	 * @type cpr.protocols.Submission
	 */
	var sms2 = e.control;
	app.lookup("menu1").redraw();
}

/*
 * Body에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(/* cpr.events.CEvent */ e){
	app.lookup("sms2").send(); //서브미션 sms2 에 전송
}


/*
 * 네비게이션 바에서 selection-change 이벤트 발생 시 호출.
 * 선택된 Item 값이 저장된 후에 발생하는 이벤트.
 */
function onMenu1SelectionChange(/* cpr.events.CSelectionEvent */ e){
	/** 
	 * @type cpr.controls.NavigationBar
	 */
	var menu1 = e.control;
	var item = menu1.getSelectionLast();
	var itemUrl = './' + item.value + '.clx';
	var itemParentUrl = item.parentValue;

	if (itemParentUrl != "" && itemUrl != "") {
		console.log(itemParentUrl);
		//메뉴에서 선택한 value url controller에 던지기
		location.href = itemUrl;
	}
	//메뉴에서 선택된 아이템을 모두 선택 해제
	menu1.clearSelection(false);
}
