package com.company;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class NounPhrase {
    private String output;
    private List<String> Nouns = new ArrayList<>();
    private List<String> PlNouns = new ArrayList<>();
    private List<String> Adj = new ArrayList<>();

    public NounPhrase()
    {
        setUpSingularNoun();
        setUpPluralNoun();
        setUpAdj();
        constructNP();
        //Nouns = getNouns from file;
        //System.out.println(output);
    }

    private void setUpSingularNoun()
    {
        Nouns.add("man");
        Nouns.add("bandcamp page");
        Nouns.add("soundcloud rapper");
        Nouns.add("woman");
        Nouns.add("boy");
        Nouns.add("girl");
        Nouns.add("dog");
        Nouns.add("cat");
        Nouns.add("guitar");
        Nouns.add("wolf");
        Nouns.add("festival");
        Nouns.add("owl");
        Nouns.add("fox");
        Nouns.add("robot");
        Nouns.add("social media addict");
        Nouns.add("business tycoon");
        Nouns.add("inventor");
        Nouns.add("crypto currency analyst");
        Nouns.add("stock broker");
        Nouns.add("salsa dancer");
        Nouns.add("surfer");
        Nouns.add("chocolatier");
        Nouns.add("influencer");
        Nouns.add("vlogger");
        Nouns.add("tech giant");
        Nouns.add("politician");
        Nouns.add("political rally");
        Nouns.add("shooting range");
        Nouns.add("shoe shop");
        Nouns.add("soup");
    }

    private void setUpPluralNoun()
    {
        PlNouns.add("men");
        PlNouns.add("women");
        PlNouns.add("boys");
        PlNouns.add("girls");
        PlNouns.add("dogs");
        PlNouns.add("cats");
        PlNouns.add("owls");
        PlNouns.add("students");
        PlNouns.add("foxes");
        PlNouns.add("robots");
        PlNouns.add("social media addicts");
        PlNouns.add("instagram influencers");
        PlNouns.add("banking tycoons");
        PlNouns.add("politicians");
        PlNouns.add("right-handed people");
        PlNouns.add("techno DJs");
        PlNouns.add("lawyers");
        PlNouns.add("festival goers");
        PlNouns.add("body builders");
        PlNouns.add("football players");
        PlNouns.add("linguists");
        PlNouns.add("computer scientists");
    }

    private void setUpAdj()
    {
        Adj.add("big");
        Adj.add("blatant");
        Adj.add("fat");
        Adj.add("stunning");
        Adj.add("gorgeous");
        Adj.add("scary");
        Adj.add("sly");
        Adj.add("pink");
        Adj.add("purple");
        Adj.add("blue");
        Adj.add("green");
        Adj.add("golden");
        Adj.add("silver");
        Adj.add("pickled");
        Adj.add("drunken");
        Adj.add("sober");
        Adj.add("spotted");
        Adj.add("rare");
        Adj.add("anti-fascist");
        Adj.add("superhuman");
        Adj.add("daring");
        Adj.add("esoteric");
        Adj.add("electronic");
        Adj.add("fine");
        Adj.add("colourless");
    }


    private void constructNP()
    {
        Random rand = new Random();
        output = "";
        if(rand.nextBoolean()){
            if(rand.nextBoolean()){
                output += "the ";
                output += Adj.get(rand.nextInt(Adj.size())) + " ";
                output += Nouns.get(rand.nextInt(Nouns.size()));
            }
            else {
                output += Adj.get(rand.nextInt(Adj.size())) + " ";
                output += PlNouns.get(rand.nextInt(PlNouns.size()));
            }
        }
        else {
            if(rand.nextBoolean()){
                output += Adj.get(rand.nextInt(Adj.size())) + " ";
                output += Nouns.get(rand.nextInt(Nouns.size()));
            }
            else {
                output += Adj.get(rand.nextInt(Adj.size())) + " ";
                output += PlNouns.get(rand.nextInt(PlNouns.size()));
            }
        }
    }

    public String getOutput()
    {
        return output;
    }
}
