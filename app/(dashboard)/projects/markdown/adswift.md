# ⭐ Part 1: Engagement Detection

The content of this blog is a courtesy of UROP Report #1509 at Singapore University of Technology and Design (SUTD)

## Background Story

### **1. Problem Introduction & Proposed Solution**

Out of home (OOH) advertisements have been present for a long while, but as of now there are hardly any metrics to track how effective those advertisements are. It is very difficult to see whether the advertisers’ money spent is worth the engagement and call-to-action they get. In our project, we want to make it such that we can see which advertising campaigns are more effective in terms of audience count so that we can eventually optimize the display of advertising campaigns. Hence, to tackle the problem of non-available metrics, we decided to put cameras and utilize computer vision technology, as well as low-energy bluetooth technology to detect and approximate the audience quantity in specific areas surrounding OOH advertisements platforms.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a06e292-9249-4702-904c-8aab64cb8944/Untitled.png)

### **2. Equipments Used**

For this project, we mainly use two IoT devices, which are the Jetson Nano and Raspberry Pi. The Jetson Nano is utilized for the usage of Computer Vision due to its available built-in GPU that has been utilized by many developers as the go to edge device for the machine learning related projects. On the other hand, since the Jetson Nano does not come with a built-in bluetooth module, we decided to utilize a Raspberry Pi to handle the detection of low energy bluetooth in the surrounding area. A Raspberry Pi also has the advantage of being two to three times cheaper than the Jetson Nano, thus making it a very prospective tool to use for the project.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d97f4a5a-f90d-4bc8-a203-a7ef88ce7196/Untitled.png)

### **3. Computer Vision Engagement Detection**

As the main method of engagement detection, we utilized Computer Vision to track the number of people standing in front of a camera. The intention here is to put cameras on top of billboards and track the people watching the billboard real-time. Hence, the number of people in front of this camera will represent the number of people watching the billboard.

For this, we used the Jetson-Inference module available for python, as it is the most optimized one among any other libraries for its usage on Jetson Nano. It is able to achieve a performance of up to 18 frames per second on the Jetson Nano, meanwhile most of the others, such as the infamous YoloV3, can only achieve 3 to 5 frames per second. Other than that, the Jetson-Inference module also provides a better accuracy for the object it detects while doing it on model training, as well as better accuracy on detecting the objects. During training it is able to give a 74.7% accuracy while most of the others can only achieve an accuracy of 56.7%.

Before we try training on varied datasets, we first begin by using a pre-trained model, the mobilenet-v2, from the library provider. The model is very well performing, as it is able to work with a consistent confidence level of above 93 percent and frame rate of 18 frames per second even with up to 3 to 5 objects detected. However, we noticed that in a crowded environment of 8 to 10 people, this model might see some difficulties as some people’s bodies might be covered by others, rendering their accuracy false. Figure 3.1 is a picture taken for the detection of three people.

https://lh3.googleusercontent.com/RPj8xs4Zb_KSI4B80t1ihM7UiVg3OJnev0SRStp7jJAahLIaUfvgcaE2Jg7avZIJTRKfInpaLWvVtbi3rqpcLlGyK_KYQm-i6PPaaUUIyoQ0qWS7BuiRMvJrWojWGNo8gjqt3NmtrkEpH4uk7YhXNGvQ9P6rDBhTdhhYfw2ROPDIumtsAwn7BW7LM9ZLGg

*Figure 3.1 Pre-trained Full-body Detection*

To solve that problem, we decided to train the models on human heads in order to allow more coverage of the whole body. By starting off with the mobilenet-v2 and applying transfer learning to a wide range of human head images dataset, we are able to narrow the detection margin to the human head itself. However, as it is not yet optimized, it also has its own repercussions in terms of its accuracy and drop in frames per second. Compared with the pre-trained model, it can only detect objects with around 50 to 70 percent confidence. It is a far drop as the previous one gives a very high accuracy of 90 percent. Besides that, with the addition of objects, the model also takes a lot more time to detect, thus dropping the frames per second. Previously it was able to detect three objects with 18 frames per second. However, now it can only detect three objects with 9 to 12 frames per second. This drop might be caused by the bias in the datasets only applying a small number of objects to detect, different than the real life scenario in which there are multiple objects that needs detection.

