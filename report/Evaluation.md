# 6) Evaluation

###  [<< Back to Landing Page](../README.md)

### [<< Previous Section](SprintsAndProjectManagements.md)

## 6.1) Design Evaluation

We evaluated our designs as a team during ideation by giving each one a list of pros and cons and then reviewing them to weigh up which ideas to pursue. This was much more time effective than conducting user testing, but may have caused us to overlook important factors that a real user may have picked up on.

Our designs were then continually evaluated throughout our design process, through the collection of user feedback after key milestones. We collected this through user surveys, and interviews as explained in detail in the UX design section. This led to some interesting and unexpected insights, that ultimately shaped our final design.

The key findings about design from our surveys throughout were:
- That users thought a ‘familiar’ social media layout was preferable to a more novel interface
- Users felt comfortable that they would be able to navigate our designs
- The design should be simplified by removing unnecessary features
- Which order of preference users would give to different features.

We therefore changed our final design by:
- Removing features from the navigation bar that we didn’t believe we would implement in our MVP
- Attempting to emulate the 'seamless' experience of real social media sites by sharpening up our design
- Highlighting the fact box to differentiate it from the regular posts

Although these were all design decisions, we felt that they also contributed to the functionality and ultimately the success of our final prototype.

Once we had a working prototype that fulfilled our MVP criteria, we again questioned users about the design. We tried to focus this final questionnaire to specifically give us insight into whether our project had succeeded with respect to our success criteria. The initial success criterion that related to design was:

> **Aesthetically Pleasing: Our product will implement our designs effectively.** The prototype will execute the designs in such a way that it facilitates playful interaction and enables us to effectively impart our message to users.

We therefore asked users to rate how aesthetically pleasing they found the site, in an attempt to quantify the success of our design. We also allowed for a qualitative response about how it could be improved.

Our main finding was:
- 3.4 out of 5 was the overall score for how aesthetically pleasing the prototype was.

Based on the qualitative feedback many users may have been referring to the appearance of the site combined with how easy it was to navigate when they answered this question. Perhaps we should have more clearly directed the question towards solely the appearance, so as to be able to draw a more robust conclusion.

Many people praised how effectively we had impersonated real social media sites.

Some key insights were:
- “Some of the fonts and shapes could definitely be a bit 'cleaner', to make it seem more like the big social media sites”
- “It is definitely recognizably similar to social media. some of it looks a bit clunky though and there are some visual glitches too.”
- “It does mimic the real Facebook cleverly”
- “The colouring was calming. The subtle use of different hues helped”

## 6.2) Functional Testing

We decided to test our website using both black-box and white-box testing methods; the former being where we are not aware of what the code contains and are navigating the site from the perspective of the user, and the latter being where we are aware of the code and its structures.

**Functional Testing**

We decided to test our website using both black-box and white-box testing methods; the former being where we are not aware of what the code contains and are navigating the site from the perspective of the user, and the latter being where we are aware of the code and its structures.

**Black Box Testing**

For our black-box testing, the development team tested our webpage from the perspective of a user, and how they may decide to use our webpage.

This was through the creation of a test plan, making sure that we tested each of the key 4 functionalities of our webpage; the pulling of random posts from the database, the storing of posts back to the database by the user, our infinite scroll of posts, and navigating between our ‘About’ and ‘Home’ page.

<p align="center">
  <img src="https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/report/report_images/Tests.png" width="600" />
</p>
<p align="center">
  <strong>Figure X: A working copy of the tests performed in our test plan </strong>
</p>

We also made sure that the links to citations for facts were working correctly, as we wanted to ensure that users were able to verify the authenticity of the facts to ensure that our serious message was as strong as possible. We did this by scrolling through the feed and clicking the ‘go to source’ button provided for a number of different fact boxes and checking that we were taken to the correct place.

We also tested the site in several different browsers, to ensure there was no unintended behaviour, despite the fact that we tried to write the site in as robust and portable a way as was possible. It was fortunate that we did this as it highlighted a couple of slight display issues that were present in one browser, that were not present when viewed in Chrome, allowing us to fix them.

**White-Box Testing**

For our white-box testing methods we made use of the testing framework Jasmine, strategically testing our main components in Angular. The following is the tree structure of the development folder for the front end (which we called app).

