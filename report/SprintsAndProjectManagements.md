# 5) Sprints and Project Management

###  [<< Back to Landing Page](../README.md)

### [<< Previous Section](SystemImplementation.md)

## 5.1) Group Working Methods

**Agile methodology**

We decided to tackle this project with the proposed continuous integration model, utilising the agile workflow, and following the 4 key values of an agile methodology
(see diagram). This was decided as a result of the adaptive and flexible nature of agile, though it became apparent early on that we would require an even higher level
of flexibility to accommodate for other deadlines during the course of the term, and unpredictable events such as team members being unavailable or falling ill.
Adjusting the agile workflow to our needs also enabled the team to move workloads between members, adjusting quickly. This occurred once during the final stages of
production when a member fell ill. Their work was promptly split between the members to prevent any delays. This overall flexibility enabled our team to rapidly respond
to any changes throughout the entire work process. These changes were numerous in scale and encompassed the entire project. A continuous and flexible workflow was
achieved by the use of GitHub, where any additions could easily be monitored and responded to. The different departments and developers set up their own branches, which
would be merged to main if the changes were stable. Any resulting conflicts were handled as a team. Transparent communication served as the first of the Agile values,
keeping the team up to date via social platforms as well as 2 weekly meetings. This also allowed for technical issues to be promptly resolved, by working together and
sharing any issues experienced. Customer Collaboration came as a result of user testing, garnering vital user feedback. We prioritized making our prototype fully functional before writing comprehensive documentation of it, to ensure that we adhered to the agile values.

<p align="center">
  <img src="https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/report/report_images/4-key-agile-values.png" width="600" />
</p>
<p align="center">
  <strong>Key values of an agile methodology </strong>(<a href="https://www.geneca.com/what-is-agile-software-development/">Source</a>).
</p>

**Channels for communication**

