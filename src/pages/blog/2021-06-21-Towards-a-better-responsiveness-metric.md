---
templateKey: blog-post
title: Towards a better responsiveness metric
date: 2021-06-21T15:04:10.000Z
featuredpost: false
featuredimage: /img/blog-2.jpeg
description: Learn about our thoughts on measuring responsiveness and give us feedback.
tags:
  - Web Vitals
  - Performance

---
![ ](/img/blog-2.jpeg)

On the Chrome Speed Metrics team, we're working on deepening our understanding of how quickly web pages respond to user input. We'd like to share some ideas for improving responsiveness metrics and hear your feedback.

This post will cover two main topics:

1. Review our current responsiveness metric, First Input Delay (FID), and explain why we chose FID rather than some of the alternatives.

2. Present some improvements we've been considering that should better capture the end-to-end latency of individual events. These improvements also aim to capture a more holistic picture of the overall responsiveness of a page throughout its lifetime.

## What is First Input Delay? 
The First Input Delay (FID) metric measures how long it takes the browser to begin processing the first user interaction on a page. In particular, it measures the difference between the time when the user interacts with the device and the time when the browser is actually able to begin processing event handlers. FID is just measured for taps and key presses, which means that it only considers the very first occurrence of the following events:

1. click
2. keydown
3. mousedown
4. pointerdown (only if it is followed by pointerup)

There's are pros and cons to this approach of using the maximum, and we're interested in hearing your feedback:

1. Pro: It is aligned with how we intend to measure scroll in that it only measures a single duration value.
2. Pro: It aims to reduce noise for cases like keyboard interactions, where the keyup usually does nothing and where the user may execute the key press and release quickly or slowly.
1. Con: It does not capture the full wait time of the user. For instance, it will capture the start or end of a drag, but not both.
For scrolling (which just has a single associated event) we'd like to define its latency as the time it takes for the browser to produce the first frame as a result of scrolling. That is, the latency is the delta between the event timeStamp of the first DOM event (like touchmove, if using a finger) that is large enough to trigger a scroll and the first paint which reflects the scrolling taking place.

## Aggregate all interactions per page 
Once we've defined what the latency of an interaction is, we'll need to compute an aggregate value for a page load, which may have many user interactions. Having an aggregated value enables us to:

Form correlations with business metrics.
Evaluate correlations with other performance metrics. Ideally, our new metric will be sufficiently independent that it adds value to the existing metrics.
Easily expose values in tooling in ways that are easy to digest.
In order to perform this aggregation we need to solve two questions:

What numbers do we try to aggregate?
How do we aggregate those numbers?
We're exploring and evaluating several options. We welcome your thoughts on this aggregation.

One option is to define a budget for the latency of an interaction, which may depend on the type (scroll, keyboard, tap, or drag). So for example if the budget for taps is 100 ms and the latency of a tap is 150 ms then the amount over budget for that interaction would be 50 ms. Then we could compute the maximum amount of latency that goes over the budget for any user interaction in the page.

Another option is to compute the average or median latency of the interactions throughout the life of the page. So if we had latencies of 80 ms, 90 ms, and 100 ms, then the average latency for the page would be 90 ms. We could also consider the average or median "over budget" to account for different expectations depending on the type of interaction.

## How does this look like on web performance APIs? #
### What's missing from Event Timing? #
Unfortunately not all of the ideas presented in this post can be captured using the Event Timing API. In particular, there's no simple way to know the events associated with a given user interaction with the API. In order to do this, we've proposed adding an interactionID to the API.

Another shortcoming of the Event Timing API is that there is no way to measure the scroll interaction, so we're working on enabling these measurements (via Event Timing or a separate API).

### What can you try right now? 
Right now, it is still possible to compute the maximum latency for taps/drags and for keyboard interactions. The following code snippet would produce these two metrics.


`let maxTapOrDragDuration = 0;
let maxKeyboardDuration = 0;
const observer = new PerformanceObserver(list => {
  list.getEntries().forEach(entry => {
    switch(entry.name) {
      case "keydown":
      case "keyup":
        maxKeyboardDuration = Math.max(maxKeyboardDuration,
            entry.duration);
        break;
      case "pointerdown":
      case "pointerup":
      case "click":
        maxTapOrDragDuration = Math.max(maxTapOrDragDuration,
            entry.duration);
        break;
    }
  });
});
observer.observe({type: "event", minDuration: 16, buffered: true});`

// We can report maxTapDragDuration and maxKeyboardDuration when sending
// metrics to analytics.
## Feedback 
Let us know what you think about these ideas by emailing: [web-vitals-feedback@googlegroups.com](mailto://web-vitals-feedback@googlegroups.com/ "email us")
