# **Hungrybees**

<img src="/projects/hungrybees.png" alt="drawing" width="1000" className="rounded-xl"/>

# Project Awards

<img src="/projects/hungrybeeswin.png" alt="drawing" width="500" className="rounded-xl"/>

<br />

**Picture of team Hungrybees with our award, SUTD, May 2023**
- 1st Place Singtel-SUTD ISP Awards 2023
($4,000 cash award and internship offers to all team members)
- 1st Place SUTD Computer Science Awards 2023
- 1st Most Voted Project by Public during showcase


# **Problem**

Students living in the SUTD hostel face limited food options when the canteen closes, leaving them with only a few alternatives such as Changi City Point, Tampines, and Pick and Go. Consequently, many students turn to food delivery platforms as their primary source for meals. However, these platforms often have high delivery fees and high minimum order fees, which make them less accessible for cash-strapped students who cannot afford the high delivery costs.

Additionally, SUTD students have widely varying commitments, which creates difficulties in pooling orders and conforming to fixed timings for food options. Current solutions in the market either cater exclusively to specific groups or lack the flexibility in timings and food choices that students require. This leaves SUTD students in need of an app that allows them to easily form or join group orders online at their convenience and offers a wide range of food options.

<br />
<img src="/projects/sutd.png" alt="drawing" width="400" className="rounded-xl my-10"/>
<br />

# **Solution**

Introducing HungryBees, an innovative mobile application designed to alleviate the problems associated with limited food choices and high delivery costs for SUTD students. HungryBees allows users to create custom orders and join other orders within their vicinity, promoting collaboration and cost-sharing. The app integrates with a grab group-order link, connecting users with similar food preferences and delivery locations, making it easier to split delivery fees and meet minimum order requirements.

HungryBees offers a much-needed solution for SUTD students by providing an easy way to form or join group orders at any time, with access to a wide variety of food choices. This addresses the challenges of limited food options, high delivery costs, and difficulties in pooling orders due to varying commitments, making it a more convenient and cost-effective solution for SUTD hostel students. 

<br />  
<br />  

<img src="/projects/hungrybees2.png" alt="drawing" width="1000" className="rounded-xl my-10"/>

<br />  
<br />  

# **System Design and Implementation**

## **Technologies & APIs**

The HungryBees mobile application utilizes a combination of robust technologies and APIs for both its frontend and backend development. These technologies have been carefully chosen to ensure a seamless, user-friendly experience and reliable performance.

## Frontend

- Java: Java is a versatile, object-oriented programming language that is widely used for Android app development. It provides a robust and flexible foundation for creating feature-rich mobile applications, ensuring compatibility with a wide range of devices and operating systems.
- Material Design 3: Material Design is a design language developed by Google that focuses on creating visually appealing, responsive, and intuitive user interfaces. Material Design 3 is the latest version of this design language, offering enhanced components, theming options, and interactive elements that make it easier to create a polished and modern look for the HungryBees app.
- Google Play Services Fused Location Provider API: This API allows the app to efficiently and accurately access the user's location data. By leveraging Google's extensive location services infrastructure, the Fused Location Provider API ensures that HungryBees can quickly identify the user's location and display nearby group orders, enhancing the overall user experience.

Models The HungryBees system uses five core models to manage and retrieve data, ensuring efficient data handling across various app features:

LocationModel: Stores latitude and longitude data for location calls made within the application, essential for matching users with local group orders.
AssetModel: Manages assets like images used in profiles and posts, storing asset IDs, titles, and URLs.
ChatModel: Facilitates the app’s chat system, tracking chat ID, timestamps, sender and receiver IDs, message content, and read status.
PostModel: Contains data for each group order post, including attributes like cuisine, maximum participants, store name, and location, enabling users to view and filter group orders.
UserModel: Stores user-related data such as profile information, reputation, and location, aiding user management, authentication, and personalized features.


## Backend

### **Spring Boot and MVC Architecture:** 

We selected Spring Boot as the foundation for our backend due to its ease of setup, robustness, and strong community support. Spring Boot’s convention-over-configuration approach allowed us to focus on implementing business logic instead of being bogged down by configuration complexities. The **MVC (Model-View-Controller)** architecture further enhanced our codebase by maintaining a clean separation of concerns—models handle data, views present data to the user, and controllers manage user interactions. This structure not only improved the maintainability of the code but also made it easier to onboard new team members by providing a well-organized and intuitive codebase.


  **Alternatives Considered:** We evaluated other frameworks like **Express.js** (Node.js) and **Django** (Python). Express.js offers high flexibility, but it lacks the out-of-the-box support for complex data handling that Spring Boot provides. Django's ORM system is robust and well-suited for rapid prototyping, but Spring Boot's native integration with Java and Java's performance advantages made it the better choice for our use case, which involved handling a large number of concurrent users and real-time data.

  **Reasoning:** Java’s ability to handle multi-threading and Spring Boot’s powerful dependency injection capabilities made our choice ideal for managing the concurrent requests from multiple users joining or creating group orders. The use of **Java’s JPA (Java Persistence API)** with **Hibernate ORM** provided us with efficient data handling capabilities and reduced boilerplate code when dealing with relational database management. Hibernate's support for complex relationships between entities allowed us to build a scalable data model that could easily adapt to future feature enhancements.

<br />
<img src="/projects/spring-boot.png" alt="drawing" width="500" className="rounded-xl my-10"/>
<br />

