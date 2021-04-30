package com.company;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

//Generic sentence parent class
public class SentenceTree {

    List<String> sentence = new ArrayList<>();
    int cw;
    List<String> pronouns = new ArrayList<>();
    List<String> opverb = new ArrayList<>();
    List<String> gerund = new ArrayList<>();
    List<String> state = new ArrayList<>();
    List<String> PropNouns = new ArrayList<>();
    List<String> PropNounsPl = new ArrayList<>();
    List<String> opverbSing = new ArrayList();
    List<String> Nouns = new ArrayList<>();
    List<String> PlNouns = new ArrayList<>();
    List<String> Adj = new ArrayList<>();
    List<String> question = new ArrayList<>();
    List<String> QAdverb = new ArrayList<>();
    Random rand = new Random();

    public SentenceTree()
    {
        setUpPronouns();
        setUpGerund();
        setUpState();
        setUpOpVerb();
        setUpPropNoun();
        setUpPropNounPl();
        setUpOpVerbSing();
        setUpSingularNoun();
        setUpPluralNoun();
        setUpAdj();
        setUpQuest();
        setUpQAdverb();
    }

    void setUpPronouns()
    {
        pronouns.add("I");
        pronouns.add("you");
        pronouns.add("we");
        pronouns.add("some of us");
        pronouns.add("they");
        pronouns.add("none of us");
    }

    void setUpState()
    {
        state.add("bored of");
        state.add("scared of");
        state.add("sick of");
        state.add("weirded out by");
        state.add("lowkey afraid of");
        state.add("dreaming of");
        state.add("intimidated by");
        state.add("hungry for");
        state.add("excited about");
        state.add("upset by");
        state.add("against");
        state.add("not here for");
        state.add("soooo down with");
        state.add("soooo up for");
        state.add("overwhelmed by");
        state.add("happy about");
        state.add("unfussed about");
        state.add("not bothered by");
        state.add("running from");
        state.add("drinking with");
        state.add("confused about");
        state.add("out of touch with");
        state.add("taking a selfie with");
        state.add("sad about");
        state.add("living for");
    }

    void setUpGerund()
    {
        gerund.add("running");
        gerund.add("spying on");
        gerund.add("developing");
        gerund.add("programming");
        gerund.add("throwing");
        gerund.add("managing");
        gerund.add("laughing at");
        gerund.add("studying");
        gerund.add("hitting");
        gerund.add("believing");
        gerund.add("insulting");
        gerund.add("tweeting about");
        gerund.add("going to see");
        gerund.add("spreading");
        gerund.add("making");
        gerund.add("melting");
        gerund.add("rubbing");
        gerund.add("smelling");
        gerund.add("impeaching");
        gerund.add("protesting against");
        gerund.add("frying");
        gerund.add("poaching");
        gerund.add("eating");
        gerund.add("drinking with");
        gerund.add("buying");
        gerund.add("smoking");
    }

    void setUpOpVerb()
    {
        opverb.add("love");
        opverb.add("hate");
        opverb.add("despise");
        opverb.add("admire");
        opverb.add("enjoy");
        opverb.add("support");
        opverb.add("condone");
        opverb.add("trigger");
        opverb.add("impress");
        opverb.add("overwhelm");
        opverb.add("loathe");
        opverb.add("nurture");
        opverb.add("confuse");
        opverb.add("improve");
        opverb.add("allow");
    }

    //====================================================
    //Noun Phrase:
    //====================================================

    //boolean specifies whether 'the' can be included or not
    void NP(boolean det)
    {
        Random rand = new Random();
        if(rand.nextBoolean()){
            if(det) {
                sentence.add("the");
                cw++;
            }
            sentence.add(Adj.get(rand.nextInt(Adj.size())));
            sentence.add(Nouns.get(rand.nextInt(Nouns.size())));
        }
        else {
            sentence.add(Adj.get(rand.nextInt(Adj.size())));
            sentence.add(PlNouns.get(rand.nextInt(PlNouns.size())));
        }
        cw+=2;
    }

