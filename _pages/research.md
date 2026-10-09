---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 1
description: Transceiver design and resource allocation, from finite-blocklength theory to over-the-air experiments.
---

## Multiuser transmission & interference management

I study how multiple users can share wireless resources reliably in the finite-blocklength regime. My work includes uplink rate-splitting multiple access (RSMA) with finite successive interference cancellation (SIC), massive MIMO-NOMA with group-level SIC, and dual-polarized transmission without SIC. I develop power-control and receiver-design algorithms for these systems.

Related publications: [J1]({{ '/publications/#ou2026dual' | relative_url }}), [J3]({{ '/publications/#ou2025power' | relative_url }}), [J5]({{ '/publications/#ou2024sum' | relative_url }}), and [C1]({{ '/publications/#ou2025pimrc' | relative_url }}).

## Resource allocation for short packets

For multicarrier RSMA, I develop algorithms for joint user scheduling, power allocation, and rate control to improve effective throughput. For massive MIMO, I compare metadata and payload encoding schemes, jointly optimizing power, receive combining, and blocklength to reduce the worst-user block error rate.

Related publications: [J2]({{ '/publications/#ou2026reliable' | relative_url }}) and [J4]({{ '/publications/#ou2025scheduling' | relative_url }}).

## Infinite-to-finite blocklength mismatch

I investigate the sum-rate loss that occurs when resource allocations designed for infinite blocklength are applied to finite-blocklength transmission. A manuscript on this topic is under review at *IEEE Transactions on Signal Processing*.

Related manuscript: [S1]({{ '/publications/#ou2026mismatch' | relative_url }}).

## Experimental wireless systems

Alongside theoretical research, I develop USRP X310 testbeds using Python/UHD and MATLAB. My practical work covers device synchronization, channel estimation, multiuser precoding, and over-the-air testing.

## Future directions

I am interested in finite-blocklength information theory and its applications, and fast optimization algorithms for wireless signal processing. I also want to explore FPGA implementation of signal-processing and optimization algorithms, using USRP experiments to compare measured performance with theoretical predictions.

<div class="research-contact">Interested in collaborating? <a href="mailto:xiaoyu.ou@bristol.ac.uk">Get in touch &rarr;</a></div>
