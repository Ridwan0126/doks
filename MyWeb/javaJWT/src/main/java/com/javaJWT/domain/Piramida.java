package com.javaJWT.domain;

import java.util.Scanner;

public class Piramida {
//    public static void main (String args[]){
//        int v = 6;
//        int a,b,c;

//        for(a=0;a<=v;a++)
//        {
//            for(b=0;b<=a;b++)
//            {
//                System.out.print(" ");
//            }
//            for(c=0;c>=(a-v);c--)
//            {
//                System.out.print("*");
//            }
//            for(c=0;c<(v-a);c++)
//            {
//                System.out.print("*");
//            }
//            System.out.println("");
//        }
//        public static void main(String[] args) {
//            String kata = "Kasur Rusak";
//            int i;
//            int jumlah = kata.length();
//            int jum = jumlah - 1 ;
//            String hasil = "";
//            for (i=0;i<jumlah;i++){
//                hasil = hasil + kata.charAt(jum);
//                jum--;
//            }
//            System.out.println(hasil);
//            char[] huruf = kata.toCharArray();
//            String kata2 = "";
//            for (i = huruf.length - 1; i >= 0; i--) {
//                System.out.print(huruf[i]);
//            }
//        }
//    }
public static void main(String[] args) {

//    Scanner s=new Scanner(System.in);
//
//    System.out.printf("Masukkan sebuah bilangan : ");
//
//    int bilangan=s.nextInt();
    int bilangan[] = (1, 21, 2, 333, 4, 33, 223, 432, 444, 21, 1, 0);

    for (int i = 0; i < bilangan.length; i++) {
        if (bilangan[i] % 2 == 1) {

            System.out.printf(bilangan + " adalah bilangan GANJIL ");

        } else

            System.out.printf(bilangan + " adalah bilangan GENAP ");

    }
}
}
