## NOTES

User stories
  - different types of users and what they want
  - identify the 'basic flow' and more complex 'alternative' and 'exceptional' flows

Changes in second prototype
- taking out extra buttons to simplify user story (they were originally in place to allow users to access features that may or may not be implemented). Having fewer buttons will encourage users to go to the 'About' section
- Creating an advanced version which includes notifications and extra features
- Highlighting the page that users are on.
- Keeping the fundamanetal layout because it was understandble for our core demographic.
- add icons to left side panel?
- add a 'help' page?
- integrating fake posts into the design
- integrating to tradition comment interface into the design
- navigation bars at the top?
- add comment record + like record
- add 'back' from comment page
- prioritise having bots respond to 'trends'
- posting media like pictures and videos?

UX Design [15 marks]
- Design Process and Early prototyping and ideation (including mood boards and paper prototyping)
- Identification of interacting users and broader stakeholders.
- UX approach – design heuristics/approach, design methods (design fiction / heuristics)
- Understanding of user group (questionnaires / user stories / interviews)
- Wireframes and interaction flow diagrams for final key subsystems.


## DRAFT CONTENT

*******************************************************************************
Design Process and Early prototyping and ideation
(including mood boards and paper prototyping)
*******************************************************************************

Our design process was intended to be as agile as possible. To help enable this, we split our development process into stages and tried to gain the insight of possible user and stakeholders at every stage of our process.

At the first stage of our design process, each team member designed one or two different paper prototypes for our website. We intentionally made these designs very diverse in terms of how they implemented the website's concept. The benefits of this approach were
  - Not limiting our thinking about the way to approach project too early.
  - Giving our early interviewees greater say over the direction of the project.
  - Broadening our thinking so we could hopefully trigger productive conversations about good features of all versions, and cherry-pick popular features from different designs.
These early designs were split into three broad categories:
  - 'Traditional' designs. Designs which mimicked very directly the interface of popular social media and micro-blogging sites.
  - 'Dynamic interface' designs. These designs took a lot of features of popular media sites and applied them to a more dynamic or novel interface. These included a design which used side-swipe navigation, a design which visually represented the web of connections between user posts, and a design which placed posts in bubbles which grew in proportion to the post's popularity.
  - 'Infinite' designs. These designs included an interface which represented the timeline as a 'Star Wars'-esque scroll of text which disappeared into the distance and a design which appeared to 'stack' posts within in a 3D space. These interfaces were intended to visually represent the 'endless' nature of social media content.
Each team member conducted small casual interviews with some possible users and then provided some 'pros' and 'cons' style feedback on each design based the responses from their interviews. From this feedback we determined that the interface of the 'infinite' designs was too confusing. We also came to the conclusion that 'dynamic interface' designs added a lot of complexity to the design without helping us to achieve our core design goals, which were to create a recognisable social media-style interface and to create a platform to educate people about social media. Although users enjoyed the 'novel' nature of the dynamic designs, they were more confusing and less recognisable than the 'traditional' design. The fact that the 'traditional' design referenced the layout of websites like Twitter and Facebook in a straightforward way made it easier for anyone familiar with those sites to understand what our site was mimicking and how they should interact with it. It was therefore decided that the 'traditional' design was the best one to form our design basis moving forwards.

In our first wireframe design, we took the basic layout of our 'Traditional' paper prototype design and tried to integrate a few popular features of the paper prototypes which we had shelved. This included the rounded shape of objects on the 'bubble' and 'web' designs, and concept of the infinitely scrolling timeline. We also created a draft version of the 'comment page' layout in which the comments appeared in 'bubbles' around the original post rather than underneath it as they would in a more traditional social media comment box layout.

