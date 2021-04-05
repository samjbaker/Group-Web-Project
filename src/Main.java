public class Main {

    public static void main(String[] args) {
        Interpreter myInterpreter = new Interpreter();
        try {
            myInterpreter.interpretSentence();
        }
        catch (NullPointerException n){
            n.printStackTrace();
            System.out.println(n);
        }
    }
}


