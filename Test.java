/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.account;

import java.io.File;
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

/**
 *
 * @author IDB-CF
 */
public class Test extends Saving_Account {

    public static void main(String[] args) {

        Saving_Account rahim = new Saving_Account(1000100, "saving", 1500);

        Saving_Account kahim = new Saving_Account(1000202, "Running", 3000);

        try {
            File f = new File("D:\\shamim\\account.txt");
            f.createNewFile();

            FileOutputStream fis = new FileOutputStream(f);
            ObjectOutputStream pw = new ObjectOutputStream(fis);

            pw.writeObject(rahim);
            pw.writeObject(kahim);
            pw.flush();
            pw.close();

            FileOutputStream rfis = new FileOutputStream(f);
            ObjectOutputStream rpw = new ObjectOutputStream(rfis);

            rahim.deposit(1000);
            rpw.writeObject(rahim.amount);
            rpw.flush();
            rpw.close();
             System.out.println(rahim.amount);

        } catch (Exception e) {
            e.printStackTrace();
        }

       

    }

}
