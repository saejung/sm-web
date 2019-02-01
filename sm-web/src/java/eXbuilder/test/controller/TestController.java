package eXbuilder.test.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import eXbuilder.test.service.TestService;

@Controller
@RequestMapping("test")
public class TestController {
	
	@Autowired
	TestService testService;
		
	@RequestMapping("getTime.do")
	public View getTime(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) throws Exception{
		
		Map time = testService.getTime();
		
		/**
		 * dataRequest.setResponse()를 통하여 화면으로 데이터를 전달 합니다.
		 */
		dataRequest.setResponse("dm1", time);
		
		return new JSONDataView();
	}
	
	@RequestMapping("getMenuList.do")
	public View getMenuList(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) throws Exception{
		
		
		List<HashMap<String, String>> list = testService.getMenuList();
		
		dataRequest.setResponse("menu_ds", list); //dataRequest.setResponse()를 통하여 화면으로 데이터를 전달 합니다.
		
		return new JSONDataView();
	}
	
}
