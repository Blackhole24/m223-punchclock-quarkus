package ch.zli.m223.punchclock.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String location;

    @Column(nullable = false)
    private String title;
    
    @OneToMany(mappedBy="location", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Entry> entries;

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public void setILocation(String location){
        this.location = location;
    }

    public String getLocation(){
        return location;
    }

    public List<Entry> getEntries(){
        return entries;
    }

    public void setEntries(List<Entry> entries){
        this.entries = entries;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getTitle(){
        return title;
    }
    
}
