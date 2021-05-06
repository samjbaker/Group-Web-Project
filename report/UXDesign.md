## Project Report Contents

###  [Back to Landing Page](../README.md)

### [Background and Motivation](BackgroundAndMotivation.md)

### [UX Design](UXDesign.md)

## 3.1) Early Design Process and Ideation

Our design process was intended to be as agile as possible. To help enable this, we split our development process into stages and tried to gain the insight of possible users at every stage of our process. 

At the first stage of our design process, each team member designed one or two different paper prototypes for our website. We intentionally made these designs very diverse in terms of how they implemented the website's concept. The benefits of this approach were

- Not limiting our thinking about the way to approach the project too early.
- Giving our early interviewees greater say over the direction of the project.
- Broadening our thinking so that we could trigger productive conversations about good features of all versions and cherry-pick popular features from different designs.

These early designs were split into three broad categories:

- 'Traditional' designs. Designs which mimicked very directly the interface of popular social media and [micro-blogging sites](https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/Design/prototypes/april/prototype-main.jpg).
- 'Dynamic interface' designs. These designs took a lot of features of popular social media sites and applied them to a more dynamic or novel interface. This set                 included a design which used [side-swipe navigation](https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/Design/prototypes/sam/paper_prototype1_home.png), a design which visually represented the [web of connections](https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/Design/prototypes/ercan/Picture%202.png) between user posts, and a design which placed [posts](https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/Design/prototypes/abby/Picture%204.png) in bubbles which grew in proportion to the post's popularity.
- 'Infinite' designs. This set included an interface which represented the timeline as a ['Star Wars'-esque scroll](https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/Design/prototypes/april/IMG_2985.jpg) of text which disappeared into the distance and a design which appeared to ['stack' posts](https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/Design/prototypes/tony/scroll.jpg) within a 3D space. These interfaces were intended to visually represent the 'endless' nature of social media content.

Each team member conducted small casual interviews with some possible users and then provided some 'pros' and 'cons' style [feedback](https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/Design/prototypes/Prototype%20voting%20board.pptx) on each design based on the responses from their interviews. From this feedback we determined that the interface of the 'infinite' designs was too confusing. Our core design goals were to create a recognisable social media-style interface and to create a platform to educate people about social media, and we ultimately concluded that 'dynamic interface' designs added a lot of complexity to the design without helping us to achieve these goals. Although users enjoyed the 'novel' nature of the dynamic designs, they were more confusing and less recognisable than the 'traditional' design. The fact that the 'traditional' design referenced the layout of websites like Twitter and Facebook in a straightforward way made it easier for anyone familiar with those sites to understand what our site was mimicking and how they should interact with it. It was therefore decided that the 'traditional' design was the best one to form our design basis moving forwards.
 
