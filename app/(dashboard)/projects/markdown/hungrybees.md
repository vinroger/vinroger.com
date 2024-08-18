# **Problem**

Students living in the SUTD hostel face limited food options when the canteen closes, leaving them with only a few alternatives such as Changi City Point, Tampines, and Pick and Go. Consequently, many students turn to food delivery platforms as their primary source for meals. However, these platforms often have high delivery fees and high minimum order fees, which make them less accessible for cash-strapped students who cannot afford the high delivery costs.

Additionally, SUTD students have widely varying commitments, which creates difficulties in pooling orders and conforming to fixed timings for food options. Current solutions in the market either cater exclusively to specific groups or lack the flexibility in timings and food choices that students require. This leaves SUTD students in need of an app that allows them to easily form or join group orders online at their convenience and offers a wide range of food options.

# **Solution**

Introducing HungryBees, an innovative mobile application designed to alleviate the problems associated with limited food choices and high delivery costs for SUTD students. HungryBees allows users to create custom orders and join other orders within their vicinity, promoting collaboration and cost-sharing. The app integrates with a grab group-order link, connecting users with similar food preferences and delivery locations, making it easier to split delivery fees and meet minimum order requirements.

HungryBees offers a much-needed solution for SUTD students by providing an easy way to form or join group orders at any time, with access to a wide variety of food choices. This addresses the challenges of limited food options, high delivery costs, and difficulties in pooling orders due to varying commitments, making it a more convenient and cost-effective solution for SUTD hostel students.

# **System Design and Implementation**

## **Technologies & APIs**

The HungryBees mobile application utilizes a combination of robust technologies and APIs for both its frontend and backend development. These technologies have been carefully chosen to ensure a seamless, user-friendly experience and reliable performance.

### Frontend

- Java: Java is a versatile, object-oriented programming language that is widely used for Android app development. It provides a robust and flexible foundation for creating feature-rich mobile applications, ensuring compatibility with a wide range of devices and operating systems.
- Material Design 3: Material Design is a design language developed by Google that focuses on creating visually appealing, responsive, and intuitive user interfaces. Material Design 3 is the latest version of this design language, offering enhanced components, theming options, and interactive elements that make it easier to create a polished and modern look for the HungryBees app.
- Google Play Services Fused Location Provider API: This API allows the app to efficiently and accurately access the user's location data. By leveraging Google's extensive location services infrastructure, the Fused Location Provider API ensures that HungryBees can quickly identify the user's location and display nearby group orders, enhancing the overall user experience.

### Backend

- Firebase (Cloud Storage & Firestore): Firebase is a comprehensive backend-as-a-service platform offered by Google, which provides a suite of tools and services for app development. In the case of HungryBees, Firebase Cloud Storage is used to store and manage user-generated content, such as images and files, while Firestore is used as a real-time, NoSQL database to store and synchronize app data across multiple devices. This combination of Firebase services enables the HungryBees app to scale efficiently and handle complex data structures with ease.

Together, these frontend and backend technologies form a powerful tech stack that allows the HungryBees mobile application to deliver a seamless and engaging user experience while maintaining reliability and performance.

## **System Architecture**

### **Models**

The system we have developed uses five different models to store and fetch data from the database. Each of these models serves a different purpose and contains unique attributes that are used in different parts of the application. The five models used in the system are LocationModel, AssetModel, ChatModel, PostModel, and UserModel.

The LocationModel is a simple model that contains the latitude and longitude for every location call made in the application. This model stores the location data as a representation of the coordinates in latitude and longitude. The LocationModel is used in various parts of the application where location data is required, such as when posting a new item or when searching for posts near the user's current location.

The AssetModel is a model for every available asset in the application, such as images used for profile pictures or posting pictures. This model stores information about the asset, such as the asset ID, title, and URL where the asset is stored. The AssetModel is used in various parts of the application where assets are required, such as when setting a user's profile picture or when displaying images in a post.

The ChatModel is a model used for the chat system in the application. This model contains attributes such as the chat ID, date created, assets, message, read status, sender ID, and receiver ID. The ChatModel is used when sending or receiving messages in the chat system, and the attributes are used to track the chat history between two users.

The PostModel is a model that contains information about every post available on the UI. This model contains attributes such as the distance from the user's device, whether the post is halal or not, the grab food URL, cuisine, maximum number of participants, store name, location, assets, participants, timing, date created, poster ID, and post ID. The PostModel is used to store all the information related to a post, and the attributes are used to display the post on the UI, search for posts, and manage the post's participants.

The UserModel is a model that contains information about every user in the system. This model contains attributes such as the user's profile picture URL, assets, date created, location, reputation, user ID, name, password, and email. The UserModel is used to store all the information related to a user, and the attributes are used to manage the user's profile, display user information on the UI, and authenticate the user.

In conclusion, the five models used in the system each serve a different purpose and contain unique attributes that are used in different parts of the application. The LocationModel, AssetModel, ChatModel, PostModel, and UserModel are all essential in managing and displaying data in the application. Understanding the purpose and attributes of each model is important for developers to efficiently and effectively use them in the application.