https://lh6.googleusercontent.com/fI3ynwQMPvePSyKTCDlV-Ys45BchK_G4MWRAM-I5i05KGODGk6OwknN_iuv-_I_horKUoaOToeOSiS9kSWrC0hPe-mRx0BfycIwP_8NHQDXD7ByWVT4Y13hHqk87lBQyz1QB63WygR7J-25fDIAQUUgsf_V0zDwdieqdLGNopFBQg9u_9HT55qghc422Ig

*Figure 3.2 Trained Head Detection*

Due to the trouble of accuracy with computer vision detection, we also proposed another alternative way of engagement which is using bluetooth that is embedded on our day-to-day electronic devices.

### **4. Bluetooth Engagement Detection**

The bluetooth engagement detection is a more accurate alternative as compared with the Computer Vision one, but it works with a whole different mechanism as compared to the Computer Vision strategy. Instead of detecting the number of people in front of a screen, the bluetooth detector is able to detect the number of devices with an active bluetooth within a certain radius. Hence, it is more accurate in terms of being closer to the actual number of devices at the place and time. However, its number does not represent the number of views on a certain billboard. It only represents the surrounding people inside the represented billboard.

https://lh6.googleusercontent.com/Adns_oalCznnhA4F5n0scvn2FX9IJINWFUHLsI991fEZJyImmYsx6nLgAjCO7kLveRukOLrsl5nUqBnMNeZcR3ayjfJ2YcKgU_RH3hUevC6RvTUjGYEh9N4-EWEuCdGKoWhlRRszZE-ntP_15DuXVwTbsrbVwsq_c5V_b1Wrx5gzjeZP_NTd8pgQVuWmbQ

*Figure 4.1 Bluetooth Devices Mac Address*

We utilized the bluetoothctl available on the Jetson-Nano and Raspberry Pi to control their bluetooth functionalities within the command line. Hence, we can see the list of devices that our IoT devices can connect to, in the form of their mac addresses. However, we do not utilize our code to connect our device. We stopped at printing the list of devices available for connection, as this is the data we need to see the number of devices surrounding one IoT device.

As can be seen from Figure 4.1, we are able to list the mac addresses surrounding a certain IoT device. With the python time module, we can also acquire the timestamps for each of these happening detections. Hence, we can provide a time-series graph in which the x-axis represents time, and the y-axis represents the number of devices detected, as seen in Figure 4.2.

https://lh5.googleusercontent.com/C1WUizMX4ePoXuDN9taemZUcVIfkbWbiDgmX86dDaH5-jIICiY-NS-ZioDPeGLjtbxDzMcwwfEokneN8tOaLQAtSt31OsDTcO6mpMsIQrocssMhe-_zdsAu29-Z_N4TCXbzg8-dvdWV6ruhJJ20t_pbcBL3u-7EjIed9HSOuD2UDr13rb05JGxpzHo3V-g

*Figure 4.2 Bluetooth Headcount Data. Location: SUTD EC. Platform: CubeJS, a data aggregation framework.*

### 5. Front-end

Built using Ant Design, NextJS

It can be seen that bluetooth data spiked before and after lunch. This sniffer was located in the entrance of one of SUTD offices.

*Analytics Page*

https://lh4.googleusercontent.com/SqYSohbxvF1WbQGd-mz1Q5V3iKLIzOSYdnBUHdwKJZfp-0UoAH8xGcGgfVH-izjK092WTShloCFo_gmMVKlf_VIbHbtrGHy2pagnH1L_pRpu5MN6tMur8vkCPODPBweDJW5uJh7VIQ0QsVjY_Kul78ZuA8hb3GbxUDgVUYdXYUdyP3wEEVljdKxVpiBWaw

