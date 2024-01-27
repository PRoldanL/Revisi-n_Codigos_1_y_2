/* Calificaciones

Marco Antonio Garcia Franco (4/5) "Competente"
Pedro Antonio Roldán Linares (4/5) "Competente"    */

package lcd3;

import java.util.Scanner;

public class MangosNaranjasMain {

    public static void main(String[] args) {
        // Pide al usuario ingresar los números de mangos y naranjas
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese el número de mangos: ");
        int mangos = scanner.nextInt();
        System.out.print("Ingrese el número de naranjas: ");
        int naranjas = scanner.nextInt();

        // Crea un objeto de la clase MangosNaranjas
        MangosNaranjas mnObj = new MangosNaranjas(mangos, naranjas);

        // Imprime los resultados
        mnObj.imprimir();
    }
}





