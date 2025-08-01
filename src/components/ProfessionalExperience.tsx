export type ProfExperienceEntry = {
  title: string;
  timeframe: string;
  company: string;
  bullets: string[];
};

type Props = {
  experience: ProfExperienceEntry;
};

export default function ProfessionalExperience({ experience }: Props) {
  const { title, timeframe, company, bullets } = experience;
  return (
    <div className='border-t-1 pt-2'>
      <div className='flex justify-between'>
        <span className='font-bold'>{title}</span>
        <span className='text-right'>{timeframe}</span>
      </div>
      {company}
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
