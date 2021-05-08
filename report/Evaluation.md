# 6) Evaluation

###  [<< Back to Landing Page](../README.md)

### [<< Previous Section](SprintsAndProjectManagements.md)

## 6.1) Evaluative Overview

We collected user feedback after key milestones in order to make our design continuously responsive to feedback from the end user. We initially conducted a a series of casual interviews about very early paper prototypes. This then lead us to create a more complete paper prototype, which we wrote a questionnaire for. Once we had a website which was useable and interactive, we conducted a series of semi-structured interviews about it. The feedback we gained during the process of creating the product led to some interesting and unexpected insights, which ultimately shaped our final design. A complete timeline of user surveys is detailed in the report's UX Design section.

For our final evaluation, we created a questionnaire which was structured around the success criteria which we defined at the start of the project.

Overall, we found our process of evaluation effective for understanding our product. However, we faced some limitations due to time-pressure and the impact of the pandemic which prevented us from gaining feedback as thoroughly as we would have liked. For instance, approximately half of our semi-structured interviews had to be conducted online, which we worried prevented the users from being able to properly interact with and understand the design. Because the interviews were conducted online, we determined that it would be sensible to have only one interviewee per participant, due to both the technical complications of three way calls (i.e lag, sound quality) and because we worried that our respondants would find a three-way call intimidating in a way that a three-way in-person conversation wasn't. The result was that the interviewee had to take notes at the same time as interviewing, which limited the ability to build a 'rapport' with the interviewee. We were also more limited to friends and family in those we could interview because it was harder to go and access potential interviewees in person. This may have skewed our feedback more positively.

We were also worried about the use of 'casual interviews'. Although they were only used in instances where we had what we considered small and relatively simple issues to be resolved, we had no guarentee that they were conducted consistently and they were not formally documented in the same way as a semi-structured interview. Had we had more time we would have conducted more formal interviews, and we viewed casual-interviews as a flawed means of gaining feedback which we tried to compesate for by always closely following them with more comrehensive interviews and questionnaires.

Conducting surveys while creating the product was an effective means of testing both the product and our ideation about it. In each survey we asked users about whether they found different elements of the interface easy to use, and this allowed us to continously test functionality and ease of use. It also helped to reveal errors in the product, such as when we realised that some users were not able to differentiate 'fact boxes' from the other posts on the timeline (which was discovered during our semi-structured interviews).

We believe there were benefits in alternating between survey feedback and semi-structured interviews, as both means of evaluation gave us different types of understanding about our product. This ultimately gave us a understanding of the product which was more well rounded and comprehensive.

## 6.2) Design Evaluation

The key findings about design from the first questionnaire and semi-strctured interview were:
- That users thought a ‘familiar’ social media layout was preferable to a more novel interface.
- Users felt comfortable that they would be able to navigate our designs.
- The design should be simplified by removing unnecessary features.
- The order of preference users would give to different features.

We therefore changed our final design by:
- Removing features from the navigation bar that we didn’t believe we would implement in our MVP.
- Attempting to emulate the 'seamless' experience of real social media sites by sharpening up our design.
- Highlighting the fact box to differentiate it from the regular posts.

Once we had a working prototype that fulfilled the criteria for our minimum viable product, we were able to conduct an evaluative questionnaire about the design. At the beginning of the project we established a number of success criteria, and this questionnaire was designed to straightforwardly evaluate how well we had accomplished these aims. The success criterion that related to design was:

> **Aesthetically Pleasing: Our product will implement our designs effectively.** The prototype will execute the designs in such a way that it facilitates playful interaction and enables us to effectively impart our message to users.

We therefore asked users to rate how aesthetically pleasing they found the site, in an attempt to quantify the success of our design. We also allowed for a qualitative response about how it could be improved.

Our main finding was:
- 3.4 out of 5 was the overall score for how aesthetically pleasing the prototype was.

Based on the qualitative feedback, many users may have been referring to the appearance of the site combined with how easy it was to navigate when they answered this question. Perhaps we should have more clearly directed the question towards solely the appearance, so as to be able to draw a more robust conclusion.

Many people praised how effectively we had impersonated real social media sites.

Some key insights were:
- “Some of the fonts and shapes could definitely be a bit 'cleaner', to make it seem more like the big social media sites”
- “It is definitely recognizably similar to social media. some of it looks a bit clunky though and there are some visual glitches too.”
- “It does mimic the real Facebook cleverly”
- “The colouring was calming. The subtle use of different hues helped”

## 6.3) Functional Testing

We decided to test our website using both black-box and white-box testing methods. Black-box testing requires testers to emulate the experience of a user, and to test the product as if they were not aware of what the code contains. White-box testing requires an awareness of the code and its structures, and involves targetting components that a user may not be able to see or access.

**Black Box Testing**

For our black-box testing, the development team tested our webpage from the perspective of a user. For this, the team created test plan, making sure that we tested each of the key 4 functionalities of our webpage; the pulling of random posts from the database, the storing of posts back to the database by the user, our infinite scroll of posts, and navigating between our ‘About’ and ‘Home’ page.

<p align="center">
  <img src="https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/report/report_images/Tests.png" width="600" />
</p>
<p align="center">
  <strong>Figure 1: A working copy of the tests performed in our test plan </strong>
</p>

We also made sure that the links to citations for facts were working correctly, as we wanted to ensure that users were able to verify the authenticity of the facts to ensure that our serious message was as strong as possible. We did this by scrolling through the feed and clicking the ‘go to source’ button provided for a number of different fact boxes and checking that we were taken to the correct place.

We also tested the site in several different browsers, to ensure there was no unintended behaviour, and to test that our site was as robust and portable as possible. This highlighted a couple of slight display issues present in one browser, which we were then able to fix.

