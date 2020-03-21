package configurations;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import utiliities.SessionFactoryUtility;

@Configuration
public class AppConfig {
	
	@Bean
	public SessionFactory sf() {
		return SessionFactoryUtility.getSessionFactoryUtil().getSessionFactory();
	}

}
