package javacore;

import java.util.Scanner;

public class bai01 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Nhập tên sinh viên: ");
		String name = scanner.nextLine();
		
		System.out.println("Điểm trung bình: ");
		double avgPoint = scanner.nextDouble();
		
		System.out.println("Tên sinh viên: " + name);
		System.out.printf("Điểm trung bình: %.1f", avgPoint);
		scanner.close();
	}
}
