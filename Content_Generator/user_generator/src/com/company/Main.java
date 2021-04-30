package com.company;
import org.json.JSONObject;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main {

    List<String> names = new ArrayList<>();
    File file;
    BufferedWriter bw;
    FileWriter fw;

    public Main()
    {
        setUpNames();
        setupFile();
        for(int i = 0; i < names.size() - 1 ; i++){
            JSONify(true,i);
            //System.out.println(names.get(i));
        }
        JSONify(false, names.size() - 1);
        endFile();
    }

    void setupFile()
    {
        file = new File("users.json");
        BufferedWriter bw = null;
        try {
            if (!file.exists()) {
                file.createNewFile();
            }
            fw = new FileWriter(file);
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

    private void JSONify(boolean comma, int user_num)
    {
        JSONObject json = new JSONObject();
        json.put("user_id",user_num);
        json.put("user_name",names.get(user_num));
        json.put("pic_filename","assets/profile_images/bot_images/"+user_num+".png");
        String jsonString = json.toString();
        //next, saves the file:
        bw = null;
        try {
            fw = new FileWriter(file,true);
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

    void endFile()
    {
        bw = null;
        try {
            fw = new FileWriter(file,true);
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

    private void setUpNames()
    {
        names.add("Real_User_xox");
        names.add("Martin Machine");
        names.add("Ibrahim Bot");
        names.add("Smith Jones II Bot");
        names.add("Abdi AI");
        names.add("Camilla Circuitboard");
        names.add("Beatrice Botter");
        names.add("Jemima JSON");
        names.add("Tronald Dump");
        names.add("Clarence C++");
        names.add("Patrizia Python");
        names.add("Noel Nilsson");
        names.add("Nina Nonsense");
        names.add("Roger Rank");
        names.add("Sarah Cho");
        names.add("Botty Robotnick");
        names.add("Betty Boolean");
        names.add("Aaron Botmas");
        names.add("Botthew McCarthy");
        names.add("Harry Botter");
        names.add("Veronica Automatron");
        names.add("Fakob Black");
        names.add("Klaus Machinen");
        names.add("Sally Script");
        names.add("Tina Codswallop");
        names.add("George Grumple");
    }

    public static void main(String[] args)
    {
	    Main m = new Main();
    }
}
