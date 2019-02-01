package eXbuilder.test.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
	@Autowired
	private SqlSessionTemplate sqlSession;
		
	public Map getTime() {
		return sqlSession.selectOne("test.getTime");
	}

	public List<HashMap<String, String>> getMenuList() {
		return  sqlSession.selectList("test.getMenuList");
	}

}
