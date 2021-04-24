package com.company;

public class Tree1 extends SentenceTree {

    public Tree1()
    {
        super();
        cw = 0;
        construct();
    }



    private void construct()
    {
        NounPhrase np = new NounPhrase();
        sentence.add(pronouns.get(rand.nextInt(pronouns.size())));
        cw++;
        if(rand.nextBoolean()){
            areAm();
            if(rand.nextBoolean()){
                sentence.add(state.get(rand.nextInt(state.size())));
            }
            else {
                sentence.add(gerund.get(rand.nextInt(gerund.size())));
            }
        }
        else {
            sentence.add(opverb.get(rand.nextInt(opverb.size())));
        }
        cw++;
        NP(true);
        cw++;
    }

    public String sentenceToString()
    {
        String output = "";
        for(String s : sentence){
            output += s + " ";
        }
        return output;
    }

}