    private void setUpSingularNoun()
    {
        Nouns.add("soup");
        Nouns.add("tomato");
        Nouns.add("corona-virus");
        Nouns.add("man");
        Nouns.add("woman");
        Nouns.add("bandcamp page");
        Nouns.add("soundcloud rapper");
        Nouns.add("spaghetti bolognese");
        Nouns.add("kebab");
        Nouns.add("bacon bap");
        Nouns.add("bratwurst");
        Nouns.add("boy");
        Nouns.add("girl");
        Nouns.add("bit coin");
        Nouns.add("binary");
        Nouns.add("dog");
        Nouns.add("cat");
        Nouns.add("guitar");
        Nouns.add("wolf");
        Nouns.add("festival");
        Nouns.add("sea shanty");
        Nouns.add("wedding crasher");
        Nouns.add("owl");
        Nouns.add("fox");
        Nouns.add("robot");
        Nouns.add("vaccine");
        Nouns.add("social media addict");
        Nouns.add("business tycoon");
        Nouns.add("inventor");
        Nouns.add("crypto currency analyst");
        Nouns.add("stock broker");
        Nouns.add("salsa dancer");
        Nouns.add("surfer");
        Nouns.add("assembly language");
        Nouns.add("compiler");
        Nouns.add("chocolatier");
        Nouns.add("megabus");
        Nouns.add("influencer");
        Nouns.add("vlogger");
        Nouns.add("drum 'n' bass");
        Nouns.add("intel processor");
        Nouns.add("tech giant");
        Nouns.add("politician");
        Nouns.add("political rally");
        Nouns.add("shooting range");
        Nouns.add("shoe shop");
        Nouns.add("marmite");
        Nouns.add("instant ramen");
        Nouns.add("PS5");
        Nouns.add("intellectual property");
        Nouns.add("night club");
        Nouns.add("warehouse");
        Nouns.add("illegal rave");
        Nouns.add("jazz");
    }

    private void setUpPluralNoun()
    {
        PlNouns.add("men");
        PlNouns.add("women");
        PlNouns.add("tacos");
        PlNouns.add("burritos");
        PlNouns.add("bbqs");
        PlNouns.add("boys");
        PlNouns.add("girls");
        PlNouns.add("dogs");
        PlNouns.add("VR goggles");
        PlNouns.add("cats");
        PlNouns.add("owls");
        PlNouns.add("students");
        PlNouns.add("cigarettes");
        PlNouns.add("crypto currency miners");
        PlNouns.add("policemen");
        PlNouns.add("foxes");
        PlNouns.add("robots");
        PlNouns.add("social media addicts");
        PlNouns.add("instagram influencers");
        PlNouns.add("metal-detector enthusiasts");
        PlNouns.add("banking tycoons");
        PlNouns.add("politicians");
        PlNouns.add("right-handed people");
        PlNouns.add("techno DJs");
        PlNouns.add("country musicians");
        PlNouns.add("guitarists");
        PlNouns.add("internet pranksters");
        PlNouns.add("4chan posters");
        PlNouns.add("barn dancers");
        PlNouns.add("nerds");
        PlNouns.add("lecturers");
        PlNouns.add("lawyers");
        PlNouns.add("festival goers");
        PlNouns.add("body builders");
        PlNouns.add("football players");
        PlNouns.add("linguists");
        PlNouns.add("computer scientists");
        PlNouns.add("coffee snobs");
    }

