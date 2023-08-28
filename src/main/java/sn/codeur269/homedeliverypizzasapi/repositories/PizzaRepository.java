package sn.codeur269.homedeliverypizzasapi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sn.codeur269.homedeliverypizzasapi.entities.Pizza;

@RepositoryRestResource(collectionResourceRel = "pizza", path = "pizza")
public interface PizzaRepository extends MongoRepository<Pizza, String> {
}
