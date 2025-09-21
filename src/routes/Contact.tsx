import {
  defaultLinkProps,
  instagramUrl,
  linkedInUrl,
} from '../constants.ts/socials';

const Contact = () => {
  return (
    <div className='flex flex-col min-h-[85dvh] place-items-center justify-center'>
      <p>
        Clementina welcomes conversations with collaborators, communities, and
        organizations who share a commitment to care, justice, and creativity.
        Whether you're curious about working together on a project, inviting
        them to speak or facilitate, or exploring new ideas at the intersection
        of climate justice and storytelling, they'd love to connect.
      </p>
      <p>
        You can find Clementina on{' '}
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
        , where you can message them directly to begin a conversation.
      </p>
    </div>
  );
};

export default Contact;
