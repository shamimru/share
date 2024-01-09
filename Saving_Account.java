/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.account;

import java.io.Serializable;

/**
 *
 * @author IDB-CF
 */
public class Saving_Account implements Serializable {
    
    int accNumber;
    String accName;
    double amount;

    public Saving_Account() {
    }

    public Saving_Account(int accNumber, String accName, double amount) {
        this.accNumber = accNumber;
        this.accName = accName;
        this.amount = amount;
    }
    
    
    public void deposit(double amount){
        this.amount = this.amount+ amount;
    }

    
    
    
    
  
    
}
