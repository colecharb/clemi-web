import type { ProfExperienceEntry } from '../components/ProfessionalExperience';
import ProfessionalExperience from '../components/ProfessionalExperience';

const professionalExperiences: ProfExperienceEntry[] = [
  {
    title: 'Senior Associate, Climate Justice',
    timeframe: '2024–Present',
    company: 'B Lab US and Canada',
    bullets: [
      "Responsible for developing core programming within the Climate Justice program at B Lab US & Canada that furthers B Corporation's commitments to climate action",
      'Responsible for up-skilling businesses to robust climate action standards.',
    ],
  },
  {
    title: 'Research Analyst',
    company: 'Bakau Consulting',
    timeframe: '2021–2024',
    bullets: [
      'Diversity, Equity, and Inclusion workshop facilitator having collaborated on creating workshop material with Intersectional Environmentalist',
      'Led the development of demographic and employee experience surveys that support their Justice, Equity, Diversity, and Inclusion (JEDI) audit needs',
    ],
  },
  {
    title: 'Relational Design Consultant',
    timeframe: '2021–2023',
    company: 'Pause and Effect',
    bullets: [
      'Worked alongside company CEO to design and deliver workshops and experiential curriculum to clients (Walmart, Daiya, Outschool) on Equitable and Regenerative Design',
    ],
  },
  {
    title: 'TransCare+ External Facilitator',
    timeframe: '2019–Present',
    company: 'Self Employed',
    bullets: [
      'Designed and delivered workshops for non-profit employees to develop self-care rituals to support their wellness at work',
    ],
  },
  {
    title: 'Junior Environmental Scientist',
    company: 'Heliolytics',
    timeframe: '2019–2020',
    bullets: ['Data Specialist | Solar Energy'],
  },
  {
    title: 'Sustainability Associate | Environment & Indigenous Relations',
    company: 'Ontario First Nations Technical Services Corporation',
    timeframe: '2018',
    bullets: ['Focused on environmental and Indigenous relations initiatives'],
  },
  {
    title:
      'Independent Consultant | Facilitation, Research, & Artistic Projects',
    company: 'Tavares Group Consulting for Bruce Power',
    timeframe: '2017–2018',
    bullets: [
      'Provided consulting services for Bruce Power through Tavares Group',
    ],
  },
  {
    title: 'Project Manager & Research Support',
    company: 'Keesic Health Strategies',
    timeframe: '2017–2018',
    bullets: [
      'Collaborated on developing the Mental Health and Addictions Business Case for Weeneebayko Area Health Authority which focused needs of remote Indigenous communities in Northern Ontario',
    ],
  },
  {
    title: 'Project Coordination & Engagement Strategist',
    company: 'Indigenous Primary Health Care Council',
    timeframe: '2017–2018',
    bullets: [
      'Provided project coordination, outreach and engagement lead, stakeholder mapping and reporting',
      'Was responsible for designing and creating a Traditional Healing Directory Report',
    ],
  },
  {
    title: 'Research Lead',
    company: 'St. Jamestown Community Co-op',
    timeframe: '2017–2018',
    bullets: [
      'Supported in the development of Climate Change research policy for local food production and procurement to improve community health metrics',
      'Built on the Human Rights framework used by the co-operative and provided Climate Justice and Climate Action workshops for the community',
    ],
  },
  {
    title: 'Communications Strategist',
    company: 'AS Williams Consulting',
    timeframe: '2017–2018',
    bullets: [
      'Collaborated with lawyer Saga Williams for Canadian Virtual Hospice, Indigenous Health outreach, as a communications strategist',
    ],
  },
];

const FieldNotes = () => {
  return (
    <>
      <h2>Field Notes</h2>
      <p>
        Clementina Consens is a creative professional with a track record of
        designing and stewarding impactful climate action strategies rooted in
        care, equity, and systems thinking. With over seven years of experience
        in stakeholder engagement, holistic project management, equitable data
        analysis, and regenerative research, they bring a grounded,
        collaborative presence to every project.
      </p>
      <p>
        Their work spans climate justice, Indigenous-led environmental
        stewardship, and organizational transformation. Whether facilitating
        cross-sector dialogue or co-developing community-based frameworks for
        action, Clementina is committed to advancing climate solutions that
        reflect the world we long to live in—one centered on collective care,
        interdependence, and ecological accountability.
      </p>
      <p>
        Their strength lies in cultivating spaces for shared visioning and
        creative problem-solving, and in building bridges across disciplines to
        spark meaningful, lasting change.
      </p>

      <div>
        <h3>Education</h3>
        <p>
          <span className='tabular-nums'>2022–2023 —</span> University of
          Waterloo, Masters of Climate Change
        </p>
        <p>
          <span className='tabular-nums'>2013–2017 —</span> University of
          Toronto, Bachelor of Environmental Geoscience
        </p>
      </div>

      <div>
        <h3>Certificates</h3>
        <ul>
          <li>Rooted and Rising, Youth Climate Leadership, York University</li>
          <li>Gameful Learning, University of Michigan</li>
          <li>Carbon Accounting and Reduction, Terra.do</li>
        </ul>
      </div>

      <div className='flex flex-col gap-3'>
        <h3>Professional Experience</h3>

        {professionalExperiences.map((experience) => (
          <ProfessionalExperience
            key={JSON.stringify(experience)}
            experience={experience}
          />
        ))}
      </div>
    </>
  );
};

export default FieldNotes;
