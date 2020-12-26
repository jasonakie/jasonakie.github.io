import React from "react"
import Layout from "../components/layout"
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Tableau', uv: 3000, level: 'Proficient'
  },
  {
    name: 'SQL', uv: 2000, level: 'Intermediate'
  },
  {
    name: 'Java', uv: 2000, level: 'Intermediate'
  },
  {
    name: 'Python', uv: 1000, level: 'Apprentice'
  },
];

const testFunction = ({data}) => {
  let value = '';

  switch ({data}.uv) {
    case '3000':
      value = 'Proficient'
      break;
    case '2000':
      value = 'Intermediate'
      break;
    case '1000':
      value = 'Apprentice'
      break;
    default:
      break;
  }

  return value;
}

export default function Home() {
  return (
    <Layout>
      <h1>Hi! I’m Jason Kie and I’m a Technical Business Analyst</h1>
      <p>
      I identify and streamline functional operations in a technical business project by promoting system efficiency
       with the aid of data analysis.
      </p>
      <p>
      My current role involves assessing web applications for performance bottlenecks and improving the 
      performance testing process by creating an automation pipeline. Moreover, I manage AWS Instances for testing. 
      I visualise and report the performance metrics to stakeholders for easy analysis.
      </p>
      <h3>Work Experience</h3>
      <li>Technical Business Analyst - Alex Solutions</li>
      <li>Reporting Analyst - Origin Energy</li>
      <BarChart
        width={500}
        height={300}
        layout="vertical"
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis hide="true" type="number" dataKey="uv"/>
        <YAxis type="category" dataKey="name"/>
        <Tooltip />
        <Bar dataKey="uv" fill="#82ca9d" label="level"/>
      </BarChart>
      <h3>Skills</h3>
      <li>Tableau - Proficient</li>
      <li>SQL - Intermediate</li>
      <li>Java - Intermediate</li>
      <li>Python - Intermediate</li>
      <li>JMeter - Apprentice</li>
      <li>React - Apprentice</li>
      <h3>Education</h3>
      <p>Bachelor of Information Technology (Software Development)</p>
      <h3>Awards</h3>
      <p>Monash University Industry Based Learning Scholarship</p>
      <h3>Contact me</h3>
    </Layout>
  );
}