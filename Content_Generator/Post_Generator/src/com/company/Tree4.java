package com.company;

import java.util.ArrayList;
import java.util.List;

public class Tree4 extends SentenceTree {
    List<String> Ing = new ArrayList<>();

    public Tree4()
    {
        super();
        setUpIng();
        cw = 0;
        construct();
    }

    void setUpIng()
    {
        Ing.add("running");
        Ing.add("spying");
        Ing.add("developing");
        Ing.add("programming");
        Ing.add("throwing");
        Ing.add("managing");
        Ing.add("laughing");
        Ing.add("studying");
        Ing.add("hitting");
        Ing.add("believing");
        Ing.add("insulting");
        Ing.add("tweeting");
        Ing.add("going");
        Ing.add("spreading");
        Ing.add("making");
        Ing.add("melting");
        Ing.add("rubbing");
        Ing.add("smelling");
        Ing.add("protesting");
        Ing.add("frying");
        Ing.add("poaching");
        Ing.add("eating");
        Ing.add("drinking");
        Ing.add("buying");
        Ing.add("praying");
        Ing.add("vomiting");
        Ing.add("twitching");
        Ing.add("live streaming");
        Ing.add("cutting");
        Ing.add("posting");
        Ing.add("dancing");
        Ing.add("howling");
        Ing.add("law-making");
        Ing.add("winking");
        Ing.add("social distancing");
        Ing.add("chewing");
    }

    private void construct()
    {
        int select = rand.nextInt(6);
        switch(select){
            case 0:
                sentence1();
                break;
            case 1:
                sentence2();
                break;
            case 2:
                sentence3();
                break;
            case 3:
                sentence4();
                break;
            case 4:
                sentence5();
                break;

            case 5:
                sentence6();
                break;
                /*
            case 6:
                sentence7();
                break;
                 */
        }
    }

    private void sentence1()
    {
        sentence.add(PropNouns.get(rand.nextInt(PropNouns.size())));
        cw++;
        sentence.add("announces that soon they will be");
        cw++;
        if(rand.nextBoolean()){
            sentence.add(Ing.get(rand.nextInt(Ing.size())));
        }
        else {
            sentence.add(Adj.get(rand.nextInt(Adj.size())));
        }
        cw++;
    }

    private void sentence2()
    {
        if(rand.nextBoolean()){
            sentence.add("I'm absolutely obsessed with");
        }
        else {
            sentence.add("My new favourite thing is");
        }
        cw++;
        if(rand.nextBoolean()){
            sentence.add(gerund.get(rand.nextInt(gerund.size())));
            if(rand.nextBoolean()){
                sentence.add(Nouns.get(rand.nextInt(Nouns.size())));
            }
            else {
                sentence.add(PlNouns.get(rand.nextInt(PlNouns.size())));
            }
        }
        else {
            sentence.add(PlNouns.get(rand.nextInt(PlNouns.size())));
        }
        if(rand.nextBoolean()){
            sentence.add("rn.");
        }
        else {
            sentence.add("atm.");
        }
        if(rand.nextBoolean()){
            sentence.add("It's actually unhealthy..");
        }
        if(rand.nextBoolean()){
            sentence.add("Like, I'm SERIOUSLY into it!");
        }
        if(rand.nextBoolean()){
            if(rand.nextBoolean()) {
                sentence.add("Is that weird?");
            }
            else {
                sentence.add("Is it just me?");
            }
        }
    }

    private void sentence3()
    {
        sentence.add("OMG");
        sentence.add("#"+Nouns.get(rand.nextInt(Nouns.size())));
        sentence.add("#"+Ing.get(rand.nextInt(Ing.size())));
    }

    private void sentence4()
    {
        sentence.add("BREAKING NEWS:");
        if(rand.nextBoolean()){
            sentence.add("as of today");
        }
        sentence.add(Ing.get(rand.nextInt(Ing.size())));
        sentence.add("has just");
        int x = rand.nextInt(4);
        if(x == 0){
            sentence.add("been made illegal!!!");
        }
        if(x == 1){
            sentence.add("been made compulsory!!!");
        }
        if(x == 2){
            sentence.add("become unfashionable..");
        }
        if(x == 3) {
            sentence.add("become unaffordable");
        }

    }

    private void sentence5()
    {
        sentence.add(pronouns.get(rand.nextInt(pronouns.size())));
        sentence.add("keep on");
        sentence.add(QAdverb.get(rand.nextInt(QAdverb.size())));
        sentence.add(Ing.get(rand.nextInt(Ing.size())));
        sentence.add("and I don't know why!");
    }

    private void sentence6()
    {
        if(rand.nextBoolean()){
            sentence.add(PropNouns.get(rand.nextInt(pronouns.size()))+"'s");
            sentence.add("new mixtape just dropped and it's absolute fire!!");
        }
        else {
            sentence.add("Check my bandcamp yooo!");
            sentence.add("It's");
            sentence.add(Adj.get(rand.nextInt(Adj.size())));
        }

    }

    /*
    (noun) announces that soon they will be (ingword) .
Omg # (noun) # (verb)
I love (noun) !
I can't believe that (noun) .
BREAKING NEWS: (verb) is now illegal! # (noun)
(noun) says that they can't wait to get rid of (adjective) (noun) .
I think that (noun) is going nowhere (adverb) .
     */
}
