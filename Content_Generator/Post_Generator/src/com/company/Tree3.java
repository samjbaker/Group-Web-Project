package com.company;

//Question tree
public class Tree3 extends SentenceTree {
    public Tree3()
    {
        super();
        cw = 0;
        construct();
    }

    private void construct()
    {
        sentence.add(question.get(rand.nextInt(question.size())));
        cw++;
        boolean plural = rand.nextBoolean();
        if(!sentence.get(0).contains("why")){
            if(plural){
                if(sentence.get(0).contains("Why")) {
                    sentence.add("do");
                }
                else{
                    if(rand.nextBoolean()){
                        sentence.add("can");
                    }
                    else {
                        sentence.add("should");
                    }
                }
            }
            else {
                if(sentence.get(0).contains("Why")) {
                    sentence.add("does");
                }
                else {
                    if(rand.nextBoolean()){
                        sentence.add("could");
                    }
                    else {
                        sentence.add("can");
                    }
                }
            }
        }
        cw++;
        PNQ(plural);
        cw++;
        if(rand.nextBoolean()){
            sentence.add(QAdverb.get(rand.nextInt(QAdverb.size())));
            cw++;
        }
        if(sentence.get(0).contains("why") && !plural){
            sentence.add(opverbSing.get(rand.nextInt(opverbSing.size())));
        }
        else {
            sentence.add(opverb.get(rand.nextInt(opverb.size())));
        }
        cw++;
        NP(true);
    }
}
