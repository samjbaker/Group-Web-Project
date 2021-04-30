package com.company;
import org.json.JSONObject;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main {

    private SentenceTree t;
    String output;
    Random rand = new Random();
    List<String> facts = new ArrayList<>();
    List<String> fact_ref = new ArrayList<>();

    public Main()
    {
        setUpFacts();
        setupFile();
        for(int i = 0; i < 1000; i++){
            seeder();
            JSONify(true, i,false,"null");
        }
        for(int j = 0; j < facts.size(); j++){
            output = facts.get(j);
            JSONify(true,j,true,fact_ref.get(j));
        }
        seeder();
        JSONify(false, 50,false,"null");
        endFile();
    }

    void setUpFacts()
    {
        facts.add("The internet has 4.54 billion users.");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("There are 3.725 billion active social media users");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("On average, people have 7.6 social media accounts");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("Facebook Messenger and Whatsapp handle 60 billion messages a day");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("81% of teenagers felt social media has a positive effect on their lives");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("There are an estimated 270 million fake Facebook profiles");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("Facebook has 5 million active advertisers on the platform.");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("Facebook adds 500,000 new users every day; 6 new profiles every second");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("There are 500 million Tweets sent each day. That’s 6,000 Tweets every second");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("77% of Twitter users feel more positive about a brand when their Tweet has been replied to");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("People now watch 1 billion hours of YouTube videos every day");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("The most liked picture on Instagram is one of an egg");
        fact_ref.add("https://www.brandwatch.com/blog/amazing-social-media-statistics-and-facts/");
        facts.add("In a survey of 1,800 people, Twitter was found to be a “significant contributor” to stress because it increased their awareness of other people’s stress. "
                +"Confusingly it seems it also acted as a coping mechanism – the more it was used, the less stressed they became.");
        fact_ref.add("https://www.bbc.com/future/article/20180104-is-social-media-bad-for-you-the-evidence-and-the-unknowns");
        facts.add("In a 2014 Austrian study, it was found that participants reported lower moods after using Facebook for 20 minutes vs other internet use.");
        fact_ref.add("https://doi.org/10.1016/j.chb.2014.03.003");
        facts.add("A 2017 study in the journal for Computers in Human Behavior found a correlation between the number of social media platforms used by an individual, and their levels of anxiety and depression.");
        fact_ref.add("https://doi.org/10.1016/j.chb.2016.11.013");
        facts.add("When social media users receive positive feedback (eg likes), their brains produce dopamine");
        fact_ref.add("https://online.king.edu/news/psychology-of-social-media/");
        facts.add("Social media addiction has been found to be associated with a host of emotional, relational, health, and performance problems");
        fact_ref.add("https://cyberpsychology.eu/article/viewFile/11562/10369");
        facts.add("It has been reported that social media addiction affects approximately 12% of users across social networking sites");
        fact_ref.add("https://cyberpsychology.eu/article/viewFile/11562/10369");
    }

    void seeder()
    {
        int seed1, seed2;
        seed1 = rand.nextInt(4);
        output = choose(seed1);
        if((seed1 < 2) && (rand.nextInt(3)  < 1)){
            output += "and ";
            seed2 = rand.nextInt(2);
            output += choose(seed2);
        }
        if(seed1 < 2){
            StringBuilder out = new StringBuilder(output);
            out.setCharAt(out.lastIndexOf(" "),'.');
            output = out.toString();
        }
        else if(seed1 == 2) {
            StringBuilder out = new StringBuilder(output);
            out.setCharAt(out.lastIndexOf(" "),'?');
            output = out.toString();
        }
        if(rand.nextInt(6) < 1){
            output += additional();
        }
        System.out.println(output);
    }


    public static void main(String[] args)
    {
        Main m = new Main();
    }

    //Chooses which sentence structure to follow
    private String choose(int seed)
    {
        String out = "";
        switch(seed) {
            case 0:
                t = new Tree1();
                out += t.sentenceToString();
                break;
            case 1:
                t = new Tree2();
                out += t.sentenceToString();
                break;
            case 2:
                t = new Tree3();
                out += t.sentenceToString();
                break;
            case 3:
                t = new Tree4();
                out += t.sentenceToString();
        }
        return out;
    }

    private String additional()
    {
        addons a = new addons();
        return a.getOutput();
    }

    private void JSONify(boolean comma, int post_num, boolean fact, String fact_ref)
    {
        File file = new File("posts.json");
        JSONObject json = new JSONObject();
        json.put("user_id",(rand.nextInt(35) + 1));
        json.put("post_text",output);
        json.put("timestamp","25/12/2021");
        json.put("likes",rand.nextInt(3001));
        json.put("post_number",post_num);
        json.put("is_fact",fact);
        json.put("fact_ref",fact_ref);
        json.put("no_comments",rand.nextInt(100));
        String jsonString = json.toString();
        //next, saves the file:
        BufferedWriter bw = null;
        try {
            if (!file.exists()) {
                file.createNewFile();
            }
            FileWriter fw = new FileWriter(file,true);
            bw = new BufferedWriter(fw);
            bw.write(jsonString);
            if(comma){
                bw.write(",");
            }
            bw.write(System.lineSeparator());
        } catch (Exception ex) {
            System.out.println("error: " + ex.toString());
        }
        finally
        {
            try{
                if(bw!=null)
                    bw.close();
            }catch(Exception ex){
                System.out.println("Error in closing the BufferedWriter"+ex);
            }
        }
    }

    void setupFile()
    {
        File file = new File("posts.json");
        BufferedWriter bw = null;
        try {
            if (!file.exists()) {
                file.createNewFile();
            }
            FileWriter fw = new FileWriter(file);
            bw = new BufferedWriter(fw);
            bw.write("["+System.lineSeparator());
        } catch (Exception ex) {
            System.out.println("error: " + ex.toString());
        }
        finally
        {
            try{
                if(bw!=null)
                    bw.close();
            }catch(Exception ex){
                System.out.println("Error in closing the BufferedWriter"+ex);
            }
        }
    }

    void endFile()
    {
        File file = new File("posts.json");
        BufferedWriter bw = null;
        try {
            if (!file.exists()) {
                file.createNewFile();
            }
            FileWriter fw = new FileWriter(file,true);
            bw = new BufferedWriter(fw);
            bw.write("]"+System.lineSeparator());
        } catch (Exception ex) {
            System.out.println("error: " + ex.toString());
        }
        finally
        {
            try{
                if(bw!=null)
                    bw.close();
            }catch(Exception ex){
                System.out.println("Error in closing the BufferedWriter"+ex);
            }
        }
    }
}