In the MVP, it was decided that functionality would not be added for a dynamically loading trending bar, about, middle-section and desktop. Therefore, testing of these components only included whether they were successfully built.

<p align="center">
  <img src="https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/report/report_images/Layout.png" width="800" />
</p>

The news-feed section was not tested at all using this method for three reasons. Firstly, we had already ascertained that the news-feed section successfully fetched data from the backend without rendering issues after a Resolver was added. We confirmed this during our black box testing, and were sufficiently happy with this. Secondly, making the like-button switch colour when clicked was not included in the MVP, so therefore we deemed it unnecessary to test. Thirdly, the Service, Resolver and the news-feed Component are all tightly coupled, making testing extremely difficult. This resulted in the user post functionality (user submits a post which gets sent to the database to be stored) not being tested using Jasmine.

The routerLink that takes the page from Home to About or vice-versa successfully passed the testing.

**Additional Testing**

For our backend and database, since it was difficult to see whether data is being stored properly on the go, we manually accessed MongoDB in the Docker container from the command line to check that data objects were being pulled and stored correctly. We did this for a number of different parts of our site:
- We wrote a post on the site, submitted it and checked that it had appeared correctly on the site.
- We then queried MongoDB for the post’s text to confirm that it had been stored.
- We destroyed and rebuilt the containers and checked that our data was correctly persisting as expected.
- We deleted an item from the database, then destroyed and rebuilt the container and checked that it was still not present.
- We then dropped a collection manually from MongoDB and rebuilt the container, checking that the starting data was re-seeded as it was supposed to be.

Additionally, we made use of Postman ([source](https://learning.postman.com/)), an online tool that we used to test that our HTTP requests were working as predicted. This was very useful, as it allowed us to test this at various points during development, without the need for a working front-end.

All of this reassured us that our site was functioning as intended on the whole, to at least the standard required for a prototype. It also allowed us to catch some crucial errors that we were able to rectify.

## 6.3) User Acceptance Testing

As well as the design focussed elements of our user surveys, detailed above, we sought user opinions on the functionality, navigability and overall experience of using our prototype. We asked users to fill in a survey following a few minutes of use of the prototype. We did this so that we would have a clearer idea of how successful our site had been, with regards to our other success criteria. The success criteria not already discussed were that the site must be:

> **Relevant: Our product will be something our users want to use.** The creation of a working prototype of our webpage that is a product of our user feedback, exploration into our users’ experiences, and secondary research into social media.

> **Serious: Our product will educate users about social media addiction.** The prototype will allow users to leave our web page with information that will either motivate them to make changes in their own daily life, or inform others.

> **Playful: Our product will be fun, engaging and interactive to use.** The prototype will allow users to interact with the webpage in a fun and interactive way, either by providing an entertainment factor or through making them laugh.

As with the design section of the survey, we tried to focus on these criteria to be able to quantify our success. We therefore asked users to rate the following about the site in an attempt to do this:

- How easy it was to use
- How effectively it educated about social media
- How engaging and entertaining it was.

We also asked the users to say whether or not they felt that they had learned anything about social media, as well as how long they felt they would be likely to spend on the site and if they’d be likely to recommend it to others. Again, we allowed for some qualitative answers too, to give more nuanced insight into our success.

Our key results were as follows:
- All users surveyed found that the site was easy to use, giving it either 4 or 5 out of 5.
- 100% of respondents said that they learned something about social media from our site.
- All respondents rated the site either a 4 or 5 out of 5 for how effectively it educated about social media.
- 4.2 out of 5 was the average score for how engaging the site was.
- Most users said that they didn’t think that they’d be likely to spend more than five minutes on the site in one ‘session’, although many users disagreed.
- The majority of users said that they’d be ‘Very Likely’ to recommend the site to a friend.

We also gathered some very insightful qualitative feedback, some of which related specifically to our success criteria and some of which was more general. Some choice pieces of qualitative feedback were:
- “I definitely found it more engaging than I thought I would from the description”
- “I think this would be a very useful tool for teaching young people about social media.”
- “I found the Fakebook facts quite shocking and enlightening.”
- “I was ridiculously pleased when my fake post instantly got over 1000 likes!”
- “I'd be much more likely to recommend it to friends if I could customize what names the bots would talk about.”

### [>> 7) Conclusion](Conclusion.md)
