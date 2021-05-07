# 7) Conclusion

###  [<< Back to Landing Page](../README.md)

### [<< Previous Section](Evaluation.md)

Looking back at our product development phase, on the whole we believe that our working practices were a success. There were, of course, some aspects that we could have improved upon. 

# 7.11) Adopting an agile framework 

We applied the agile framework effectively and tried to always bear in mind the four values [(source)](https://www.productboard.com/glossary/agile-values/). For instance, we prioritised getting user feedback & experience (individuals) over tools and processes. We also prioritised getting our software working first over comprehensive documentation of it. Additionally, we remained open to change of our design by trying not to have a too clearly pre-defined idea of it, allowing it to evolve in response to feedback.

One issue we faced during the development phase was burnout. This was due to a number of factors, not least the difficulty in communication due to COVID. However, we could have done more to mitigate these effects. For example, we could have had more numerous, smaller objectives, by adopting a hybrid working methodology which combined elements of waterfall and agile [(source)](https://www.lucidchart.com/blog/is-agile-waterfall-hybrid-right-for-your-team) and distributed these objectives more evenly in each sprint. 

# 7.12) Evaluation of our MVP 

We delivered all of the elements that were defined in our MVP. The design was developed effectively. The entire user interface prototype was implemented as accurately as possible via Angular. The required HTTP requests were correctly set up and tested via Postman. The database was successfully seeded upon building our docker container, and was able to deliver the correct information to the front end when required. We created our own random post generator, that we believe worked effectively. The details of each sprint were well documented and logged (please refer to [Sprints Management section](SprintsAndProjectManagements.md)). 

# 7.13) Technical Development 

During the software development phase, we faced issues with ensuring that the correct data was delivered from the back end. We tried to define the data structures that would be transferred between front end and back end at the beginning of the project. However, we learnt from our experience that realistically, it is hard to guarantee that our initial design of the data structures actually contained ALL the information that the front end required. This was especially true due to the evolving nature of our design, based on user feedback. Therefore, it may have been a safer choice to prioritize building the front end as soon as the design prototypes were finished, and then trying to fit in the back end afterwards.
 
It was the correct choice to pick Angular as the front end development framework. It fit well with our divide and conquer strategy. It also included very useful unit testing frameworks which we only really made use of near the end of the project. If we were to start the project again now, we would definitely build these frameworks into our workflow from the beginning.
 
In terms of back end, however, perhaps Firebase should have been used instead of Mongodb. The former is designed to be a cloud database platform. Using it would avoid the need to seed the database at the start of each server session, which would have saved us a lot of time and headaches! It also supposedly offers a more scalable structure to store the data compared to the plain .JSON structure of Mongodb. 

For all of us, this was our first experience of working on a group project such as this using git. Consequently there were definitely ways we could have improved our usage of it. For example, we struggled to merge the front and back end together after each part was finished. This was partly because we did not stick rigorously enough to the continuous integration workflow that we defined at the beginning of the project. We should have divided the frontend and backend into more feature branches. Then, after each feature was successfully implemented, it should have been merged immediately into the develop branch and deleted. We should also have been more mindful about potential merge conflicts and made sure not to track unnecessary files from the beginning, such as the folder containing the node modules.

## 7.2) Project Success

From the results of our final user acceptance tests, in combination with some of the qualitative feedback we received, it is clear that our project was overall a success. The information collected from users suggests that we met the majority of our success criteria:

**1) Relevant: Our product will be something our users want to use.**

Most users suggested that our product was something they’d want to use or be likely to recommend to a friend. All users thought that the site was either easy to use or very easy to use. The majority of written feedback under this heading was suggestions for improvements to the user interface, such as making the logo a link to the homepage, rather than specific criticism.

**2) Serious: Our product will educate users about social media addiction.**

All users found our product to be either effective or very effective at educating about social media. 100% of users said that they learned something about social media from our site. One piece of interesting positive feedback was: “I think this would be a very useful tool for teaching young people about social media. However, I'm not a young person and I found the Fakebook facts quite shocking and enlightening.”

Almost all of the criticism on this topic was about the implementation of our fact box, which was the primary mechanism for educating users. Due to the posts being randomly drawn from the database, there was no guarantee how frequently fact boxes would show up. Consequently you could scroll for a while without seeing a fact box, thus possibly lessening the educational impact. This is something that we would look to improve in future iterations. 

Users also commented that they thought the citations for facts were a good idea. This is good, as one of the key areas for concern we identified in our literature review was how difficult it can be to verify if something is authentic on social media.



###  [<< Back to Landing Page](../README.md)