### Firebase Cloud Messaging (FCM):
To ensure that users receive timely notifications about new group orders or chat messages, we integrated **FCM** for real-time push notifications. The decision to use FCM was driven by its seamless integration with Android and the ability to handle a large number of simultaneous connections without additional server-side infrastructure.

  **Alternatives Considered:** We considered **AWS Simple Notification Service (SNS)** and **OneSignal** as alternatives. While AWS SNS offers powerful integration with other AWS services, it requires a more complex setup and is better suited for multi-platform applications. **OneSignal** provides a simpler setup for notifications but lacks the granular control over message delivery and scheduling that FCM offers natively with the Android ecosystem. Since HungryBees is an Android-exclusive app, FCM’s deep integration with Android significantly simplified the development process and allowed us to deliver a more consistent user experience.

  **Reasoning:** FCM’s built-in handling of background notifications and battery-efficient message delivery made it the ideal choice for a student-oriented app where users often care about power consumption and responsiveness.
<br />
<img src="/projects/fcm.png" alt="drawing" width="500" className="rounded-xl my-10 pb-10"/>
<br />

### **WebSocket Technology:** 
For the real-time chat functionality, we implemented **WebSocket** to maintain a persistent connection between the client and server. This choice allowed us to provide real-time messaging with low latency, making communication between users as seamless as possible. By establishing a full-duplex communication channel, WebSockets reduce the overhead of repeated HTTP requests, which is critical for creating a smooth user experience in the chat system.

  **Alternatives Considered:** We evaluated using **HTTP Long Polling** or **Server-Sent Events (SSE)** as alternatives. While **HTTP Long Polling** can simulate real-time communication, it is inefficient in terms of server resources, as it requires keeping HTTP connections open and continually polling for updates. **Server-Sent Events (SSE)** offers a more efficient mechanism for one-way communication from server to client but is less suitable for bi-directional communication like chat. WebSockets, by contrast, provide a true real-time experience with lower latency and server resource usage, making them the optimal choice for our use case.

  **Reasoning:** Given the nature of the chat system, where users need to coordinate with each other in real-time about orders, WebSockets ensured that users could communicate without noticeable delay, making the coordination process smoother and more natural.

### **Database Schema & ORM:** 
We designed a relational database schema using **Hibernate ORM**, which allowed us to leverage Java’s JPA for efficient data management. Our schema defined clear relationships between users, orders, and chat messages, making it easier to enforce data consistency and manage complex queries. For example, the use of **Lazy Loading** in Hibernate allowed us to optimize database performance by only loading related entities when needed, rather than fetching all data at once.

  **Alternatives Considered:** We considered using **NoSQL databases** like **MongoDB** for their flexibility and scalability. However, given the structured nature of our data and the need for complex relationships (e.g., users belonging to multiple orders, chat messages linked to specific orders), a relational database provided better data integrity and query performance. 

  **Reasoning:** Using Hibernate and a relational database allowed us to maintain strong consistency and transactional support, which is crucial for a platform where financial transactions and order coordination are involved. Additionally, Hibernate's caching mechanisms reduced the number of database queries, leading to improved performance under load.

<img src="/projects/hibernateorm.png" alt="drawing" width="1000" className="rounded-xl my-10"/>

https://jstobigdata.com/jpa/introduction-to-jpa-and-hibernate/

## **Optimizations**

### **Geospatial Indexing with R-tree Data Structures:** 
One of the core challenges in HungryBees was efficiently matching users with nearby group orders. To solve this, we implemented **R-tree data structures** for geospatial indexing. R-trees are specifically designed to handle spatial data and queries, making them ideal for location-based applications like HungryBees. By indexing orders based on their geographic location, we could quickly retrieve nearby orders within a specified radius, significantly reducing search times.

  **Comparison with Naive Approach:** A naive approach would involve iterating over all orders and calculating the distance between the user’s location and each order, resulting in a time complexity of **O(n)**. This approach is computationally expensive, especially as the number of users and orders grows. In contrast, R-trees enable us to partition spatial data hierarchically, allowing for more efficient range queries with an average-case time complexity of **O(k log n)**, where **k** represents the number of nearby matches. 

  **Reasoning:** By reducing the search space through R-tree indexing, we improved the app's responsiveness, allowing users to find relevant group orders quickly even in densely populated areas. This optimization was crucial for maintaining a smooth user experience during peak hours, such as dinner times when many users might be looking for group order opportunities simultaneously.
</br>
<img src="/projects/rtree.png" alt="drawing" width="1000" className="rounded-xl my-10"/>
<img src="/projects/rtree2.png" alt="drawing" width="200" className="rounded-xl my-10"/>

<br />

### **Caching Strategy:** 
To further enhance performance, we implemented a caching mechanism for frequently accessed data such as popular food orders and user preferences. This reduced the load on our database and improved response times for repeat queries.

  **Alternatives Considered:** We evaluated using **Redis** as a distributed in-memory cache for high-speed data retrieval. While Redis provides impressive speed and is suitable for large-scale applications, we opted to first implement an in-memory cache using **EHCache** integrated with Hibernate. This approach was easier to set up with our existing Java stack and provided sufficient performance improvements for our current user base.

  **Reasoning:** EHCache’s tight integration with Hibernate allowed us to manage caching at the entity level without additional infrastructure setup. As HungryBees scales, Redis remains a potential future upgrade, but EHCache’s simplicity and effectiveness made it a suitable initial choice.

<img src="/projects/ehcache.png" alt="drawing" width="500" className="rounded-xl my-10 pb-10 py-10 mb-[200px]"/>

<br />

**Some notes:**
The backend design of HungryBees is the result of careful consideration of various technologies and optimizations, balancing the need for performance, maintainability, and user experience. By leveraging Spring Boot for a solid backend foundation, FCM for seamless notifications, and WebSocket for real-time communication, we built a platform that meets the dynamic needs of SUTD students. Our choice of R-tree indexing for geospatial queries and a thoughtful caching strategy demonstrates our commitment to building a highly optimized and scalable solution.
