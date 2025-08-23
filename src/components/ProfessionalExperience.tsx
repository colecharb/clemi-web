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
    <div className='flex flex-col border-t box-border gap-1 mr-10'>
      <div className='flex justify-between items-top gap-5 -mr-10'>
        <div className='pt-2 text-left font-bold'>{title}</div>
        <div className='-mt-px'>
          <div className='text-nowrap border-1 rounded-full rounded-tl-none py-2 px-3'>
            {timeframe}
          </div>
        </div>
      </div>
      <div>{company}</div>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
