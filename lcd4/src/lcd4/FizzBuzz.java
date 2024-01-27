/* Calificaciones

Marco Antonio Garcia Franco (4/5) "Competente"
Pedro Antonio Roldán Linares (4/5) "Competente"    */

package lcd4;

public class FizzBuzz {

	public void imprimir() {
	        for (int i = 1; i <= 100; i++) {
	            if (i % 3 == 0 && i % 5 == 0) {
	                System.out.println("FizzBuzz");
	            } else if (i % 3 == 0) {
	                System.out.println("Fizz");
	            } else if (i % 5 == 0) {
	                System.out.println("Buzz");
	            } else {
	                System.out.println(i);
	            }
	        }
	}
}