    private void setUpAdj()
    {
        Adj.add("big");
        Adj.add("cool");
        Adj.add("smart");
        Adj.add("blatant");
        Adj.add("English");
        Adj.add("ironic");
        Adj.add("fat");
        Adj.add("stunning");
        Adj.add("gorgeous");
        Adj.add("omnipotent");
        Adj.add("scary");
        Adj.add("sly");
        Adj.add("lit");
        Adj.add("pink");
        Adj.add("purple");
        Adj.add("swollen");
        Adj.add("mega");
        Adj.add("smelly");
        Adj.add("woke");
        Adj.add("blue");
        Adj.add("green");
        Adj.add("golden");
        Adj.add("silver");
        Adj.add("pickled");
        Adj.add("drunk");
        Adj.add("turnt");
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
        Adj.add("mysterious");
        Adj.add("spooky");
        Adj.add("unidentified");
        Adj.add("noble");
        Adj.add("efficient");
        Adj.add("peng");
        Adj.add("genre-defining");
    }

    //====================================================
    //Proper Nouns:
    //====================================================

    private void setUpPropNoun()
    {
        PropNouns.add("Kylie Jenner");
        PropNouns.add("Frida Kahlo");
        PropNouns.add("the Sphinx");
        PropNouns.add("David Bowie");
        PropNouns.add("Taylor Swift");
        PropNouns.add("my uncle");
        PropNouns.add("my nan");
        PropNouns.add("Berlin");
        PropNouns.add("Beyonce");
        PropNouns.add("Meghan Markle");
        PropNouns.add("Prince Harry");
        PropNouns.add("Shrek");
        PropNouns.add("Shakespeare");
        PropNouns.add("Elton John");
        PropNouns.add("Brad Pitt");
        PropNouns.add("Scarlett Johansson");
        PropNouns.add("The Titanic");
        PropNouns.add("Bristol Museum");
        PropNouns.add("Mo Salah");
        PropNouns.add("Fakebook");
        PropNouns.add("Twitter");
        PropNouns.add("David Beckham");
        PropNouns.add("Charles Dickens");
        PropNouns.add("Kanye");
        PropNouns.add("J.K. Rowling");
        PropNouns.add("Elon Musk");
        PropNouns.add("Mark Zuckerberg");
        PropNouns.add("Queen Elizabeth II");
        PropNouns.add("Bristol");
        PropNouns.add("Manchester");
        PropNouns.add("London");
        PropNouns.add("Germany");
        PropNouns.add("The EU");
        PropNouns.add("The patriarchy");
        PropNouns.add("Donald Trump");
        PropNouns.add("Boris Johnson");
        PropNouns.add("The Eiffel Tower");
        PropNouns.add("The Pope");
        PropNouns.add("Cristiano Ronaldo");
        PropNouns.add("Justin Bieber");
        PropNouns.add("Beyonce");
        PropNouns.add("Billie Eilish");
        PropNouns.add("Lionel Messi");
        PropNouns.add("Kim Kardashian");
        PropNouns.add("Selena Gomez");
        PropNouns.add("The Rock");
        PropNouns.add("Ariana Grande");
    }

    private void setUpPropNounPl()
    {
        PropNounsPl.add("Bristolians");
        PropNounsPl.add("anti-vaxxers");
        PropNounsPl.add("millenials");
        PropNounsPl.add("Manchester United");
        PropNounsPl.add("The Tate Modern");
        PropNounsPl.add("Londoners");
        PropNounsPl.add("Parisians");
        PropNounsPl.add("the Kardashians");
        PropNounsPl.add("New Yorkers");
        PropNounsPl.add("Maroon 5");
        PropNounsPl.add("the Backstreet Boys");
        PropNounsPl.add("the Alps");
        PropNounsPl.add("the Spice Girls");
        PropNounsPl.add("The Beatles");
        PropNounsPl.add("the people of Slough");
        PropNounsPl.add("Glastonbury festival");
        PropNounsPl.add("Destiny's Child");
        PropNounsPl.add("the cast of Game of Thrones");
        PropNounsPl.add("goblins");
        PropNounsPl.add("UWE students");
        PropNounsPl.add("Facebook");
        PropNounsPl.add("Instagram");
        PropNounsPl.add("Whatsapp");
        PropNounsPl.add("Twitter");
        PropNounsPl.add("TikTok");
    }

