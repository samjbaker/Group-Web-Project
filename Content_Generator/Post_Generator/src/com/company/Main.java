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
        facts.add("Twitter has been found to be a significant contributor to people's stress as it raised their awareness of the stress of others."
                + "However it can also be used as a coping mechanism. Increased use can decrease stress.");
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
        facts.add("An average user spent 145 minutes per day on social media in 2020, up from 90 minutes in 2012.");
        fact_ref.add("https://www.statista.com/statistics/433871/daily-social-media-usage-worldwide/");
        facts.add("50.1% of the time spent on mobile devices was spent on social media apps in 2020.");
        fact_ref.add("https://wearesocial.com/blog/2020/01/digital-2020-3-8-billion-people-use-social-media");
        facts.add("29% of people in the U.K. felt social media impacted their mental well-being in a negative way.");
        fact_ref.add("https://blog.globalwebindex.com/chart-of-the-week/social-media-amid-the-outbreak/");
        facts.add("In the U.S. and U.K. 57% of people say social media has helped them feel less lonely during the pandemic.");
        fact_ref.add("https://blog.globalwebindex.com/chart-of-the-week/social-media-amid-the-outbreak/");
        facts.add("4 out of 10 internet users in July 2020 reported being on social media platforms more than before the pandemic.");
        fact_ref.add("https://review42.com/resources/how-much-time-do-people-spend-on-social-media");
        facts.add("People aged 16 to 24 spend the most time on social media.");
        fact_ref.add("https://www.digitalinformationworld.com/2019/01/how-much-time-do-people-spend-social-media-infographic.html");
        facts.add("According to a survey of 1,500 people, social media sites make more than half of users feel inadequate.");
        fact_ref.add("https://www.huffingtonpost.co.uk/2014/07/25/social-media-mental-healt_n_5619728.html?ir=UK+Tech");
        facts.add("Half of 18 to 34-year-olds say going on social media makes them feel unattractive.");
        fact_ref.add("https://www.huffingtonpost.co.uk/2014/07/25/social-media-mental-healt_n_5619728.html?ir=UK+Tech");
        facts.add("A study of 7,000 19 to 32-year-olds found that those who spend the most time on social media were twice as likely to report experiencing social isolation.");
        fact_ref.add("https://www.ajpmonline.org/article/S0749-3797(17)30016-8/fulltext");
        facts.add("In a study of 600 adults, roughly a third said that social media made them feel more envious.");
        fact_ref.add("https://www.hu-berlin.de/en/press-portal/nachrichten-en/archive/nr1301/nr_130121_00");
        facts.add("Social media can really help reduce loneliness among elderly people");
        fact_ref.add("https://www.karger.com/article/fulltext/346818");
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
