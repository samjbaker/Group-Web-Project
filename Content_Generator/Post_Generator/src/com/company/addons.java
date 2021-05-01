package com.company;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class addons {

    Random rand = new Random();
    private List<String> a = new ArrayList<>();
    private String output;
    public addons()
    {
        setUpList();
        construct();
    }

    private void setUpList()
    {
        a.add("Just sayin'");
        a.add("Like, seriously?!");
        a.add("Come on people!");
        a.add("YOLO!");
        a.add("The state of the world we live in...");
        a.add("Well, I guess that's enough social media for one day!");
        a.add("LMAO");
        a.add("C'est la vie");
        a.add("Get a grip!");
        a.add(";)");
        a.add("=)");
        a.add("=(");
        a.add("Bonk!");
        a.add("#soup");
        a.add("#hashtag");
        a.add("#fakebook");
        a.add("One like = one prayer");
        a.add("It's ridiculous!");
        a.add("Haters gonna hate.");
        a.add("Count me out!");
        a.add("It's a joke!");
        a.add("Politics eh?");
        a.add("#heinzcreamoftomato");
        a.add("#soupgate");
        a.add("No siree!");
        a.add("Not on my watch!");
        a.add("Not if I have anything to say about it!");
        a.add("Damn right!");
        a.add("*sigh*");
        a.add("You go gurl!");
        a.add("It's all nonsense!");
        a.add("#sympathy");
        a.add("#belieber");
        a.add("#nonsense");
        a.add("#socialmedia");
        a.add("#postCOVID");
        a.add("#PlagueRave");
        a.add("#gossip");
        a.add("#AcidHouse");
        a.add("#hiphop");
        a.add("#bristol");
        a.add("#0117");
        a.add("#bitcoin");
        a.add("#webdevelopment");
        a.add("#randomizeme");
    }

    private void construct()
    {
        output = a.get(rand.nextInt(a.size()));
    }

    public String getOutput()
    {
        return " "+output;
    }
}
