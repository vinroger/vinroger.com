---
title: TunaDB
description: A Cassandra-inspired database for exploring distributed systems.
image: /projects/cassandra.png
---
# TunaDB

TunaDB is a student project that implements a simplified, Cassandra-inspired database in Go. I worked on the system design and backend with a team, using the project to connect distributed-systems concepts to a running implementation.

## Following a write through the system

A distributed database has to decide which machines should store a key. We used consistent hashing: both keys and nodes occupy positions on a ring, and a key’s position determines its responsible nodes. This gives us a concrete placement rule when data is spread across machines.

![The project’s ring and partitioning diagram](/projects/cassandra2.png)

Once a write reaches a node, the storage path uses a write-ahead log, a memtable and SSTables. The log records the write for recovery, the memtable keeps recent data in memory, and SSTables store sorted data on disk.

For example, a write can first be recorded in the log and applied to memory. Later, the in-memory data is flushed to disk. A read then needs to account for both recent in-memory values and persisted data.

## Replication and node communication

The project uses gRPC for communication between nodes and explores replication, quorum-based reads and writes, and gossip for exchanging node state.

Replication keeps copies of a value on more than one node. A quorum setting determines how many responses an operation requires. For example, a three-replica setup can require two acknowledgements for a write. That response rule is one part of consistency; it does not by itself replace conflict resolution or provide every guarantee of a consensus protocol.

![Node communication in TunaDB](/projects/cassandra4.png)

<figure class="project-visual">
  <a href="/projects/cassandra3.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open image: A replication illustration from the original project notes."><img src="/projects/cassandra3.jpg" alt="A replication illustration from the original project notes." width="548" height="297" loading="lazy" /></a>
  <figcaption>A replication illustration from the original project notes.</figcaption>
</figure>

## What I worked on

My work covered the backend and the connection between partition placement, replication and local storage. The project made it possible to inspect these operations together: where a key goes, how nodes exchange information, and where a value lives before and after it reaches disk.

This is a learning implementation, rather than a claim to reproduce all of Apache Cassandra. Its value is in making the core paths small enough to follow and discuss.
