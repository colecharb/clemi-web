import {
  defaultLinkProps,
  instagramUrl,
  linkedInUrl,
} from '../constants.ts/socials';

const Contact = () => {
  return (
    <div className='flex flex-col min-h-[85dvh] justify-center'>
      <h3>
        Say hello to{' '}
        <a href='mailto:earthtoclemi@gmail.com'>earthtoclemi@gmail.com</a>!
      </h3>
      <p>
        I welcome conversations with collaborators, communities, and
        organizations who share a commitment to care, justice, and creativity.
        Whether you're curious about my micro-catering, inviting me to speak or
        facilitate, or exploring new ideas at the intersection of climate
        justice and storytelling, please feel free to reach out. You can also
        find me on{' '}
        <a
          {...defaultLinkProps}
          href={linkedInUrl}
        >
          LinkedIn
        </a>{' '}
        or{' '}
        <a
          {...defaultLinkProps}
          href={instagramUrl}
        >
          Instagram
        </a>
        , where you can message me directly to begin a conversation.
      </p>
    </div>
  );
};

export default Contact;
