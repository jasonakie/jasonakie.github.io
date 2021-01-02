import React from "react"
import Layout from "../components/layout"
import {
  BarChart, Bar, XAxis, YAxis, LabelList, ResponsiveContainer
} from 'recharts';
import Fade from 'react-reveal/Fade';

const data = [
  {
    name: 'Tableau', uv: 3000, level: 'Advanced'
  },
  {
    name: 'SQL', uv: 2000, level: 'Intermediate'
  },
  {
    name: 'Java', uv: 2000, level: 'Intermediate'
  },
  {
    name: 'Python', uv: 1000, level: 'Novice'
  },
  {
    name: 'Bash', uv: 1000, level: 'Novice'
  },
  {
    name: 'React', uv: 1000, level: 'Novice'
  },
];

export default function Home() {
  return (
    <Layout>
      <Fade left>
      <h1 id="top">Hi! I’m Jason Kie and I’m a Technical Business Analyst</h1>
      </Fade>
      <br>
      </br>
      <Fade right>
      <p> I identify and streamline functional operations in a technical business project by promoting system efficiency
       with the aid of data analysis.</p>
      </Fade>
      <Fade left>
      <h3 id="work">Work Experience</h3>
      </Fade>
      <Fade left>
      <li>Technical Business Analyst - Alex Solutions</li>
      </Fade>
      <Fade right>
      <p>
      My role involves assessing web applications for performance bottlenecks and improving the 
      performance testing process by creating an automation pipeline. Moreover, I manage AWS Instances for testing. 
      I visualise and report the performance metrics to stakeholders for easy analysis.
      </p>
      </Fade>
      <Fade left>
      <h4>Reporting Analyst - Origin Energy</h4>
      </Fade>
      <Fade right>
      <ul>
        <li>Ensure the timeliness and accuracy of information to the business to support business processes, monitor performance and enable decision making
        </li>
        <li>Develop business reports which mainly use Tableau, maintain the reports to eliminate any data discrepancies present</li>
        <li>Work with data to provide meaning and value for the business including data transformation, data visualization and analytics</li>
      </ul>
      </Fade>
      <Fade left>
      <h3 id="skills">Skills</h3>
      </Fade>
      <Fade right>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{
            top: 0, right: 30, left: 20, bottom: 5,
          }}
        >
          <XAxis orientation="top" tick={false} type="number" dataKey="uv">
          {/* <Label value="Skills" offset={1} position="top" /> */}
          </XAxis>
          <YAxis type="category" dataKey="name"/>
          {/* <Tooltip content={data.name}/> */}
          <Bar dataKey="uv" fill="#82ca9d" label="level">
            <LabelList dataKey="level" position="center" fill="#fff" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      </Fade>
      <Fade left>
      <h3 id="education">Education</h3>
      </Fade>
      <Fade right>
      <p>Bachelor of Information Technology (Software Development)</p>
      </Fade>
      <Fade left>
      <h3>Awards</h3>
      </Fade>
      <Fade right>
      <p>Monash University Industry Based Learning Scholarship</p>
      </Fade>
      <h3 id="contact">Contact me</h3>
    </Layout>
  );
}