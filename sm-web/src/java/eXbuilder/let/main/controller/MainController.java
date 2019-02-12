package eXbuilder.let.main.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

@Controller
public class MainController {
	
	@RequestMapping("/main.do")
	public View mainView(HttpServletRequest request, HttpServletResponse response) throws Exception{
		System.out.println("main");
		return new UIView("/app/main.clx");
	}
	
}
