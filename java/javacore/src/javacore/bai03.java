package javacore;

import java.util.Scanner;

public class bai03 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("Nhập cạnh: ");
		double canh = scanner.nextInt();

		double theTich = Math.pow(canh, 3);

		System.out.println("Thể tích hình lập phương : " + theTich);
		scanner.close();
	}
}
