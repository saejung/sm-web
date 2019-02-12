package eXbuilder.let.menu.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

import eXbuilder.let.menu.service.MenuService;

@Controller
@RequestMapping("menu")
public class MenuController {
	
	@Autowired
	MenuService menuService;
		
	@RequestMapping("getMenuList.do")
	public View getMenuList(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) throws Exception{
		
		
		List<HashMap<String, String>> list = menuService.getMenuList();
		
		dataRequest.setResponse("menu_ds", list); //dataRequest.setResponse()를 통하여 화면으로 데이터를 전달 합니다.
		
		return new JSONDataView();
	}
	
}
