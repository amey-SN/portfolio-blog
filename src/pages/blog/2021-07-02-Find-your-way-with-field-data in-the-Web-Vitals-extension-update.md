---
templateKey: blog-post
title: Find your way with field data in the Web Vitals extension update
date: 2021-07-02T15:04:10.000Z
featuredpost: false
featuredimage: /img/blog-1.png
description: The Web Vitals extension now shows you where your local experiences are in relation to real user experiences in the field.
tags:
  - Web Vitals
  - Chrome UX Report
  - Tools
---
![ ](/img/blog-1.png)

Core Web Vitals are the most important metrics to measure to understand your users' experiences, because when users have good experiences, good things happen! The Web Vitals extension for Chrome is one tool in the Web Vitals toolbox that shows you performance data about the pages you visit as you browse the web.

Page performance depends on many factors, including hardware and network quality. How you experience a page on your machine may be very different from how the majority of users experience it. That's why version 1.0 of the Web Vitals extension includes a new feature that integrates real-user data from the Chrome UX Report (CrUX) with your local Core Web Vitals measurements. This feature displays your local measurements in the context of how other users have experienced the same pages. It comes with a sparkly new UI and I'm excited to show you how it works.

## Field data from CrUX

CrUX is a public dataset of real-user experiences in Chrome. It powers some of the critical tools in the Core Web Vitals workflow like Search Console and PageSpeed Insights. The raw data for millions of websites is also publicly queryable in the CrUX dataset on BigQuery and the CrUX API. This Web Vitals extension update integrates the page and origin-level desktop data from the CrUX API.

User experience data is broken down into three qualitative ratings: good, needs improvement, and poor. The thresholds used for each rating are documented in the guides for each of the Core Web Vitals metrics: LCP, FID, and CLS. So for example, the CrUX API can tell you that 16% of real-user experiences on a given page are evaluated as having good LCP under 2.5 seconds

By default, all of the data in the Web Vitals extension corresponds to real desktop users' experiences from the field. After all, this extension is only available on desktop versions of Chrome, so it'd be most relevant to see how users under similar conditions experience the page or origin.

It's important to understand phone users' experiences too, so the extension has an advanced setting on the Options page that lets you see how your local experience compares to phone data from the field.

To enable phone data in the extension, follow these steps:

1. Right click on the extension icon in the toolbar and select Options.
2. Check the Compare local experiences to phone field data option.
The UI will update in a few places to indicate which mode you're in. Be aware that real phone users' experiences can be very different from that of desktop users, so use this feature with discretion.

## Get the Web Vitals extension 
To start using the latest version of the Web Vitals extension, head over to the Chrome Web Store to install it. Or if you're an existing user of the extension, you should be upgraded to version 1.0 automatically. If you have any feedback about your experience with the extension (feature requests, bug reports, anything), let us know in the open-source repository on GitHub. I hope it helps you better understand where your local experiences are in relation to other real users from the field!