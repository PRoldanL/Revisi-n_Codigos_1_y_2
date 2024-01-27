/* Calificaciones

Marco Antonio Garcia Franco (4/5) "Competente"
Pedro Antonio Roldán Linares (4/5) "Competente"    */

package lcd3;

public class MangosNaranjas {
    private int mangos;
    private int naranjas;

    public MangosNaranjas(int mangos, int naranjas) {
        this.mangos = mangos;
        this.naranjas = naranjas;
    }

    public void imprimir() {
        int[] resultado = calcularCajas();
        System.out.println("El número de cajas es: " + resultado[0]);
        System.out.println("El número de mangos en una caja es: " + resultado[1]);
        System.out.println("El número de naranjas en una caja es: " + resultado[2]);
    }

    private int[] calcularCajas() {
        // Calcula el número máximo de cajas
        int numCajas = Math.min(mangos, naranjas);

        // Ajusta el número de cajas para que sea divisor de ambos mangos y naranjas
        while (mangos % numCajas != 0 || naranjas % numCajas != 0) {
            numCajas--;
        }

        // Calcula el número de mangos y naranjas por caja
        int mangosPorCaja = mangos / numCajas;
        int naranjasPorCaja = naranjas / numCajas;

        return new int[]{numCajas, mangosPorCaja, naranjasPorCaja};
    }
}
