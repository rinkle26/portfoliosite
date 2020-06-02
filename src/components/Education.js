import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


function Education(){

    return(

       
        <Timeline lineColor={'#ddd'}> 
            <TimelineItem

                key="001"
                dateText="Aug 2018 – May 2020"
                className="font-cursive"
                style={{ color: '#e86971' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                <h3>Master of Science, Computer Science</h3>
                <h5>The University of Texas at Dallas </h5>
                <h6><b>GPA 3.8/4.0</b></h6> 
                <p class="margin">
                    <b>Courses:</b> Database Design, Big Data, Design and Analysis of Algorithms, Web programming, Object Oriented Design
                </p>
            </TimelineItem>
            
           
            <TimelineItem
                key="003"
                dateText="Aug 2014 - June 2018"
                dateInnerStyle={{ background: '#ffc107'}}
                className="font-cursive"
                style={{ color: '#ffc107' }}
                bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }} >
                <h3>Bachelor of Engineering, Computer Science</h3>
                <h5>MIT College of Engineering, Pune</h5>
                <h6><b>GPA 3.6/4.0</b></h6> 
                <p class="margin">
                    <b>Courses:</b> Operating systems, Data structures and algorithms, Database Management system, Discrete structures                  
                </p>
            </TimelineItem>
           
           

        </Timeline>


    );


}

export default Education;
