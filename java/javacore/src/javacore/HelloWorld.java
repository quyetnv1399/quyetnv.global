package javacore;

import java.util.Scanner;

public class HelloWorld {
	public static void main(String[] args) {
		
		int a = 6;
		int b = 9;
		
		int c = Math.min(a,b);
		
		System.out.println("Max = " + c);
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("First number: " + Math.sqrt(100));
		int firstNumber = scanner.nextInt();
		
		System.out.println("Second number: ");
		int secondNumber = scanner.nextInt();
		
		System.out.println("Min = " + Math.min(firstNumber, secondNumber));
		scanner.close();
	}
}
