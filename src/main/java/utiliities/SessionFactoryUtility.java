package utiliities;

import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.model.naming.ImplicitNamingStrategyJpaCompliantImpl;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class SessionFactoryUtility {
	
private SessionFactory sf;
	
	private static SessionFactoryUtility sfu;
	
	private static String configFileLocation = "hibernate.cfg.xml"; //we shouldnt need this if we configure in the java
	
	public static SessionFactoryUtility getSessionFactoryUtil() {
		if (sfu == null) {
			sfu = new SessionFactoryUtility();
		}
		return sfu;
	}
	
	private SessionFactoryUtility() {
		if (sf == null) {
			//Hibernate 5 Set-Up
			StandardServiceRegistry standardRegistry = new StandardServiceRegistryBuilder().configure(configFileLocation).build();
			Metadata metadata = new MetadataSources(standardRegistry)
					.getMetadataBuilder()
					.applyImplicitNamingStrategy(ImplicitNamingStrategyJpaCompliantImpl.INSTANCE)
					.build();
			sf = metadata.getSessionFactoryBuilder().build();
		}
	}
	
	public SessionFactory getSessionFactory() {
		return this.sf;
	}

	public static void setConfigFileLocationToTest() {
		configFileLocation = "hibernate.cfg.xml";
	}
	
	

}