In our [first wireframe design](https://github.com/A-Madeline-Bates/Group-Web-Project/tree/main/Design/prototypes/first-wireframe), we took the basic layout of our 'Traditional' paper prototype design and tried to integrate a few popular features of the paper prototypes which we had shelved. This included the rounded shape of objects on the 'bubble' and 'web' designs, and concept of the infinitely scrolling timeline. We also created a draft version of the 'comment page' layout in which the comments appeared in 'bubbles' around the original post rather than underneath it as they would in a more traditional social media comment box layout.

After designing our wireframe, we casually interviewed a few individuals to gain some feedback about it. Insight from these interviews helped us to design a more formal anonymous questionnaire about the design. The questionnaire was split into three sections, each designed to address different questions that we had about how the project should develop. We first asked some questions about the demographic of our respondents and their experience with social media. This was to help us understand how users with different experiences responded to the site. We then showed the respondents our wireframe and asked them questions about the interface, including how confident they were that they would be able to use certain key features, and which page design they preferred in cases in which we had not settled on the final layout of a page. In the final section, we gave a full description of the website's concept and then asked the users to state the level of priority they would give to different features of the site to help us set priorities moving past our minimum viable product.

Feedback from this questionnaire reassured us that the fundamental layout of the page could remain as it was, because it was understandable by our core demographic.
At this stage we also completed User Journey Mapping to help us understand how different users might interact with our product. The user types we explored were based on some of the feedback we saw in our questionnaire. This process and the way it affected our thinking is detailed in the UX Approach section of the paper.

The feedback we received about the design and our thoughts following the User Journey Mapping were implemented in our [second prototype design](https://github.com/A-Madeline-Bates/Group-Web-Project/tree/main/Design/working%20wireframes/initial-version). These changes included:

- Removing unnecessary links in the left navigation bar to simplify and improve the typical interaction flow and encourage users to navigate to the 'About' page.
- Highlighting the page that users are on in the left navigation bar to make it more difficult to 'get lost' on the website.
- Adding icons to the left navigation bar.
- Integrating the 'traditional' comment interface into the design rather than the 'bubble' design.
- Adopting the 'differentiated user post' design for the fact box rather than the floating text box design.
- Adding a 'back' button to the comment page.

Prioritising having the bots responding to 'trends' and emulating the 'seamless' experience of real social media sites over other features.
This new wireframe formed the basis of our first stage of technical development. At the same time, we created two more wireframes which represented our realistic ‘stretch’ goals. The first of these [included comments](https://github.com/A-Madeline-Bates/Group-Web-Project/tree/main/Design/working%20wireframes/comments-version), and the second  [included comments and alerts](https://github.com/A-Madeline-Bates/Group-Web-Project/tree/main/Design/working%20wireframes/notifications-version). These were created so that if we moved into working on our stretch goals, we would not be slowed down by design ideation.

## 3.2) Technical Process and Responsive Design 

By the end of our first sprint, we had reached a stage at which our site was fully interactive, and we made the decision to bring our design back to users. In order to gain a more qualitative understanding of the design, we decided to conduct semi-structured interviews with a range of people who were regular social media users. Although we had made significant progress with our technical development, there were certain features of our second prototype design that we had yet to implement. The missing features included the final ‘About’ text to replace the filler text, the highlighting of the ‘Fact Box’ on the timeline and the highlighting of the current page in the left navigation bar. The state of the design at our second feedback stage can be found [here](https://github.com/A-Madeline-Bates/Group-Web-Project/tree/main/Documentation/Questionnaires%20and%20Surveys/Semi-Structured%20Interview%2027:04).

All users interviewed found the page intuitive to use, and when asked to give ‘first impressions’ of the site, all users said that design bore a significant similarity with social media sites that they were familiar with. However, they also identified significant problems with the site. People thought the page looked unfinished, unconsidered, or undeveloped. All users stated that they would be unlikely to use the site in its current form, and cited lack of content and the look of the site as reasons why they’d be unlikely to use it. However, the response to the website’s concept was generally positive. In answer to the question ‘Do you think this website could achieve its goals with further development?’ (where the goal specified was ‘educating people about social media on a fun and engaging platform’), all respondents said yes. One user thought it could be very effective and one user said it was an interesting way to ‘tell a story’ about social media.
In answer to the question ‘do you think you would be more likely to use the site if it was more polished looking?’ all users said yes. However, in answer to a similar question about whether they would be more likely to use the site if we implemented our next stretch goal (which was to generate likes and comments from the bots), the response was more mixed, with two users enthusiastically advocating of the idea, one user suggesting they would find that feature ‘pointless’ and another suggesting that they would not find it ‘compelling’.
 
Feedback from this interview helped us to hone our goals going into the next sprint. In response to this feedback, we decided to focus on finishing our minimum viable product and making it look as ‘polished’ as possible, rather than adding extra functionality to the site. From this feedback we settled on our [final design](https://github.com/A-Madeline-Bates/Group-Web-Project/tree/main/Design/working%20wireframes/final-design).

## 3.3) Interacting with Users and Broad Stakeholders

Early in the process we identified young people of age 18-25 as a key user group for our product. This is because we believed that young people were more likely to spend more time on social media and therefore would be more familiar with the interface we were trying to emulate. Because social media plays a bigger part in their lives, we also thought they would be more interested in, and receptive to, the education elements of the site. The belief that young people were the primary users of social media was backed up by what we learned from our academic review. As Victoria A. Goodyear and Kathleen M. Armour states in their chapter ‘What young people tell us about health-related social media and why we should listen’, [“It has been reported from numerous international and socio-economic contexts that young people have the highest rates of social media use of any age group”](https://library.oapen.org/bitstream/handle/20.500.12657/28205/9781138493957_text.pdf?sequence=1#page=19).

In our own (admittedly small) initial [user survey](https://github.com/A-Madeline-Bates/Group-Web-Project/tree/main/Documentation/Questionnaires%20and%20Surveys/Questionnaire%2028:03), all the users who self-identified as 18-24 said that they used social media ‘every day’. Most of the 18–24-year-olds questioned said they believed they had only an ‘Average’ level of knowledge about social media, where the named areas of knowledge were ‘how social media sites operate’, ‘privacy’, and ‘the effect of social media on mental health’. All respondents in that age category also all answered ‘Extremely confident’ to all questions relating to how easy to navigate they would find our social-media-esque interface.
In contrast, a greater percentage of 25–34-year-olds said they believed that they had an ‘Above average’ level of knowledge about social media (50%, compared with 25% of respondents answering ‘Above Average’ in the 18-24 age group). The responses of the 25–34-year-olds to the question ‘how often do you use social networking or micro-blogging sites’ were also more scattered, with only 50% of users responding, “Every day”.
The responses in the older age groups indicated even less engagement with social media, with only 25% of responses indicating that they used social media sites every day.
There was a strong correlation with between how often respondents used social media and how confident there were with our interface, with most responses from users who used social media ‘every day’ or ‘a few times a week’ indicating that they would be ‘extremely confident’ or ‘very confident’ using both prototype pages we gave them to look at. 

![Alt Text](https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/Documentation/Picture1.png)


### [Sprints & Project Management](SprintsAndProjectManagements.md)
