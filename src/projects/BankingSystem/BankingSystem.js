import React from "react";
import "../../App.css";
import "./BankingSystem.css";

function BankingSystem() {
  return (
    <div className="posts">
      <div className="container">
        <h1 className="text-header">Java Banking System</h1>
        <p className="text-paragraph">
          This project was completed as part of a Object Oriented Programming
          (OOP) course which focused on learning the pillars of OOP including
          inheritance, polymorphism, and encapsulation. This project is a
          demonstration of those concepts used in the application to create
          various classes and subclasses in Java.
        </p>
        <p className="text-paragraph">
          The banking system will ask for a username and password to login.
          There will be two types of accounts; manager and customer. The manager
          account can be accessed by entering "admin" for both username and
          password. The manager account can create and delete customer accounts.
          Upon creating a customer account, the initial account amount will be
          set to $100. This will also create .txt file inside the folder where
          the first line represents the username, the second line represents the
          password and the third line represents the initial account amount.
        </p>
        <img
          className="prototype-img"
          alt="Charging System Prototype"
          src={"/images/post-bankingsystem-1.jpg"}
        />
        <p className="image-caption">
          Login menu for both managers and customers
        </p>
        <img
          className="prototype-img"
          alt="Charging System Prototype"
          src={"/images/post-bankingsystem-2.jpg"}
        />
        <p className="image-caption">Option menu for managers</p>
        <p className="text-paragraph">
          The customer can now login into their account by entering the username
          and password set by the manager. The customer can deposit, withdraw,
          make an online purchase, check their balance or logout. Any changes
          made to the customer's account amount via deposit, withdraw, or online
          purchase must be saved by the customer safely logging out afterwards.
        </p>
        <img
          className="prototype-img"
          alt="Charging System Prototype"
          src={"/images/post-bankingsystem-3.jpg"}
        />
        <p className="image-caption">Option menu for customers</p>
        <p className="text-paragraph">
          Customer will have 3 different membership levels; silver, gold and
          platinum. Silver membership customers have an account amount of less
          than $10000, gold membership customers have an account amount of at
          least $10000 and less than $20000, and platinum membership customers
          will have an account amount of at least $20000.
        </p>
        <p className="text-paragraph">
          Online purchases must be of at least $50 value plus an additional fee
          based on the customer's membership level. Silver membership customers
          will be charged an extra $20, gold membership customers will be
          charged an extra $10 and platinum membership customers will not be
          charged an extra fee for their online purchase.
        </p>
        <p className="text-paragraph">
          The github repository for this project can be found&nbsp;
          <a href="https://github.com/aa-fahim/BankingSystem" target="_blank">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default BankingSystem;
