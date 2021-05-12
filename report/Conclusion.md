# 7) Conclusion

###  [<< Back to Landing Page](../README.md)

### [<< Previous Section](Evaluation.md)

Looking back at our product development phase, on the whole we believe that our working practices were a success. There were, of course, some aspects that we could have improved upon.

## 7.11) Adopting an agile framework

We applied the agile framework effectively and tried to always bear in mind the four values ([source](https://www.productboard.com/glossary/agile-values/)). For instance, we prioritised getting user feedback & experience (individuals) over tools and processes. We also prioritised getting our software working first over comprehensive documentation of it. Additionally, we remained open to change of our design by trying not to have a too clearly pre-defined idea of it, allowing it to evolve in response to feedback.

One issue we faced during the development phase was burnout. This was due to a number of factors, not least the difficulty in communication due to COVID. However, we could have done more to mitigate these effects. For example, we could have had more numerous, smaller objectives, by adopting a hybrid working methodology which combined elements of waterfall and agile ([source](https://www.lucidchart.com/blog/is-agile-waterfall-hybrid-right-for-your-team)) and distributed these objectives more evenly in each sprint.

## 7.12) Evaluation of our MVP

We delivered all of the elements that were defined in our MVP. The design was developed effectively. The entire user interface prototype was implemented as accurately as possible via Angular. The required HTTP requests were correctly set up and tested via Postman. The database was successfully seeded upon building our docker container, and was able to deliver the correct information to the front end when required. We created our own random post generator, which we believe worked effectively. The details of each sprint were well documented and logged (please refer to [Sprints Management section](SprintsAndProjectManagements.md)).

## 7.13) Technical Development

During the software development phase, we faced issues with ensuring that the correct data was delivered from the back end. We tried to define the data structures that would be transferred between front end and back end at the beginning of the project. However, we learnt from our experience that realistically, it is hard to guarantee that our initial design of the data structures actually contained ALL the information that the front end required. This was especially true due to the evolving nature of our design, based on user feedback. Therefore, it may have been a safer choice to prioritize building the front end as soon as the design prototypes were finished, and then trying to fit in the back end afterwards.

It was the correct choice to pick Angular as the front end development framework. It fit well with our divide and conquer strategy. It also included very useful unit testing frameworks which we only really made use of near the end of the project. If we were to start the project again now, we would definitely build these frameworks into our workflow from the beginning.

In terms of back end, however, perhaps a cloud database platform such as Firebase should have been used instead of MongoDB. Using Firebase would have avoided the need to seed the database at the start of each server session, which would have saved us a lot of time and headaches! It also supposedly offers a more scalable structure to store the data compared to the plain .JSON structure of MongoDB.

For all of us, this was our first experience of working on a group project such as this using git. Consequently there were definitely ways we could have improved our usage of it. For example, we struggled to merge the front and back end together after each part was finished. This was partly because we did not stick rigorously enough to the continuous integration workflow that we defined at the beginning of the project. We should have divided the frontend and backend into more feature branches. Then, after each feature was successfully implemented, it should have been merged immediately into the develop branch and deleted. We should also have been more mindful about potential merge conflicts and made sure not to track unnecessary files from the beginning, such as the folder containing the node modules.

# 7.2) Project Success

From the results of our final user acceptance tests, in combination with some of the qualitative feedback we received, it is clear that our project was overall a success. The information collected from users suggests that we met the majority of our success criteria:

**1) Relevant: Our product will be something our users want to use.**

Most users suggested that our product was something they’d want to use or be likely to recommend to a friend. All users thought that the site was either easy to use or very easy to use. The majority of written feedback under this heading was suggestions for improvements to the user interface, such as making the logo a link to the homepage, rather than criticism of the overall useability or product.

**2) Serious: Our product will educate users about social media addiction.**

All users found our product to be either effective or very effective at educating about social media. 100% of users said that they learned something about social media from our site. One piece of interesting positive feedback was: “I think this would be a very useful tool for teaching young people about social media. However, I'm not a young person and I found the Fakebook facts quite shocking and enlightening.”

Almost all of the criticism on this topic was about the implementation of our fact box, which was the primary mechanism for educating users. Due to the posts being randomly drawn from the database, there was no guarantee how frequently fact boxes would show up. Consequently you could scroll for a while without seeing a fact box, thus possibly lessening the educational impact. This is something that we would look to improve in future iterations.

Users also commented that they thought the citations for facts were a good idea. This is good, as one of the key areas for concern we identified in our literature review was how difficult it can be to verify if something is authentic on social media.

**3) Playful: Our product will be fun, engaging and interactive to use.**


On the whole users deemed our prototype to be at least moderately playful or engaging. The lack of variety in content, such as the lack of the ability to see photos on the feed, was a definite negative, as it has been proven that this sort of content is linked to higher levels of user engagement [(source)](https://journals.sagepub.com/doi/full/10.1177/0022243719881113). This was mirrored in the user feedback we received, with one user suggesting that we should “Vary the content a bit more. The posts are entertaining at first, but lose their variety quite quickly.” However, the same user also conceded that: “I still found myself scrolling for a while, just to see what else would come up”, so perhaps this could actually be seen to be strengthening our point about addiction: we’ll still scroll even if we don’t find the content that amusing, just in case we see something interesting in the next post.

Several users also commented on how surprised they were at how engaging the site was, which is interesting. With one user commenting: “I was ridiculously pleased when my fake message instantly got over 1000 likes!”

However the majority of users said they’d be unlikely to spend more than 5 minutes on Fakebook in one ‘session’, which is obviously a less flattering statistic about its engagement. Whether or not they would actually end up scrolling for longer than anticipated is something that would be interesting to research.

**4) Aesthetically Pleasing: Our product will implement our designs effectively.**

The average score for how aesthetically pleasing users found our site was 3.4 out of 5. Many people noted how familiar it felt, and how successfully we’d got the ‘feel’ of sites like Facebook. Interestingly, lots of the criticism about this was levelled at things which were more to do with how we’d implemented the design, than the design itself. For example there were several references to ‘glitches’ and a lack of smoothness in the operation of the site. One user commented: “If I was being pedantic then I think if the user names were either under the profile photo or at least lined up with the start of the post then this would be more aesthetically pleasing.” Again this is more to do with a slight bug than a reflection on the design itself.

I believe we have collected sufficient evidence that we have met our success criteria, at least to some extent. Of course there are areas for improvement, but for the prototype phase I think it's safe to say we have succeeded.

We laid out our main objectives as follows:
1) Explore social media addiction, and how this affects our users’ in their daily lives
2) Create a working web page that aims to educate about social media
3) Test our product on users and see where this can be improved

