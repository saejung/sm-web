package eXbuilder.let.menu.service;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuService {
	@Autowired
	private SqlSessionTemplate sqlSession;
		
	public List<HashMap<String, String>> getMenuList() {
		return  sqlSession.selectList("menu.getMenuList");
	}

}