    void setUpOpVerbSing()
    {
        opverbSing.add("loves");
        opverbSing.add("hates");
        opverbSing.add("despises");
        opverbSing.add("admires");
        opverbSing.add("enjoys");
        opverbSing.add("supports");
        opverbSing.add("betrays");
        opverbSing.add("condones");
        opverbSing.add("loathes");
        opverbSing.add("programs");
        opverbSing.add("develops");
        opverbSing.add("provokes");
        opverbSing.add("advertises");
        opverbSing.add("retweets");
        opverbSing.add("blocks");
        opverbSing.add("launches");
        opverbSing.add("plays");
        opverbSing.add("embezzles");
        opverbSing.add("understands");
        opverbSing.add("avoids");
        opverbSing.add("massages");
        opverbSing.add("DMs");
    }

    void PN(boolean plural)
    {
        Random rand = new Random();
        //output += PropNounsPl.get(rand.nextInt(PropNounsPl.size()));
        if(plural){
            sentence.add(PropNounsPl.get(rand.nextInt(PropNounsPl.size())));
        }
        else {
            sentence.add(PropNouns.get(rand.nextInt(PropNouns.size())));
            sentence.add(opverbSing.get(rand.nextInt(opverbSing.size())));
        }
    }

    //for use in questions
    void PNQ(boolean plural)
    {
        Random rand = new Random();
        //output += PropNounsPl.get(rand.nextInt(PropNounsPl.size()));

        if(plural){
            sentence.add(PropNounsPl.get(rand.nextInt(PropNounsPl.size())));
        }
        else {
            sentence.add(PropNouns.get(rand.nextInt(PropNouns.size())));
        }
    }

    void PNbelong()
    {
        sentence.add(PropNouns.get(rand.nextInt(PropNouns.size()))+"'s");
    }

    /*
    =================================================================
    */

    //Beginning of questions
    void setUpQuest()
    {
        question.add("Why");
        question.add("How");
        question.add("Hello hivemind.. Does anyone know why");
        question.add("Why on Earth");
        question.add("Can someone please tell me why");
        question.add("I need advice.. Why");
        question.add("My friend wants to know why");
    }

    void setUpQAdverb()
    {
        QAdverb.add("always");
        QAdverb.add("really");
        QAdverb.add("sometimes");
        QAdverb.add("rarely");
        QAdverb.add("never");
        QAdverb.add("slyly");
        QAdverb.add("occasionally");
        QAdverb.add("often");
        QAdverb.add("frequently");
        QAdverb.add("furiously");
        QAdverb.add("rightly");
        QAdverb.add("nervously");
        QAdverb.add("vindictively");
        QAdverb.add("carefully");
        QAdverb.add("pompously");
        QAdverb.add("weirdly");
        QAdverb.add("softly");
        QAdverb.add("gently");
        QAdverb.add("repeatedly");
        QAdverb.add("unfairly");
        QAdverb.add("supposedly");
        QAdverb.add("allegedly");
        QAdverb.add("covertly");
        QAdverb.add("continuously");
        QAdverb.add("continually");
        QAdverb.add("casually");
        QAdverb.add("effectively");
    }

    /*
    =================================================================
    */
    void areAm()
    {
        int split = rand.nextInt(7);
        if(sentence.get(cw - 1).equals("I")){
            sentence.add("am");
        }
        else {
            if(split > 5){
                sentence.add("should be");
            }
            else if(split == 5) {
                sentence.add("might be");
            }
            else {
                sentence.add("are");
            }
        }
        cw++;
    }

    public String sentenceToString()
    {
        String output = "";
        /*
        for(int i = 0; i < sentence.size() -1; i++){
            output += sentence.get(i) + " ";
        }

        output += sentence.get(sentence.size()-1);
         */
        for(String s : sentence){
            output += s + " ";
        }
        return output;
    }
}
