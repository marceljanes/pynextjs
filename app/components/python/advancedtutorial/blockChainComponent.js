import styles from './style.module.css';
import Link from 'next/link';

const BlockchainPythonTutorial = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Building a Simple Blockchain in Python: A Comprehensive Guide</h1>
            <p>
            Blockchain technology, often linked with cryptocurrencies like Bitcoin, is a revolutionary approach to recording and sharing data across a distributed network. Unlike traditional databases that are centralized, blockchains are decentralized and spread across multiple nodes or computers. This makes them inherently resistant to modifications of the data; once information is recorded, it is very difficult to change it.
            </p>

            <p>
            One of the key features of blockchain technology is its immutability and transparency. This means that once data (often in the form of transactions) is added to the blockchain, it cannot be easily altered, creating a secure and transparent record of transactions. This aspect is crucial in building trust among users and is maintained through cryptographic hashing and consensus mechanisms.
            </p>
            <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Blockchain representation with individual blocks */}
                {[1, 2, 3].map((blockNumber) => (
                    <div key={blockNumber} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-bold mb-2">Block {blockNumber}</h4>
                        <p><span className="font-semibold">Data:</span> Transaction Data</p>
                        <p><span className="font-semibold">Previous Hash:</span> 0000abcd1234</p>
                        <p><span className="font-semibold">Hash:</span> 0000efgh5678</p>
                        {blockNumber < 3 && (
                            <div className="mt-4 flex justify-center items-center">
                                <div className="w-8 h-1 bg-blue-500"></div>
                                <span className="mx-2 text-blue-500 font-bold">&rarr;</span>
                                <div className="w-8 h-1 bg-blue-500"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

            <p>
            Blockchain networks employ various consensus algorithms, such as Proof of Work or Proof of Stake, to ensure all participants in the network agree on the current state of the ledger. This consensus prevents fraudulent transactions and ensures the integrity of the data recorded on the blockchain.
            </p>

            <p>
            Another significant aspect of blockchain technology is the concept of smart contracts, especially in platforms like Ethereum. Smart contracts are self-executing contracts with the agreement terms directly written into code. They automate transactions and agreements, executing them when predetermined conditions are met, which reduces the need for intermediaries.
            </p>
            <div className="my-10 flex flex-col md:flex-row gap-4">
                <div className="flex-1 p-6 bg-green-100 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-green-800 mb-3">Blockchain Basics Explained for Beginners</h4>
                    <p className="text-green-600 mb-4">An easy-to-understand guide to the fundamental concepts of blockchain technology.</p>
                    <div className={styles.code}>
                        <p><span className={styles.keyword}>What is Blockchain?</span>: A system for recording information in a way that makes it difficult to change, cheat, or hack. It's a digital ledger of transactions.</p>
                        <p><span className={styles.keyword}>Blocks</span>: Similar to pages in a ledger. Each block contains transactions, and when a new transaction happens, it's recorded in everyone's ledger across the network.</p>
                        <p><span className={styles.keyword}>Decentralization</span>: Blockchain isn't stored in one place but is copied and spread across a network of computers. Each computer updates its blockchain with every new block.</p>
                        <p><span className={styles.keyword}>Transparency & Security</span>: Transactions are visible to everyone, but they're secure and can't be altered, making blockchain transparent and tamper-proof.</p>
                        <p><span className={styles.keyword}>Mining</span>: The process of validating new transactions and adding them to the blockchain. It involves solving complex mathematical puzzles to confirm transactions.</p>
                        <p><span className={styles.keyword}>Cryptocurrency</span>: Digital or virtual currencies like Bitcoin, powered by blockchain technology, secured by cryptography to prevent fraud.</p>
                        <p><span className={styles.keyword}>Smart Contracts</span>: Self-executing contracts with terms directly written into code. They automatically perform actions when conditions are met.</p>
                    </div>
                    
                </div>
            </div>


            <p>
            Python, with its simplicity and ease of use, is an excellent language for exploring and building blockchain applications. A basic blockchain in Python can be developed by creating individual blocks that contain data, a timestamp, the hash of the previous block (linking it to the chain), and a unique hash for itself, usually created using cryptographic algorithms like SHA-256.
            </p>

            <p>
            The integrity of the blockchain is maintained by ensuring that each block is accurately linked to its predecessor. If any data in a block is altered, its hash changes, which would be evident when compared to the next block's reference to its previous hash, indicating a breach in the chain's integrity.
            </p>

            <p>
            In more advanced implementations, you can explore adding consensus mechanisms to your Python blockchain, especially if it operates over a distributed network. Testing the blockchain involves adding blocks and ensuring that the chain remains valid, illustrating the concept of immutability in a blockchain.
            </p>

            <p>
            Learning to create a blockchain with Python is not just about coding but understanding one of the most innovative technologies in today's digital landscape. This knowledge has applications across various industries, from finance to supply chain, and opens up numerous opportunities for technological innovation.
            </p>


        <h2>Understanding Blockchain Technology</h2>
        <p>At its core, a blockchain is a distributed database that maintains a continuously growing list of records, called blocks, linked and secured using cryptography. Each block typically contains a cryptographic hash of the previous block, a timestamp, and transaction data.</p>

        <h2>Python Environment Setup</h2>
        <p>Before diving into coding, ensure Python is installed on your system. We'll also use the 'hashlib' library for cryptographic operations.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Verify Python installation</span>{'\n'}
          <span className={styles.keyword}>python --version</span>
          <span className={styles.comment}># hashlib comes pre-installed with Python</span>
        </pre>

        <h2>Creating the Basic Block Structure</h2>
        <p>Our first step is to define a Block class in Python. Each block will have a timestamp, transaction data, the hash of the previous block, and its own hash.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Import necessary libraries</span>{'\n'}
          <span className={styles.keyword}>import</span> hashlib{'\n'}
          <span className={styles.keyword}>import</span> time{'\n'}
          {'\n'}
          <span className={styles.keyword}>class</span> Block:{'\n'}
          {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>__init__</span>(self, data, previous_hash):{'\n'}
          {'        '}self.timestamp = time.time(){'\n'}
          {'        '}self.data = data{'\n'}
          {'        '}self.previous_hash = previous_hash{'\n'}
          {'        '}self.hash = self.calculate_hash(){'\n'}
          {'\n'}
          {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>calculate_hash</span>(self):{'\n'}
          {'        '}hash_contents = str(self.timestamp) + str(self.data) + str(self.previous_hash){'\n'}
          {'        '}return hashlib.sha256(hash_contents.encode()).hexdigest(){'\n'}
        </pre>
        <div>
            In this Python code, we are defining a class named <code>Block</code> which is a fundamental part of a blockchain structure. The <code>Block</code> class represents each 'block' in the blockchain. Upon initializing a new instance of the <code>Block</code> class (i.e., creating a new block), four key pieces of information are established:
            <ul>
                <li><strong>Timestamp</strong>: Captured by <code>self.timestamp = time.time()</code>, this records the exact time of block creation. The <code>time.time()</code> function from the <code>time</code> library returns the current time in seconds since the Epoch (January 1, 1970, 00:00:00 UTC).</li>
                <li><strong>Data</strong>: Stored in <code>self.data</code>, this represents the content or the payload of the block. The data could be anything like transaction details in the case of a financial blockchain.</li>
                <li><strong>Previous Hash</strong>: Stored in <code>self.previous_hash</code>, this is a string that represents the hash of the previous block in the chain. This is crucial for maintaining the blockchain’s integrity, as each block is linked to its predecessor.</li>
                <li><strong>Current Block's Hash</strong>: Calculated by <code>self.calculate_hash()</code>, this is a unique identifier for the block. It's calculated using a hash function - in this case, SHA-256, provided by the <code>hashlib</code> library. The method <code>calculate_hash</code> combines the block’s timestamp, its data, and the hash of the previous block and then computes the SHA-256 hash of this combined string. This hash is crucial for blockchain security, as any change in block data will result in a completely different hash, signaling potential tampering.</li>
            </ul>
            Together, these elements ensure that each block is securely and immutably linked to the blockchain, creating a tamper-evident record.
        </div>


        <div>
            <h2>Building the Blockchain Class</h2>
            <p>We'll now create a Blockchain class to manage the chain of blocks. It will initialize with a genesis block and provide the functionality to add new blocks.</p>
            <pre className={styles.code}>
                <span className={styles.keyword}>class</span> Blockchain:{'\n'}
                {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>__init__</span>(self):{'\n'}
                {'        '}self.chain = [self.create_genesis_block()]{'\n'}
                {'\n'}
                {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>create_genesis_block</span>(self):{'\n'}
                {'        '}return Block("Genesis Block", "0"){'\n'}
                {'\n'}
                {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>add_block</span>(self, data):{'\n'}
                {'        '}last_block = self.chain[-1]{'\n'}
                {'        '}new_block = Block(data, last_block.hash){'\n'}
                {'        '}self.chain.append(new_block){'\n'}
            </pre>
            <p>
                In this section, we define the <code className="text-purple-600">Blockchain</code> class. This class is responsible for managing the entire chain of blocks and contains several key methods:
                <ol>
                    <li>
                        <strong>Initialization Method</strong>: The <code className="text-blue-600">__init__</code> method initializes the blockchain. Upon creation of a new blockchain, this method creates the first block in the chain, known as the genesis block, by calling the <code className="text-blue-600">create_genesis_block</code> method.
                    </li>
                    <li>
                        <strong>Creating the Genesis Block</strong>: The <code className="text-blue-600">create_genesis_block</code> method is defined to create the initial block in the chain. This genesis block is the foundation of the blockchain and typically does not contain any transaction data. It is linked to a previous hash of "0", indicating that it has no predecessor.
                    </li>
                    <li>
                        <strong>Adding New Blocks</strong>: The <code className="text-blue-600">add_block</code> method adds a new block to the chain. It first retrieves the last block in the current chain (the most recently added block) to link the new block to it. The new block is created with the provided data and the hash of the last block. Finally, this new block is appended to the chain, extending the blockchain.
                    </li>
                </ol>
                Each of these methods plays a crucial role in maintaining the integrity and continuity of the blockchain, ensuring that each new block is securely linked to the preceding one.
            </p>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-4">
        <div className="flex-1 p-6 bg-blue-100 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-blue-800 mb-3">Understanding the 'add_block' Method in Blockchain</h4>
            <p className="text-blue-600 mb-4">A simplified explanation of how new blocks are added and linked in a blockchain.</p>
            <div className={styles.code}>
                <p>
                    The <span className={styles.keyword}>add_block</span> method in a blockchain class is a crucial function that allows the blockchain to grow by adding new blocks. Here's how it works:
                </p>
                <ol>
                    <li>
                        <strong>Finding the Last Block</strong>: The method starts by identifying the last block in the current chain using <code className="text-green-600">self.chain[-1]</code>. This block is the most recently added block and will serve as the predecessor to the new block.
                    </li>
                    <li>
                        <strong>Creating a New Block</strong>: A new block is created with the provided data and the hash of the last block. The code <code className="text-green-600">new_block = Block(data, last_block.hash)</code> initializes a new instance of the <code className="text-green-600">Block</code> class. The hash of the last block is crucial as it establishes the link between the new block and the existing chain.
                    </li>
                    <li>
                        <strong>Appending to the Chain</strong>: The new block is then appended to the end of the chain with <code className="text-green-600">self.chain.append(new_block)</code>. This action effectively lengthens the blockchain by one block.
                    </li>
                </ol>
                <p>
                    Through these steps, the blockchain maintains its integrity. Each new block is securely linked to the chain, ensuring the continuity and immutability of the entire blockchain.
                </p>
            </div>
            
        </div>
    </div>



        <h2>Testing Our Blockchain</h2>
        <p>Now let's test our blockchain by adding some blocks and printing their contents.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Testing the blockchain</span>{'\n'}
          <span className={styles.keyword}>blockchain</span> = Blockchain(){'\n'}
          <span className={styles.keyword}>blockchain.add_block</span>("First Block"){'\n'}
          <span className={styles.keyword}>blockchain.add_block</span>("Second Block"){'\n'}
          {'\n'}
          <span className={styles.keyword}>for</span> block <span className={styles.keyword}>in</span> blockchain.chain:{'\n'}
          {'    '}print("Block Data: " + block.data + " - Block Hash: " + block.hash){'\n'}
        </pre>
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Blockchain Output</h2>
            <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded-xl shadow">
                    <p className="text-lg font-semibold">Block Data: Genesis Block</p>
                    <p>Block Hash: <span className="font-mono text-sm bg-gray-200 p-1 rounded">01a31d1deba108186ab5f0fdc72d887dc48f921c93a237c8bb04b7129b24b926</span></p>
                </div>

                <div className="p-4 bg-gray-100 rounded-xl shadow">
                    <p className="text-lg font-semibold">Block Data: First Block</p>
                    <p>Block Hash: <span className="font-mono text-sm bg-gray-200 p-1 rounded">b09f82bb7867abbe5fdedf1a2d97abd78b64cf0d2872e5bb34b2bb8d998ce43a</span></p>
                </div>

                <div className="p-4 bg-gray-100 rounded-xl shadow">
                    <p className="text-lg font-semibold">Block Data: Second Block</p>
                    <p>Block Hash: <span className="font-mono text-sm bg-gray-200 p-1 rounded">968ca808836a916afb238cbad42a49ef4ce6f0510c16ce01733ccb848b06e019</span></p>
                </div>
            </div>
        </div>
      
        
        <div className="my-10 flex flex-col md:flex-row gap-4">
        <div className="flex-1 p-6 bg-yellow-100 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-yellow-800 mb-3">Understanding the 'Blockchain' Instance</h4>
            <p className="text-yellow-600 mb-4">Clarifying the role and nature of the <code>Blockchain()</code> in blockchain technology.</p>
            <div className={styles.code}>
                <p>
                    The line <code className="text-green-600">blockchain = Blockchain()</code> in Python is not creating a wallet, but rather it's initializing an instance of the blockchain itself. Here's a detailed explanation:
                </p>
                <ul>
                    <li>
                        <strong>Blockchain Instance</strong>: This line of code represents the creation of a new blockchain. It's like starting a new digital ledger from scratch. The <code>Blockchain</code> class encapsulates all the functionality of a blockchain, such as adding blocks and ensuring integrity.
                    </li>
                    <li>
                        <strong>Not a Wallet</strong>: Unlike a wallet, which is used to store and manage cryptocurrency assets, the <code>blockchain</code> instance here represents the ledger itself where all transaction records are stored. It's the foundational structure of a blockchain network.
                    </li>
                    <li>
                        <strong>Purpose</strong>: This blockchain instance can be used to add new transactions (blocks), verify the integrity of the chain, and explore the concepts of blockchain technology. In a real-world application, this would be part of a larger system that includes wallets, transaction verification, consensus algorithms, and more.
                    </li>
                </ul>
                <p>
                    In summary, <code>blockchain = Blockchain()</code> is the starting point for building and managing a blockchain, serving as the ledger rather than a wallet or a specific tool for asset management.
                </p>
            </div>
            
        </div>
    </div>


        <h2>Conclusion and Further Exploration</h2>
        <p>This tutorial provided you with the fundamentals of blockchain technology and guided you through creating a basic blockchain in Python. For further learning, explore advanced topics such as consensus algorithms, smart contracts, and blockchain applications in different industries.</p>
        <div className="bg-green-100 rounded-xl shadow-md p-6 my-10">
                    <h2 className="text-xl font-semibold text-green-800 mb-4">Advanced Python Tutorials</h2>
                    <p className="text-sm text-green-600">Enhance your skills with our advanced tutorials. Dive into complex topics and become a Python expert.</p>
                    <Link href={'/tutorials/python/advanced'}>
                        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm">
                            Explore Advanced Tutorials
                        </button>
                    </Link>
        </div>
        
      </div>
        
    
    </>
  );
};

export default BlockchainPythonTutorial;
