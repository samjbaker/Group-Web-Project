<img title="FAKEBOOK: A Generative Nonsense Social Media Feed" alt="Header" src="/Documentation/Top_Header.jpg">

Fakebook - the nonsense social media feed - is a novel way of engaging people with facts about social media, and the impact it has on society. The site will use social media’s tricks against them - both pointing out the destructive influence of social media, and encouraging self-awareness about the way those tricks are used.

The site will mainly be targeting young people (aged 18 - 25) who are very reliant on social media without necessarily knowing its negative impacts - both on a personal and societal level.

The site’s concept is that it will provide an infinite feed of randomly generated posts - simulating the seemingly endless scroll of information that we engage with every day. The playful aspect will simulate the ‘reward’ element of social media and draw attention to the random or superficial nature of a lot of the content we consume. In amongst the nonsense posts we will include some informative facts about the positive and negative aspects of social media, so as to educate visitors to the site. All of this serves to make a point about how much time we waste on social media & how addictive it is. We may also learn something about our relationship with social media: will we still find it compelling if we are interacting with artificial people rather than our friends?

<br>

[![Group Project Video Presentation](Documentation/Video_thumbnail.jpg)](https://youtu.be/Zl2IwmQ15Hg)
<p align="center"><a href="https://youtu.be/Zl2IwmQ15Hg">Have an introduction to Fakebook! </a></p>

## Build Instructions
1) Clone this repository on your local machine 
2) Change to correct directory
```bash
cd code
```
3) In directory ```code``` add a new file called ```.env``` that contains the following variables:
```vim
MONGO_USERNAME=<username>
MONGO_PASSWORD=<password>
MONGO_PORT=27017
MONGO_DB=meantest
```
Where ```<username>``` and ```<password>``` should be set by the user.

4) Then run
```bash
docker-compose up --build
```
5) To view the site, go to the local host on your own machine (http://localhost:3000/).

6) To test, install npm and angular first. Then in directory ```code```, run
```bash
ng build
ng test
```
## Team Members

<img title="Team members" alt="Team member images" src="/Documentation/Header.jpg">

## Project Report Contents

###  [1) Introduction](report/Introduction.md)

### [2) Background and Motivation](report/BackgroundAndMotivation.md)

### [3) UX Design](report/UXDesign.md)

### [4) System Implementation](report/SystemImplementation.md)

### [5) Sprints and Project Management](report/SprintsAndProjectManagements.md)

### [6) Evaluation](report/Evaluation.md)

### [7) Conclusion](report/Conclusion.md)
