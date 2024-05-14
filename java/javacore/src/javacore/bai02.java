package javacore;

import java.util.Scanner;

public class bai02 {
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);

		System.out.println("Nhập chiều dài HCN: ");
		int dai = scanner.nextInt();

		System.out.println("Nhập chiều rộng HCN: ");
		int rong = scanner.nextInt();
		
		int chuVi = (dai + rong)*2;
		int dienTich = dai * rong;
		int minHcn = Math.min(dai, rong);

		System.out.println("Chu vi hình chữ nhật : " + chuVi);
		System.out.println("Diện tích hình chữ nhật: " + dienTich);
		System.out.println("Cạnh nhỏ nhất của hình chữ nhật: " + minHcn);
		scanner.close();
	}
}
