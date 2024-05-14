package javacore;

import java.util.Scanner;

public class bai04 {
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Nhập số a: ");
		int a = scanner.nextInt();
		
		System.out.println("Nhập số b: ");
		int b = scanner.nextInt();
		
		if(a == 0 && b == 0) {
			System.out.println("Phương trình có vô số nghiệm");
		}else if(a == 0 && b != 0) {
			System.out.println("Phương trình vô nghiệm");
		}else {
			float x = (-b)/a;
			System.out.println("x = " + x);
		}
		scanner.close();
		
		
	}
}
