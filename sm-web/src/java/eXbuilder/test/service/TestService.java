package eXbuilder.test.service;

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
}
