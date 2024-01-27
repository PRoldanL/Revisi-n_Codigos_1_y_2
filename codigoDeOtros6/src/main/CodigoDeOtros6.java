/* Calificaciones

Marco Antonio Garcia Franco (4/5) "Competente"
Pedro Antonio Roldán Linares (4/5) "Competente"    */

package main;
import java.util.Scanner;

public class CodigoDeOtros6 {

    public static void main(String[] args) {
        int[] n = new int[20];

        for (int i = 0; i < 20; i++) {
            n[i] = (int)(Math.random() * 381) + 20;
            System.out.print(n[i] + " ");
        }

        System.out.println("\n¿Qué números quiere resaltar? ");
        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");

        Scanner scanner = new Scanner(System.in);
        int opcion = scanner.nextInt();

        int multiplo = (opcion == 1) ? 5 : 7;

        for (int e : n) {
            if (e % multiplo == 0) {
                System.out.print("[" + e + "] ");
            } else {
                System.out.print(e + " ");
            }
        }

        // Cerramos el Scanner después de su uso
        scanner.close();
    }
}