In regard to communication, various channels were used to utilise a plethora of communication tools. The main means of communication was discord, as it provides a quick
intuitive way to communicate via text and VoIP, with various channels being set for the different departments. This allowed members to stay up to date on any details on
departments such as the front and back-end. Any vital information that should be seen by all members would be posted in the main “general” channel of the discord
server. To maintain a history of any official meetings held, we used our desk on the units Microsoft Teams server. This allowed us to separate meetings from general
conduct, allowing for a cleaner workflow and more organised documentation ([Source](https://bris.on.worldcat.org/search?databaseList=638&queryString=the+structuring+of+organizations#/oclc/4195050)). Microsoft Teams was also used for meeting specific resources, such as links to
relevant research and notes of the meeting. Since the meeting lengths, times and present members are recorded on Teams as well, it proved to be the optimal VoIP solution
for our meetings. The final communication technique was making use of collaborative working tools such as google docs, where the report and other documentation could be shared between team members. The limit was set at these 3 channels to avoid a cluttered work environment, while also preventing any
bottlenecks regarding the sharing of information and files.

## 5.2) Team Structure

This scalable workflow was achieved by implementing a dual role system, aiming to bring a flat hierarchical structure into the group, so that work could be assigned to
members who could focus on it throughout the project. Every member was given two roles, a primary role, which represents the brunt of their work, and a secondary role,
in which they would act as a supporting position, taking care of some of the work, and potentially stepping in for the primary role holder in case they aren’t able to
keep up with their workload. For instance, the front-end department would have a primary role, taking care of building the MVP as modelled by the design team, while the
secondary front-end member helps with minor adjustments or bug fixes.

To prevent team members from being locked into their departments, a flat hierarchical structure was adopted, so that everyone could get involved with the other parts of
the project. This facilitated everyone’s continuous learning about all aspects of web development as a team. Additionally, as all members are aware of the current state
of the project, more in-depth discussions could take place as to which aspects of the project need improvement in which ways. Furthermore, a tertiary safety net is
thereby put in place, should the unlikely event occur that two members of one department are unavailable to work.

The team roles were split as follows:

<p align="center">
  <img src="https://github.com/A-Madeline-Bates/Group-Web-Project/blob/main/report/report_images/roles.PNG" width="600" />
</p>
<p align="center">
</p>

April Bates:
Being the primary Designer, April supplied the team with design assets and site mock-ups to aid us visualize and conceptualize the MVP. Her tasks also surrounded user
testing and surveys, to garner the effectiveness of our website and its design in achieving its goal of educating users on social media. She also offered assistance to
the front-end.

Design:
- Providing a continuous supply of assets as needed and updated mock-ups of the MVP, alongside the supplying of any necessary design info, such as colour values of the
mock-ups for the front end

	* April made sure to communicate quickly with team members should they have required any sort of design asset, and consistently updated the mock-up after
	  gathering enough feedback on how to alter the site.
	* April gathered user feedback on the website throughout the project, making continuous changes easier to implement, as discussions could be help well before
	  the actual implementation of suggested features or alterations took place.

Front-end:
- Helping the front end in terms of Design and Layout

	* April made sure to assist the front-end in terms of the necessary design features to be implemented, such as clarifying the mock-ups colour code in various
	  areas or checking the overall design and offering feedback.

Abby Exon:
Main duties lay in the Back-end department, ensuring smooth data transfer between front-end and database. As a secondary role, she aided Ercan Kilic in Product ownership,
focusing on aiding organization and structure.

Back-end:
- Enabling smooth data transfer by connecting the front-end and the database by setting up HTTP requests

	* Abby actively worked with other department members to ensure a stable transfer of data between departments. She took the lead in back-end development and
	  continuously updated the team on any changes she made or issues she encountered. This fell in line with the agile workflow while also enabling full transparency
	  amongst team members, minimising any confusion and bug occurrences

- Implementing the successful transfer of JSON files between the front-end, back-end and database

Product Owner:
- Assisting in the organisation of meetings and communications

	* As communication, whether it is a meeting or social platforms, can get very convoluted and difficult to manage alone, Abby aided Ercan in ensuring the standard of
	  communications was kept up. Examples include helping meetings stick to the given Agenda, checking on members progress and clearing up any confusion between
	  departments.

- Support on documentation by providing a second opinion

	* If any documentation needed a second opinion, Abby would study over any unfinished documents to suggest changes if necessary

Ercan Kilic:
Main duties for Ercan lied in Product Ownership, engaging with the documentation of aggregate progress, to enable members to continuously stay aware of their goals and
tasks and maintain advancement. In addition to this, communication and organization were also handled by Ercan. He was also tasked with secondary work for the back-end.

Product Owner:
- Creating all documentation for meetings, organisation, and sprints, while setting up communication methods and protocols.

	* Ercan Documented sprint goals, sprint reviews, meeting briefs, agendas, and general notes on the progress of the project. The documentation maintained a common
	  format for each given document. Preliminary documents, namely sprint goals and meeting agendas were distributed before meetings and adjusted according to the other
	  member’s input.
	* For organization, Ercan took a general lead in directing meetings down the list of topics on the Agenda, making sure they were all addressed. For communication, Ercan
	  set up a discord server with various channels for different purposes (back-end channel, front-end channel, etc). He also set up the other communication channels
	  outlined below.

- Ensure that all documents have coherent formatting and styling

Back-end:
- Offering help with potential means of file transfer and assistance in research where necessary

	* When file transfer to the database and the querying of random database data proved difficult to implement, Ercan offered research into the topic to outline potential
	  approaches to take. Similar research and help were offered throughout the project.

Sam Baker:
Sam’s tasks mainly surrounded the site’s database, where all assets required for the page to function are to be stored, retrieved and randomly queried, depending on the requests
issued by the front-end or back-end. He also conducted extra work in the Design department.

Database:
-  Storing all required data into the database for the website to function, while ensuring proper storage of data. File transfers were required to be stable and error free.

	* The database department depended heavily on the other departments for input to send, store or receive data, so Sam had to work under high pressure, though he successfully
	  reached all outlined goals. By communicating closely with the other departments, Sam ensured that Files were stored and transferred properly, testing transfers with the
	  back and front-end to ensure stability.
	* To ensure testing was successful for the front and back-end after file transfers, Sam closely examined the storage of data in the database to ensure no errors would occur.
	  This was further cemented with testing in the respective departments.

Design:
- Offering the design department help where necessary, especially with surveys and user testing

	* Sam offered April help in gathering user feedback for the website and offered help in designing surveys

Tony Fang:
Working mainly in the front-end, Tony took the website’s mock design and turned it into a navigable front page using angular. The main goals lied in achieving stability and an
intuitive front-end, making it easy to use and simplifying communication with the back-end and database. Tony was also tasked with helping the database department.

Front-end:
- Creating the front-page with all the necessary features of the MVP as discussed with the team. This included the implementation of data transfer to and from the back-end and
  database.

	* Tony became accustomed to webtools such as angular before starting the final front-end, to avoid unnecessary code and time intensive reformatting. In the end he decided
	  to split the front end into 3 main navigation columns, successfully implementing all outlined goals such as infinite scrolling and saving user posts. At the same time,
	  Tony conducted testing to ensure that the tested elements of the front-end run stable and error free.

Database:
- Assisting the database department in the functionality of the database and its connection to the front and back-end.

	* Tony offered help to the database department when JSON file transfers were proving difficult to implement

## 5.3) Documentation

**Setting milestones and sprints**

To keep sprints and other milestones loosely settable, the timeframe to set any milestones was kept a few days before meetings, while also allowing for minor adjustments to the
milestone, depending on findings from user feedback and discussions on features and the project’s scope. Sprints were similarly handled, although their documentation was kept
separate and handled significantly differently, as their goals required a higher number of goals over a shorter time frame. Sprints themselves were divided into two types, mini
sprints and main sprints. Mini sprints encompass smaller goals over a very short timeframe, such as getting docker to work on all devices. These are treated less formally, and
are usually implemented as a means to rectify short term setbacks or technical difficulties, Main sprints were 5 days to a week long and surrounded the implementation of major
features, such as finalising the MVP, or finishing specified chunks of the report. They are treated more formal, with slightly less wiggle room to set harder milestones, preventing
procrastination ([Source](https://iaap-journals-onlinelibrary-wiley-com.bris.idm.oclc.org/doi/pdfdirect/10.1111/1464-0597.00021)). Main sprint goals were set in the day or two before a sprint, though they could easily be adjusted later on if some goals were found to be out of scope, more
features can be implemented or other concerns arise.

**Documentation:**

Main Sprint templates were created to ensure standardised documentation, which outlines the proposed goals, summarised from the initial sprint documents that outline the goals, the
process, which highlights various difficulties encountered and how work was conducted, both in regards to discussions and coding, and Outcomes, which showcase which milestones have
been achieved. The outcomes also mention any extra functionality achieved, even if its lies outside of the given sprints scope. The initial documents, chronologically ordered by
letters, showcase the aims of the given departments, giving details on the specific milestone details to ensure that two members don’t accidentally work on the same topic ([Source](https://ebookcentral.proquest.com/lib/bristol/reader.action?docID=243071&ppg=212)).
For instance, for one Sprint it was outlined that the database would need certain amounts of data:

- The amount of data should enable a long browse of the website without encountering replicated data
- Posts should ideally be in the 100s
- Save profile pictures made by the design department
- If testing is done, document it well

This clearly outlines the goals, leaving little ambiguity as to what needs to be achieved. The sprint documentation can be found [here](https://github.com/A-Madeline-Bates/Group-Web-Project/tree/main/Progress%20Documentation/Sprints).
The rest of the documentation, including Meeting Agendas and Briefs can be found [here](https://github.com/A-Madeline-Bates/Group-Web-Project/tree/main/Progress%20Documentation).

For meetings, any non-sprint Brief had a meeting brief, namely for the twice weekly Monday and Friday meetings. Sprint briefs were deliberately excluded as the goals for the sprint
documents were discussed in them. As a result, any points of discussion were recorded in the sprint document. Thus, creating a separate meeting brief would be pointless and cause
documentation clutter. In addition to this, simple catchup meetings were not given briefs or agendas, to prevent clutter in documentation and unnecessary documents. Records were taken
during meetings, to note key points of interest and later document them in the form of a meeting brief. This would enable all members to recall what the topics of concern were for the
week, how aims were being approached that week, and collect thoughts for the next meeting. For Project organisation, these documents served as ways to improve upon the structure of
meetings as well. Whereas the first meetings experienced some issues in the form of slow progression, by the second and third meetings there were clear talking points in place and an
organised way to enable all members to voice their input.

## 5.4) Git Workflow

**Adjusted Git Feature Workflow + Develop Branch**

To maintain coherency with the team’s agile workflow, we used GitHub and utilised a Git feature workflow, utilising a develop branch as well.  The master branch represented the final
deliverable product. The developers were each given their own branch, with more being added should anyone require another branch. These would act as feature branches, which would be
merged to the development branch once the necessary features were implemented. These merges would be planned, for instance at the end of a sprint. This would allow the team to collaborate
in addressing any merge conflicts. Once these were all addressed and the develop branch was confirmed to be functional and satisfactorily stable, it was merged with the master branch.
These “infinite” feature branches allowed for various features to be tested and cancelled should they prove to be undesirable. This way, the agile workflow was supplemented, allowing us
to view everyone’s progress and actively supplement the work in question. This further enabled role fluidity, which allows members to quickly adjust to their new work should they have to,
for example, work on front-end after finishing a back-end milestone.

### [>> 6) Evaluation](Evaluation.md)
