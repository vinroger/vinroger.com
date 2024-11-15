# **Cassandra Clone Project**

Github link coming soon!
(I will add once the module grading has finished)

<img src="/projects/cassandra.png" alt="drawing" width="1000" className="rounded-xl"/>

## Table of Contents
- [TunaDB](#tunadb)
- [Problem Statement](#problem-statement)
- [Technological Innovations in Cassandra](#technological-innovations-in-cassandra)
  - [Consistent Hashing and Ring Algorithm](#consistent-hashing-and-ring-algorithm)
  - [Gossip Protocol](#gossip-protocol)
  - [Quorum-Based Consensus](#quorum-based-consensus)
  - [Replication and Data Synchronization](#replication-and-data-synchronization)
  - [Failure Detection and Handling](#failure-detection-and-handling)
- [Educational Purpose](#educational-purpose)
- [Tech Stack](#tech-stack)

## Cassandra Fork: **TunaDB**
TunaDB is a fork of Apache Cassandra, designed to simulate core distributed database concepts for educational purposes. This project is a simplified version of a Cassandra-like distributed database written in Go, developed as part of a Computer Science course called Distributed Systems and Computing. The primary goal of TunaDB is to provide a hands-on learning experience with key distributed system concepts such as consistent hashing, gossip protocol, quorum-based consensus, and more.

---

## **Problem Statement**
Before the advent of distributed databases like Cassandra, traditional relational databases faced significant challenges in handling large-scale data and ensuring high availability. These challenges included:

- **Scalability**: Traditional databases struggled to scale horizontally. As the amount of data and the number of transactions increased, it became difficult to distribute the load across multiple servers efficiently.
- **Fault Tolerance**: Ensuring data availability and consistency in the face of hardware failures was a significant challenge. Traditional databases often relied on master-slave architectures, which introduced single points of failure.
- **Consistency and Availability**: Achieving strong consistency while maintaining high availability was difficult. Traditional databases often had to compromise on one to achieve the other, leading to the CAP theorem's trade-offs.
- **Operational Complexity**: Managing and maintaining large-scale databases required significant operational overhead, including manual sharding, replication, and failover mechanisms.

---

## **Technological Innovations in Cassandra**

### **Consistent Hashing and Ring Algorithm**
- Consistent hashing is used to distribute data across nodes in a way that minimizes reorganization when nodes are added or removed. The ring algorithm ensures that each node is responsible for a specific range of data, providing efficient data distribution and fault tolerance. This approach allows Cassandra to scale horizontally by simply adding more nodes to the cluster.
- **Implementation in Go**: The implementation of consistent hashing is found in the `ring.go` file by creating a ring structure that maps data to nodes based on hash values, ensuring even data distribution and minimal data movement when nodes are added or removed.

<br />

<img src="/projects/cassandra2.png" alt="drawing" width="700" className="rounded-xl"/>
Figure: Ring Algorithm & Consistent Hashing

<br />

### **Gossip Protocol**
- The gossip protocol is used for node communication and status updates. Nodes periodically exchange state information with a few other nodes, ensuring that the entire cluster eventually becomes aware of the state of all nodes. This decentralized approach enhances fault tolerance and scalability. The gossip protocol ensures that the cluster can dynamically adapt to changes, such as node failures or additions, without requiring a central coordinator.
- **Implementation in Go**: The gossip protocol is implemented in the `gossip.go` file, where nodes periodically share their state with a subset of other nodes, maintaining an updated view of the cluster's state.

<br />

<img src="/projects/cassandra4.png" alt="drawing" width="500" className="rounded-xl"/>

<br />



### **Quorum-Based Consensus**
- Quorum-based consensus is used to achieve consistency in a distributed system. Reads and writes require a majority (quorum) of nodes to agree on the operation, ensuring data consistency even in the presence of node failures. This approach balances consistency, availability, and partition tolerance. By allowing configurable consistency levels, Cassandra provides flexibility to applications to choose between strong consistency and eventual consistency based on their requirements.
- **Implementation in Go**: Quorum-based consensus is implemented in the `quorum.go` file, where read and write operations are only considered successful if a majority of nodes agree on the operation, ensuring data consistency across the cluster.

### **Replication and Data Synchronization**
- Replication ensures that data is copied across multiple nodes to provide fault tolerance and high availability. The replication manager handles replica placement and synchronization, ensuring that data remains consistent across the cluster. Cassandra's tunable consistency model allows for different replication strategies, such as simple replication, network topology-aware replication, and more, to suit various use cases.
- **Implementation in Go**: Replication and data synchronization are managed in the `replica_manager.go` file, where data is replicated across multiple nodes. The `sync.go` file handles the synchronization of data to ensure eventual consistency.

### **Failure Detection and Handling**
- Failure detection mechanisms, such as heartbeat-based monitoring, are used to identify and handle node failures. The system can rebalance data and recover from failures, ensuring continuous operation and data integrity. Cassandra's architecture is designed to be highly resilient to failures, with features like hinted handoff, read repair, and anti-entropy repair to ensure data consistency and availability.
- **Implementation in Go**: Failure detection and handling are implemented in the `detection.go` and `handler.go` files. Heartbeat-based monitoring detects node failures, and the system rebalances data to maintain availability and consistency.

---

## **Educational Purpose**
TunaDB is designed for educational purposes, providing a practical implementation of distributed database concepts. By exploring and modifying this project, students and developers can gain a deeper understanding of the challenges and solutions in building distributed systems. TunaDB serves as a valuable learning tool for understanding the inner workings of distributed databases and the trade-offs involved in designing scalable, fault-tolerant systems.

---

## **Tech Stack**
- **Programming Language**: Go
- **Data Serialization**: JSON
- **Communication Protocol**: gRPC
- **Containerization**: Docker
- **Version Control**: Git

By working on TunaDB, students and developers can gain hands-on experience with these technologies and develop a deeper understanding of distributed systems' core principles and challenges.
