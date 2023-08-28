package sn.codeur269.homedeliverypizzasapi.entities;

import org.springframework.data.annotation.Id;


public class User {

    @Id
    private String id;
    private String email;
    private String password;
    private String fullname;
    private String tel;

    public User(String id, String email, String password, String fullname, String tel) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.tel = tel;
    }

    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getFullname() {
        return fullname;
    }

    public String getTel() {
        return tel;
    }

    @Override
    public String toString() {
        return String.format(
                "User[_id=%s,email=%s, fullname='%s', tel='%s']",
                id,email, fullname, tel);
    }
}
