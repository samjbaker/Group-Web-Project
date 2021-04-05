import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;
import java.util.Random;

public class fileObject {
    public String noun;
    public String adjective;
    public String adverb;
    public String verb;
    public String ingWord;

    public fileObject(){
    }

    public String readFile(String fileName, String filePath, int fileSize) {
        String line;
        int randomInt = chooseRandomLine(fileSize);
        try (Stream<String> lines = Files.lines(Paths.get(filePath + fileName))) {
            line = lines.skip(randomInt).findFirst().get();
            return line;
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println(e);
        }
        return null;
    }

    public int chooseRandomLine(int maxNumber){
        Random random = new Random();
        int randomNumber = random.nextInt(maxNumber);
        return randomNumber;
    }

    private void setNoun(){
        int fileSize = 91000;
        String fileName = "91Knouns.txt";
        String filePath = "parts-of-speech-word-files" + File.separator + "nouns" + File.separator;
        this.noun = readFile(fileName, filePath, fileSize);
    }

    public String getNoun(){
        setNoun();
        return noun;
    }

    private void setVerb(){
        int fileSize = 31000;
        String fileName = "31Kverbs.txt";
        String filePath = "parts-of-speech-word-files" + File.separator + "verbs" + File.separator;
        this.verb = readFile(fileName, filePath, fileSize);
    }

    public String getVerb(){
        setVerb();
        return verb;
    }

    private void setAdjective(){
        int fileSize = 28000;
        String fileName = "28Kadjectives.txt";
        String filePath = "parts-of-speech-word-files" + File.separator + "adjectives" + File.separator;
        this.adjective = readFile(fileName, filePath, fileSize);
    }

    public String getAdjective(){
        setAdjective();
        return adjective;
    }

    private void setAdverb(){
        int fileSize = 6000;
        String fileName = "6Kadverbs.txt";
        String filePath = "parts-of-speech-word-files" + File.separator + "adverbs" + File.separator;
        this.adverb = readFile(fileName, filePath, fileSize);
    }

    public String getAdverb(){
        setAdverb();
        return adverb;
    }

    public void setIngWord(){
        int fileSize = 139;
        String fileName = "ingwords.txt";
        String filePath = "parts-of-speech-word-files" + File.separator;
        this.ingWord = readFile(fileName, filePath, fileSize);
    }

    public String getIngWord(){
        setIngWord();
        return ingWord;
    }

}

// https://stackoverflow.com/questions/2312756/how-to-read-a-specific-line-using-the-specific-line-number-from-a-file-in-java
// http://www.ashley-bovan.co.uk/words/partsofspeech.html
