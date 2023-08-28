package sn.codeur269.homedeliverypizzasapi.entities;

import org.springframework.data.annotation.Id;

public class Order {
    @Id
    private String id;
    private int nbrPizzas;
    private String adresse;
    private Pizza pizza;
    private User user;

    public Order(String id, int nbrPizzas, String adresse, Pizza pizza, User user) {
        this.id = id;
        this.nbrPizzas = nbrPizzas;
        this.adresse = adresse;
        this.pizza = pizza;
        this.user = user;
    }

    public String getId() {
        return id;
    }

    public int getNbrPizzas() {
        return nbrPizzas;
    }

    public String getAdresse() {
        return adresse;
    }

    public Pizza getPizza() {
        return pizza;
    }

    public User getUser() {
        return user;
    }
}
