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
        if(plural){
            if(rand.nextBoolean()) {
                sentence.add("do");
            }
            else {
                sentence.add("can");
            }
        }
        else {
            if(rand.nextBoolean()) {
                sentence.add("does");
            }
            else {
                sentence.add("can");
            }
        }
        cw++;
        PNQ(plural);
        cw++;
        if(rand.nextBoolean()){
            sentence.add(QAdverb.get(rand.nextInt(QAdverb.size())));
            cw++;
        }
        sentence.add(opverb.get(rand.nextInt(opverb.size())));
        cw++;
        NP(true);
        //sentence.add("?");
        //cw++;
    }
}