*Content/Inventory Management (more on this please go to* https://vinroger.com/content-management-system-urop)

https://lh6.googleusercontent.com/P6MT7HnbOzTwGLb35eZzJxT2Xg1Um3CElKbWNy__kY5s8WXmRiwYsl_NFlUDaoPbY9K-cQBWUXB0kfBb0UuW-TyQh4X0pLyPbASkrry8th3_sXjqn0hQTQTcHyXfLibIF9NmFm_JDQPNr8gsBeujwEuvEnf99_uZeJQD3R8TNGbAjCj-fB98jWE5Il7J4A

The content of this blog is a courtesy of UROP Report #1509 at Singapore University of Technology and Design (SUTD).

# ⭐ Part 2: Content Management System

## Technologies Involved

To control the TVs media content

1. Jetson Nano
2. NodeJS server to fetch and update content
3. Front-end website to display the content. 

Cloud side server

1. BigQuery (capturing hotspots data, bluetooth sniffing, and computer vision)
2. CubeJS (API layer)
3. Firebase ETL, Cloud storage, Firebase functions
4. Cloud Storage to store media

For SUTD Marcom to control TVs

1. NextJS front-end UI
2. Ant Design for framework

## Background Story

> TLDR: All the TVs around the campus are controlled manually. Every time ones need to change the content, the school need to change manually. That is where our solution came in.
> 

During our first initial development test, we are working with SUTD AV (Audio Visual) and Office of Marketing and Communication (Marcom) to do a 1-month Proof of concept with 5 TVs that acts as a “digital signages” around the campus to test whether our engagement detection system is applicable to real-world scenario. 

These TVs were then are controlled by our IoTs that play SUTD advertising from Office of Marketing and Communication (Marcom) that can be controlled remotely via the internet using our website (to be explained later).

https://lh6.googleusercontent.com/ZpxTMkfdc_g2eAG83Bt_RYLUbUOeVpXM1Uxz9zj6TuwuC4hjfAs7qgoYtAd-jQfSsg00InXe5qAXwhlH12KajbjLw4MVALD8iDRn_1VAW3NexAWRvIvh3YtL9bO0bY1kbkGBqlCoknyVLCq3E2DTpYOjdFqbcP93ryh2v7RIYDYELuQck13rMbL-iplLYg

*Figure 5.1 Real-world scenario testing. Location: SUTD Library Level 1 Lift Lobby*

Content Management System is a tech infrastructure which allows an IoT to control media player (in this case is TVs) to be connected to the internet, fetch media metadata (video, images, or any other advertisement assets) in real-time, and show the corresponding assets according to what the client (Marcom) wants.

In our first initial deployment, we developed a web application that was built with NextJS framework and Ant Design utility classes. The resulting product is a responsive web application which is user-friendly to be used with clients that has no tech background. In addition, we used Auth0, an authentication platform to ensure our ecosystem is safe yet flexible to allow clients to be registered with google accounts and not only email/password combinations. We named our product, nuads (read: new ads), which is inspired to be the newly revolutionary technology for outdoor advertising.

https://lh3.googleusercontent.com/VDjXZ4V8FeJg0AYNvZ7EeS-E3sMe-TXsdOUxF0v104mruijWlHHeDSZUdHjvoJ7beJbzaBCUoNZ1YdaweF--NAxlMM6Sj_-5mNY84UjCK77-7oza-40wk74kYje4R-6ToyvP26cDpppddSu0e9iPiB39Er2Z25U3V88adZToYHLB8aoq9lEgZR4fGLhMZg

*Figure 5.2, nuads dashboard: create campaign page*

https://lh6.googleusercontent.com/P6MT7HnbOzTwGLb35eZzJxT2Xg1Um3CElKbWNy__kY5s8WXmRiwYsl_NFlUDaoPbY9K-cQBWUXB0kfBb0UuW-TyQh4X0pLyPbASkrry8th3_sXjqn0hQTQTcHyXfLibIF9NmFm_JDQPNr8gsBeujwEuvEnf99_uZeJQD3R8TNGbAjCj-fB98jWE5Il7J4A

*Figure 5.3, nuads dashboard: create campaign page*

https://lh4.googleusercontent.com/SqYSohbxvF1WbQGd-mz1Q5V3iKLIzOSYdnBUHdwKJZfp-0UoAH8xGcGgfVH-izjK092WTShloCFo_gmMVKlf_VIbHbtrGHy2pagnH1L_pRpu5MN6tMur8vkCPODPBweDJW5uJh7VIQ0QsVjY_Kul78ZuA8hb3GbxUDgVUYdXYUdyP3wEEVljdKxVpiBWaw

*Figure 5.4, nuads dashboard: analytics page*

Aside from the web application that is built for advertisers clients, we also managed to build an infrastructure that controls the IoT itself (supply-side). Our first initial prototype used python and cv2 module to play frame by frame of the real-time fetched assets but it turns out to be too heavy for Jetson Nano to handle. To solve this we used a html static page injected with vanilla javascript that can be fetched from a local server which was coded in NodeJS to communicate with backend servers. Finally, our backend server was built using the FastifyJS framework and hosted in Google Cloud Run, contained in a docker container.

https://lh5.googleusercontent.com/8YQIe8JzhS100EMqrK_2WNQNdBzuVnwUFn_Qn3FjENvS4KtEaosiNzlQMgfCTGFXuFHDLw_R7j4SFK8wco5sbB1RqLmGgGpzMeaE4jkmU_CotXXzAYYHlsX_o3NoLeCUn9nlcM13gHnnawv_MuBr5nT_xTTo9-9dOYr_HQAZ8JX5ro6BE4QQ1k175NBa4Q

*Figure 5.5 Content Management System. Location: Lift Lobby A level 3 SUTD*

The database that we chose is Google BigQuery for time-series data ingestion (bluetooth and computer vision), Google Cloud Storage for blob type data (for example, assets and media), and Google Firestore for key-value pairs data (user, assets metadata) that is in NoSQL format. The overall system design/architecture looks like this.

https://lh4.googleusercontent.com/UuzmPyHuh0c6-he64Oyz9zHLb7PlIxtpoNU_whEBp-gitEyc8cYUbie6om32LiRerWXtmNDPn-RqK3O5osXFS1vDkwzTrFEC5oNK6_eaxxlRD8htxOh5KwwUuSalSR_MeA0ftrwvoEBnXhIDev1wPu7BK3UCa-0xvf2OpxMk7QPpsv6k-w6EPvWcTE9whg

*Figure 5.7, System Architecture*

## **Further Developments**

We have developed each of these components individually. However, we haven’t combined the whole technology yet. Hence, its future improvements might include combining all the three technologies together such that it can manage video or image content, as well as provide analytics on views engagement and surrounding engagement, through Computer Vision and Bluetooth Low Energy respectively.

## What I have learnt

This is a big project that I worked on for 4 months, involving 6 people, me myself and the other 5 developers. 

I learnt a lot about technical skills, from system designing the architecture, researching and choosing the right database system moreover its provider (I was debating between GCP, AWS, Azure, etc, lol), ETL pipelining, and thinking about scalability as the system will involve more and more devices in the future.

I also learnt a lot in terms of social skills. Being able to lead, mentor (yea some of our team only knows HTML at first) a team of 5 developers was not an easy task. By the end of the project, I am very proud and grateful at the same time to have these experiences.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20ece021-5d61-45ae-ba78-cb577f42b133/Untitled.png)

*Me and my teammate Nathan, making this project becomes a startup, named AdSwift. This is a picture of we achieved a funding of $2,000 in a competition, 3 months later (Oct 2022). More on this story is coming soon :)*