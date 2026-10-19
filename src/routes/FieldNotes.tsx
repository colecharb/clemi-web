import DownArrow from '../components/DownArrow';
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
    title: 'External Facilitator',
    timeframe: '2019–Present',
    company: 'Self Employed',
    bullets: [
      'Toronto Public Library, Spring Environmentalist in Residence (2026)',
      'Transcare+ Workshops (2023–2024)',
      'St. Jamestown Community Co-op Research Lead (2022–2023)',
      'Indigenous Consulting (2020–2021)',
      'Tavares Consulting (2019)',
    ],
  },
  {
    title: 'Data Specialist',
    company: 'Heliolytics',
    timeframe: '2019–2020',
    bullets: [
      'Provided reports on solar-farm damage for solar projects across North America',
    ],
  },
  {
    title: 'Junior Environmental Scientist',
    company: 'Ontario First Nations Technical Services Corporation',
    timeframe: '2018',
    bullets: ['Focused on environmental and Indigenous relations initiatives'],
  },
  {
    title: 'Sustainability Associate | Environment & Indigenous Relations',
    company: 'Tavares Group Consulting for Bruce Power',
    timeframe: '2017–2018',
    bullets: [
      'Provided consulting services for Bruce Power through Tavares Group',
    ],
  },
];

const FieldNotes = () => {
  return (
    <>
      <div className='min-h-[85dvh] place-content-center'>
        <h2>Field Notes</h2>
        <p>
          Clementina Consens is a creative professional with a track record of
          designing and stewarding impactful climate action strategies rooted in
          care, equity, and systems thinking. With over seven years of
          experience in stakeholder engagement, holistic project management,
          equitable data analysis, and regenerative research, they bring a
          grounded, collaborative presence to every project.
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
          creative problem-solving, and in building bridges across disciplines
          to spark meaningful, lasting change.
        </p>

        <DownArrow />
      </div>

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
