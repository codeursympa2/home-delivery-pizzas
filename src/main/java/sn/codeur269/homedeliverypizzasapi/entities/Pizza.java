package sn.codeur269.homedeliverypizzasapi.entities;

import org.springframework.data.annotation.Id;

public class Pizza {
    @Id
    private String id;
    private String nom;
    private int prix;
    private String image;
    private boolean disponibilite;

    public Pizza(String id, String nom, int prix, String image, boolean disponibilite) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.image = image;
        this.disponibilite = disponibilite;
    }

    public String getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public int getPrix() {
        return prix;
    }

    public String getImage() {
        return image;
    }

    public boolean isDisponibilite() {
        return disponibilite;
    }
}
