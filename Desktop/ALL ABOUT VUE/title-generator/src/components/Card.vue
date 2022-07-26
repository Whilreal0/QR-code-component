<template>
  <v-card class="mt-10 mx-auto pa-4 ma-lx-5" color="transparent" elevation="0" width="min(95%, 25rem)" >
    <v-card-title class="justify-center mb-8" id="title">Thesis Title Generator</v-card-title>
    
    <div class="mb-5 text-center">
      
      <v-card-actions class="pa-0 ">
        <v-col>
          <v-btn id="btn"  icon @click="generate" ><v-icon large>mdi-cached</v-icon></v-btn>
        </v-col>
        <v-col class="">
          <v-btn id="btn"  icon @click="copy"><v-icon >mdi-content-copy</v-icon> <router-lnk></router-lnk></v-btn>
        </v-col>
        <v-col class="">
          <v-btn id="btn" icon @click="generate" ><router-lnk to= ""><v-icon large id="icon">mdi-share</v-icon></router-lnk></v-btn>
        </v-col>
      </v-card-actions>
    </div>

    <transition name="bounce">
         <div id="output" v-if="show">{{ title[randomTitle] }}</div>
    </transition>
   

    
  </v-card>
</template>

<script>
export default {
    data: () => ({
        show: false,
        randomTitle: 0,
        title:[
          'Mobile Based Emergency reporting with SMS',
          'Shipping Management System',
          'Home Surveillance and Automation',
          'Cedula mobile: Cedula and Certifation Request Mobile Application',
          'Introduction to Data Mining',
          'The Impact of Data Warehousing on Information Systems.',
          'Tackling Cybersecurity Threats',
          'Face Recognition with SMS notification and Security System',
          'Web Based File Manager with android app',
          'Mobile Based Airline Reservation System (Android and IOS)',
          'Android Based Door Lock App with SMS Notification',
          'Web Based Water Billing Management System with Android and SMS Notification for Clients',
          'Android Based Attendance App using Smart Card Reader',
          'Cloud Based Accounting Application for Business Analytics' ,
          'Mobile Based Year Book Gallery App (Android and IOS)',
          'Mobile Loan Management and Inquiry Application', 
          'LAN/Web Based Sales and Inventory with Decision Support System', 
          'Web Application for Real Estate Record Management', 
          'Android Based Doorbell Notification App with SMS Support', 
          'Web and Mobile Based Faculty Evaluation System (Web for Admin and Mobile for Rating of Students)', 
          'GPS based Vehicle theft detection system using GSM technology', 
          'Hospital ERP System with Decision Support System: A Data Warehouse of Patient Information', 
          'DTR, Payroll System with Android and SMS Notification for Employees', 
          'Home Automation and Surveillance with the help of ip camera and wifi module shield', 
          'ClassDroid: Web and Mobile Class Record Application', 
          'Android/SMS Based Controlled Electronic Bulletin Board', 
          'Nursing Education with the use of healthcare software', 
          'Information Kiosk for School Campus', 
          'RFID Based Security System with GSM technology', 
          'Coin Operated Loading Machine Kiosk', 
          'Converting Filipino Sign Language to Text using Microsoft Kinect Sensor', 
          'EventScore: Web and Mobile Event Evaluation Application', 
          'GSM based digital Notice board with display on PC Monitor', 
          'Android Based Weather Forecast Application using OpenWeatherMap API', 
          'Baha Watcher: Android Based Water Level Indicator Using Arduino with SMS Notification', 
          'Air Quality Tester Application for Android (using Arduino)', 
          'ItemFinder: Lost and Found Monitoring and Management System (Web and Android Application)', 
          'Coin Operated Printing Kiosk', 
          'Nursing education and training on management and use of healthcare software', 
          'RFID Based Bus Fare Payment System', 
          'Document Tagging Application with Android QR Scanner', 
          'MemoDroid: Web and Mobile Memo Notification App', 
          'Online Complaint Management System', 
          'Online Grading and Attendance Monitoring System with SMS Notification', 
          'AdviseMobile: A Web and Mobile Based Guidance Consultation System', 
          'Guidance Office Centralized Information Database System', 
          'Web Based Entrance Examination with Course Recommendation System (Android Support)', 
          'CedulaMobile: Cedula and Brgy Certification Request and Issuance Application',
          'Mobile Health Care Management System', 
          'Mobile Nutrition Application with Admin Panel (jquery mobile, php, mysql, apache cordova)', 
          'Mobile Event Calendar Application' ,
          'Android Based Log Book Application' ,
          'City Tour: Mobile Based Map Application' ,
          'Android Based Directory Listing Application' ,
          'Mobile Based IQ Test Application' ,
          'Cross Platform Mobile Learning System' ,
          'Android App for Graduate School Studies' ,
          'Android Based Library Catalog Application' ,
          'RFID based Vehicle Tracking and Monitoring System' ,
          'SweldoMobile: Mobile Based Salary Notification App' ,
          'ClearDroid: Web and Android Based Clearance App' ,
          'Android Based Room Temperature Monitoring App' ,
          'Web Based Facility Management Information System' ,
          'Financial Management with SMS Notification', // need to change this
          'Web and Mobile Based Physician Expert System',
          'Expert System in the field of Medical Technology', 
          'Web Based Expense Management System with Accounting System' ,
          'Web and Mobile Based Web Tele Conference Application' ,
          'Home security System based on LPG gas, Smoke and Fire Sensors with SMS Based alerts' ,
          'Alumni Events Management System with SMS Notification' ,
          'Medical Dictionary Application (iOS, Android)' ,
          'Crime and Disaster Management Category – Use of ICT in Crime and Disaster Management', // need to change
          'RFID based Bus Announcement System for Blind' ,
          'Web, Mobile and SMS Based Feedback Application' ,
          'LAN Based Billing and Accounting System with Decision Support' ,
          'Advanced Vehicle Security System with Theft control and Accident Notification via Android Development' ,
          'Voice Recognition Application in Mobile Devices',
          'Construction Management Performance and Monitoring System' ,
          'Web and Mobile Based Meeting Notification App' ,
          'Gold Fish Guide Mobile – Android Based Guide on how to take care of your Goldfish' ,
          'Mobile Based Course Portal' ,
          'RFID/Bluebooth Door Lock Application' ,
          'Android Based Photography Challenge App' ,
          'RFID based Airport Luggage Security Scanning System' ,
          'Vehicle over Speed Sensing System using Arduino' ,
          'Crop Information Portal Using GIS Application' ,
          'Web Based Purchase Request Processing System' ,
          'Delivery Tracking System (GPS and GSM Based using Arduino)' ,
          'Subject Evaluator App (iOS, Android and web based)' ,
          'Android Based Locator Map Application',
          'Fire & Smoke Alarm System with SMS Notification' ,
          'Quiz Management System (mobile for students and web based for teachers)' ,
          'Jewelry Sales Accounting and Appraisal System' ,
          'Web based Manufacturing Management and Monitoring System' ,
          'Online Grading with Mobile Based Subject Reservation Application' ,
          'Warehouse Management System' ,
          'Human Resources Information System' ,
          'To Do / Checklist App' ,
          'RFID Enabled Passport Verification' ,
          'Knowledge Management System on Agriculture' ,
          'Multimedia Web and Mobile Application for Biology Subject' ,
          'Inventory Management in Android' ,
          'Taxi Mobile: Android Based Taxi Booking Application',
      ]
    }),
    methods:{
        generate(){
            this.randomTitle = [Math.floor(Math.random() * (this.title.length))]
            this.show = !this.show
            
        },
        copy() {
          navigator.clipboard.writeText(textToCopy);
        }
    
    }
    
}
</script>

<style  scoped>
  #title{
    font-size: 1.6rem;
    font-weight: 600;
    
  }
  #output{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 1px solid;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    text-align: center;
    font-size: 1.4rem;
    font-family: 'Courier Prime', monospace;
    font-weight: 700;
    height: max(10rem , 15rem);
  }
  #btn{
    background: none;
  }
  #btn:active{
    position:relative;
	  top:5px;
    left: 2px;
    transition: all 3ms;
    
  }
  #icon{
    color: aqua;
    
  }
  #icon:hover{
    color: red;
  }

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
  


</style>