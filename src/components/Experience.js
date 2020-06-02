import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


function Experience(){

    return(

        <Timeline lineColor={'#ddd'} > 
            <TimelineItem
                    className="font-cursive"
                    key="002"
                    dateText="May 2019 - Aug 2019"
                    style={{ color: '#61b8ff'}}
                    dateInnerStyle={{ background: '#61b8ff'}}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                    >
                    <h3>Software Engineering Intern</h3>
                    <h5>Visa Inc., USA</h5>
                    <p class="margin">
                        <ul>
                            <li>Developed a parser plugin tool using <b>Shell script, Java, NodeJS, JavaScript, jsCodeShift,</b> etc. that recursively scans all the modules and performs validation checks.</li>
                            <li>Generated a report file using React, HTML showing all the line numbers and corresponding file paths requiring changes, to help developers and testers make the change.</li>
                            <li>Created a linting rule using <b>ESLint</b> and <b>Javascript</b> to highlight errors on the fly, making it proactive rather than reactive.</li>
                            <li>Automated the manual process, reducing the time and efforts taken by <b>75%</b>.</li>
                            <li>Worked in SCRUM team; followed <b>Agile Development</b> methodologies; used <b>JIRA, Kanban Flow, Rally</b> to track progress.</li>
                        </ul>
                    </p>
                </TimelineItem>
                <TimelineItem
                    className="font-cursive"
                    key="004"
                    dateText="May 2017 – Aug 2017"
                    dateInnerStyle={{ background: '#76bb7f' }}
                    style={{ color: '#76bb7f'}}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                 >
                <h3>Software Engineering Intern</h3>
                <h5>Innovia Software, Mumbai</h5>
                <p class="margin">
                    <ul>
                        <li>Developed an ERP software using <b>SQL, C#, .NET</b> that helped companies track their data efficiently.</li>
                        <li>Performed data modeling and SQL scripting to develop an integrated database system.</li>
                        <li>Designed page layouts (form, report and display) using <b>PHP, HTML, CSS, AngularJS</b> that made data retrieval easy.</li>
                    </ul>
                </p>
               
            </TimelineItem>
            <TimelineItem

                key="004"
                className="font-cursive"
                dateText="Nov 2016 – Dec 2016"
                dateInnerStyle={{ background: '#1a3b54' }}
                style={{ color: '#1a3b54'}}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                <h3>UI/UX Intern</h3>
                <h5>Bristlecone Inc., Mumbai</h5>
                <p class="margin">
                    <ul>
                        <li>Developed responsive web site for clients using <b>Bootstrap, HTML, CSS, Javascript, AngularJS</b> to help them increase their reach.</li>
                        <li>Designed GUI to simplify user interaction with the system and enhanced its efficiency by <b>30%</b>.</li>
                        <li>Created forms to collect user data from browser and stored it in database using <b>PHP, SQL, HTML</b>.</li>
                    </ul>
                </p>
               
            </TimelineItem>

        </Timeline>


    );


}

export default Experience;
