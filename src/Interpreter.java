
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;
import java.util.*;

public class Interpreter extends fileObject {
    public ArrayList<String> sentenceCreator;
    public fileObject wordFetcher;

    public Interpreter() {
        sentenceCreator = new ArrayList<String>();
        wordFetcher = new fileObject();
    }

    public ArrayList<String> readSentence(String fileName, String filePath, int fileSize) {
        String line;
        String[] lineArray;
        int randomInt = chooseRandomLine(fileSize);
        try (Stream<String> lines = Files.lines(Paths.get(filePath + fileName))) {
            line = lines.skip(randomInt).findFirst().get();
            lineArray = line.split(" ");
            for (int i = 0; i < lineArray.length; i++) {
                sentenceCreator.add(lineArray[i]);
            }
            return sentenceCreator;
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println(e);
        }
        return null;
    }

    public void interpretSentence() {
        String path = "parts-of-speech-word-files" + File.separator;
        int size = 4;
        readSentence("SentenceBuilder.txt", path, size);
        if (sentenceCreator.contains("(noun)")) {
            int i = sentenceCreator.indexOf("(noun)");
            String noun = wordFetcher.getNoun();
            sentenceCreator.set(i, noun);
        }
        if (sentenceCreator.contains("(ingword)")) {
            int i = sentenceCreator.indexOf("(ingword)");
            String ingword = wordFetcher.getIngWord();
            sentenceCreator.set(i, ingword);
        }
        if (sentenceCreator.contains("(verb)")) {
            int i = sentenceCreator.indexOf("(verb)");
            String verb = wordFetcher.getVerb();
            sentenceCreator.set(i, verb);
        }
        firstWordToUpper();
        toString();
    }

    public ArrayList<String> firstWordToUpper() {
        String firstWord = sentenceCreator.get(0);
        String[] names = firstWord.split("\\s+");
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < names.length; i++) {
            if (i != 0) {
                sb.append(' ');
            }
            sb.append(Character.toUpperCase(names[i].charAt(0)));
            sb.append(names[i].substring(1).toLowerCase());
        }
        sentenceCreator.set(0, sb.toString());
        return sentenceCreator;
    }

    public String toString() {
        String sentenceString;
        sentenceString = sentenceCreator.toString()
                .replace("[", "")
                .replace("]", "")
                .replace(",", "")
                .replace("  .", ".")
                .replace(" .", ".")
                .replace(" !", "!")
                .replace("# ", "#");
        System.out.println("SENTENCE: " + sentenceString);
        return sentenceString;
    }
}