All of which I believe, and I think the evidence shows, we completed.

With regards to the brief of ‘Serious Play’, I think the user feedback shows that we definitely managed to highlight some of the serious issues that we discussed in our literature review. As all users learned something from our site, I think the serious element was certainly fulfilled. I think we were slightly less successful with our playful element. Users didn’t think they’d use the site for very long and the responses about engagement weren’t so positive. However, all users found the site to be at least somewhat entertaining and several users commented that with a bit of refinement they thought it could be great. Therefore I don’t think we completely missed the mark on playfulness, and would argue that the evidence suggests that we did fulfil the brief on balance.

# 7.3) Effect of Corona-Virus


The most obvious effect of COVID-19 was that, instead of working alongside each other in person, we (ironically) had to communicate via social media.

This caused a drastic reduction in communication quality. The efficiency, and informality, of casual face-to-face discussions just cannot be fully replicated in Teams meetings. Microsoft Teams is a useful tool, but it was a fine balance: less Teams meetings meant greater possibility of miscommunication, whereas more Teams meetings meant more stress for every team member, since every meeting is effectively a presentation for each person. Collaboration between teammates was extremely challenging since ideas couldn’t be drawn then shared via “chalk and talk” in front of a blackboard. Debugging errors or warnings with another teammate online was also much more difficult than if we had been able to physically have access to their machine. We tried to rectify this by sharing our screens and sending screenshots of error messages, but this was much more time consuming than being able to physically interact with the computer.

We tried to circumvent these drawbacks as much as possible via the following approaches. We moved all of our organizing and scheduling, such as assigning tasks to each team member and setting deadlines for sprints to Discord. We reduced the number of Teams meetings to twice a week, which are mostly used to discuss whether the tasks were distributed fairly and whether deadlines for sprints are feasible. Beyond this we had ad-hoc team meetings where necessary. The tasks were assigned in such a way that they could be modularized, meaning that each member could work on a small section and then continually integrate it into the overall product as outlined in our continuous integration section. This was to ensure that the smallest amount of extra time was wasted on attempts of online debugging and sharing ideas without graphical representation via “chalk and talk”.

It also affected our user testing, as we had a much smaller pool of people to draw from for face-to-face interviews (only the people in our bubbles or people who would be happy to take the time to discuss the product over a video call). This may have impacted the diversity of our test subjects. Also, as we knew all of the people who we directly interviewed about our product, it may have influenced their responses about our site. We tried to counteract this where possible, by posting some of our surveys to public forums, so as to get some alternative insights into our product.

Since face-to-face communication was not viable in many situations, many people have had to rely on social media almost exclusively for social contact much. Students, for example, have spent much more time on Discord and Teams rather than casual conversation in libraries. Sadly this seems to make the message behind our project even more pertinent.