**White-Box Testing**

For our white-box testing methods we made use of the testing framework Jasmine, strategically testing our main components in Angular. The following is the tree structure of the development folder for the front end (which we called app).

In the MVP, it was decided that functionality would not be added for a dynamically loading trending bar, about, middle-section and desktop. Therefore, testing of these components only included whether they were successfully built.

<p align="center">
  <img src="https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/report/report_images/Layout.png" width="800" />
</p>

```vim
app
└── desktop
    ├── about
    ├── leftsidebar
    ├── middle-section
    │   └── news-feed
    └── trendingbar
```

The news-feed section was not tested at all using this method for three reasons. Firstly, we had already ascertained that the news-feed section successfully fetched data from the backend without rendering issues after a Resolver was added. We confirmed this during our black box testing, and were sufficiently happy with this. Secondly, making the like-button switch colour when clicked was not included in the MVP, so we deemed it unnecessary to test. Thirdly, the Service, Resolver and the news-feed Component were all tightly coupled, which made testing extremely difficult. As a result, the user post functionality (user submits a post which gets sent to the database to be stored) was not tested using Jasmine.

The routerLink that takes the page from Home to About or vice-versa successfully passed the testing.

**Additional Testing**

For our backend and database, since it was difficult to see whether data is being stored properly on the go, we manually accessed MongoDB in the Docker container from the command line to check that data objects were being pulled and stored correctly. We did this for a number of different elements of our site:
- We wrote a post on the site, submitted it and checked that it had appeared correctly on the timeline.
- We then queried MongoDB for the post’s text to confirm that it had been stored.
- We destroyed and rebuilt the containers and checked that our data was correctly persisting as expected.
- We deleted an item from the database, then destroyed and rebuilt the container and checked that it was still not present.
- We then dropped a collection manually from MongoDB and rebuilt the container, checking that the starting data was re-seeded as it was supposed to be.

Additionally, we made use of Postman ([source](https://learning.postman.com/)), an online tool that we used to test that our HTTP requests were working as predicted. This was very useful, as it allowed us to conduct tests at various points during development, without the need for a working front-end.

All of this reassured us that our site was functioning as intended on the whole, to at least the standard required for a prototype. It also allowed us to catch some crucial errors that we were able to rectify.

## 6.4) User Acceptance Testing

We also set out to evaluate our product by seeking user opinions on the functionality, navigability and overall experience of using our prototype. This was done by asking users to fill in a survey following a few minutes of use of the prototype. The relevant success criteria we were testing were that the site was:

> **Relevant: Our product will be something our users want to use.** The creation of a working prototype of our webpage that is a product of our user feedback, exploration into our users’ experiences, and secondary research into social media.

> **Serious: Our product will educate users about social media addiction.** The prototype will allow users to leave our web page with information that will either motivate them to make changes in their own daily life, or inform others.

> **Playful: Our product will be fun, engaging and interactive to use.** The prototype will allow users to interact with the webpage in a fun and interactive way, either by providing an entertainment factor or through making them laugh.

As with the design section of the survey, we used these criteria to be able to quantify our success. This involved asking the users to rate the following on a scale of 1 to 5, where 1 was 'Not at all' and 5 was 'Extremely':

- How easy the site was to use.
- How effectively the site educated you about social media.
- How engaging and entertaining the site was.

We also asked the users to say whether or not they felt that they had learned anything about social media from the site, how long they felt they would be likely to spend on the site and if they’d be likely to recommend it to others. Again, we allowed for some qualitative answers too, to give more nuanced insight into our success.

Our key results were as follows:
- All users surveyed found that the site was easy to use, giving it either 4 or 5 out of 5.
- 100% of respondents said that they learned something about social media from our site.
- All respondents rated the site either a 4 or 5 out of 5 for how effectively it educated about social media.
- 4.2 out of 5 was the average score for how engaging the site was.
- Most users said that they didn’t think that they’d be likely to spend more than five minutes on the site in one ‘session’, although it was not uncommon for users to give outlying answers.
- The majority of users said that they’d be ‘Very Likely’ to recommend the site to a friend.

We also gathered some very insightful qualitative feedback, some of which related specifically to our success criteria and some of which was more general. Some choice pieces of qualitative feedback were:
- “I definitely found it more engaging than I thought I would from the description”
- “I think this would be a very useful tool for teaching young people about social media.”
- “I found the Fakebook facts quite shocking and enlightening.”
- “I was ridiculously pleased when my fake post instantly got over 1000 likes!”
- “I'd be much more likely to recommend it to friends if I could customize what names the bots would talk about.”

In one instance, we ran out of time to implement a feature that was requested by users in our early feedback. This missing feature was highlighting on the title of the current page in the left navigation bar. The feature was implemented in the final design, but not in the final working prototype. However, the feature was not requested by users in the following semi-structured interview, and its absence was not noted by users who responded to the final evaluative questionnaire. Although it was an oversight for this feature to be missing, it can also be seen as testament to our success in stream-lining the design. The concern which initially motivated the request (the idea that users might get 'lost' when navigating the site) was not mentioned once the links in the left navigation bar were streamlined down to 'Home' and 'About'. The high score the site was given on 'ease of use' suggests that the original problem was resolved by our UX ideation process and consequent 'streamlining' of the page.

## 6.4) Extra Understanding

For her project extension, April Bates will conduct a series of semi-structured interviews to gain a slightly broader understanding of the final product, and to evaluate some areas of interest not included in the original success criteria. These include analysing the possibility of the bots feeding social media addiction rather than helping address it, and the bots generating offensive content (both issues linked to the interests of stakeholders in the UX Design chapter). Her deadline is the 28/May/2021 13:00.

### [>> 7) Conclusion](Conclusion.md)
