const e={websiteTitle:"Recent Advances in SSD Research and Practice",pitch:"International Online Workshop on",title:"Recent Advances in SSD Research and Practice",subTitle:"September 26-27, 2024"},i="Storage systems play a pivotal role in the digital landscape, acting as the backbone for data management, retrieval, and protection. The exponential growth of data generated by individuals and enterprises necessitates robust, scalable, and efficient storage solutions. Traditional storage systems, such as hard disk drives (HDDs), have evolved significantly, but the advent of solid-state drives (SSDs) has marked a substantial leap in terms of speed, reliability, and energy efficiency. SSDs, with their faster read/write capabilities and lower latency, have become essential for applications requiring high performance, such as databases, virtual machines, and real-time analytics.<br/><br/>The advances in storage technology extend beyond hardware improvements. Cloud storage has revolutionized data accessibility and management, offering scalable and flexible solutions that can accommodate the dynamic needs of businesses. Cloud providers offer a range of storage options, from object storage for unstructured data to block storage for databases and applications. These services not only provide vast amounts of storage space but also incorporate advanced features like automated backups, disaster recovery, and data encryption, enhancing data security and integrity.<br/> <br/>These innovations are crucial for supporting the growing demands of big data analytics, artificial intelligence, and Internet of Things (IoT) applications in storage systems, where data processing speed and efficiency are paramount. These advancements not only enhance performance and reliability but also enable new possibilities in data-driven innovation and digital transformation.<br/><br/>This online workshop, Recent Advances in SSD Research and Practice, aims to bring together leading researchers, engineers, and graduate students in the field of storage systems, and is jointly supported by the Korean Institute of Information Scientists and Engineers (KIISE), and the Computer Society of Iran (CSI).",a=[{profile:"/images/Zili_Shao.png",name:"Zili Shao",rank:"Professor",description:"Chinese University of Hong Kong",email:"shao@cse.cuhk.edu.hk",linkedin:""},{profile:"/images/PatrickPC_Lee.png",name:"Patrick P. C. Lee",rank:"Professor",description:"Chinese University of Hong Kong",email:"pclee@cse.cuhk.edu.hk",linkedin:""},{profile:"/images/ALNarasimha_Reddy.png",name:"Narasimha Reddy",rank:"Professor",description:"Texas A&M University",email:"reddy@tamu.edu",linkedin:""},{profile:"/images/SamH_Noh.png",name:"Sam H. Noh",rank:"Professor",description:"Virginia Tech",email:"samhnoh@vt.edu",linkedin:""},{profile:"/images/LiPin_Chang.png",name:"Li-Pin Chang",rank:"Professor",description:"National Yang Ming Chiao Tung University",email:"lpchang@cs.nctu.edu.tw",linkedin:""},{profile:"/images/Hossein_Asadi.png",name:"Hossein Asadi",rank:"Professor",description:"Sharif University of Technology",email:"asadi@sharif.edu",linkedin:""},{profile:"/images/John_Kim.png",name:"John Kim",rank:"Professor",description:"Korea Advanced Institute of Science and Technology (KAIST)",email:"jjk12@kaist.edu",linkedin:""},{profile:"/images/Jisung_Park.png",name:"Jisung Park",rank:"Assistant Professor",description:"Pohang University of Science and Technology (POSTECH)",email:"jisungpark@postech.ac.kr",linkedin:""},{profile:"/images/owens_walker.jpg",name:"Owens Walker",rank:"Assistant Professor",description:"US Naval Academy",email:"owalker@usna.edu",linkedin:""},{profile:"/images/Reza-Salkhordeh.png",name:"Reza Salkhordeh",rank:"Postdoctoral Researcher",description:"Johannes Gutenberg University of Mainz",email:"rsalkhor@uni-mainz.de",linkedin:""},{profile:"/images/arash_tavakkol.jpg",name:"Arash Tavakkol",rank:"Principal Software Engineer",description:"ApplyBoard Inc.",email:"arash82ir@gmail.com",linkedin:""}],n=[{title:"Day 1, Thursday, 26 September 2024",date:"",timeTable:[{time:"13:55 ~ 14:00",speaker:"",topic:"Opening",content:"",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:""},{time:"14:00 ~ 14:50",speaker:"Li-Pin Chang",topic:"Flash Error Management in Modern SSDs: from Bits to Layers",content:"As memory technology matures, reliability becomes a critical concern, especially in the context of modern flash memory. While marching towards higher cell-bit density and advanced 3D architectures, flash memory faces major challenges with various types of errors. Addressing these errors efficiently and effectively is essential to maintaining data integrity. In this talk, I will explore error handling techniques in modern flash memory, focusing on different granularities of data such as bits, layers, and architecture-specific error domains. I will discuss efficient error correction using Low-Density Parity-Check (LDPC) codes, emphasizing strategies like optimal reference voltage placement, bit labeling, and multilevel soft sensing. Additionally, I will investigate how process variation in 3D flash architectures can be leveraged to accelerate LDPC decoding. Finally, I will cover parity protection mechanisms designed to protect against large extents of memory defects that go beyond the bit level.",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:"Li-Pin Chang is a professor at Department of Computer Science, National Yang Ming Chiao Tung University, Taiwan. In addition to flash management algorithms, he is also working on memory management for smart phones, flash-based storage for energy-harvesting IoT devices, and data retrieval systems for persistent memory. He has been serving on major conferences in his field for years, including EMSOFT in the embedded systems week series, and he is also an associate editor of ACM Transactions on Embedded Computing Systems (TECS)."},{time:"14:50 ~ 15:40",speaker:"Zili Shao",topic:"Rethinking Software Design with Modern Computational Storage Device",content:"Storage optimization remains a pivotal concern in computer systems. In this talk, I will first summarize our work in optimizing storage systems for embedded and big data applications. Then, I will present our recent work in optimizing 𝐵+-tree by leveraging emerging computational storage drives with built-in transparent compression. Specifically, I will introduce a technique, called per-page logging based 𝐵+-tree, that can fundamentally resolve the logging dilemma, i.e., 𝐵+-tree speed performance can be improved by equipping it with a larger log, which nevertheless will degrade its crash recovery speed. Our key idea is to divide the large single log into many small (e.g., 4KB), highly compressible per-page logs, each being statically bounded with a 𝐵+-tree page. All per-page logs together form a very large over-provisioned log space for 𝐵+-tree to improve its operational speed performance. Meanwhile, during crash recovery, 𝐵+-tree does not need to scan any per-page logs, leading to a recovery latency independent from the total log size. We have developed and open-sourced a fully functional prototype. Our evaluation results show that our solution can significantly improve 𝐵+-tree operational throughput with minimum storage overheads based on transparent compression of computational storage drives.",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:"Zili Shao is a professor at Department of Computer Science and Engineering, The Chinese University of Hong Kong. He received his Ph.D. degree from Department of Computer Science, The University of Texas at Dallas. His research interests include embedded software/systems and storage systems."},{time:"15:40 ~ 16:30",speaker:"Patrick Lee",topic:"The Design and Implementation of a High-Performance Log-Structured RAID System for ZNS SSDs",content:"In this talk, I will make a case for showing how to achieve efficient reliable storage for the emerging ZNS SSDs. ZNS defines a new abstraction for host software to flexibly manage storage in flash-based SSDs as append-only zones.  It also provides a Zone Append primitive to further boost the write performance of ZNS SSDs by exploiting intra-zone parallelism. However, making Zone Append effective for RAID storage across multiple ZNS SSDs is non-trivial since Zone Append offloads address management to ZNS SSDs and requires hosts to dedicatedly manage RAID stripes across multiple drives. We propose ZapRAID, a high-performance log-structured RAID system for ZNS SSDs by carefully exploiting Zone Append to achieve high write parallelism and lightweight stripe management. ZapRAID adopts a group-based data layout with a coarse-grained ordering across multiple groups of stripes, such that it can use small-size metadata for stripe management on a per-group basis under Zone Append. It further adopts hybrid data management to simultaneously achieve intra-zone and inter-zone parallelism through a careful combination of both Zone Append and Zone Write primitives. Our evaluation shows that ZapRAID achieves high performance in various operations.  Finally, I will also discuss future research directions of applying ZNS SSDs to large-scale distributed storage. ",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:"Patrick P. C. Lee received the Ph.D. degree in Computer Science from Columbia University in 2008. He is now a Professor of the Department of Computer Science and Engineering at the Chinese University of Hong Kong.  He heads the Applied Distributed Systems Lab and is working very closely with a group of graduate students on different projects in large-scale software systems.  His research interests are in various applied/systems topics on improving the dependability of large-scale software systems, including storage systems, distributed systems and networks, and cloud computing.  He now serves as an Associate Editor in IEEE/ACM Transactions on Networking and ACM Transactions on Storage."},{time:"16:30 ~ 17:50",speaker:"",topic:"Break",content:"",link:"",bio:""},{time:"17:50 ~ 18:40",speaker:"Arash Tavakkol",topic:"Scaling the Summit: Navigating Fairness, Communication, and Flash Chip Access Conflicts in Modern SSD Architectures",content:"In this session, we'll explore the scalability issues in Solid-State Drives (SSDs), focusing on the challenges posed by the existing SSD micro-architecture. First, we'll briefly touch upon the fairness issue in modern multi-queue SSDs (MQ-SSDs). While new protocols like NVMe have improved performance by providing direct access to application-level I/O request queues, they've inadvertently introduced fairness problems among concurrently executing applications in modern highly-virtualized environments. We'll introduce FLIN (Flash-Level INterference-aware scheduler), a lightweight scheduling mechanism designed to restore fairness in MQ-SSDs without compromising performance. Next, we'll examine network-based SSD communication protocols, which replace the traditional multi-channel bus architecture with an interconnection network, enhancing scalability and performance while reducing signal integrity issues. Finally, we'll present a new mechanism designed to resolve path conflicts in network-based SSDs by employing path reservation techniques, and adaptive routing algorithms, further improving parallelism and energy efficiency with minimal overhead.",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:"Arash Tavakkolis a Principal Software Engineer at ApplyBoard Inc., where he specializes in applying modern data processing approaches based on AI/ML techniques to educational technology. He holds a Ph.D. in Computer Engineering from Sharif University of Technology and has completed a postdoctoral research fellowship at ETH Zurich. Arash has over 14 years of experience in analyzing and designing SSD scalability issues for modern enterprise applications, hyperscale data centers, and highly virtualized environments. He developed MQSim, one of the well-known SSD simulators, and has published his SSD research in venues like ISCA, FAST, SIGMETRICS, and PACT. His research interests lie in storage system designs, advanced data processing technologies, and memory subsystems. Recently, his work has concentrated on leveraging his expertise in large-scale data processing platforms to enhance the efficacy of modern big data platforms used in the financial, energy, healthcare, and education sectors. His contributions in this field aim to bridge the gap between cutting-edge research and practical real-world applications."},{time:"18:40 ~ 19:30",speaker:"Narasimha Reddy",topic:"Impact of SSD GPUDirect Storage Mechanism on Performance",content:"The exponential growth in data-intensive applications necessitates efficient data transfer and memory management strategies in modern GPU computing. This paper explores the potential of GPUDirect Storage (GDS) as a high-throughput solution for direct data transfers between storage and GPU memory, bypassing CPU involvement and reducing data movement overhead. We study the intricacies of memory management within the GPU memory hierarchy, highlighting the challenges and solutions for optimizing data access patterns. A central focus is placed on intelligent caching and data prefetching mechanisms to predict and pre-load data into appropriate memory tiers, thereby minimizing latency and maximizing computational throughput. By integrating GDS with advanced memory management strategies, we demonstrate significant improvements in performance for various data-intensive applications.",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:`Narasimha Reddy received a B.Tech. degree in Electronics and Electrical Communications Engineering from the Indian Institute of Technology, Kharagpur, India in August 1985, and M.S. and Ph.D. degrees in Computer Engineering from the University of Illinois at Urbana-Champaign in May 1987 and August 1990, respectively

Reddy’s research interests are in Computer Networks, Storage Systems, Multimedia Systems, and Computer Architecture. During 1990-1995, he was a Research Staff Member at IBM Almaden Research Center in San Jose where he worked on projects related to disk arrays, multiprocessor communication, hierarchical storage systems and video servers.

Reddy holds five patents and and was awarded a technical accomplishment award while at IBM. He received an NSF Career Award in 1996. He was a Faculty Fellow of the College of Engineering at Texas A&M during 1999-2000. His honors include an Outstanding Professor award by the IEEE student branch at Texas A&M during 1997-1998, an Outstanding Faculty award by the Department of Electrical and Computer Engineering during 2003-2004, a Distinguished Achievement award for teaching from the Former Students Association of Texas A&M University, and a citation “for one of the most influential papers from the 1st ACM Multimedia Conference”.

Reddy is a Fellow of IEEE Computer Society and is a member of ACM.`}]},{title:"Day 2, Friday, 27 September 2024",date:"",timeTable:[{time:"14:00 ~ 14:50",speaker:"John Kim",topic:"Rethinking SSD Microarchitecture through Communication-Centric Architecture",content:"The cost and scalability of future systems are often limited by data movement.  As a result, a cost-effective approach to interconnecting components is necessary to enable a scalable, high-performance system.  This talk will focus on rethinking SSD microarchitecture by focusing on the challenges of communication within an SSD system.   In particular, I will present NetworkSSD where interconnection networks can be used to replace traditional flash bus to enable more efficient connectivity between the flash modules. In addition, I will discuss how DecoupledSSD can leverage interconnection networks within the SSD controller to provide efficient communication between on-chip components.",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:"John Kim is currently a full professor in the School of Electrical Engineering at KAIST (Korea Advanced Institute of Science and Technology) in Daejeon, Korea. John Kim received his Ph.D. from Stanford University and B.S/M.Eng from Cornell University. His research interests include computer architecture, interconnection networks, security, and mobile systems.  He has received a Google Faculty Research Award,  Microsoft-Asia New Faculty Fellowship, and is listed in the Hall of Fame for ISCA, MICRO, and HPCA. He has also worked on the design of several microprocessors at Intel and at Motorola."},{time:"14:50 ~ 15:40",speaker:"Hossein Asadi",topic:"Towards Scalable Architecture in All-Flash Storage Systems",content:"I/O-intensive applications are increasingly demanding higher I/O rates in enterprise environments. To meet the rising performance demand of such applications, ultra-fast SSDs are emerging in the industry. Unfortunately, traditional SAN architectures do not scale in performance by just using ultra-fast SSDs in the storage backend. In this talk, I will address major performance bottlenecks of traditional storage architectures and also offer novel techniques that can be used to build a scalable storage architecture for emerging all-flash storage systems.",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:'Hossein Asadi is a Full Professor in the Department of Computer Engineering at Sharif University of Technology (SUT).  He is the founder and the director of "Data Storage, Networks, and Processing"(DSN) lab with the main research in the field of "Data Storage Systems", "High-Performance Computing", "Memory Systems", "Virtualization", and "Operating Systems”. Hossein has received numerous awards including “SUT Distinguished Researcher Award" in 2016, “SUT Distinguished Research Institute Award" in 2016, “SUT Distinguished Technology Award" in 2017, “SUT Distinguished Research Lab Award" in 2019, Best Paper Award at IEEE/ACM DATE in 2019, “SUT Distinguished Research Award in Patents" in 2022, and “Distinguished National Technology Award" in 2022 by Iran Ministry of Science and Technology. Prior joining to SUT, he was with EMC Corporation, headquartered in Hopkinton, Massachusetts as a research scientist and senior hardware engineer from 2006 to 2009. He is also the co-founder of HPDS (the largest SAN manufacturer in Iran).'},{time:"15:40 ~ 16:30",speaker:"Jisung Park",topic:"White-Box Optimization Approaches for Ultra Large-Capacity NAND Flash-Based SSDs",content:"This talk discusses challenges in designing ultra large-capacity NAND flash-based SSDs and introduces two white-box optimization approaches to address the challenges. NAND flash memory is the predominant technology for modern storage systems to meet the high-performance and large-capacity storage requirements from data-intensive applications. As a promising solution to reduce the total cost of ownership (TCO) of storage systems, there is increasing demand for ultra large-capacity SSDs that offer unprecedented single-device storage capacity (e.g., 128 TB). Even though some manufacturers have recently introduced their successful development of such large-capacity SSDs, there exist new technical challenges that need to be addressed to achieve high I/O performance and long SSD lifetime, which primarily originate from the reliability issues of high-density NAND flash memory. In this talk, I will present two recent works, each of which effectively improves the performance and lifetime of high-density NAND flash-based SSDs, respectively, based on deep understanding of underlying hardware components. Such white-box optimization approaches can effectively overcome the limitations of conventional black-box approaches, unlocking the full potential of NAND flash memory. First, I will introduce RiF (Retry-in-Flash), an in-flash processing technique to identify a read failure inside a NAND flash chip which can avoid the waste of SSD-internal bandwidth due to read retry. Second, I will present AERO (Adaptive ERase Operation) that dynamically adjusts the erase latency to be just enough for reliable operation, thereby enhancing SSD lifetime by minimizing the erase-induced cell stress.",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:"Jisung Park is an Assistant Professor in the Department of Computer Science and Technology at POSTECH, where he leads the Computer Architecture and Operating Systems (CAOS) Laboratory. He is also affiliated with the Graduate School of Artificial Intelligence. Prior to joining POSTECH in 2022, he spent three years as a Senior Researcher and Lecturer in the Department of Information Technology and Electrical Engineering at ETH Zürich. He earned his Ph.D. degree in Electrical Engineering and Computer Science from Seoul National University. His research interests lie in a broad range of computer systems, including computer architecture, system software, system security, and HW/SW cooperation, with a great focus on memory and storage systems."},{time:"16:30 ~ 17:00",speaker:"",topic:"Break",content:"",link:"",bio:""},{time:"17:00 ~ 17:50",speaker:"Reza Salkhordeh",topic:"Challenges and Opportunities of Host-Side FTL in ZNS Devices",content:"ZNS SSDs are emerging storage devices that allow the host to fully control the data placement and manage the SSD’s internal state. They reduce the cost of manufacturing the SSDs and allow for OS- and application-level optimizations. However, moving the FTL functionality to the OS is challenging and poses many obstacles. This talk will first present such challenges and the approaches the academia takes to mitigate them. Then the open problems that can be the target of future research will be discussed. Additionally, the areas in which ZNS SSDs can be beneficial, and they are expected to provide improvements will be presented. Overall, this talk familiarizes the audience with the state-of-the-art research on ZNS SSDs and provides a view of possible future research topics.",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:"I received the B.Sc. degree in computer engineering from Ferdowsi University of Mashhad in 2011, and M.Sc. degree in computer engineering from Sharif University of Technology (SUT) in 2013. I received the Ph.D. degree from Sharif University of Technology (SUT) in 2018 under supervision of Prof. Hossein Asadi at Data Storage, Networks, and Processing (DSN) lab. I am currently a postdoctoral researcher in Efficient Computing and Storage Group at Johannes Gutenberg-University Mainz under supervision of Prof. André Brinkmann. My research interests include operating systems, solid-state drives, and data storage systems."},{time:"17:50 ~ 18:40",speaker:"Owens Walker",topic:"Classification of Solid State Drives Using Power-based Side-channel Analysis",content:"Solid state drive (SSD) technologies continue to evolve. Phase change memory, as seen in Intel and Micron’s 3D XPoint, is a good example of an advancement in the field and was commercially available in Intel’s Optane-branded memory from 2017 to 2022. Like their NAND flash SSD counterparts, the firmware on an Optane SSD has the potential to make it difficult for the user to validate whether operations (e.g., read and write) are being performed as expected on the drive itself. Machine learning-based classification has proven to be a useful tool in validating embedded firmware operations and uncovering unanticipated behavior.  In this work, we use power-based side-channel analysis to classify among four solid state drives from four different manufacturers employing phase change or 3D NAND memory technologies. We present sample waveforms in both the time domain and the frequency domain for these novel memory technologies and then use these to develop classifiers capable of classifying novel memory samples by operation (read vs. write) as well as by drive model and by drive technology. We achieve classification rates of 96.1% by operation, 98.3% by drive model, and 100% by technology employed. In addition, we demonstrate that the power-based side channel can be used to identify and investigate drive performance issues that impact read and write speeds. ",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:"Owens Walker received the B.S. degree in electrical engineering from Cornell University in 1987, and the M.S. and Ph.D. degrees in electrical engineering from the Naval Postgraduate School, Monterey, CA, USA, in 1995 and 2009, respectively. He is currently an Associate Professor with the Electrical and Computer Engineering Department, United States Naval Academy. He has been instrumental in the development of networking and cybersecurity course offerings at the Naval Academy, and he leads the Computer Engineering and Cyber Security Research Team. His research interests include wireless networking, wireless security, computer security, as well as light-based communications. He is a senior member of IEEE and a member of the Eta Kappa Nu."},{time:"18:40 ~ 19:30",speaker:"Sam H. Noh",topic:"On Minimizing Write Amplification in Log-structured Systems",content:`Log-structured systems are widely used in various applications because of its high write throughput. However, high garbage collection (GC) cost is widely regarded as the primary obstacle for its wider adoption. There have been numerous attempts to alleviate GC overhead, but with ad-hoc designs. This paper introduces MiDAS that minimizes GC overhead in a systematic and analytic manner. It employs a chain-like structure of multiple groups, automatically segregating data blocks by age. It employs analytical models, Update Interval Distribution (UID) and Markov-Chain-based Analytical Model (MCAM), to dynamically adjust the number of groups as well as their sizes according to the workload I/O patterns, thereby minimizing the movement of data blocks. Furthermore, MiDAS isolates hot blocks into a dedicated 𝐻𝑂𝑇 group, where the size of 𝐻𝑂𝑇 is dynamically adjusted according to the workload to minimize overall WAF. Our experiments using simulations and a proof-of-concept prototype for flash-based SSDs show that MiDAS outperforms state-of-the-art GC techniques, offering 25% lower WAF and 54% higher throughput, while consuming less memory and CPU cycles
`,link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:`Sam H.(Hyuk) Noh received the BE degree in computer engineering from the Seoul National University, Seoul, Korea, in 1986, and the PhD degree from the Department of Computer Science, University of Maryland, College Park, MD, in 1993. He held a visiting faculty position at the George Washington University, Washington, DC, from 1993 to 1994 before joining Hongik University, in Seoul, Korea, where he was a professor in the School of Computer and Information Engineering until the Spring of 2015. Starting from the Fall of 2015 he joined UNIST (Ulsan National Institute of Science and Technology), where he was a Professor at the Department of Computer Science and Engineering and served as the inaugural Dean of the Graduate School of Artificial Intelligence in the College of Information and Biotechnology from August 2020 through March 2023. He also served as the Dean of the School of Electrical and Computer Engineering from January of 2016 through June of 2018. As of January 2023, he is a Professor at the Computer Science Department at Virginia Tech. He has served as General Chair, Program Chair, and Program Committee Member on a number of technical conferences and workshops including USENIX ATC, USENIX FAST, ACM Eurosys, USENIX HotStorage, ACM EMSOFT, ACM SOSP, IEEE RTAS, ACM ASPLOS, USENIX OSDI, ACM LCTES, IEEE ICPADS, ​​and WWW, among others. He is currently a Steering Committee member of ACM HotStorage, USENIX FAST, and IEEE NVMSA. As of May 2024, he is serving as co-Editor-in-Chief of the ACM Transactions on Computer Systems (TOCS). He also served as Editor-in-Chief of the ACM Transactions on Storage (TOS) from 2016 through 2022.

His research interests include system software issues pertaining to computer systems in general and storage systems in particular, with a focus on the use of new memory technologies such as flash memory and persistent memory. He is a Fellow of the ACM and the IEEE and a member of USENIX and KIISE (Korean Institute of Information Scientists and Engineers).`},{time:"19:30 ~ 19:35",speaker:"",topic:"Closing",content:"",link:"https://bbb.ssdworkshop.com/rooms/yq6-kw4-iuo-qmo/join",bio:""}]}],t={text:"You can register for the workshop by clicking ",link:"https://forms.gle/14RBHvce1BbmNJ6U9"},o=[{profile:"/images/Jeong_A_Lee.jpg",name:"Jeong-A Lee",description:"Chosun University",rank:"Professor",email:"jalee@chosun.ac.kr",linkedin:""},{profile:"/images/hamid_sarbazi_azad.jpg",name:"Hamid Sarbazi-Azad",description:"Sharif University of Technology",rank:"Professor",email:`azad@{sharif.edu, ipm.ir} 
 hamid@chousn.ac.kr`,linkedin:""}],s=[{logo:"/images/KIISE.png",description:"Korean Institute of Information Scientists and Engineers (KIISE)",link:"http://m.kiise.or.kr/academyEng/main/getContent.faEng?content_no=2&MENU_ID=010200"},{logo:"/images/computer_society_of_iran.png",description:"Computer Society of Iran (CSI)",link:"https://csi.org.ir/en/"},{logo:"/images/springer.png",description:"The Journal of Supercomputing",link:"https://link.springer.com/journal/11227"}],r=["azad@sharif.edu","hamid@chosun.ac.kr","jalee@chosun.ac.kr"],c={labName:"(C) HPCAN Lab.Sharif University of Technology."};export{r as c,i as d,c as f,e as h,o,t as r,a as s,s as t,n as w};