After designing our wireframe, we casually interviewed a few individuals to gain some feedback about it. Insight from these interviews helped us to design a more formal anonymous questionnaire about the design. The questionnaire was split into three sections, each designed to address different questions we had about how the project should develop. We first asked some questions about the demographic of our respondants and their experience with social media. This was to help us understand how users with different experiences responded to the site. We then showed the respondants our wireframe and asked them questons about the interface, including how confident they were that they would be able to implement certain key features, and what page design they prefered in cases in which we had not settled on the final layout of a page. In the final section, we gave a full description of the website's concept and then asked the users to state the level of priority they would give to different features of site in order to help us set priorities for our minimum viable product.

Feedback from this questionnaire reassured us that the fundamental layout of the page could remain as it was, because it was understandable by our core demographic. However, a large amount of the feedback from the questionnaire was implemented in our second prototype. This included:
- Removing links in the left navigation bar in order to simplify and improve the typical interaction flow and encourage users to navigate to the 'About' page.
- Highlighting the page that users are on in the left navigation bar in order to make it more difficult to 'get lost' on the website.
- Adding icons to the left navigation bar.
- Integrating the 'tradition' comment interface into the design rather than the 'bubble' design.
- Adopting the 'differentiated user post' design for the fact box rather than the floating text box design.
- Adding a 'back' button to the comment page.
- Prioritising having the bots responding to 'trends' and emulating the 'seamless' experience of real social media sites over other features.

This new wireframe formed the basis of our first stage of technical development.

*******************************************************************************
Identification of interacting users and broader stakeholders.
*******************************************************************************

Early in the process we identified young people of age 18-25 as a key user group for our product. This is because we believed that young people were more likely to spend more time on social media and therefore would be more familiar with the interface we were trying to emulate. Because social media plays a bigger part in their lives, we also thought they would be more interested in, and receptive to, the education elements of the site. The belief that young people were the primary users of social media was backed up by what we learned from our academic review [A CITATION HERE].

In our own (admittedly small) initial user survey, all of the users who self-identified as 18-24 said that they used social media ‘every day’. All respondents in that age category also all answered ‘Extremely confident’ to all questions relating to how easy to navigate they would find our social-media-esque interface.

Most of the 18-25 year-olds questioned said they believed they had only an ‘Average’ level of knowledge about social media, where the named areas of knowledge were ‘how social media sites operate’, ‘privacy’, and ‘the effect of social media on mental health’. In contrast, a greater percentage of 25-34 year-olds said they believed that they had an ‘Above average’ level of knowledge about social media (50%, compared with 25% of respondents answering ‘Above Average’ in the 18-24 age group).

The responses of the 25-34  year-olds to the question ‘how often do you use social networking or micro-blogging sites’ were also more scattered, with only 50% of users responding “Every day”. The responses in the older age groups indicated even less engagement with social media, with only 25% of responses indicating that they used social media sites every day.
There was a strong correlation with between how often respondents used social media and how confident there were with our interface, with the majority of responses from users who used social media ‘every day’ or ‘a few times a week’ indicating that they would be ‘extremely confident’ or ‘very confident’ using both prototype pages we gave them to look at. When we asked them to compare two interfaces for useability, the majority of these respondents also answered that ‘Neither interface would be difficult to navigate away from’. People who used social media less regularly were significantly more likely to answer “somewhat confident” and less likely to answer ‘Neither interface would be difficult to navigate away from’ on the same questions. This correlation could be from external factors- social media sites are so popular that it stands to reason that people who use social media sites less regularly probably use the internet less regularly as well. However, the responses seem to suggest that we are on track in creating an interface which is very understandable by people who use social media a lot, which is the group we are considering our target market.

Stakeholders?
  - end users
  - organisations and systam managers
  - organisation and system owners
  - general public
  - legislators (GDPR)
  - people who could be offended by the social media bot
  - “I think the overall idea is really good, but there is one part that bothers me. In your description, you say the aim is to get people to stay on the site longer. Social media also has quite an addictive quality to it, and while I think the aims of this site are beneficial, how does this play into overall ethics? If you accidentally create an addictive social media stream that feeds people information that keeps them on the site, could this be used by others to do what you're raising awareness for?”
