package sn.codeur269.homedeliverypizzasapi.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sn.codeur269.homedeliverypizzasapi.entities.User;

/**@CrossOrigin(origins = "http://localhost:8100",
        methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE },
        maxAge = 3600)**/
@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepository extends MongoRepository<User, String> {

    //Login method
    User findByEmailAndPassword(String email, String password);
}
