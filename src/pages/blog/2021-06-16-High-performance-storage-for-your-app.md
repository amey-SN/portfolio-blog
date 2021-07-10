---
templateKey: 'blog-post'
title: 'High performance storage for your app: the Storage Foundation API'
date: 2021-06-16T15:04:10.000Z
featuredpost: true
description: >-
  The Storage Foundation API resembles a basic file system, with direct access to stored data through buffers and offsets. It gives developers flexibility by providing generic, simple, and performant primitives on which they can build higher-level components.
tags:
  - Capabilities
---
![code](/img/blog-3.jpeg)

The web platform increasingly offers developers the tools they need to build fined-tuned high-performance applications for the web. Most notably, WebAssembly (Wasm) has opened the door to fast and powerful web applications, while technologies like Emscripten now allow developers to reuse tried and tested code on the web. To truly leverage this potential, developers must have the same power and flexibility when it comes to storage.

This is where the Storage Foundation API comes in. The Storage Foundation API is a new fast and unopinionated storage API that unlocks new and much-requested use cases for the web, such as implementing performant databases and gracefully managing large temporary files. With this new interface, developers can "bring their own storage" to the web, reducing the feature gap between web and platform-specific code.

The Storage Foundation API is designed to resemble a very basic file system so it gives developers flexibility by providing generic, simple, and performant primitives on which they can build higher-level components. Applications can take advantage of the best tool for their needs, finding the right balance between usability, performance, and reliability.

## Why does the web need another storage API? 
The web platform offers a number of storage options for developers, each of which is built with specific use-cases in mind.

Some of these options clearly do not overlap with this proposal as they only allow very small amounts of data to be stored, like cookies, or the Web Storage API consisting of the sessionStorage and the localStorage mechanisms.
Other options are already deprecated for various reasons like the File and Directory Entries API or WebSQL.
The File System Access API has a similar API surface, but its use is to interface with the client's file system and provide access to data that may be outside of the origin's or even the browser's ownership. This different focus comes with stricter security considerations and higher performance costs.
The IndexedDB API can be used as a backend for some of the Storage Foundation API's use-cases. For example, Emscripten includes IDBFS, an IndexedDB-based persistent file system. However, since IndexedDB is fundamentally a key-value store, it comes with significant performance limitations. Furthermore, directly accessing subsections of a file is even more difficult and slower under IndexedDB.
Finally, the CacheStorage interface is widely supported and is tuned for storing large-sized data such as web application resources, but the values are immutable.
The Storage Foundation API is an attempt at closing all the gaps of the previous storage options by allowing for the performant storage of mutable large files defined within the origin of the application.

Suggested use cases for the Storage Foundation API #
Examples of sites that may use this API include:

Productivity or creativity apps that operate on large amounts of video, audio, or image data. Such apps can offload segments to disk instead of holding them in memory.
Apps that rely on a persistent file system accessible from Wasm and that need more performance than what IDBFS can guarantee.
What is the Storage Foundation API? #
There are two main parts to the API:

File system calls, which provide basic functionality to interact with files and file paths.
File handles, which provide read and write access to an existing file.
### File system calls 
The Storage Foundation API introduces a new object, storageFoundation, that lives on the window object and that includes a number of functions:

We are currently exploring the tradeoffs between providing a synchronous versus an asynchronous API. The interfaces are designed to be asynchronous as a temporary measure and will be updated once a decision has been reached. For more background on the tradeoffs, see the Explainer.

storageFoundation.open(name): Opens the file with the given name if it exists and otherwise creates a new file. Returns a promise that resolves with the the opened file.
Warning: File names are restricted to lowercase alphanumeric characters and underscore (a-z, 0-9, _).

A file can only be opened once. This means concurrent access from different tabs is currently not possible.

storageFoundation.delete(name): Removes the file with the given name. Returns a promise that resolves when the file is deleted.
storageFoundation.rename(oldName, newName): Renames the file from the old name to the new name atomically. Returns a promise that resolves when the file is renamed.
storageFoundation.getAll(): Returns a promise that resolves with an array of all existing file names.
storageFoundation.requestCapacity(requestedCapacity): Requests new capacity (in bytes) for usage by the current execution context. Returns a promise that resolved with the remaining amount of capacity available.
The Storage Foundation API achieves fast and predictable performance by implementing its own quota management system. Web applications must explicitly ask for capacity before storing any new data. This request will be granted according to the browser's quota guidelines. Anytime an application starts a new JavaScript execution context (e.g., a new tab, a new worker, or when reloading the page), it must make sure it owns sufficient capacity before writing any data.

storageFoundation.releaseCapacity(toBeReleasedCapacity): Releases the specified number of bytes from the current execution context, and returns a promise that resolves with the remaining capacity.
storageFoundation.getRemainingCapacity(): Returns a promise that resolves with the capacity available for the current execution context.
### File handles 
Working with files happens via the following functions:

The Storage Foundation API used to be called NativeIO. Some references to this name still remain and will be removed eventually.

- NativeIOFile.close(): Closes a file, and returns a promise that resolves when the operation completes.

- NativeIOFile.flush(): Synchronizes (that is, flushes) a file's in-memory state with the storage device, and returns a promise that resolves when the operation completes.

It is a known issue that 
