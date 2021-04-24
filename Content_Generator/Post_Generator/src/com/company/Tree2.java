package com.company;

public class Tree2 extends SentenceTree {

    public Tree2()
    {
        super();
        cw = 0;
        construct();
    }

    private void construct()
    {
        if(rand.nextBoolean()){
            PN(true);
            cw++;
            areAm();
            if(rand.nextBoolean()){
                sentence.add(state.get(rand.nextInt(state.size())));
            }
            else {
                sentence.add(gerund.get(rand.nextInt(gerund.size())));
            }
        }
        else {
            PN(false);
        }
        cw++;
        if(rand.nextBoolean()){
            PNbelong();
            NP(false);
            cw+=2;
        }
        else {
            NP(true);
            cw++;
        }
    }
}
