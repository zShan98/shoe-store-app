## Software Requirement and Design Specifications File<br>
# Campus Kick’s<br>

### Course Code:<br>
### Instructor: Miss Nida Munawwar<br>
### Project Team:
### •	Khalid Khurshid Siddiqui(21K-4673)
### •	Aqib Ali(21K-4518)
### •	Syed Zeeshan Ahmed(21K-4844)
### Submission Date: 04-12-2023

# Software Requirements Specification (SRS) / Software Design Specification (SDS) Document
# 1. INTRODUCTION
## 1.1. Purpose of Document
This document serves as the Software Requirements Specification (SRS) and Software Design Specification (SDS) for Campus Kicks, a shoe website targeting students and young individuals with leadership minds.
## 1.2. Intended Audience
The intended audience for this project includes students, campus-goers, and young people alike.
# 2. OVERALL SYSTEM DESCRIPTION
## 2.1. Project Background
Campus Kicks is an online platform designed to provide a unique shopping experience for students and young leaders, offering a curated selection of trendy and quality footwear.
## 2.2. Project Scope
The scope of Campus Kicks includes an e-commerce platform with features such as product browsing, user accounts, cart management, and secure checkout.
We have tried to make user experience as smooth as possible for both sellers and customers, easily transitioning b/w tasks.
## 2.3. Not In Scope
The project does not include physical inventory management or brick-and-mortar store operations.
## 2.4. Project Objectives
*	Provide an intuitive and user-friendly online shopping experience.
*	Cater specifically to the preferences of students and young individuals.
*	Ensure secure and reliable transaction processing.
## 2.5. Stakeholders
*	Customers (students and young individuals)
*	Developers
*	Designers
*	Project Managers
## 2.6. Operating Environment
The system will operate on web browsers and mobile devices, ensuring compatibility with popular platforms like Chrome, Firefox, Safari, and Edge.
## 2.7. System Constraints
Limited initial budget for development and maintenance.
## 2.8. Assumptions & Dependencies
Assumes a stable and secure internet connection for users. Dependencies include third-party payment gateways and hosting services.
# 3. EXTERNAL INTERFACE REQUIREMENTS
## 3.1. Hardware Interfaces
The system will interface with standard web browsers and mobile devices.
## 3.2. Software Interfaces
Integration with payment gateways for secure transactions.
## 3.3. Communications Interfaces
The system will communicate with users via email for order confirmations and updates.
# 4. FUNCTIONAL REQUIREMENTS
## 4.1. FUNCTIONAL HIERARCHY
*	User Authentication
*	Product Browsing
*	Cart Management
*	Checkout Process
*	Order Confirmation
## 4.2. Use Cases
### 4.2.1. User Authentication
•	Description: Users can create accounts or log in.
•	Actors: Registered Users
•	Preconditions: The user has an active internet connection.
•	Postconditions: User gains access to personalized features.

# 5. NON-FUNCTIONAL REQUIREMENTS
## 5.1. Performance Requirements
*	The website shall load within 3 seconds on a standard internet connection.
## 5.2. Safety Requirements
*	Customer data shall be encrypted to ensure privacy.
## 5.3. Security Requirements
*	Secure Sockets Layer (SSL) encryption for all data transmission.
## 5.4. User Documentation
*	Comprehensive user guides and FAQs will be provided on the website.
# 6. SYSTEM ARCHITECTURE
## 6.1. SYSTEM LEVEL ARCHITECTURE
The system will follow a client-server architecture.
## 6.2. SOFTWARE ARCHITECTURE
The software will be developed using a scalable and modular architecture to accommodate future updates.
# 7. DESIGN STRATEGY
The design strategy focuses on a responsive and aesthetically pleasing user interface, prioritizing user experience.
# 8. DETAILED SYSTEM DESIGN
## 8.1. DATABASE DESIGN
*	Database management system: MySQL
*	Tables: 
    *Customer=>C_ID,C_Email,C_Name,C_Phone,C_Address
    *Seller=>S_ID,S_email,S_Name,S_Phone,S_Address
    *Payment=>Pay_ID,Pay_totamnt
    *Discount=>D_ID,D_percent
    *Products=>P_ID,P_name,P_desc,P_Price
    *Order=>O_ID,O_date

# 9. APPLICATION DESIGN
*	User Interface: Responsive web design
*	Frontend: React JS and ES6
*	Backend: Node.js, Express.js
*  Database: MySQL
# 10. REFERENCES
We took Reference from NDURE Shoes as an inspiration and then focused on a specific audience area, i.e., Students.
# 11. APPENDICES
Include any additional information, diagrams, or supporting documents.
This SRS/SDS document provides a comprehensive overview of the Campus Kicks project, outlining its purpose, scope, requirements, and design aspects.



