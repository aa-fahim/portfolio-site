import React from 'react';
import '../../../App.css';
import './ChargingStation.css';

function ChargingStation() {
    return (
        <div className='posts'>
            <div className='container'>
                <h1 className='text-header'>
                    Priority Charging Management System for Electric Vehicles (EVs)
                </h1>
                <p className='text-paragraph'>
                    This is a practical proposal for implementation of real-time monitoring of charging stations for EVs with a mobile app controlling
                    the charging rate and displaying status updates to the user via Google Firebase. The project demonstrates my embedded software
                    development skills in programming microcontrollers with C to control various circuit components as well as my backend development
                    skills to develop API using JavaScript to provide CRUD functionality to Firebase’s real-time database.
                </p>
                <p className='text-paragraph'>
                    This project was completed as in the final year of my undergraduate over 2 semester terms and included 3 other group members. The
                    purpose of the project to demonstrate a proposal for a charging system that could be implemented in parking garages and lots, to allow
                    premium and non-premium charging of EVs. Customers who are willing to pay a premium fee will have their EV charged faster than those
                    who choose a non-premium fee. The system will manage and allocate resources dynamically to the charging stations to provide premium
                    rate charging to the users who have selected this option. The user can view and select the charging rates on the mobile app. Users
                    can also see how fast their car is charging, how much charge is required until 100%, and the estimated time completion.
                </p>
                <p className='text-paragraph'>
                    My responsibilities in this project included programming microcontrollers such as the Arduino Uno and NodeMCU ESP8266 to control AC
                    dimmers, voltage/current sensors, channel relays, WiFi shields, analog pin extenders, and LED displays. I was also responsible for
                    managing the backend database and create APIs to handle requests from the microcontrollers.
                </p>
                <p className='text-paragraph'>
                    The image below shows a prototype consisting of 3 charging stations where light bulbs were used as loads instead of EVs.
                </p>
                <img
                    className='prototype-img'
                    alt='Charging System Prototype'
                    src={'/images/img-16.jpg'}
                />
            </div>
        </div>
    )
}

export default ChargingStation;