import java.util.Arrays;

public class GcdLcm {
    
    public int[] solution(int n, int m){
        int gcdVal = gcd(n, m);
        int lcmVal = lcm(n, m);

        return new int[]{gcdVal, lcmVal};
    }

    // GCD (Greatest Common Divisor)
    private int gcd(int a, int b){
        while (b != 0) {
            int temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    // LCM (Least Common Multiple)
    private int lcm(int a, int b){
        return (a * b) / gcd(a, b);
    }

    public static void main(String[] args){
        int n = 3;
        int m = 12;
        GcdLcm g = new GcdLcm();
        System.out.println(Arrays.toString(g.solution(n, m)));
    }
}
