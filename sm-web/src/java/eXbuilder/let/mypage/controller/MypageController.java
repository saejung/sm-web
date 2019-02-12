package eXbuilder.let.mypage.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

@Controller
@RequestMapping("mypage")
public class MypageController {
	
	@RequestMapping("/login.do")
	public View mainView(HttpServletRequest request, HttpServletResponse response) throws Exception{
		System.out.println("login");
		return new UIView("/app/mypage/login.clx");
	}
	
}