# 7.4) Social and Ethical Implications

We have highlighted some of the Social and Ethical Issues raised by our project, along with a short discussion about each below:

- **Issue: Could the bots be mistaken for real people and cause the spread of misleading information?**

Discussion: In our About section, we clearly state that our site serves as a satire and an educational tool for social media and that all posts by bots are fake. The majority of their posts are clearly nonsensical, so we don’t believe this should be too much of an issue. Also all usernames were intended to be clearly fake, as stated in the About section. Therefore it should be very difficult to mistake them for real people.

- **Issue: Lack of filtering of content added by users could lead to the posting feature being misused or used in an abusive way. Posts could be overtly offensive with the use of rude language, but they could also be potentially offensive due to the spreading of derogatory opinions.**

Discussion: Currently it is true that the posting feature could be misused. However, as it is a prototype at this stage, and the only users have been test users, this has not been seen as a pressing issue. If we were to launch the site for real, we would have to improve this. For example we could mark each post with swear words or offensive language with a ‘Not Safe For Work’ tag and hide the content. The user would then have to confirm his/her age and if he/she is willing to risk being offended to view the content. Of course, this would not be guaranteed to avoid offence. We have also tried to mitigate the possibility of offence and influencing opinions by displaying all posts from users under a fake name. This anonymity ensures that each person has just as much influence on others no matter the difference in social status, wealth, gender or numerous other factors. Even with our randomly generated posts, despite our best efforts to not include controversial topics, there is a chance that it could output something offensive due to its randomly constructed nature.

- **Issue: What if the fact references are incorrect or unreliable? Could they miseducate the users about social media?**

Discussion: We attempted to source all of the facts for our factbox from reputable sources, although of course, as our site intends to highlight, this can be difficult to verify. Each reference is not necessarily guaranteed to be correct. Ultimately, it is the user’s responsibility to determine the credibility of the source.

- **Issue: Making use of the addictive features of social media to make a point about the addictive features of social media is hypocritical and irresponsible.**

Discussion: In our About section, we have tried to warn about the risks of the potential addictiveness of our product. Therefore, it is the user’s choice whether to be exposed to this potential danger. Although we believe our product has features that may be potentially addictive, we do not know for certain until the addictiveness of our product can be quantified following the user feedback. If we were to launch the product for real, we would certainly have to investigate this. Just because our product has the potential to be addictive, does not mean that it necessarily will be. Also, I would argue that as our site's aims are positive, if our product is addictive then at least it will be providing users with a positive educational experience.

- **Issue: Have you considered the accessibility of the product?**

Discussion: This is something that we didn’t consider enough during our prototyping phase, and is something we would have to improve if we were to launch the page. For example we could look to integrate text to speech capability for visually impaired users.

# 7.5) Discussion of Future Work

We have implemented a very simple parody of social media that contains only the most basic functionalities: a user can submit text-based posts and a user can scroll through the existing posts on the timeline. There are many ways we could improve or expand upon our prototype, to make it more engaging and to more effectively convey our message.

Firstly, perhaps our ability to educate users about the good, the bad and the ugly of social media would be improved by fully mimicking one of the most popular platforms, such as Facebook, Twitter or TikTok. Since there is so much data available on these 3 platforms, it should be simple to add features like comments and likes to increase the realism of the simulation of the ‘reward’ mechanisms of social media.

One bit of feedback that we got several times in our final survey, was that the content we produced could have been more varied. If we did more research, we may be able to construct more lifelike bots that interact more realistically. It would also be interesting to provide some degree of control on our user interface for users to change parameters such as how much influence a post from a bot has. Also some users said they’d be more likely to recommend our site to friends if they could customize the names within the post generator, so this is something else we could explore.

Another feature that would have made our site more topical, is to make it scrape trending topics from other social media sites, such as Twitter, and have those be referenced in the randomly generated posts.

It would also be interesting to study some of the less mainstream forms of social media, to see if features from those sites could be used to spread our message more effectively. For example, studying Reddit or 4chan could be insightful, as there is not as much well established research on them, despite them being very popular sites. However, this would require lots of academic research and data analysis, so we would have to carefully weigh up what the added value would be, versus the amount of time it would require.

Another avenue we could explore, would be to make a version of our site which implemented one of our more novel user-interfaces, such as the ‘spider-web’ layout. It would be very interesting to compare how this unfamiliar interface affects users, and whether they’d find it more or less engaging.

It would also be amazing to try and host our site or look into launching it for iOS and Android after further development, as seeing how a larger pool of users interacted with it would be fascinating.


###  [<< Back to Landing Page](../README.md)
