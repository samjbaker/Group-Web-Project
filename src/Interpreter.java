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
        int size = 7;
        readSentence("SentenceBuilder.txt", path, size);
        for (int i = 0; i < sentenceCreator.size(); i++) {
            wordFiller(sentenceCreator.get(i), i);
        }
        firstWordToUpper();
        toString();
    }

    public ArrayList<String> wordFiller(String word, int i){
        if (word.equals("(noun)")) {
            String noun = wordFetcher.getNoun();
            sentenceCreator.set(i, noun);
        }
        if (word.equals("(ingword)")) {
            String ingword = wordFetcher.getIngWord();
            sentenceCreator.set(i, ingword);
        }
        if (word.equals("(verb)")) {
            String verb = wordFetcher.getVerb();
            sentenceCreator.set(i, verb);
        }
        if (word.equals("(adjective)")) {
            String adjective = wordFetcher.getAdjective();
            sentenceCreator.set(i, adjective);
        }
        if (word.equals("(adverb)")) {
            String adverb = wordFetcher.getAdverb();
            sentenceCreator.set(i, adverb);
        }
        return sentenceCreator;
    }

    public ArrayList<String> firstWordToUpper() {
        String firstWord = sentenceCreator.get(0);
        String[] wordArray = firstWord.split("\\s+");
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < wordArray.length; i++) {
            builder.append(Character.toUpperCase(wordArray[i].charAt(0)));
            builder.append(wordArray[i].substring(1));
        }
        sentenceCreator.set(0, builder.toString());
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

// https://stackoverflow.com/questions/26642860/capitalize-the-first-letter-in-a-arraylist-of-names

