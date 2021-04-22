package com.company;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ProperNouns {
    private List<String> PropNouns = new ArrayList<>();
    private List<String> PropNounsPl = new ArrayList<>();
    private List<String> opverbSing = new ArrayList();
    private String output;

    public ProperNouns(boolean belong)
    {
        output = "";
        setUpPropNoun();
        setUpPropNounPl();
        setUpOpVerbSing();
        constructPropNoun(belong);
        //PropNouns = getNouns from file;
        //System.out.println(output);
    }

    private void setUpPropNoun()
    {
        PropNouns.add("Kylie Jenner");
        PropNouns.add("the Sphinx");
        PropNouns.add("Charles Dickens");
        PropNouns.add("Kanye");
        PropNouns.add("Beyonce");
        PropNouns.add("Brad Pitt");
        PropNouns.add("Scarlett Johanson");
        PropNouns.add("Mo Salah");
        PropNouns.add("David Beckham");
        PropNouns.add("Queen Elizabeth II");
        PropNouns.add("Bristol");
        PropNouns.add("Manchester");
        PropNouns.add("London");
        PropNouns.add("Germany");
        PropNouns.add("The EU");
        PropNouns.add("Donald Trump");
        PropNouns.add("Boris Johnson");
        PropNouns.add("The Eiffel Tower");
    }

    private void setUpPropNounPl()
    {
        PropNounsPl.add("Bristolians");
        PropNounsPl.add("Manchester United");
        PropNounsPl.add("The Tate Modern");
        PropNounsPl.add("Londoners");
        PropNounsPl.add("Parisians");
        PropNounsPl.add("The Kardashians");
        PropNounsPl.add("New Yorkers");
        PropNounsPl.add("Maroon 5");
        PropNounsPl.add("Backstreet Boys");
        PropNounsPl.add("the Alps");
        PropNounsPl.add("the Spice Girls");
        PropNounsPl.add("The Beatles");
        PropNounsPl.add("Londoners");
        PropNounsPl.add("Glastonbury festival");
    }

    void setUpOpVerbSing()
    {
        opverbSing.add("loves");
        opverbSing.add("hates");
        opverbSing.add("despises");
        opverbSing.add("admires");
        opverbSing.add("enjoys");
        opverbSing.add("supports");
        opverbSing.add("condones");
        opverbSing.add("loathes");
        opverbSing.add("provokes");
        opverbSing.add("advertises");
        opverbSing.add("yodels");
        opverbSing.add("launches");
        opverbSing.add("plays");
    }

    private void constructPropNoun(boolean belong)
    {
        Random rand = new Random();
        if(belong){
            output += PropNouns.get(rand.nextInt(PropNouns.size()));
            output += "'s ";
            return;
        }
        //output += PropNounsPl.get(rand.nextInt(PropNounsPl.size()));

        if(rand.nextBoolean()){
            output += PropNounsPl.get(rand.nextInt(PropNounsPl.size()));
        }
        else {
            output += PropNouns.get(rand.nextInt(PropNouns.size())) + " ";
            output += opverbSing.get(rand.nextInt(opverbSing.size()));
        }
    }

    public String getOutput()
    {
        return output;
    }
}
